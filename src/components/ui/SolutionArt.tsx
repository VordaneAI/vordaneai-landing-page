"use client";

import { motion } from "framer-motion";

const C = "#63E6E8";
const V = "#8980F5";

function Frame({ children, label }: { children: React.ReactNode; label: string }) {
  return (
    <svg viewBox="0 0 400 300" className="h-full w-full" role="img" aria-label={label}>
      <defs>
        <linearGradient id="sg" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0" stopColor={C} />
          <stop offset="1" stopColor={V} />
        </linearGradient>
      </defs>
      {children}
    </svg>
  );
}

/** Content sources orbiting a central grounded assistant. */
export function MultimodalArt() {
  const orbit = [
    { a: -90, l: "video", c: C },
    { a: -18, l: "pdf", c: V },
    { a: 54, l: "text", c: C },
    { a: 126, l: "audio", c: V },
    { a: 198, l: "docs", c: C },
  ];
  return (
    <Frame label="Assistant at the centre connected to video, PDF, text, audio and document sources">
      <circle cx="200" cy="150" r="104" fill="none" stroke="rgba(255,255,255,0.1)" strokeDasharray="3 8" />
      <g className="origin-center animate-[spin_50s_linear_infinite]" style={{ transformOrigin: "200px 150px" }}>
        {orbit.map((o) => {
          const x = 200 + 104 * Math.cos((o.a * Math.PI) / 180);
          const y = 150 + 104 * Math.sin((o.a * Math.PI) / 180);
          return (
            <g key={o.l}>
              <line x1="200" y1="150" x2={x} y2={y} stroke={o.c} strokeOpacity="0.4" className="flow-line" />
              <g style={{ transformOrigin: `${x}px ${y}px` }} className="animate-[spin_50s_linear_infinite_reverse]">
                <rect x={x - 30} y={y - 14} width="60" height="28" rx="14" fill="#101936" stroke={o.c} strokeOpacity="0.8" />
                <text x={x} y={y + 4} textAnchor="middle" fontSize="11" fill="#F5F7FC" fontFamily="ui-monospace,monospace">{o.l}</text>
              </g>
            </g>
          );
        })}
      </g>
      <circle cx="200" cy="150" r="44" fill="#101936" stroke="url(#sg)" strokeWidth="2.5" />
      <motion.circle cx="200" cy="150" r="44" fill="none" stroke={C} animate={{ r: [44, 62], opacity: [0.6, 0] }} transition={{ duration: 2.4, repeat: Infinity }} />
      <path d="M180 140h40a6 6 0 0 1 6 6v14a6 6 0 0 1-6 6h-22l-12 10v-10a6 6 0 0 1-6-6v-14a6 6 0 0 1 6-6z" fill="none" stroke="url(#sg)" strokeWidth="2.2" strokeLinejoin="round" transform="translate(-2,-6)" />
      <g fill={C}>{[190, 200, 210].map((x, i) => (
        <motion.circle key={x} cx={x} cy="148" r="2.6" animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.2 }} />
      ))}</g>
    </Frame>
  );
}

/** Agent hub orchestrating APIs, DBs, MCP servers with a human approval gate. */
export function AgentsArt() {
  const targets = [
    { x: 70, y: 60, l: "APIs" },
    { x: 330, y: 60, l: "MCP" },
    { x: 60, y: 240, l: "DB" },
    { x: 340, y: 240, l: "Workflows" },
  ];
  return (
    <Frame label="An agent hub connected to APIs, MCP servers, databases and workflows with a human approval gate">
      {targets.map((t, i) => (
        <g key={t.l}>
          <line x1="200" y1="150" x2={t.x} y2={t.y} stroke={i % 2 ? V : C} strokeOpacity="0.5" strokeWidth="1.5" className="flow-line" />
          <motion.g animate={{ y: [0, -5, 0] }} transition={{ duration: 4 + i, repeat: Infinity, ease: "easeInOut" }}>
            <rect x={t.x - 36} y={t.y - 17} width="72" height="34" rx="10" fill="#101936" stroke={i % 2 ? V : C} strokeOpacity="0.85" />
            <text x={t.x} y={t.y + 4} textAnchor="middle" fontSize="12" fill="#F5F7FC" fontFamily="ui-monospace,monospace">{t.l}</text>
          </motion.g>
        </g>
      ))}
      <rect x="150" y="100" width="100" height="100" rx="26" fill="#101936" stroke="url(#sg)" strokeWidth="2.5" />
      <g stroke="url(#sg)" strokeWidth="2.4" fill="none" strokeLinecap="round">
        <rect x="174" y="128" width="52" height="38" rx="10" />
        <path d="M200 128v-12M194 116h12" />
        <circle cx="187" cy="146" r="3" fill={C} />
        <circle cx="213" cy="146" r="3" fill={V} />
      </g>
      <g transform="translate(200,262)">
        <rect x="-62" y="-14" width="124" height="28" rx="14" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.25)" />
        <text textAnchor="middle" y="4" fontSize="10.5" fill="#F5F7FC" fontFamily="ui-monospace,monospace">human approval</text>
      </g>
    </Frame>
  );
}

