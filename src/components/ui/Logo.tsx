import Image from "next/image";
import clsx from "clsx";

export function Logo({ className, size = 40, tag = true }: { className?: string; size?: number; tag?: boolean }) {
  return (
    <span className={clsx("inline-flex items-center gap-3", className)}>
      <Image
        src="/vordane-icon.png"
        alt=""
        width={size}
        height={size}
        priority
        className="rounded-[26%] shadow-[0_0_24px_-4px_rgba(137,128,245,0.55)]"
      />
      <span className="flex flex-col leading-none">
        <span className="font-display text-[1.15rem] font-bold tracking-[0.2em] text-white">VORDANE</span>
        {tag && (
          <span className="mt-1 text-[0.62rem] font-semibold tracking-[0.3em] text-violet">AI</span>
        )}
      </span>
    </span>
  );
}
