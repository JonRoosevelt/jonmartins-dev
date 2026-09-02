"use client";

import { useEffect, useRef } from "react";
import LAND from "./world";
import { CAREER_NODES, CareerNode, GeoPoint } from "./data";

const DEG = Math.PI / 180;
const PRIMARY = "#00d4ff";
const PRIMARY_SOFT = "#a8e8ff";
const NEON = "#2ff801";
const OUTLINE = "#3c494e";
const DIM = "#859398";

type Vec = { x: number; y: number; z: number };
type ScreenPoint = { x: number; y: number; z: number };

function latLngToVec(lat: number, lng: number): Vec {
  const lam = lng * DEG;
  const phi = lat * DEG;
  return {
    x: Math.cos(phi) * Math.sin(lam),
    y: Math.sin(phi),
    z: Math.cos(phi) * Math.cos(lam),
  };
}

function vecToLatLng(v: Vec): GeoPoint {
  return {
    lat: Math.asin(Math.max(-1, Math.min(1, v.y))) / DEG,
    lng: Math.atan2(v.x, v.z) / DEG,
  };
}

function slerp(a: Vec, b: Vec, t: number): Vec {
  const dot = Math.max(-1, Math.min(1, a.x * b.x + a.y * b.y + a.z * b.z));
  const th = Math.acos(dot);
  if (th < 1e-5) return a;
  const s = Math.sin(th);
  const A = Math.sin((1 - t) * th) / s;
  const B = Math.sin(t * th) / s;
  return { x: a.x * A + b.x * B, y: a.y * A + b.y * B, z: a.z * A + b.z * B };
}

function angularDistance(a: GeoPoint, b: GeoPoint): number {
  const va = latLngToVec(a.lat, a.lng);
  const vb = latLngToVec(b.lat, b.lng);
  const dot = Math.max(-1, Math.min(1, va.x * vb.x + va.y * vb.y + va.z * vb.z));
  return Math.acos(dot) / DEG;
}

