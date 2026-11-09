import { cn } from "@/lib/utils";

/**
 * Side-profile car with spinning wheels, exhaust puffs and a gentle
 * suspension bob (all CSS, motion-safe only). The body uses currentColor.
 */
export function Car({ className, spinning = true }: { className?: string; spinning?: boolean }) {
  const wheel = (cx: number) => (
    <g
      className={cn(spinning && "motion-safe:animate-spin [animation-duration:0.9s]")}
      style={{ transformOrigin: `${cx}px 76px`, transformBox: "view-box" }}
    >
      <circle cx={cx} cy={76} r={17} fill="hsl(220 50% 8%)" />
      <circle cx={cx} cy={76} r={10.5} fill="none" stroke="hsl(175 100% 42%)" strokeWidth={2.5} />
      {[0, 60, 120].map((a) => (
        <line
          key={a}
          x1={cx}
          y1={76 - 10}
          x2={cx}
          y2={76 + 10}
          stroke="hsl(175 100% 42%)"
          strokeWidth={2}
          transform={`rotate(${a} ${cx} 76)`}
        />
      ))}
      <circle cx={cx} cy={76} r={2.5} fill="hsl(0 0% 100%)" />
    </g>
  );

  return (
    <svg viewBox="0 0 260 100" className={cn("overflow-visible", className)} aria-hidden="true">
      {/* exhaust */}
      {[0, 0.5, 1].map((d) => (
        <circle
          key={d}
          cx={14}
          cy={80}
          r={4}
          fill="hsl(0 0% 100% / 0.35)"
          className={cn(spinning && "motion-safe:animate-puff")}
          style={{ animationDelay: `${d}s`, transformBox: "fill-box", transformOrigin: "center" }}
        />
      ))}
      {/* shadow */}
      <ellipse cx={130} cy={94} rx={110} ry={4} fill="hsl(220 50% 5% / 0.45)" />
      <g className={cn(spinning && "motion-safe:animate-bob")}>
        {/* body */}
        <path
          d="M22 72 C22 60 30 56 44 54 L70 50 C86 34 104 26 130 26 L162 26 C184 26 198 36 214 52 L236 56 C246 58 250 64 250 72 L250 78 C250 82 247 84 243 84 L224 84 A20 20 0 0 0 184 84 L92 84 A20 20 0 0 0 52 84 L30 84 C25 84 22 81 22 77 Z"
          fill="currentColor"
        />
        {/* roof highlight */}
        <path d="M86 50 C98 38 112 32 130 32 L160 32 C178 32 190 40 204 52 Z" fill="hsl(0 0% 100% / 0.12)" />
        {/* windows */}
        <path d="M94 50 C104 40 114 34 128 34 L128 50 Z" fill="hsl(195 85% 70% / 0.85)" />
        <path d="M136 34 L162 34 C176 34 186 40 198 50 L136 50 Z" fill="hsl(195 85% 70% / 0.85)" />
        {/* door line + handle */}
        <path d="M132 52 L132 80" stroke="hsl(220 50% 8% / 0.35)" strokeWidth={1.5} />
        <rect x={138} y={60} width={12} height={3} rx={1.5} fill="hsl(220 50% 8% / 0.4)" />
        {/* headlight + beam */}
        <path d="M244 62 L250 62 L250 70 L244 70 Z" fill="hsl(45 100% 80%)" />
        <path d="M250 60 L300 50 L300 82 L250 72 Z" fill="hsl(45 100% 80% / 0.12)" />
        {/* tail light */}
        <rect x={22} y={62} width={6} height={9} rx={2} fill="hsl(0 85% 60%)" />
      </g>
      {wheel(72)}
      {wheel(204)}
    </svg>
  );
}
