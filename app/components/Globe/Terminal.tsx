"use client";

import { useEffect, useState } from "react";
import { CareerNode } from "./data";

const toneClass: Record<string, string> = {
  cmd: "text-cyber-neon",
  sys: "text-cyber-on-surface-variant",
  route: "text-cyber-primary",
  ok: "text-cyber-primary-soft",
};

function LogoBadge({
  logo,
  name,
  size = "md",
}: {
  logo: string | null;
  name: string;
  size?: "md" | "sm";
}) {
  const dim = size === "md" ? "w-12 h-12" : "w-8 h-8";
  if (logo) {
    return (
      <span
        className={`${dim} border border-cyber-outline-variant bg-cyber-surface-low flex items-center justify-center overflow-hidden shrink-0`}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={logo} alt={name} className="w-full h-full object-cover" />
      </span>
    );
  }
  return (
    <span
      className={`${dim} border border-cyber-primary/60 bg-cyber-primary/10 flex items-center justify-center shrink-0`}
    >
      <span
        className={`font-spacemono font-bold text-cyber-primary ${
          size === "md" ? "text-[10px]" : "text-[7px]"
        } tracking-tight text-center leading-none px-0.5`}
      >
        {name.toUpperCase()}
      </span>
    </span>
  );
}

export default function Terminal({ node }: { node: CareerNode }) {
  const [typedCmd, setTypedCmd] = useState("");
  const [lineCount, setLineCount] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    setTypedCmd("");
    setLineCount(0);
    setDone(false);

    const timers: ReturnType<typeof setTimeout>[] = [];
    const cmd = node.terminal[0]?.text ?? "";
    let i = 0;

    const typeNext = () => {
      i += 1;
      setTypedCmd(cmd.slice(0, i));
      if (i < cmd.length) {
        timers.push(setTimeout(typeNext, 12 + Math.random() * 18));
      } else {
        setLineCount(1);
        let line = 1;
        const reveal = () => {
          line += 1;
          if (line <= node.terminal.length) {
            setLineCount(line);
            timers.push(setTimeout(reveal, 300));
          } else {
            timers.push(setTimeout(() => setDone(true), 260));
          }
        };
        timers.push(setTimeout(reveal, 320));
      }
    };
    timers.push(setTimeout(typeNext, 250));

    return () => timers.forEach(clearTimeout);
  }, [node]);

  const restLines = node.terminal.slice(1, lineCount);

  return (
    <div className="flex-1 min-h-[420px] border border-cyber-outline-variant bg-[#0a0a0a] flex flex-col relative group">
      <div className="h-10 bg-cyber-surface-low border-b border-cyber-outline-variant flex items-center px-4 justify-between font-spacemono text-[11px] tracking-[0.15em] text-cyber-on-surface-variant uppercase">
        <span>jon@martins:~</span>
        <span className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 bg-cyber-neon animate-pulse" />
          {node.mode === "remote" ? "SSH" : "LOCAL"}
        </span>
      </div>

      <div className="p-5 font-spacemono text-[13px] leading-relaxed text-cyber-on-surface flex flex-col gap-2 overflow-y-auto cyber-scroll flex-1">
        <div className={toneClass.cmd}>
          {typedCmd}
          {lineCount === 0 && (
            <span className="inline-block w-2 h-3.5 bg-cyber-neon align-middle ml-0.5 animate-pulse" />
          )}
        </div>
        {restLines.map((l, idx) => (
          <div key={`${node.id}-${idx}`} className={toneClass[l.tone]}>
            {l.text}
          </div>
        ))}

        <div
          className={`transition-opacity duration-500 ${
            done ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <div className="flex items-center gap-3 py-4 border-y border-cyber-outline-variant/40 my-3 bg-cyber-surface-container/40 px-4 flex-wrap">
            {node.proxy && (
              <>
                <span className="flex flex-col items-center gap-1">
                  <LogoBadge logo={node.proxy.logo} name={node.proxy.name} />
                  <span className="font-spacemono text-[8px] tracking-[0.2em] text-[#ff9e64] uppercase">
                    proxy
                  </span>
                </span>
                <span className="text-cyber-primary text-lg font-spacemono">⇄</span>
              </>
            )}
            <span className="flex flex-col items-center gap-1">
              <LogoBadge logo={node.logo} name={node.company} />
              <span className="font-spacemono text-[8px] tracking-[0.2em] text-cyber-primary uppercase">
                target
              </span>
            </span>
            <div className="min-w-0">
              <h3 className="font-grotesk text-xl text-cyber-on-surface leading-tight">
                {node.company}
              </h3>
              <p className="text-cyber-on-surface-variant text-[11px] uppercase tracking-[0.15em] mt-1">
                {node.role} · {node.period}
              </p>
              <p className="text-cyber-primary text-[10px] uppercase tracking-[0.15em] mt-0.5">
                {node.location.city}, {node.location.country} ·{" "}
                {node.mode === "remote" ? "REMOTE" : "ON-SITE"}
              </p>
            </div>
          </div>

          {node.flight && (
            <div className="flex items-center gap-2 border border-cyber-neon/40 bg-cyber-neon/5 px-3 py-2 mb-3">
              <span className="w-1.5 h-1.5 bg-cyber-neon animate-pulse" />
              <span className="font-spacemono text-[11px] text-cyber-neon tracking-[0.1em] uppercase">
                Relocation flight · {node.flight.from.label} → {node.flight.to.label} ·{" "}
                {node.flight.distanceKm.toLocaleString()} km
              </span>
            </div>
          )}

          <ul className="flex flex-col gap-2 text-cyber-on-surface/85 text-[12.5px]">
            {node.bullets.map((b, i) => (
              <li key={i} className="flex gap-2">
                <span className="text-cyber-primary shrink-0">▸</span>
                <span>{b}</span>
              </li>
            ))}
          </ul>

          <div className="flex gap-2 mt-4 flex-wrap">
            {node.stack.map((s) => (
              <span
                key={s}
                className="bg-cyber-surface-highest px-2 py-1 text-[10px] text-cyber-primary font-spacemono"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="h-11 bg-cyber-surface-container/50 border-t border-cyber-outline-variant flex items-center px-4 gap-2 font-spacemono text-cyber-primary">
        <span>&gt;</span>
        <span className="w-2 h-4 bg-cyber-primary animate-pulse" />
      </div>
    </div>
  );
}