function easeInOutCubic(t: number): number {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

type MarkerHit = { index: number; x: number; y: number; z: number };

type FlightState = {
  key: number;
  startedAt: number;
  duration: number;
  from: GeoPoint & { label: string };
  to: GeoPoint & { label: string };
};

export default function Globe({
  selectedIndex,
  onSelect,
}: {
  selectedIndex: number;
  onSelect: (index: number) => void;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const stateRef = useRef({
    rot: { lng: -46.6333, phi: -23.5505 } as { lng: number; phi: number },
    tween: null as null | {
      fromLng: number;
      fromPhi: number;
      toLng: number;
      toPhi: number;
      startedAt: number;
      duration: number;
    },
    dragging: false,
    dragStart: { x: 0, y: 0, lng: 0, phi: 0 },
    moved: false,
    hover: -1,
    markers: [] as MarkerHit[],
    flight: null as FlightState | null,
    selectedIndex,
  });

  useEffect(() => {
    const s = stateRef.current;
    const node = CAREER_NODES[selectedIndex];
    s.selectedIndex = selectedIndex;

    const cur = s.rot;
    let deltaLng = ((node.location.lng - cur.lng + 540) % 360) - 180;
    s.tween = {
      fromLng: cur.lng,
      fromPhi: cur.phi,
      toLng: cur.lng + deltaLng,
      toPhi: Math.max(-65, Math.min(65, node.location.lat)),
      startedAt: performance.now(),
      duration: 1100,
    };

    if (node.flight) {
      s.flight = {
        key: selectedIndex + Date.now(),
        startedAt: performance.now() + 500,
        duration: 3200,
        from: node.flight.from,
        to: node.flight.to,
      };
    } else {
      s.flight = null;
    }
  }, [selectedIndex]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf = 0;
    let width = 0;
    let height = 0;
    let dpr = Math.min(2, window.devicePixelRatio || 1);

    const resize = () => {
      const rect = container.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      dpr = Math.min(2, window.devicePixelRatio || 1);
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(container);

    const project = (lat: number, lng: number): ScreenPoint => {
      const { rot } = stateRef.current;
      const lam = (lng - rot.lng) * DEG;
      const phi = lat * DEG;
      const t = rot.phi * DEG;
      const x = Math.cos(phi) * Math.sin(lam);
      const y = Math.sin(phi);
      const z = Math.cos(phi) * Math.cos(lam);
      const y2 = y * Math.cos(t) - z * Math.sin(t);
      const z2 = y * Math.sin(t) + z * Math.cos(t);
      const R = Math.min(width, height) * 0.38;
      return {
        x: width / 2 + R * x,
        y: height / 2 - R * y2,
        z: z2,
      };
    };

    const arcPoints = (from: GeoPoint, to: GeoPoint, steps = 64): GeoPoint[] => {
      const a = latLngToVec(from.lat, from.lng);
      const b = latLngToVec(to.lat, to.lng);
      const pts: GeoPoint[] = [];
      for (let i = 0; i <= steps; i++) {
        pts.push(vecToLatLng(slerp(a, b, i / steps)));
      }
      return pts;
    };

    const drawArc = (
      from: GeoPoint,
      to: GeoPoint,
      opts: {
        color: string;
        alpha: number;
        width: number;
        dash?: boolean;
        dashOffset?: number;
        altitude?: number;
        glow?: boolean;
      }
    ) => {
      const pts = arcPoints(from, to);
      const R = Math.min(width, height) * 0.38;
      const alt = opts.altitude ?? 0.1;
      ctx.save();
      ctx.strokeStyle = opts.color;
      ctx.globalAlpha = opts.alpha;
      ctx.lineWidth = opts.width;
      if (opts.glow) {
        ctx.shadowColor = opts.color;
        ctx.shadowBlur = 8;
      }
      if (opts.dash) {
        ctx.setLineDash([5, 5]);
        ctx.lineDashOffset = opts.dashOffset ?? 0;
      }
      ctx.beginPath();
      let pen = false;
      for (let i = 0; i < pts.length; i++) {
        const t = i / (pts.length - 1);
        const lift = 1 + alt * Math.sin(Math.PI * t) * 0.18;
        const p = project(pts[i].lat, pts[i].lng);
        const px = width / 2 + (p.x - width / 2) * lift;
        const py = height / 2 + (p.y - height / 2) * lift;
        if (p.z > -0.08) {
          if (!pen) {
            ctx.moveTo(px, py);
            pen = true;
          } else {
            ctx.lineTo(px, py);
          }
        } else {
          pen = false;
        }
      }
      ctx.stroke();
      ctx.restore();
    };

    const drawMarker = (
      p: ScreenPoint,
      time: number,
      opts: { color: string; selected?: boolean; shape?: "dot" | "diamond" | "square" }
    ) => {
      const { color, selected, shape = "dot" } = opts;
      ctx.save();
      ctx.shadowColor = color;
      ctx.shadowBlur = selected ? 14 : 6;
      ctx.fillStyle = color;
      const r = selected ? 4 : 3;
      if (shape === "diamond") {
        ctx.beginPath();
        ctx.moveTo(p.x, p.y - r - 1);
        ctx.lineTo(p.x + r + 1, p.y);
        ctx.lineTo(p.x, p.y + r + 1);
        ctx.lineTo(p.x - r - 1, p.y);
        ctx.closePath();
        ctx.fill();
      } else if (shape === "square") {
        ctx.fillRect(p.x - r, p.y - r, r * 2, r * 2);
      } else {
        ctx.beginPath();
        ctx.arc(p.x, p.y, r, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.restore();

      const pingPhase = ((time / 1400) % 1 + 1) % 1;
      ctx.save();
      ctx.globalAlpha = (1 - pingPhase) * (selected ? 0.7 : 0.3);
      ctx.strokeStyle = color;
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.arc(p.x, p.y, 4 + pingPhase * 14, 0, Math.PI * 2);
      ctx.stroke();
      ctx.restore();
    };

    const drawLabel = (p: ScreenPoint, text: string, color: string, dy = -14) => {
      ctx.save();
      ctx.font = '700 10px "Space Mono", monospace';
      ctx.fillStyle = color;
      ctx.textAlign = "center";
      ctx.shadowColor = "rgba(0,0,0,0.9)";
      ctx.shadowBlur = 4;
      ctx.fillText(text, p.x, p.y + dy);
      ctx.restore();
    };

    const drawPlane = (p: ScreenPoint, angle: number, alpha: number) => {
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(angle);
      ctx.globalAlpha = alpha;
      ctx.shadowColor = NEON;
      ctx.shadowBlur = 12;
      ctx.fillStyle = NEON;
      ctx.beginPath();
      ctx.moveTo(11, 0);
      ctx.lineTo(-9, 6.5);
      ctx.lineTo(-4.5, 0);
      ctx.lineTo(-9, -6.5);
      ctx.closePath();
      ctx.fill();
      ctx.restore();
    };

    const render = (time: number) => {
      const s = stateRef.current;

      if (s.tween) {
        const t = Math.min(1, (time - s.tween.startedAt) / s.tween.duration);
        const e = easeInOutCubic(t);
        s.rot.lng = s.tween.fromLng + (s.tween.toLng - s.tween.fromLng) * e;
        s.rot.phi = s.tween.fromPhi + (s.tween.toPhi - s.tween.fromPhi) * e;
        if (t >= 1) s.tween = null;
      }

      ctx.clearRect(0, 0, width, height);
      const cx = width / 2;
      const cy = height / 2;
      const R = Math.min(width, height) * 0.38;

      const glow = ctx.createRadialGradient(cx, cy, R * 0.2, cx, cy, R * 1.7);
      glow.addColorStop(0, "rgba(0, 212, 255, 0.14)");
      glow.addColorStop(1, "rgba(0, 212, 255, 0)");
      ctx.fillStyle = glow;
      ctx.fillRect(0, 0, width, height);

      ctx.save();
      ctx.beginPath();
      ctx.arc(cx, cy, R, 0, Math.PI * 2);
      ctx.fillStyle = "#0a0a0a";
      ctx.fill();
      ctx.strokeStyle = OUTLINE;
      ctx.globalAlpha = 0.9;
      ctx.lineWidth = 1;
      ctx.stroke();
      ctx.restore();

      ctx.save();
      ctx.strokeStyle = OUTLINE;
      ctx.globalAlpha = 0.35;
      ctx.lineWidth = 0.5;
      for (let lat = -60; lat <= 60; lat += 20) {
        ctx.beginPath();
        let pen = false;
        for (let lng = -180; lng <= 180; lng += 3) {
          const p = project(lat, lng);
          if (p.z > 0) {
            if (!pen) {
              ctx.moveTo(p.x, p.y);
              pen = true;
            } else ctx.lineTo(p.x, p.y);
          } else pen = false;
        }
        ctx.stroke();
      }
      for (let lng = -180; lng < 180; lng += 20) {
        ctx.beginPath();
        let pen = false;
        for (let lat = -85; lat <= 85; lat += 3) {
          const p = project(lat, lng);
          if (p.z > 0) {
            if (!pen) {
              ctx.moveTo(p.x, p.y);
              pen = true;
            } else ctx.lineTo(p.x, p.y);
          } else pen = false;
        }
        ctx.stroke();
      }
      ctx.restore();

      ctx.save();
      ctx.strokeStyle = "#5a707a";
      ctx.globalAlpha = 0.55;
      ctx.lineWidth = 0.7;
      for (const ring of LAND) {
        ctx.beginPath();
        let pen = false;
        for (const [lng, lat] of ring) {
          const p = project(lat, lng);
          if (p.z > 0.01) {
            if (!pen) {
              ctx.moveTo(p.x, p.y);
              pen = true;
            } else ctx.lineTo(p.x, p.y);
          } else pen = false;
        }
        ctx.stroke();
      }
      ctx.restore();

      const node: CareerNode = CAREER_NODES[s.selectedIndex];

      for (const n of CAREER_NODES) {
        if (n.mode === "remote") {
          drawArc(n.home, n.location, {
            color: PRIMARY,
            alpha: 0.1,
            width: 0.8,
            altitude: 0.12,
          });
        }
        if (n.flight) {
          drawArc(n.flight.from, n.flight.to, {
            color: NEON,
            alpha: 0.1,
            width: 0.8,
            altitude: 0.16,
          });
        }
      }

      if (node.mode === "remote") {
        const offset = -(time / 24) % 40;
        if (node.proxy && angularDistance(node.home, node.proxy.hq) > 5) {
          drawArc(node.home, node.proxy.hq, {
            color: PRIMARY,
            alpha: 0.85,
            width: 1.4,
            dash: true,
            dashOffset: offset,
            altitude: 0.1,
            glow: true,
          });
          drawArc(node.proxy.hq, node.location, {
            color: PRIMARY,
            alpha: 0.85,
            width: 1.4,
            dash: true,
            dashOffset: offset,
            altitude: 0.12,
            glow: true,
          });
          const pp = project(node.proxy.hq.lat, node.proxy.hq.lng);
          if (pp.z > 0.02) {
            drawMarker(pp, time, { color: "#ff9e64", shape: "diamond" });
            drawLabel(pp, `PROXY: ${node.proxy.name.toUpperCase()}`, "#ff9e64");
          }
        } else {
          drawArc(node.home, node.location, {
            color: PRIMARY,
            alpha: 0.85,
            width: 1.4,
            dash: true,
            dashOffset: offset,
            altitude: 0.14,
            glow: true,
          });
          if (node.proxy) {
            const mid = vecToLatLng(
              slerp(
                latLngToVec(node.home.lat, node.home.lng),
                latLngToVec(node.location.lat, node.location.lng),
                0.5
              )
            );
            const mp = project(mid.lat, mid.lng);
            if (mp.z > 0.02) {
              drawLabel(
                { x: width / 2 + (mp.x - width / 2) * 1.05, y: height / 2 + (mp.y - height / 2) * 1.05, z: mp.z },
                `VIA ${node.proxy.name.toUpperCase()}`,
                "#ff9e64"
              );
            }
          }
        }

        const packetT = ((time / 2200) % 1 + 1) % 1;
        const pathPts = arcPoints(node.home, node.location, 80);
        const pk = pathPts[Math.floor(packetT * (pathPts.length - 1))];
        const pkp = project(pk.lat, pk.lng);
        if (pkp.z > 0) {
          ctx.save();
          ctx.shadowColor = PRIMARY_SOFT;
          ctx.shadowBlur = 10;
          ctx.fillStyle = "#ffffff";
          ctx.beginPath();
          ctx.arc(pkp.x, pkp.y, 2, 0, Math.PI * 2);
          ctx.fill();
          ctx.restore();
        }
      }

      const homeP = project(node.home.lat, node.home.lng);
      if (homeP.z > 0.02) {
        drawMarker(homeP, time, { color: DIM, shape: "square" });
        drawLabel(homeP, "HOME", DIM, 20);
      }

      if (node.flight) {
        drawArc(node.flight.from, node.flight.to, {
          color: NEON,
          alpha: 0.7,
          width: 1.4,
          altitude: 0.16,
          glow: true,
        });
        if (node.proxy) {
          const pp = project(node.proxy.hq.lat, node.proxy.hq.lng);
          if (pp.z > 0.02) {
            drawMarker(pp, time, { color: "#ff9e64", shape: "diamond" });
            drawLabel(pp, `PROXY: ${node.proxy.name.toUpperCase()}`, "#ff9e64");
          }
        }
      }

      if (s.flight) {
        const f = s.flight;
        const t = (time - f.startedAt) / f.duration;
        if (t >= 0 && t <= 1.25) {
          const clamped = Math.min(1, Math.max(0, t));
          const e = easeInOutCubic(clamped);
          const pathPts = arcPoints(f.from, f.to, 120);
          const idx = e * (pathPts.length - 1);
          const i0 = Math.floor(idx);
          const cur = pathPts[i0];
          const nxt = pathPts[Math.min(pathPts.length - 1, i0 + 1)];
          const lift = 1 + 0.16 * Math.sin(Math.PI * e) * 0.18;
          const pc = project(cur.lat, cur.lng);
          const pn = project(nxt.lat, nxt.lng);
          const px = width / 2 + (pc.x - width / 2) * lift;
          const py = height / 2 + (pc.y - height / 2) * lift;
          const angle = Math.atan2(pn.y - pc.y, pn.x - pc.x);
          const alpha = t > 1 ? Math.max(0, 1 - (t - 1) * 4) : 1;
          if (pc.z > -0.05 && alpha > 0) {
            drawPlane({ x: px, y: py, z: pc.z }, angle, alpha);
          }
          if (clamped < 1) {
            drawLabel({ x: px, y: py, z: pc.z }, `${f.from.label} → ${f.to.label}`, NEON, -18);
          }
        }
      }

      s.markers = [];
      CAREER_NODES.forEach((n, i) => {
        const p = project(n.location.lat, n.location.lng);
        if (p.z > 0.02) {
          s.markers.push({ index: i, x: p.x, y: p.y, z: p.z });
          const isSelected = i === s.selectedIndex;
          const isHover = i === s.hover;
          drawMarker(p, time, {
            color: isSelected ? PRIMARY : isHover ? PRIMARY_SOFT : "#6fa9bd",
            selected: isSelected,
          });
          if (isSelected || isHover) {
            drawLabel(
              p,
              `${n.location.city.toUpperCase()}, ${n.location.cc}`,
              isSelected ? PRIMARY : PRIMARY_SOFT
            );
          }
        }
      });

      raf = requestAnimationFrame(render);
    };

    raf = requestAnimationFrame(render);

    const onPointerDown = (e: PointerEvent) => {
      const s = stateRef.current;
      s.dragging = true;
      s.moved = false;
      s.tween = null;
      s.dragStart = { x: e.clientX, y: e.clientY, lng: s.rot.lng, phi: s.rot.phi };
      canvas.setPointerCapture(e.pointerId);
    };
    const onPointerMove = (e: PointerEvent) => {
      const s = stateRef.current;
      const rect = canvas.getBoundingClientRect();
      const mx = e.clientX - rect.left;
      const my = e.clientY - rect.top;

      if (s.dragging) {
        const dx = e.clientX - s.dragStart.x;
        const dy = e.clientY - s.dragStart.y;
        if (Math.abs(dx) + Math.abs(dy) > 4) s.moved = true;
        s.rot.lng = s.dragStart.lng - dx * 0.35;
        s.rot.phi = Math.max(-70, Math.min(70, s.dragStart.phi + dy * 0.35));
      } else {
        let hover = -1;
        for (const m of s.markers) {
          if (Math.hypot(m.x - mx, m.y - my) < 16) {
            hover = m.index;
            break;
          }
        }
        s.hover = hover;
        canvas.style.cursor = hover >= 0 ? "pointer" : "grab";
      }
    };
    const onPointerUp = (e: PointerEvent) => {
      const s = stateRef.current;
      const wasDragging = s.dragging;
      s.dragging = false;
      if (!wasDragging || s.moved) return;
      const rect = canvas.getBoundingClientRect();
      const mx = e.clientX - rect.left;
      const my = e.clientY - rect.top;
      for (const m of s.markers) {
        if (Math.hypot(m.x - mx, m.y - my) < 20) {
          onSelect(m.index);
          return;
        }
      }
    };

    canvas.addEventListener("pointerdown", onPointerDown);
    canvas.addEventListener("pointermove", onPointerMove);
    canvas.addEventListener("pointerup", onPointerUp);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      canvas.removeEventListener("pointerdown", onPointerDown);
      canvas.removeEventListener("pointermove", onPointerMove);
      canvas.removeEventListener("pointerup", onPointerUp);
    };
  }, [onSelect]);

  return (
    <div ref={containerRef} className="absolute inset-0">
      <canvas ref={canvasRef} className="block touch-none" />
    </div>
  );
}
