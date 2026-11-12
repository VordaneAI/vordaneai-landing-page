"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { useRef } from "react";
import { Button } from "../ui/Button";
import { NetworkCanvas } from "../ui/NetworkCanvas";

const headline = ["Building", "Intelligent", "Systems", "for the", "Next", "Generation."];

function HeroVisual() {
  const sats = [
    { x: 240, y: 36, from: [90, 90], c: "#63E6E8" },
    { x: 452, y: 210, from: [390, 90], c: "#8980F5" },
    { x: 30, y: 250, from: [90, 90], c: "#63E6E8" },
    { x: 350, y: 330, from: [240, 400], c: "#8980F5" },
    { x: 120, y: 360, from: [240, 400], c: "#63E6E8" },
  ];
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[320px] xs:max-w-[380px] sm:max-w-[460px] lg:max-w-[520px]">
      <div className="absolute inset-[4%] rounded-full" style={{ background: "radial-gradient(circle, rgba(137,128,245,0.28), transparent 68%)" }} aria-hidden />
      <svg viewBox="0 0 480 480" className="relative h-full w-full" role="img" aria-label="Animated network of connected AI agents forming the VORDANE V mark">
        <defs>
          <linearGradient id="vl" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#63E6E8" />
            <stop offset="1" stopColor="#8980F5" />
          </linearGradient>
          <linearGradient id="vr" x1="1" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#8980F5" />
            <stop offset="1" stopColor="#63E6E8" />
          </linearGradient>
                  </defs>

        <g style={{ transformOrigin: "240px 240px" }} className="origin-center animate-[spin_60s_linear_infinite]">
          <circle cx="240" cy="240" r="200" fill="none" stroke="rgba(137,128,245,0.25)" strokeDasharray="2 10" />
        </g>
        <circle cx="240" cy="240" r="150" fill="none" stroke="rgba(99,230,232,0.12)" />

        {sats.map((s, i) => (
          <g key={i}>
            <line x1={s.from[0]} y1={s.from[1]} x2={s.x} y2={s.y} stroke={s.c} strokeOpacity="0.45" className="flow-line" strokeWidth="1.2" />
            <motion.circle
              cx={s.x}
              cy={s.y}
              r="5"
              fill={s.c}
             
              animate={{ cy: [s.y, s.y - 8, s.y], opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 4 + i, repeat: Infinity, ease: "easeInOut", delay: i * 0.4 }}
            />
          </g>
        ))}

        <motion.line x1="90" y1="90" x2="240" y2="400" stroke="url(#vl)" strokeWidth="9" strokeLinecap="round"
          initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.6, delay: 0.5, ease: "easeInOut" }} />
        <motion.line x1="390" y1="90" x2="240" y2="400" stroke="url(#vr)" strokeWidth="9" strokeLinecap="round"
          initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.6, delay: 0.7, ease: "easeInOut" }} />

        {[
          { x: 90, y: 90, c: "#63E6E8", l: "Observe" },
          { x: 390, y: 90, c: "#8980F5", l: "Govern" },
          { x: 240, y: 400, c: "#FFFFFF", l: "Secure" },
        ].map((n, i) => (
          <g key={n.l}>
            <circle cx={n.x} cy={n.y} r="14" fill="none" stroke={n.c} className="pulse-ring" style={{ transformOrigin: `${n.x}px ${n.y}px`, animationDelay: `${i * 0.7}s` }} />
            <circle cx={n.x} cy={n.y} r="17" fill="#101936" stroke={n.c} strokeWidth="3" />
            <circle cx={n.x} cy={n.y} r="6" fill={n.c} />
          </g>
        ))}
      </svg>

      {[
        { l: "Observe", cls: "left-0 top-[6%]", c: "bg-cyan" },
        { l: "Govern", cls: "right-0 top-[6%]", c: "bg-violet" },
        { l: "Secure", cls: "bottom-[2%] left-1/2 -translate-x-1/2", c: "bg-white" },
      ].map((b, i) => (
        <motion.span
          key={b.l}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6 + i * 0.15 }}
          className={`glass absolute flex items-center gap-2 rounded-full px-3 py-1.5 font-mono text-[0.62rem] sm:text-[0.7rem] uppercase tracking-widest text-cloud ${b.cls}`}
        >
          <span className={`h-1.5 w-1.5 rounded-full ${b.c}`} aria-hidden />
          {b.l}
        </motion.span>
      ))}
    </div>
  );
}

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const netY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 140]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 60]);
  const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section id="top" ref={ref} className="bg-gradient-to-br from-midnight via-[#161f4a] to-midnight relative isolate flex min-h-[100svh] items-center overflow-hidden pb-16 pt-28">
      <motion.div style={{ y: netY }} className="absolute inset-0 -z-10">
        <div className="grid-bg absolute inset-0" aria-hidden />
        <NetworkCanvas className="absolute inset-0 h-full w-full opacity-80" />
        <div className="absolute -left-40 top-1/4 h-[40rem] w-[40rem] rounded-full" style={{ background: "radial-gradient(circle, rgba(99,230,232,0.12), transparent 65%)" }} aria-hidden />
        <div className="absolute -right-32 bottom-0 h-[44rem] w-[44rem] rounded-full" style={{ background: "radial-gradient(circle, rgba(137,128,245,0.22), transparent 65%)" }} aria-hidden />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-midnight to-transparent" aria-hidden />
      </motion.div>

      <motion.div style={{ y: contentY, opacity: fade }} className="mx-auto grid w-full max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-[1.15fr_0.85fr]">
        <div>

          <h1 className="font-display text-[2.15rem] xs:text-[2.65rem] sm:text-5xl md:text-6xl xl:text-7xl font-semibold leading-[1.06] tracking-tight text-white">
            {headline.map((w, i) => (
              <span key={i} className="mr-[0.25em] inline-block overflow-hidden pb-[0.12em] align-bottom">
                <motion.span
                  className={`inline-block ${i >= 4 ? "text-gradient" : ""}`}
                  initial={{ y: "110%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.9, delay: 0.15 + i * 0.09, ease: [0.22, 1, 0.36, 1] }}
                >
                  {w}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.85 }}
            className="mt-7 max-w-xl text-lg leading-relaxed text-cloud/80 sm:text-xl"
          >
            We engineer intelligent AI applications, autonomous agents, and enterprise-grade AI infrastructure that help businesses innovate, automate, and scale.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.05 }}
            className="mt-10 flex flex-col gap-4 sm:flex-row"
          >
            <Button href="#solutions" className="w-full sm:w-auto">
              Explore Our Solutions
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </Button>
            <Button href="#contact" variant="secondary" className="w-full sm:w-auto">
              Talk to Our Experts
            </Button>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="mt-12 font-mono text-xs uppercase tracking-[0.3em] text-cloud/50"
          >
            Observe &middot; Govern &middot; Secure
          </motion.p>
        </div>

        <motion.div initial={{ opacity: 0, scale: 0.92 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.2, delay: 0.3 }} className="float-slow will-change-transform">
          <HeroVisual />
        </motion.div>
      </motion.div>

      <a href="#products" aria-label="Scroll to products" className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 text-cloud/50 transition-colors hover:text-cyan md:block">
        <ChevronDown className="animate-bounce" />
      </a>
    </section>
  );
}
