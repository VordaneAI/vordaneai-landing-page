"use client";

import { ArrowRight, CheckCircle2, CircleDashed } from "lucide-react";
import type { ReactNode } from "react";
import { products, type Product } from "../../lib/content";
import { chooseInterest } from "../../lib/interest";
import { Button } from "../ui/Button";
import { HrFlowArt, PdfParserArt, VyroniqArt } from "../ui/ProductArt";
import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/SectionHeading";
import { SpotlightCard } from "../ui/SpotlightCard";

const identity: Record<Product["id"], { accent: string; art: ReactNode; badge: string; tint: string }> = {
  vyroniq: { accent: "137,128,245", art: <VyroniqArt />, badge: "Flagship", tint: "from-violet/25 via-violet/5 to-transparent" },
  "ai-hrflow": { accent: "99,230,232", art: <HrFlowArt />, badge: "HR Tech", tint: "from-cyan/20 via-cyan/5 to-transparent" },
  "pdf-parser": { accent: "99,230,232", art: <PdfParserArt />, badge: "Documents", tint: "from-white/15 via-violet/5 to-transparent" },
};

function Actions({ p }: { p: Product }) {
  return (
    <div className="mt-8 flex flex-col sm:flex-row">
      <Button href="#contact" onClick={() => chooseInterest(p.interest)} className="w-full sm:w-auto">
        Explore {p.name}
        <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" />
      </Button>
    </div>
  );
}

function ProductCard({ p, wide }: { p: Product; wide?: boolean }) {
  const id = identity[p.id];
  return (
    <SpotlightCard accent={id.accent} className="h-full">
      <div className={wide ? "grid gap-10 p-5 sm:p-8 lg:p-10 lg:grid-cols-2 lg:items-center" : "flex h-full flex-col p-6 sm:p-8"}>
        <div className={wide ? "" : "order-2 flex flex-1 flex-col"}>
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-full border border-white/15 px-3 py-1 font-mono text-[0.68rem] uppercase tracking-widest text-cyan">{id.badge}</span>
            <span className="text-sm text-cloud/60">{p.kicker}</span>
          </div>
          <h3 className={`mt-4 font-display font-bold tracking-tight text-white ${wide ? "text-4xl sm:text-5xl" : "text-3xl"}`}>
            {p.id === "vyroniq" ? <span className="text-gradient">{p.name}</span> : p.name}
          </h3>
          <p className="mt-4 leading-relaxed text-cloud/75">{p.summary}</p>

          <ul className={`mt-6 grid gap-x-6 gap-y-3 ${wide ? "sm:grid-cols-1" : ""}`}>
            {p.features.map((f) => (
              <li key={f.label} className="flex items-start gap-3 text-[0.95rem] text-cloud/90">
                {f.status === "roadmap" ? (
                  <CircleDashed size={18} className="mt-0.5 shrink-0 text-violet" aria-hidden />
                ) : (
                  <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-cyan" aria-hidden />
                )}
                <span>
                  {f.label}
                  {f.status === "available" && <span className="sr-only"> (available)</span>}
                  {f.status === "roadmap" && (
                    <span className="ml-2 rounded-full bg-violet/20 px-2 py-0.5 align-middle font-mono text-[0.62rem] uppercase tracking-wider text-violet">
                      Roadmap
                    </span>
                  )}
                </span>
              </li>
            ))}
          </ul>
          {p.note && <p className="mt-4 text-sm italic text-cloud/50">{p.note}</p>}
          <div className="mt-auto">
            <Actions p={p} />
          </div>
        </div>

        <div className={wide ? "" : "order-1 mb-8"}>
          <div className={`relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br ${id.tint} p-4 sm:p-6`}>
            <div className="grid-bg absolute inset-0 opacity-60" aria-hidden />
            <div className={`relative ${wide ? "aspect-[420/220]" : "aspect-[420/180]"}`}>{id.art}</div>
          </div>
        </div>
      </div>
    </SpotlightCard>
  );
}

export function Products() {
  return (
    <section id="products" className="relative scroll-mt-20 px-5 py-24 sm:px-8 md:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Products & Platforms"
          title="Products Built by VORDANE"
          subtitle="Purpose-built AI products designed to solve real-world business and engineering challenges."
        />
        <div className="grid gap-6 lg:grid-cols-2">
          {products.map((p, i) => (
            <Reveal key={p.id} delay={i === 0 ? 0 : (i - 1) * 0.1} className={i === 0 ? "lg:col-span-2" : ""}>
              <ProductCard p={p} wide={i === 0} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}


