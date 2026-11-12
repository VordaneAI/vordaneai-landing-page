"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";

export function IntroAnimation() {
  const [show, setShow] = useState(true);
  const [stage, setStage] = useState<"enter" | "pillars" | "exit">("enter");
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    // If reduced motion is requested, dismiss immediately
    if (reduceMotion) {
      setShow(false);
      return;
    }

    // Sequence stages
    const t1 = setTimeout(() => setStage("pillars"), 600);
    const t2 = setTimeout(() => setStage("exit"), 2000);
    const t3 = setTimeout(() => setShow(false), 2700);

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setShow(false);
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [reduceMotion]);

  if (!show) return null;

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="intro-overlay"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#0d142d] overflow-hidden select-none"
          role="dialog"
          aria-label="VORDANE AI System Initialization"
        >
          {/* Cybernetic ambient background rings & glow */}
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center" aria-hidden>
            <div className="absolute h-[600px] w-[600px] rounded-full bg-[radial-gradient(circle,rgba(99,230,232,0.12),rgba(137,128,245,0.18)_40%,transparent_70%)]" />
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="absolute h-[520px] w-[520px] rounded-full border border-white/5 border-dashed"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
              className="absolute h-[380px] w-[380px] rounded-full border border-cyan/15 border-dotted"
            />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,#0d142d_80%)]" />
          </div>

          {/* Skip button */}
          <button
            onClick={() => setShow(false)}
            aria-label="Skip introduction"
            className="absolute top-4 right-4 sm:top-6 sm:right-6 z-20 min-h-[40px] rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 font-mono text-xs uppercase tracking-widest text-cloud/60 backdrop-blur transition hover:border-cyan/40 hover:text-white"
          >
            Skip [ESC]
          </button>

          {/* Central Logo Experience */}
          <div className="relative z-10 flex flex-col items-center">
            {/* 3D Depth Logo Motion */}
            <motion.div
              initial={{ scale: 0.3, z: -300, opacity: 0, filter: "blur(12px)" }}
              animate={
                stage === "exit"
                  ? { scale: 0.85, z: -150, opacity: 0, filter: "blur(6px)" }
                  : { scale: [0.3, 1.18, 1], z: [ -300, 40, 0 ], opacity: 1, filter: "blur(0px)" }
              }
              transition={{
                duration: stage === "exit" ? 0.6 : 1.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              style={{ transformPerspective: 1200 }}
              className="relative flex items-center justify-center"
            >
              {/* Outer Energy Pulse Ring */}
              <motion.div
                animate={{ scale: [0.9, 1.3, 0.9], opacity: [0.3, 0.7, 0.3] }}
                transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
                className="absolute h-44 w-44 rounded-3xl bg-gradient-to-tr from-cyan/30 to-violet/40 blur-xl -z-10"
              />

              {/* VORDANE App Icon */}
              <div className="relative h-24 w-24 sm:h-36 sm:w-36 overflow-hidden rounded-[26%] shadow-[0_0_60px_-10px_rgba(99,230,232,0.6)] border border-white/20">
                <Image
                  src="/vordane-icon.png"
                  alt="VORDANE AI"
                  fill
                  priority
                  className="object-cover"
                />
              </div>

              {/* Holographic targeting brackets */}
              <div className="pointer-events-none absolute -inset-6 sm:-inset-8 border border-white/10 rounded-3xl" />
              <span className="absolute -top-1 -left-1 h-3 w-3 border-t-2 border-l-2 border-cyan" />
              <span className="absolute -top-1 -right-1 h-3 w-3 border-t-2 border-r-2 border-violet" />
              <span className="absolute -bottom-1 -left-1 h-3 w-3 border-b-2 border-cyan" />
              <span className="absolute -bottom-1 -right-1 h-3 w-3 border-b-2 border-violet" />
            </motion.div>

            {/* Brand Name Reveal */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={stage === "exit" ? { opacity: 0, y: -10 } : { opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="mt-8 text-center"
            >
              <h1 className="font-display text-2xl sm:text-4xl font-bold tracking-[0.2em] sm:tracking-[0.25em] text-white">
                VORDANE <span className="text-cyan">AI</span>
              </h1>
            </motion.div>

            {/* Observe • Govern • Secure Sequential Pillar Reveal */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={stage === "exit" ? { opacity: 0 } : { opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="mt-5 flex flex-wrap justify-center items-center gap-2 sm:gap-6 font-mono text-[0.7rem] sm:text-sm tracking-[0.2em] sm:tracking-[0.28em] px-4 uppercase"
            >
              <motion.span
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8, duration: 0.4 }}
                className="flex items-center gap-2 text-cyan font-semibold drop-shadow-[0_0_12px_rgba(99,230,232,0.8)]"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-cyan shadow-[0_0_8px_#63E6E8]" />
                Observe
              </motion.span>

              <span className="text-white/20">&bull;</span>

              <motion.span
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1, duration: 0.4 }}
                className="flex items-center gap-2 text-violet font-semibold drop-shadow-[0_0_12px_rgba(137,128,245,0.8)]"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-violet shadow-[0_0_8px_#8980F5]" />
                Govern
              </motion.span>

              <span className="text-white/20">&bull;</span>

              <motion.span
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.4, duration: 0.4 }}
                className="flex items-center gap-2 text-white font-semibold drop-shadow-[0_0_12px_rgba(255,255,255,0.8)]"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-white shadow-[0_0_8px_#FFFFFF]" />
                Secure
              </motion.span>
            </motion.div>

            {/* Bottom status readout */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: stage === "exit" ? 0 : 0.4 }}
              transition={{ delay: 1.2, duration: 0.4 }}
              className="mt-6 font-mono text-[0.65rem] uppercase tracking-[0.3em] text-cloud/60"
            >
              System Initialized // Intelligent Enterprise Engineering
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
