"use client";

import clsx from "clsx";
import { motion } from "framer-motion";
import type { ReactNode } from "react";

type Props = {
  href?: string;
  onClick?: () => void;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  size?: "md" | "sm";
  external?: boolean;
  type?: "button" | "submit";
  disabled?: boolean;
  className?: string;
  ariaLabel?: string;
};

export function Button({
  href,
  onClick,
  children,
  variant = "primary",
  size = "md",
  external,
  type = "button",
  disabled,
  className,
  ariaLabel,
}: Props) {
  const cls = clsx(
    "group relative inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-colors duration-300 select-none",
    size === "md" ? "px-6 py-3 text-[0.95rem]" : "px-4 py-2 text-sm",
    variant === "primary" &&
      "btn-shine overflow-hidden bg-gradient-to-r from-cyan to-violet text-midnight shadow-[0_8px_30px_-8px_rgba(99,230,232,0.55)] hover:shadow-[0_10px_36px_-6px_rgba(137,128,245,0.7)]",
    variant === "secondary" &&
      "border border-white/20 bg-white/5 text-white hover:border-cyan/60 hover:bg-white/10",
    variant === "ghost" && "text-cyan hover:text-white",
    disabled && "pointer-events-none opacity-60",
    className,
  );
  const motionProps = { whileHover: { y: -2 }, whileTap: { scale: 0.97 }, transition: { duration: 0.2 } };

  if (href) {
    return (
      <motion.a
        {...motionProps}
        href={href}
        onClick={onClick}
        aria-label={ariaLabel}
        className={cls}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {children}
      </motion.a>
    );
  }
  return (
    <motion.button {...motionProps} type={type} onClick={onClick} disabled={disabled} aria-label={ariaLabel} className={cls}>
      {children}
    </motion.button>
  );
}

