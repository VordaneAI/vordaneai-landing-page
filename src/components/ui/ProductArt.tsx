"use client";

import { motion } from "framer-motion";

/* Custom SVG illustrations, one distinct visual identity per product. */

/** VYRONIQ: execution span tree + alignment gauge (violet-led). */
export function VyroniqArt() {
  const spans = [
    { x: 20, y: 22, w: 150, c: "#8980F5", l: "session" },
    { x: 44, y: 54, w: 110, c: "#63E6E8", l: "pre_tool_use" },
    { x: 68, y: 86, w: 140, c: "#8980F5", l: "tool: read_file" },
    { x: 44, y: 118, w: 90, c: "#63E6E8", l: "post_tool_use" },
    { x: 68, y: 150, w: 120, c: "#FFFFFF", l: "deviation flagged" },
  ];
  return (
    <svg viewBox="0 0 420 220" className="h-full w-full" role="img" aria-label="Agent execution span tree with alignment score gauge">
      <defs>
        <linearGradient id="vq-g" x1="0" x2="1">
          <stop offset="0" stopColor="#63E6E8" />
          <stop offset="1" stopColor="#8980F5" />
        </linearGradient>
      </defs>
      <rect x="6" y="6" width="236" height="208" rx="16" fill="rgba(16,25,54,0.7)" stroke="rgba(255,255,255,0.1)" />
      {spans.map((s, i) => (
        <g key={s.l}>
          <motion.rect
            x={s.x}
            y={s.y}
            height="20"
            rx="6"
            fill={s.c}
            fillOpacity="0.22"
            stroke={s.c}
            strokeOpacity="0.8"
            initial={{ width: 0 }}
            whileInView={{ width: s.w }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.2 + i * 0.12, ease: "easeOut" }}
          />
          <text x={s.x + 8} y={s.y + 14} fontSize="9.5" fill="#F5F7FC" fontFamily="ui-monospace,monospace">
            {s.l}
          </text>
        </g>
      ))}
      <g transform="translate(330,112)">
        <circle r="62" fill="rgba(16,25,54,0.7)" stroke="rgba(255,255,255,0.1)" />
        <circle r="46" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="9" />
        <motion.circle
          r="46"
          fill="none"
          stroke="url(#vq-g)"
          strokeWidth="9"
          strokeLinecap="round"
          strokeDasharray="289"
          transform="rotate(-90)"
          initial={{ strokeDashoffset: 289 }}
          whileInView={{ strokeDashoffset: 289 * 0.18 }}
          viewport={{ once: true }}
          transition={{ duration: 1.6, delay: 0.4, ease: "easeOut" }}
        />
        <text y="-2" textAnchor="middle" fontSize="11" fill="#F5F7FC" fontFamily="ui-monospace,monospace">
          alignment
        </text>
        <text y="16" textAnchor="middle" fontSize="12" fill="#63E6E8" fontFamily="ui-monospace,monospace">
          7 axes
        </text>
      </g>
    </svg>
  );
}

