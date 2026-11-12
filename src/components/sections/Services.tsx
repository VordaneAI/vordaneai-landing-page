"use client";

import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { services } from "../../lib/content";
import { chooseInterest } from "../../lib/interest";
import { Reveal } from "../ui/Reveal";

export function Services() {
  return (
    <section id="services" className="relative scroll-mt-20 bg-cloud px-5 py-24 sm:px-8 md:py-32">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-midnight to-transparent" aria-hidden />
      <div className="relative mx-auto max-w-7xl">
        <div className="mb-14 max-w-3xl md:mb-20">
          <Reveal>
            <p className="mb-4 inline-flex items-center gap-2 font-mono text-xs font-medium uppercase tracking-[0.25em] text-[#5b52d6]">
              <span className="h-px w-8 bg-gradient-to-r from-cyan to-violet" aria-hidden />
              Professional Services
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="font-display text-3xl font-semibold tracking-tight text-midnight sm:text-4xl md:text-5xl">Engineering Services</h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-5 text-lg leading-relaxed text-slate/80">End-to-end AI and backend engineering, from the first architecture decision to production operations.</p>
          </Reveal>
        </div>

        <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <Reveal as="li" key={s.n} delay={(i % 3) * 0.1}>
                <motion.a
                  href="#contact"
                  onClick={() => chooseInterest(`Service: ${s.title}`)}
                  whileHover="hover"
                  initial="rest"
                  animate="rest"
                  aria-label={`${s.title}: enquire about this service`}
                  className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-slate/10 bg-white p-8 shadow-[0_1px_2px_rgba(16,25,54,0.04)] transition-shadow duration-500 hover:shadow-[0_28px_60px_-24px_rgba(137,128,245,0.45)]"
                >
                  <motion.span
                    variants={{ rest: { opacity: 0 }, hover: { opacity: 1 } }}
                    className="absolute inset-0 bg-gradient-to-br from-cyan/10 via-transparent to-violet/15"
                    aria-hidden
                  />
                  <motion.span
                    variants={{ rest: { scaleX: 0 }, hover: { scaleX: 1 } }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute inset-x-0 top-0 h-1 origin-left bg-gradient-to-r from-cyan to-violet"
                    aria-hidden
                  />
                  <div className="relative flex items-start justify-between">
                    <motion.span
                      variants={{ rest: { rotate: 0, scale: 1 }, hover: { rotate: -6, scale: 1.08 } }}
                      className="grid h-14 w-14 place-items-center rounded-2xl bg-midnight text-cyan"
                    >
                      <Icon size={26} />
                    </motion.span>
                    <span className="font-mono text-sm font-medium text-slate/40 transition-colors group-hover:text-violet">{s.n}</span>
                  </div>
                  <h3 className="relative mt-7 font-display text-xl font-semibold text-midnight">{s.title}</h3>
                  <p className="relative mt-3 flex-1 leading-relaxed text-slate/75">{s.desc}</p>
                  <span className="relative mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-[#5b52d6]">
                    Discuss this service
                    <ArrowUpRight size={16} className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-1" />
                  </span>
                </motion.a>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
