"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import {
  Bot,
  Cpu,
  Database,
  FileText,
  Headset,
  MessageCircle,
  Network,
  ShieldCheck,
  Sparkles,
  Workflow,
} from "lucide-react";

const capabilities = [
  { label: "Generative AI", icon: Sparkles, accent: "text-cyan" },
  { label: "Agentic AI", icon: Bot, accent: "text-violet" },
  { label: "RAG & Enterprise AI", icon: Database, accent: "text-cyan" },
  { label: "AI Security & Observability", icon: ShieldCheck, accent: "text-violet" },
  { label: "Autonomous Agent Hub", icon: Network, accent: "text-cyan" },
  { label: "Voice Call Center Agents", icon: Headset, accent: "text-violet" },
  { label: "WhatsApp AI Agents", icon: MessageCircle, accent: "text-cyan" },
  { label: "Document Intelligence", icon: FileText, accent: "text-violet" },
  { label: "Workflow Automation", icon: Workflow, accent: "text-cyan" },
  { label: "High-Throughput GPU Inference", icon: Cpu, accent: "text-violet" },
];

export function Ticker() {
  const [paused, setPaused] = useState(false);
  const items = [...capabilities, ...capabilities, ...capabilities];

  return (
    <div
      className="relative overflow-hidden border-y border-white/10 bg-midnight/70 py-4.5 select-none"
      aria-label="VORDANE AI capabilities moving carousel"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Edge gradient masks */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-28 bg-gradient-to-r from-midnight via-midnight/80 to-transparent" aria-hidden />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-28 bg-gradient-to-l from-midnight via-midnight/80 to-transparent" aria-hidden />

      <motion.div
        className="flex w-max items-center gap-4 sm:gap-6"
        animate={{ x: paused ? undefined : ["0%", "-33.333%"] }}
        transition={{
          ease: "linear",
          duration: 32,
          repeat: Infinity,
        }}
      >
        {items.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={idx}
              className="group flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-cloud/85 transition-all duration-300 hover:border-cyan/50 hover:bg-white/[0.08] hover:text-white"
            >
              <span className={`grid h-6 w-6 place-items-center rounded-full bg-white/5 ${item.accent} transition-transform group-hover:scale-110`}>
                <Icon size={14} />
              </span>
              <span className="whitespace-nowrap font-display text-sm font-medium tracking-wide">
                {item.label}
              </span>
              <span className="h-1.5 w-1.5 rounded-full bg-violet/60 transition-colors group-hover:bg-cyan" aria-hidden />
            </div>
          );
        })}
      </motion.div>
    </div>
  );
}