/** Voice waveform with call routing. */
export function VoiceArt() {
  return (
    <Frame label="Voice waveform of an AI call agent with inbound and outbound calls">
      <rect x="40" y="60" width="320" height="140" rx="24" fill="rgba(16,25,54,0.6)" stroke="rgba(255,255,255,0.12)" />
      {Array.from({ length: 31 }).map((_, i) => {
        const base = 14 + Math.abs(Math.sin(i * 0.7)) * 40;
        return (
          <motion.rect
            key={i}
            x={62 + i * 9.4}
            width="4.5"
            rx="2.25"
            fill={i % 2 ? V : C}
            animate={{ y: [130 - base / 2, 130 - base * 0.9, 130 - base / 2], height: [base, base * 1.8, base] }}
            transition={{ duration: 1.4 + (i % 5) * 0.2, repeat: Infinity, ease: "easeInOut", delay: i * 0.04 }}
          />
        );
      })}
      {[
        { x: 70, l: "inbound", c: C },
        { x: 250, l: "outbound", c: V },
      ].map((b) => (
        <g key={b.l} transform={`translate(${b.x},232)`}>
          <rect width="80" height="28" rx="14" fill="#101936" stroke={b.c} />
          <text x="40" y="18" textAnchor="middle" fontSize="11" fill="#F5F7FC" fontFamily="ui-monospace,monospace">{b.l}</text>
        </g>
      ))}
      <path d="M200 232h0" />
      <circle cx="200" cy="246" r="15" fill="none" stroke="url(#sg)" strokeWidth="2" />
      <path d="M194 241c0 7 5 12 12 12l2-4-4-2-2 2c-2-1-4-3-5-5l2-2-2-4z" fill="url(#sg)" />
    </Frame>
  );
}

/** Chat thread with a lead-qualification card. */
export function WhatsappArt() {
  const bubbles = [
    { y: 44, w: 190, x: 36, me: false, t: "Hi! What can I help with?" },
    { y: 96, w: 170, x: 194, me: true, t: "Pricing for 50 seats" },
    { y: 148, w: 210, x: 36, me: false, t: "Sure. Which team is this for?" },
  ];
  return (
    <Frame label="WhatsApp style conversation with an AI agent and a lead qualification card">
      {bubbles.map((b, i) => (
        <motion.g key={b.t} initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 + i * 0.35 }}>
          <rect x={b.x} y={b.y} width={b.w} height="38" rx="14" fill={b.me ? "rgba(137,128,245,0.3)" : "rgba(255,255,255,0.08)"} stroke={b.me ? V : "rgba(255,255,255,0.15)"} />
          <text x={b.x + 14} y={b.y + 24} fontSize="12" fill="#F5F7FC" fontFamily="ui-sans-serif,system-ui">{b.t}</text>
        </motion.g>
      ))}
      <motion.g initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 1.4 }} style={{ transformOrigin: "200px 240px" }}>
        <rect x="70" y="208" width="260" height="62" rx="16" fill="#101936" stroke="url(#sg)" strokeWidth="1.8" />
        <text x="90" y="232" fontSize="11" fill={C} fontFamily="ui-monospace,monospace">LEAD QUALIFIED</text>
        <text x="90" y="254" fontSize="11" fill="#F5F7FC" fillOpacity="0.8" fontFamily="ui-monospace,monospace">intent: purchase · routed to CRM</text>
      </motion.g>
      <g fill={C}>{[0, 1, 2].map((i) => (
        <motion.circle key={i} cx={52 + i * 9} cy="196" r="2.4" animate={{ opacity: [0.2, 1, 0.2] }} transition={{ duration: 1.1, repeat: Infinity, delay: i * 0.18 }} />
      ))}</g>
    </Frame>
  );
}
