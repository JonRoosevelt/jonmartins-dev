"use client";

import { CAREER_NODES } from "./data";

export default function Timeline({
  selectedIndex,
  onSelect,
}: {
  selectedIndex: number;
  onSelect: (index: number) => void;
}) {
  return (
    <div className="border border-cyber-outline-variant bg-cyber-surface/60 backdrop-blur-xl p-4 flex flex-col gap-4">
      <div className="font-spacemono text-[11px] tracking-[0.2em] text-cyber-on-surface-variant flex justify-between items-center border-b border-cyber-outline-variant/30 pb-2 uppercase">
        <span>TIMELINE_NODES</span>
        <span className="text-cyber-primary text-[10px] hidden sm:block">
          [ SELECT NODE OR CLICK A POINT ON THE GLOBE ]
        </span>
      </div>

      <div className="flex items-stretch gap-2">
        <button
          aria-label="Previous node"
          onClick={() => onSelect((selectedIndex - 1 + CAREER_NODES.length) % CAREER_NODES.length)}
          className="shrink-0 border border-cyber-outline-variant px-3 text-cyber-on-surface-variant hover:text-cyber-primary hover:border-cyber-primary transition-colors font-spacemono"
        >
          &lt;
        </button>

        <div className="flex flex-row gap-2 overflow-x-auto pb-2 cyber-scroll items-end flex-1">
          {CAREER_NODES.map((n, i) => {
            const active = i === selectedIndex;
            return (
              <button
                key={n.id}
                onClick={() => onSelect(i)}
                className={`flex-1 min-w-[110px] flex flex-col items-center gap-2 group relative transition-all ${
                  active ? "opacity-100" : "opacity-50 hover:opacity-100"
                }`}
              >
                <div
                  className={`w-full origin-bottom transition-all ${
                    active
                      ? "h-2 bg-cyber-primary shadow-[0_0_10px_rgba(0,212,255,0.5)]"
                      : "h-1 bg-cyber-outline-variant group-hover:bg-cyber-primary group-hover:h-2"
                  }`}
                />
                <span className="relative">
                  {n.logo ? (
                    /* eslint-disable-next-line @next/next/no-img-element */
                    <img
                      src={n.logo}
                      alt={n.company}
                      className={`w-8 h-8 object-cover border border-cyber-outline-variant transition-all ${
                        active ? "" : "grayscale group-hover:grayscale-0"
                      }`}
                    />
                  ) : (
                    <span
                      className={`w-8 h-8 border flex items-center justify-center ${
                        active
                          ? "border-cyber-primary bg-cyber-primary/10"
                          : "border-cyber-outline-variant group-hover:border-cyber-primary"
                      }`}
                    >
                      <span className="font-spacemono text-[7px] font-bold text-cyber-primary text-center leading-none px-0.5">
                        {n.company.toUpperCase()}
                      </span>
                    </span>
                  )}
                  {n.proxy && (
                    <span className="absolute -top-1.5 -right-1.5 bg-[#ff9e64] text-cyber-bg font-spacemono text-[7px] font-bold px-1 leading-tight">
                      P
                    </span>
                  )}
                </span>
                <span
                  className={`font-spacemono text-[10px] uppercase transition-colors ${
                    active
                      ? "text-cyber-primary"
                      : "text-cyber-on-surface-variant group-hover:text-cyber-primary"
                  }`}
                >
                  {n.company}
                </span>
                <span className="font-spacemono text-[9px] text-cyber-on-surface-variant/70 uppercase -mt-1.5">
                  {n.location.cc} · {n.mode === "remote" ? "REMOTE" : "ONSITE"}
                </span>
              </button>
            );
          })}
        </div>

        <button
          aria-label="Next node"
          onClick={() => onSelect((selectedIndex + 1) % CAREER_NODES.length)}
          className="shrink-0 border border-cyber-outline-variant px-3 text-cyber-on-surface-variant hover:text-cyber-primary hover:border-cyber-primary transition-colors font-spacemono"
        >
          &gt;
        </button>
      </div>
    </div>
  );
}
