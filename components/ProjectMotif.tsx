"use client";

/**
 * Per-project abstract line-art motif (top-right of the preview panel).
 * Each relates to its project's world; subtle CSS motion via data-* hooks
 * (auto-disabled under prefers-reduced-motion).
 */
export default function ProjectMotif({
  id,
  accent,
}: {
  id: string;
  accent: string;
}) {
  const common = "motif absolute -top-8 -right-6 w-60 h-60 pointer-events-none";
  const s = { stroke: accent, fill: "none", strokeWidth: 1.4 } as const;

  switch (id) {
    /* Ephemeris — satellite maneuvering around a body in orbit */
    case "ephemeris":
      return (
        <svg viewBox="0 0 200 200" className={common} aria-hidden="true">
          <ellipse cx="128" cy="66" rx="34" ry="20" {...s} strokeOpacity={0.18} />
          <circle cx="128" cy="66" r="11" fill={accent} fillOpacity={0.5} />
          <g data-spin>
            <ellipse cx="128" cy="66" rx="58" ry="34" {...s} strokeOpacity={0.16} />
            <circle cx="186" cy="66" r="4.5" fill={accent} />
            <circle cx="70" cy="66" r="2" fill={accent} fillOpacity={0.35} />
          </g>
        </svg>
      );

    /* Converge — fragmented streams merging into one node */
    case "converge":
      return (
        <svg viewBox="0 0 200 200" className={common} aria-hidden="true">
          <g data-flow strokeDasharray="4 6">
            <line x1="66" y1="20" x2="140" y2="70" {...s} strokeOpacity={0.4} />
            <line x1="58" y1="96" x2="140" y2="70" {...s} strokeOpacity={0.4} />
            <line x1="200" y1="26" x2="140" y2="70" {...s} strokeOpacity={0.4} />
            <line x1="196" y1="112" x2="140" y2="70" {...s} strokeOpacity={0.4} />
          </g>
          <circle cx="140" cy="70" r="9" fill={accent} fillOpacity={0.5} />
          <circle cx="140" cy="70" r="14" {...s} strokeOpacity={0.5} data-pulse />
        </svg>
      );

    /* WardrobeAI — fashion tech: a hanging garment */
    case "wardrobeai":
      return (
        <svg viewBox="0 0 200 200" className={common} aria-hidden="true">
          <g data-sway>
            <path d="M138 34c-7-9 9-14 9-2" {...s} strokeOpacity={0.5} />
            <circle cx="138" cy="44" r="2.5" fill={accent} />
            <path d="M138 46 L96 82 L180 82 Z" {...s} strokeOpacity={0.45} />
            <line x1="100" y1="88" x2="176" y2="88" {...s} strokeOpacity={0.3} />
          </g>
        </svg>
      );

    /* Microsoft — retail digital twin: a real object + its digital mirror */
    case "microsoft":
      return (
        <svg viewBox="0 0 200 200" className={common} aria-hidden="true">
          <rect x="92" y="30" width="58" height="58" rx="6" {...s} strokeOpacity={0.45} />
          <rect
            x="116"
            y="54"
            width="58"
            height="58"
            rx="6"
            {...s}
            strokeOpacity={0.4}
            strokeDasharray="4 5"
            data-pulse
          />
          <line x1="150" y1="30" x2="174" y2="54" {...s} strokeOpacity={0.2} />
          <line x1="150" y1="88" x2="174" y2="112" {...s} strokeOpacity={0.2} />
        </svg>
      );

    /* iPark — parking sign */
    case "ipark":
      return (
        <svg viewBox="0 0 200 200" className={common} aria-hidden="true">
          <rect x="104" y="28" width="72" height="72" rx="16" {...s} strokeOpacity={0.45} />
          <text
            x="140"
            y="90"
            textAnchor="middle"
            fontFamily="Georgia, serif"
            fontSize="58"
            fontWeight="600"
            fill={accent}
            fillOpacity={0.85}
          >
            P
          </text>
          <circle cx="140" cy="118" r="3" fill={accent} data-pulse />
        </svg>
      );

    default:
      return (
        <svg viewBox="0 0 200 200" className={common} aria-hidden="true">
          {[0, 1, 2, 3].map((i) => (
            <circle
              key={i}
              cx="150"
              cy="50"
              r={16 + i * 20}
              {...s}
              strokeOpacity={0.14 - i * 0.02}
            />
          ))}
        </svg>
      );
  }
}
