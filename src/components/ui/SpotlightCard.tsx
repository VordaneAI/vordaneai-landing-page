"use client";

import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";
import type { ReactNode } from "react";
import clsx from "clsx";

/** Card with a pointer-following spotlight and subtle lift. `accent` is an rgb triplet like "99,230,232". */
export function SpotlightCard({
  children,
  accent = "137,128,245",
  className,
  tilt = true,
}: {
  children: ReactNode;
  accent?: string;
  className?: string;
  tilt?: boolean;
}) {
  const x = useMotionValue(-300);
  const y = useMotionValue(-300);
  const bg = useMotionTemplate`radial-gradient(420px circle at ${x}px ${y}px, rgba(${accent},0.16), transparent 65%)`;
  const border = useMotionTemplate`radial-gradient(260px circle at ${x}px ${y}px, rgba(${accent},0.7), transparent 70%)`;

  const rx = useSpring(0, { stiffness: 150, damping: 18 });
  const ry = useSpring(0, { stiffness: 150, damping: 18 });

  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      style={{ rotateX: rx, rotateY: ry, transformPerspective: 1100 }}
      onPointerMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        x.set(e.clientX - r.left);
        y.set(e.clientY - r.top);
        if (tilt) {
          ry.set(((e.clientX - r.left) / r.width - 0.5) * 5);
          rx.set(-((e.clientY - r.top) / r.height - 0.5) * 5);
        }
      }}
      onPointerLeave={() => {
        x.set(-300);
        y.set(-300);
        rx.set(0);
        ry.set(0);
      }}
      className={clsx("glass group relative overflow-hidden rounded-3xl", className)}
    >
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-3xl p-px opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: border,
          mask: "linear-gradient(#000 0 0) content-box exclude, linear-gradient(#000 0 0)",
          WebkitMask: "linear-gradient(#000 0 0) content-box exclude, linear-gradient(#000 0 0)",
        }}
      />
      <motion.div aria-hidden className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" style={{ background: bg }} />
      <div className="relative">{children}</div>
    </motion.div>
  );
}

