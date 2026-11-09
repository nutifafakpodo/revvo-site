import { Cog, Droplets, Fuel, Gauge, Key, Wrench, Zap } from "lucide-react";
import * as React from "react";
import { cn } from "@/lib/utils";

type IconProps = { className?: string; strokeWidth?: number };

/** A tyre seen face-on: tread, rim and spokes. Spins with `animate-rotate-slow`. */
export function Tyre({ className, strokeWidth = 1.5 }: IconProps) {
  return (
    <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" className={className} aria-hidden="true">
      <circle cx={50} cy={50} r={45} strokeWidth={7} strokeDasharray="7 5" />
      <circle cx={50} cy={50} r={32} strokeWidth={strokeWidth * 1.4} />
      {[0, 72, 144, 216, 288].map((a) => (
        <line key={a} x1={50} y1={50} x2={50} y2={20} strokeWidth={strokeWidth * 1.6} transform={`rotate(${a} 50 50)`} />
      ))}
      <circle cx={50} cy={50} r={7} strokeWidth={strokeWidth * 1.6} />
    </svg>
  );
}

/** A piston on its connecting rod; bobs up and down with `animate-bob`. */
export function Piston({ className, strokeWidth = 1.5 }: IconProps) {
  return (
    <svg viewBox="0 0 64 100" fill="none" stroke="currentColor" strokeWidth={strokeWidth * 1.6} strokeLinecap="round" className={className} aria-hidden="true">
      <rect x={10} y={8} width={44} height={30} rx={5} />
      <line x1={14} y1={17} x2={50} y2={17} />
      <line x1={14} y1={25} x2={50} y2={25} />
      <circle cx={32} cy={44} r={4} />
      <path d="M32 48 L24 86" />
      <circle cx={22} cy={90} r={6} />
    </svg>
  );
}

type Part = {
  icon: React.ComponentType<IconProps>;
  className: string;
  /** Shown on phones too (most parts are hidden below `md` to keep text clear). */
  mobile?: boolean;
};

/* Three corner layouts so neighbouring sections never look identical. */
const LAYOUTS: Part[][] = [
  [
    { icon: Tyre, className: "right-2 top-2 size-12 md:right-[3%] md:top-[8%] md:size-24 motion-safe:animate-rotate-slow", mobile: true },
    { icon: Wrench, className: "left-[3%] bottom-[16%] size-12 motion-safe:animate-float" },
    { icon: Cog, className: "right-[9%] bottom-[6%] size-14 motion-safe:animate-rotate-slow-reverse" },
    { icon: Zap, className: "bottom-2 left-2 size-8 md:bottom-auto md:left-[7%] md:top-[12%] md:size-9 motion-safe:animate-float [animation-delay:-3s]", mobile: true },
  ],
  [
    { icon: Cog, className: "left-2 top-2 size-12 md:left-[2%] md:top-[10%] md:size-20 motion-safe:animate-rotate-slow", mobile: true },
    { icon: Tyre, className: "right-[3%] bottom-[10%] size-28 motion-safe:animate-rotate-slow-reverse [animation-duration:20s]" },
    { icon: Key, className: "bottom-2 right-2 size-8 md:bottom-auto md:right-[8%] md:top-[16%] md:size-10 motion-safe:animate-float [animation-delay:-2s]", mobile: true },
    { icon: Droplets, className: "left-[6%] bottom-[12%] size-10 motion-safe:animate-float [animation-delay:-4s]" },
  ],
  [
    { icon: Gauge, className: "right-2 top-2 size-10 md:right-[5%] md:top-[12%] md:size-14 motion-safe:animate-float", mobile: true },
    { icon: Tyre, className: "left-[2%] bottom-[12%] size-24 motion-safe:animate-rotate-slow" },
    { icon: Fuel, className: "right-[2%] bottom-[18%] size-11 motion-safe:animate-float [animation-delay:-2.5s]" },
    { icon: Piston, className: "bottom-2 left-2 h-12 w-8 md:bottom-auto md:left-[9%] md:top-[8%] md:h-20 md:w-12 motion-safe:animate-bob [animation-duration:1.4s]", mobile: true },
  ],
];

/**
 * Faint car parts drifting in the corners of a section. Purely decorative:
 * pointer-events off, hidden from assistive tech, static under reduced motion.
 */
export function FloatingParts({
  tone = "light",
  variant = 0,
  className,
}: {
  tone?: "light" | "dark";
  variant?: number;
  className?: string;
}) {
  const parts = LAYOUTS[Math.abs(variant) % LAYOUTS.length];
  return (
    <div className={cn("pointer-events-none absolute inset-0", className)} aria-hidden="true">
      {parts.map(({ icon: Icon, className: c, mobile }, i) => (
        <Icon
          key={i}
          className={cn(
            "absolute",
            tone === "light" ? "text-navy-700/[0.07]" : "text-white/[0.08]",
            !mobile && "hidden md:block",
            c,
          )}
          strokeWidth={1.5}
        />
      ))}
    </div>
  );
}
