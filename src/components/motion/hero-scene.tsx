import { Cog, Fuel, Gauge, Wrench } from "lucide-react";
import { Traffic } from "./car";
import { ObdScanner, SparkPlug, Tyre } from "./parts";
import { cn } from "@/lib/utils";

/* Parts sit in the margins and the far right so they never run behind copy. */
const TOOLS = [
  { icon: Wrench, className: "left-[2%] top-[14%] size-10 motion-safe:animate-float", delay: "0s" },
  { icon: Cog, className: "left-[1%] top-[62%] size-14 motion-safe:animate-rotate-slow", delay: "0s" },
  { icon: Gauge, className: "right-[3%] top-[12%] size-12 motion-safe:animate-float", delay: "-2.5s" },
  { icon: Tyre, className: "right-[6%] top-[44%] size-28 motion-safe:animate-rotate-slow [animation-duration:22s]", delay: "0s" },
  { icon: Cog, className: "right-[26%] top-[74%] size-8 motion-safe:animate-rotate-slow-reverse", delay: "0s" },
  { icon: Fuel, className: "left-[52%] top-[7%] size-9 motion-safe:animate-float", delay: "-4s" },
  { icon: ObdScanner, className: "right-[1%] top-[66%] h-24 w-16 motion-safe:animate-float [animation-duration:7s]", delay: "-1s" },
  { icon: SparkPlug, className: "left-[3%] top-[36%] h-20 w-8 motion-safe:animate-float", delay: "-5s" },
];

/**
 * Decorative hero layer: faint workshop parts in the margins and a car
 * driving along a road at the bottom. Pointer-events off, behind content.
 */
export function HeroScene({ tone = "dark" }: { tone?: "dark" | "light" }) {
  const dark = tone === "dark";
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {TOOLS.map(({ icon: Icon, className, delay }, i) => (
        <Icon
          key={i}
          className={cn(
            "absolute hidden lg:block",
            dark ? "text-white/[0.07]" : "text-navy-700/[0.07]",
            className,
          )}
          style={{ animationDelay: delay }}
          strokeWidth={1.5}
        />
      ))}

      <Traffic tone={tone} />
    </div>
  );
}
