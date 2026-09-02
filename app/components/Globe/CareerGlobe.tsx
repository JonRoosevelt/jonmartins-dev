"use client";

import { useCallback, useState } from "react";
import Globe from "./Globe";
import Terminal from "./Terminal";
import Timeline from "./Timeline";
import { CAREER_NODES } from "./data";

function formatLat(lat: number) {
  return `${Math.abs(lat).toFixed(4)} ${lat >= 0 ? "N" : "S"}`;
}
function formatLng(lng: number) {
  return `${Math.abs(lng).toFixed(4)} ${lng >= 0 ? "E" : "W"}`;
}

export default function CareerGlobe() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const onSelect = useCallback((i: number) => setSelectedIndex(i), []);
  const node = CAREER_NODES[selectedIndex];

  return (
    <main className="relative min-h-screen bg-cyber-bg text-cyber-on-surface overflow-hidden cyber-selection">
      <div
        className="absolute inset-0 pointer-events-none opacity-10"
        style={{
          backgroundImage:
            "linear-gradient(to right, #3c494e 1px, transparent 1px), linear-gradient(to bottom, #3c494e 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      <div className="flex flex-col w-full max-w-[1440px] mx-auto px-5 lg:px-10 pt-6 gap-6 relative z-10">
        <header className="flex items-center justify-between border-b border-cyber-outline-variant/40 pb-4">
          <span className="font-grotesk font-bold text-xl tracking-tighter text-cyber-on-surface">
            JM<span className="text-cyber-primary">://</span>
          </span>
          <nav className="flex items-center gap-5 font-spacemono text-[11px] tracking-[0.2em] uppercase">
            <a href="/about" className="text-cyber-on-surface-variant hover:text-cyber-primary transition-colors">
              About
            </a>
            <a href="/blog" className="text-cyber-on-surface-variant hover:text-cyber-primary transition-colors">
              Blog
            </a>
            <a
              href="https://github.com/jonroosevelt"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyber-on-surface-variant hover:text-cyber-primary transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/jonathanmartins88"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyber-primary border border-cyber-primary px-3 py-1.5 hover:bg-cyber-primary hover:text-cyber-bg transition-colors"
            >
              Hire
            </a>
          </nav>
        </header>

        <div className="flex flex-col lg:flex-row gap-6">
          <div className="w-full lg:w-[60%] flex flex-col relative h-[440px] lg:h-[560px]">
            <div className="absolute inset-0 border border-cyber-outline-variant bg-cyber-surface/40 backdrop-blur-md p-1 flex flex-col">
              <div className="h-8 border-b border-cyber-outline-variant flex items-center px-4 justify-between bg-cyber-surface-low shrink-0">
                <div className="flex gap-2 items-center">
                  <span className="w-2 h-2 bg-cyber-magenta" />
                  <span className="w-2 h-2 bg-cyber-neon" />
                  <span className="w-2 h-2 bg-cyber-primary" />
                </div>
                <span className="font-spacemono text-[11px] text-cyber-on-surface-variant tracking-[0.2em] uppercase">
                  GEO_LINK // ACTIVE
                </span>
              </div>

              <div className="flex-1 relative overflow-hidden bg-cyber-bg">
                <Globe selectedIndex={selectedIndex} onSelect={onSelect} />

                <div className="absolute bottom-3 left-3 font-spacemono text-[10px] text-cyber-primary/70 leading-relaxed pointer-events-none">
                  LAT: {formatLat(node.location.lat)}
                  <br />
                  LNG: {formatLng(node.location.lng)}
                </div>
                <div className="absolute top-3 right-3 font-spacemono text-[10px] text-cyber-neon/70 text-right leading-relaxed pointer-events-none">
                  UPLINK: SECURE
                  <br />
                  MS: {node.ping}
                </div>
                <div className="absolute bottom-3 right-3 font-spacemono text-[10px] text-cyber-on-surface-variant/70 text-right pointer-events-none">
                  NODE {String(selectedIndex + 1).padStart(2, "0")}/{String(CAREER_NODES.length).padStart(2, "0")}
                </div>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-[40%] flex flex-col gap-6">
            <div className="flex flex-col gap-2 p-4 bg-cyber-surface-high/50 backdrop-blur-md border-l-4 border-cyber-primary">
              <h1 className="font-grotesk text-4xl font-semibold text-cyber-on-surface uppercase tracking-tighter leading-none">
                Jonathan
                <br />
                Martins
              </h1>
              <div className="font-spacemono text-sm text-cyber-primary flex items-center gap-2">
                <span className="inline-block w-2 h-2 bg-cyber-primary animate-pulse" />
                &gt;_ SR. SOFTWARE ENGINEER
              </div>
              <p className="font-spacemono text-[11px] text-cyber-on-surface-variant tracking-[0.1em] uppercase">
                Node.js · TypeScript · React · Python · AWS
              </p>
            </div>

            <Terminal node={node} />
          </div>
        </div>

        <div className="pb-8">
          <Timeline selectedIndex={selectedIndex} onSelect={onSelect} />
        </div>
      </div>
    </main>
  );
}
