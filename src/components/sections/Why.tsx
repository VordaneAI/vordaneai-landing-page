"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { whyPoints } from "../../lib/content";
import { Reveal } from "../ui/Reveal";

export function Why() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y1 = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-40, 80]);

  return (
    <section ref={ref} id="why" className="relative scroll-mt-20 overflow-hidden bg-slate/40 px-5 py-24 sm:px-8 md:py-32">
      <motion.div style={{ y: y1 }} className="pointer-events-none absolute -right-24 top-10 h-[34rem] w-[34rem] rounded-full bg-[radial-gradient(circle,rgba(137,128,245,0.22),transparent_65%)]" aria-hidden />
      <motion.div style={{ y: y2 }} className="pointer-events-none absolute -left-24 bottom-0 h-[34rem] w-[34rem] rounded-full bg-[radial-gradient(circle,rgba(99,230,232,0.12),transparent_65%)]" aria-hidden />
      <div className="relative mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <Reveal>
            <p className="mb-4 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.25em] text-cyan">
              <span className="h-px w-8 bg-gradient-to-r from-cyan to-violet" aria-hidden />
              Why VORDANE AI?
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="font-display text-3xl font-semibold leading-[1.1] tracking-tight text-white sm:text-4xl md:text-5xl">
              Beyond AI Experiments. <span className="text-gradient">Engineering Real-World AI Systems.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-cloud/75">
              Prototypes are easy. We build the systems that stay reliable, secure and valuable once they meet real users and real data.
            </p>
          </Reveal>
        </div>

        <ul className="grid gap-4 sm:grid-cols-2">
          {whyPoints.map((p, i) => {
            const Icon = p.icon;
            return (
              <Reveal as="li" key={p.title} delay={(i % 2) * 0.1}>
                <motion.div whileHover={{ y: -4 }} className="glass h-full rounded-2xl p-6 transition-colors hover:border-cyan/30">
                  <span className="bob mb-4 grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-cyan/20 to-violet/25 text-cyan">
                    <Icon size={22} />
                  </span>
                  <h3 className="font-display text-lg font-semibold text-white">{p.title}</h3>
                  <p className="mt-2 text-[0.95rem] leading-relaxed text-cloud/70">{p.desc}</p>
                </motion.div>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

