"use client";

import clsx from "clsx";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useState, type ReactNode } from "react";
import { solutions, type Solution } from "../../lib/content";
import { chooseInterest } from "../../lib/interest";
import { Button } from "../ui/Button";
import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/SectionHeading";
import { AgentsArt, MultimodalArt, VoiceArt, WhatsappArt } from "../ui/SolutionArt";

const art: Record<Solution["id"], ReactNode> = {
  multimodal: <MultimodalArt />,
  agents: <AgentsArt />,
  voice: <VoiceArt />,
  whatsapp: <WhatsappArt />,
};

export function Solutions() {
  const [idx, setIdx] = useState(0);
  const s = solutions[idx];

  const onKey = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown" || e.key === "ArrowRight") setIdx((i) => (i + 1) % solutions.length);
    if (e.key === "ArrowUp" || e.key === "ArrowLeft") setIdx((i) => (i - 1 + solutions.length) % solutions.length);
  };

  return (
    <section id="solutions" className="relative scroll-mt-20 overflow-hidden bg-gradient-to-b from-midnight via-[#131d40] to-midnight px-5 py-24 sm:px-8 md:py-32">
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-[44rem] w-[44rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(137,128,245,0.14),transparent_65%)]" aria-hidden />
      <div className="relative mx-auto max-w-7xl">
        <SectionHeading eyebrow="AI Solutions" title={<>AI Solutions That Transform How Businesses Operate</>} />

        <Reveal>
          <div className="grid gap-6 lg:grid-cols-[320px_1fr]">
            <div role="tablist" aria-label="AI solutions" aria-orientation="vertical" onKeyDown={onKey} className="flex gap-2.5 overflow-x-auto pb-3 no-scrollbar snap-x snap-mandatory lg:flex-col lg:overflow-visible lg:pb-0">
              {solutions.map((item, i) => {
                const Icon = item.icon;
                const on = i === idx;
                return (
                  <button
                    key={item.id}
                    role="tab"
                    id={`tab-${item.id}`}
                    aria-selected={on}
                    aria-controls={`panel-${item.id}`}
                    tabIndex={on ? 0 : -1}
                    onClick={() => setIdx(i)}
                    className={clsx(
                      "relative flex shrink-0 items-center gap-4 rounded-2xl border px-5 py-4 text-left transition-colors lg:w-full",
                      on ? "border-white/20 text-white" : "border-white/5 text-cloud/60 hover:border-white/15 hover:text-white",
                    )}
                  >
                    {on && <motion.span layoutId="sol-tab" className="glass absolute inset-0 -z-0 rounded-2xl" transition={{ type: "spring", stiffness: 380, damping: 34 }} />}
                    <span className={clsx("relative grid h-11 w-11 shrink-0 place-items-center rounded-xl", on ? "bg-gradient-to-br from-cyan to-violet text-midnight" : "bg-white/5 text-cyan")}>
                      <Icon size={22} />
                    </span>
                    <span className="relative whitespace-nowrap font-display text-base font-semibold lg:whitespace-normal">{item.title}</span>
                  </button>
                );
              })}
            </div>

            <div className="glass relative min-h-[380px] overflow-hidden rounded-3xl p-5 sm:p-8 lg:p-10">
              <div className="grid-bg absolute inset-0 opacity-50" aria-hidden />
              <AnimatePresence mode="wait">
                <motion.div
                  key={s.id}
                  role="tabpanel"
                  id={`panel-${s.id}`}
                  aria-labelledby={`tab-${s.id}`}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.35 }}
                  className="relative grid gap-8 xl:grid-cols-2 xl:items-center"
                >
                  <div>
                    <h3 className="font-display text-3xl font-semibold text-white">{s.title}</h3>
                    <p className="mt-3 text-cloud/70">{s.blurb}</p>
                    <ul className="mt-6 grid gap-3">
                      {s.points.map((p, i) => (
                        <motion.li key={p.label} initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.08 * i }} className="flex items-center gap-3 text-cloud/90">
                          <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-white/5 text-cyan">
                            <p.icon size={16} />
                          </span>
                          {p.label}
                        </motion.li>
                      ))}
                    </ul>
                    <div className="mt-8">
                      <Button href="#contact" onClick={() => chooseInterest(s.title)} size="sm" className="w-full sm:w-auto">
                        Discuss this solution <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                      </Button>
                    </div>
                  </div>
                  <div className="mx-auto aspect-[4/3] w-full max-w-md">{art[s.id]}</div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
