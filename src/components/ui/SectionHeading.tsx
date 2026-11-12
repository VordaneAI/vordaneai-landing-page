import type { ReactNode } from "react";
import clsx from "clsx";
import { Reveal } from "./Reveal";

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
}: {
  eyebrow: string;
  title: ReactNode;
  subtitle?: string;
  align?: "center" | "left";
}) {
  return (
    <div className={clsx("mb-14 max-w-3xl md:mb-20", align === "center" && "mx-auto text-center")}>
      <Reveal>
        <p className="mb-4 inline-flex items-center gap-2 font-mono text-xs font-medium uppercase tracking-[0.25em] text-cyan">
          <span className="h-px w-8 bg-gradient-to-r from-cyan to-violet" aria-hidden />
          {eyebrow}
        </p>
      </Reveal>
      <Reveal delay={0.08}>
        <h2 className="font-display text-3xl font-semibold leading-[1.1] tracking-tight text-white sm:text-4xl md:text-5xl">
          {title}
        </h2>
      </Reveal>
      {subtitle && (
        <Reveal delay={0.16}>
          <p className="mt-5 text-lg leading-relaxed text-cloud/75">{subtitle}</p>
        </Reveal>
      )}
    </div>
  );
}
