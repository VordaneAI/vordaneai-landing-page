"use client";

import { motion, useScroll, useSpring, useTransform, useMotionValueEvent } from "framer-motion";
import { useRef, useState } from "react";
import { processSteps } from "../../lib/content";
import { SectionHeading } from "../ui/SectionHeading";

export function Process() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 75%", "end 60%"] });
  const p = useSpring(scrollYProgress, { stiffness: 90, damping: 24 });
  const height = useTransform(p, [0, 1], ["0%", "100%"]);
  const width = height;
  const [step, setStep] = useState(-1);
  useMotionValueEvent(p, "change", (v) => setStep(v < 0.03 ? -1 : Math.min(processSteps.length - 1, Math.floor(v * processSteps.length))));

  return (
    <section id="process" className="relative scroll-mt-20 px-5 py-24 sm:px-8 md:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow="Development Process" title="From First Conversation to Production" subtitle="A clear, repeatable path that keeps architecture, quality and delivery aligned." />

        <div ref={ref} className="relative">
          {/* desktop horizontal line */}
          <div className="absolute left-0 right-0 top-6 hidden h-px bg-white/10 lg:block" aria-hidden>
            <motion.div style={{ width }} className="relative h-full bg-gradient-to-r from-cyan to-violet shadow-[0_0_14px_rgba(99,230,232,0.8)]">
              <span className="pulse-ring absolute -right-1 -top-[3px] h-2 w-2 rounded-full bg-cyan" />
              <span className="absolute -right-1 -top-[3px] h-2 w-2 rounded-full bg-white shadow-[0_0_12px_#63E6E8]" />
            </motion.div>
          </div>
          {/* mobile vertical line */}
          <div className="absolute bottom-0 left-6 top-0 w-px bg-white/10 lg:hidden" aria-hidden>
            <motion.div style={{ height }} className="w-full bg-gradient-to-b from-cyan to-violet shadow-[0_0_14px_rgba(99,230,232,0.8)]" />
          </div>

          <ol className="relative grid gap-10 lg:grid-cols-5 lg:gap-6">
            {processSteps.map((s, i) => {
              const on = i <= step;
              return (
                <motion.li
                  key={s.n}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.7, delay: i * 0.08 }}
                  className="relative pl-16 lg:pl-0 lg:pt-20"
                >
                  <span
                    className={`absolute left-0 top-0 grid h-12 w-12 place-items-center rounded-full border-2 bg-midnight font-mono text-sm font-semibold transition-all duration-500 ${
                      on ? "border-cyan text-cyan shadow-[0_0_24px_rgba(99,230,232,0.55)]" : "border-white/20 text-cloud/40"
                    }`}
                  >
                    {s.n}
                  </span>
                  <div className={`glass rounded-2xl p-5 transition-opacity duration-500 ${on ? "opacity-100" : "opacity-60"}`}>
                    <h3 className="font-display text-xl font-semibold text-white">{s.title}</h3>
                    <p className="mt-2 text-[0.95rem] leading-relaxed text-cloud/70">{s.desc}</p>
                  </div>
                </motion.li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
