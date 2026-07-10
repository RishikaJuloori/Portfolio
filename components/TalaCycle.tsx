"use client";

import { useEffect, useRef, useState } from "react";
import { Pause, Play } from "lucide-react";

const BEATS = 8;
const TEMPO_MS = 480;

export default function TalaCycle() {
  const [playing, setPlaying] = useState(false);
  const [beat, setBeat] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (playing) {
      intervalRef.current = setInterval(() => {
        setBeat((b) => (b + 1) % BEATS);
      }, TEMPO_MS);
    } else if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [playing]);

  const size = 220;
  const center = size / 2;
  const radius = size / 2 - 18;

  return (
    <div className="flex flex-col items-center gap-6">
      <div className="relative" style={{ width: size, height: size }}>
        <svg width={size} height={size} className="overflow-visible">
          <circle
            cx={center}
            cy={center}
            r={radius}
            fill="none"
            stroke="rgba(236,226,210,0.08)"
            strokeWidth={1}
          />
          {Array.from({ length: BEATS }).map((_, i) => {
            const angle = (i / BEATS) * Math.PI * 2 - Math.PI / 2;
            const x = center + Math.cos(angle) * radius;
            const y = center + Math.sin(angle) * radius;
            const active = playing && i === beat;
            const isDownbeat = i === 0;
            return (
              <g key={i}>
                <circle
                  cx={x}
                  cy={y}
                  r={active ? 9 : isDownbeat ? 6 : 4.5}
                  fill={
                    active
                      ? "var(--accent)"
                      : isDownbeat
                      ? "var(--accent-2)"
                      : "rgba(236,226,210,0.35)"
                  }
                  className="transition-all duration-150"
                />
              </g>
            );
          })}
          <circle
            cx={center}
            cy={center}
            r={3}
            fill="rgba(236,226,210,0.4)"
          />
        </svg>
      </div>

      <button
        onClick={() => setPlaying((p) => !p)}
        className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest border border-border-strong rounded-full px-5 py-2.5 text-fg hover:border-accent hover:text-accent transition-colors"
      >
        {playing ? <Pause size={14} /> : <Play size={14} />}
        {playing ? "Pause" : "Play the cycle"}
      </button>
      <p className="font-mono text-[11px] text-fg-faint text-center max-w-[220px]">
        Adi talam — an eight-beat rhythm cycle every Carnatic phrase resolves
        against.
      </p>
    </div>
  );
}
