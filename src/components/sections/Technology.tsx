"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { techGroups } from "../../lib/content";
import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/SectionHeading";

export function Technology() {
  return (
    <section id="technology" className="relative scroll-mt-20 overflow-hidden px-5 py-24 sm:px-8 md:py-32">
      <div className="pointer-events-none absolute -left-40 top-20 h-[34rem] w-[34rem] rounded-full bg-[radial-gradient(circle,rgba(99,230,232,0.12),transparent_65%)]" aria-hidden />
      <div className="relative mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Technology & Expertise"
          title="The Engineering Ecosystem Behind Our Work"
          subtitle="Proven tools across models, agents, data, infrastructure and inference, chosen per project rather than by habit."
        />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {techGroups.map((g, gi) => (
            <Reveal key={g.title} delay={(gi % 3) * 0.08}>
              <div className="glass h-full rounded-3xl p-5 sm:p-7">
                <h3 className="mb-5 font-mono text-xs font-medium uppercase tracking-[0.2em] text-cyan">{g.title}</h3>
                <ul className="grid grid-cols-1 xs:grid-cols-2 gap-2.5 sm:gap-3">
                  {g.items.map((t) => {
                    const Fallback = t.fallback;
                    return (
                      <motion.li
                        key={t.name}
                        whileHover={{ y: -3 }}
                        className={`group flex items-center gap-3 rounded-xl border border-white/5 bg-white/[0.03] px-3.5 py-3 transition-colors hover:border-violet/50 hover:bg-violet/10 ${t.wide ? "col-span-2" : ""}`}
                      >
                        {t.image ? (
                          <div className="relative h-[22px] w-[22px] shrink-0 flex items-center justify-center">
                            <Image
                              src={t.image}
                              alt={t.name}
                              fill
                              sizes="22px"
                              className="object-contain drop-shadow-[0_0_6px_rgba(99,230,232,0.3)] group-hover:drop-shadow-[0_0_10px_rgba(99,230,232,0.65)] transition-all duration-300"
                            />
                          </div>
                        ) : t.path ? (
                          <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" aria-hidden className="shrink-0 text-cloud/70 transition-colors group-hover:text-cyan">
                            <path d={t.path} />
                          </svg>
                        ) : Fallback ? (
                          <Fallback size={22} className="shrink-0 text-cloud/70 transition-colors group-hover:text-cyan" aria-hidden />
                        ) : null}
                        <span className="text-sm font-medium text-white">{t.name}</span>
                      </motion.li>
                    );
                  })}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