/** AI-HRFlow: people flowing through an AI-assisted pipeline with a human review gate (cyan-led). */
export function HrFlowArt() {
  return (
    <svg viewBox="0 0 420 180" className="h-full w-full" role="img" aria-label="HR workflow pipeline with an AI step and a human review step">
      <defs>
        <linearGradient id="hr-g" x1="0" x2="1">
          <stop offset="0" stopColor="#63E6E8" />
          <stop offset="1" stopColor="#8980F5" />
        </linearGradient>
      </defs>
      <path d="M40 90 H150 M150 90 H270 M270 90 H380" stroke="url(#hr-g)" strokeWidth="2" strokeDasharray="5 8" className="flow-line" />
      {[
        { x: 40, t: "Request", c: "#63E6E8" },
        { x: 150, t: "AI assist", c: "#8980F5" },
        { x: 270, t: "Human review", c: "#63E6E8" },
        { x: 380, t: "Done", c: "#FFFFFF" },
      ].map((n, i) => (
        <g key={n.t}>
          <motion.circle cx={n.x} cy="90" r="22" fill="#101936" stroke={n.c} strokeWidth="2"
            initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.15 * i, type: "spring" }}
            style={{ transformOrigin: `${n.x}px 90px` }} />
          {i === 1 ? (
            <path d={`M${n.x - 8} 96 l5 -12 l5 8 l5 -8 l5 12`} fill="none" stroke={n.c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          ) : i === 2 ? (
            <g stroke={n.c} strokeWidth="2" fill="none" strokeLinecap="round">
              <circle cx={n.x} cy="84" r="5" />
              <path d={`M${n.x - 9} 101 a9 9 0 0 1 18 0`} />
            </g>
          ) : i === 3 ? (
            <path d={`M${n.x - 7} 90 l5 5 l9 -10`} fill="none" stroke={n.c} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          ) : (
            <rect x={n.x - 8} y="82" width="16" height="16" rx="3" fill="none" stroke={n.c} strokeWidth="2" />
          )}
          <text x={n.x} y="136" textAnchor="middle" fontSize="11" fill="#F5F7FC" fillOpacity="0.8" fontFamily="ui-monospace,monospace">
            {n.t}
          </text>
        </g>
      ))}
    </svg>
  );
}

/** PDF Parser: a document page being scanned and decomposed into structured blocks. */
export function PdfParserArt() {
  return (
    <svg viewBox="0 0 420 180" className="h-full w-full" role="img" aria-label="PDF page being scanned into structured data">
      <defs>
        <linearGradient id="pdf-scan" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0" stopColor="#63E6E8" stopOpacity="0" />
          <stop offset="1" stopColor="#63E6E8" stopOpacity="0.55" />
        </linearGradient>
        <clipPath id="pdf-clip"><rect x="52" y="18" width="104" height="144" rx="8" /></clipPath>
      </defs>
      <rect x="52" y="18" width="104" height="144" rx="8" fill="#F5F7FC" fillOpacity="0.95" />
      <path d="M130 18 l26 26 h-18 a8 8 0 0 1 -8 -8z" fill="#8980F5" fillOpacity="0.45" />
      {[40, 58, 72, 86, 108, 122, 136].map((y, i) => (
        <rect key={y} x="66" y={y} width={i === 0 ? 50 : 76 - (i % 3) * 10} height={i === 0 ? 8 : 5} rx="2.5" fill={i === 0 ? "#252E46" : "#252E46"} fillOpacity={i === 0 ? 0.85 : 0.35} />
      ))}
      <g clipPath="url(#pdf-clip)">
        <motion.rect x="52" width="104" height="26" fill="url(#pdf-scan)"
          animate={{ y: [-26, 140, -26] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} />
      </g>
      <path d="M170 90 H236" stroke="#63E6E8" strokeWidth="2" strokeDasharray="5 7" className="flow-line" />
      <path d="M232 83 l9 7 l-9 7" fill="none" stroke="#63E6E8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <g fontFamily="ui-monospace,monospace" fontSize="10">
        {[
          { y: 28, l: "text", c: "#63E6E8" },
          { y: 62, l: "tables", c: "#8980F5" },
          { y: 96, l: "structure", c: "#63E6E8" },
          { y: 130, l: "JSON / chunks", c: "#8980F5" },
        ].map((b, i) => (
          <motion.g key={b.l} initial={{ opacity: 0, x: -12 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 + i * 0.12 }}>
            <rect x="256" y={b.y} width="130" height="26" rx="7" fill={b.c} fillOpacity="0.14" stroke={b.c} strokeOpacity="0.6" />
            <text x="270" y={b.y + 17} fill="#F5F7FC">{b.l}</text>
          </motion.g>
        ))}
      </g>
    </svg>
  );
}
