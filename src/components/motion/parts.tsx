import { Battery, Cog, Droplets, Fuel, Gauge, Key, Lightbulb, Wrench, Zap } from "lucide-react";
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

/** Handheld OBD-II diagnostic scanner with its cable and connector. */
export function ObdScanner({ className, strokeWidth = 1.5 }: IconProps) {
  const sw = strokeWidth * 1.6;
  return (
    <svg viewBox="0 0 90 120" fill="none" stroke="currentColor" strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <rect x={18} y={6} width={50} height={76} rx={9} />
      <rect x={26} y={14} width={34} height={24} rx={3} />
      <path d="M31 22 h14 M31 29 h22" />
      <circle cx={34} cy={50} r={4} />
      <circle cx={52} cy={50} r={4} />
      <rect x={30} y={60} width={8} height={8} rx={2} />
      <rect x={48} y={60} width={8} height={8} rx={2} />
      <path d="M43 82 C43 96 70 90 70 104" />
      <path d="M60 102 h20 l3 8 h-26 Z" />
      <path d="M64 112 v4 M74 112 v4" />
    </svg>
  );
}

/** Spark plug. */
export function SparkPlug({ className, strokeWidth = 1.5 }: IconProps) {
  const sw = strokeWidth * 1.6;
  return (
    <svg viewBox="0 0 40 110" fill="none" stroke="currentColor" strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M17 4 h6 v10 h-6 Z" />
      <path d="M14 14 h12 v24 h-12 Z" />
      <path d="M12 38 h16 M12 44 h16 M12 50 h16" />
      <path d="M8 56 h24 v14 h-24 Z" />
      <path d="M12 70 h16 v12 h-16 Z" />
      <path d="M18 82 v18 M18 100 h10 M28 100 v-6" />
    </svg>
  );
}

/** Vented brake disc; spins with `animate-rotate-slow`. */
export function BrakeDisc({ className, strokeWidth = 1.5 }: IconProps) {
  const sw = strokeWidth * 1.6;
  return (
    <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth={sw} className={className} aria-hidden="true">
      <circle cx={50} cy={50} r={46} />
      <circle cx={50} cy={50} r={22} />
      <circle cx={50} cy={50} r={5} />
      {[0, 72, 144, 216, 288].map((a) => (
        <circle key={a} cx={50} cy={36} r={3} transform={`rotate(${a} 50 50)`} />
      ))}
      {[0, 45, 90, 135].map((a) => (
        <path key={a} d="M50 10 L50 20 M50 80 L50 90" transform={`rotate(${a} 50 50)`} />
      ))}
    </svg>
  );
}

type Part = {
  icon: React.ComponentType<IconProps>;
  className: string;
  /** Shown on phones too, tucked into a corner (other parts are hidden below `md`). */
  mobile?: boolean;
};

/* Four corner layouts so neighbouring sections never look identical. */
const LAYOUTS: Part[][] = [
  [
    { icon: Tyre, className: "right-2 top-2 size-12 md:right-[3%] md:top-[8%] md:size-24 motion-safe:animate-rotate-slow", mobile: true },
    { icon: Wrench, className: "left-[3%] bottom-[16%] size-12 motion-safe:animate-float" },
    { icon: Cog, className: "right-[9%] bottom-[6%] size-14 motion-safe:animate-rotate-slow-reverse" },
    { icon: ObdScanner, className: "bottom-2 left-2 h-14 w-10 md:bottom-auto md:left-[6%] md:top-[10%] md:h-24 md:w-16 motion-safe:animate-float [animation-delay:-3s]", mobile: true },
    { icon: SparkPlug, className: "left-[14%] bottom-[8%] h-20 w-8 motion-safe:animate-float [animation-delay:-1.5s] [animation-duration:7s]" },
  ],
  [
    { icon: Cog, className: "left-2 top-2 size-12 md:left-[2%] md:top-[10%] md:size-20 motion-safe:animate-rotate-slow", mobile: true },
    { icon: Tyre, className: "right-[3%] bottom-[10%] size-28 motion-safe:animate-rotate-slow-reverse [animation-duration:20s]" },
    { icon: Key, className: "bottom-2 right-2 size-8 md:bottom-auto md:right-[8%] md:top-[16%] md:size-10 motion-safe:animate-float [animation-delay:-2s]", mobile: true },
    { icon: Droplets, className: "left-[6%] bottom-[12%] size-10 motion-safe:animate-float [animation-delay:-4s]" },
    { icon: BrakeDisc, className: "right-[16%] top-[8%] size-16 motion-safe:animate-rotate-slow [animation-duration:18s]" },
  ],
  [
    { icon: Gauge, className: "right-2 top-2 size-10 md:right-[5%] md:top-[12%] md:size-14 motion-safe:animate-float", mobile: true },
    { icon: Tyre, className: "left-[2%] bottom-[12%] size-24 motion-safe:animate-rotate-slow" },
    { icon: Fuel, className: "right-[2%] bottom-[18%] size-11 motion-safe:animate-float [animation-delay:-2.5s]" },
    { icon: Piston, className: "bottom-2 left-2 h-12 w-8 md:bottom-auto md:left-[9%] md:top-[8%] md:h-20 md:w-12 motion-safe:animate-bob [animation-duration:1.4s]", mobile: true },
    { icon: Battery, className: "right-[12%] bottom-[6%] size-12 motion-safe:animate-float [animation-delay:-5s]" },
  ],
  [
    { icon: ObdScanner, className: "right-2 top-2 h-14 w-10 md:right-[4%] md:top-[10%] md:h-28 md:w-20 motion-safe:animate-float [animation-duration:7s]", mobile: true },
    { icon: BrakeDisc, className: "left-[3%] top-[10%] size-20 motion-safe:animate-rotate-slow-reverse [animation-duration:16s]" },
    { icon: Lightbulb, className: "bottom-2 left-2 size-9 md:bottom-[14%] md:left-[8%] md:size-11 motion-safe:animate-float [animation-delay:-3.5s]", mobile: true },
    { icon: Zap, className: "right-[10%] bottom-[10%] size-10 motion-safe:animate-float [animation-delay:-1s]" },
    { icon: Tyre, className: "right-[22%] bottom-[4%] size-16 motion-safe:animate-rotate-slow" },
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
