import { Cog, Fuel, Gauge, Wrench } from "lucide-react";
import { Car } from "./car";
import { Tyre } from "./parts";
import { cn } from "@/lib/utils";

/* Parts sit in the margins and the far right so they never run behind copy. */
const TOOLS = [
  { icon: Wrench, className: "left-[2%] top-[14%] size-10 motion-safe:animate-float", delay: "0s" },
  { icon: Cog, className: "left-[1%] top-[62%] size-14 motion-safe:animate-rotate-slow", delay: "0s" },
  { icon: Gauge, className: "right-[3%] top-[12%] size-12 motion-safe:animate-float", delay: "-2.5s" },
  { icon: Tyre, className: "right-[6%] top-[44%] size-28 motion-safe:animate-rotate-slow [animation-duration:22s]", delay: "0s" },
  { icon: Cog, className: "right-[26%] top-[74%] size-8 motion-safe:animate-rotate-slow-reverse", delay: "0s" },
  { icon: Fuel, className: "left-[52%] top-[7%] size-9 motion-safe:animate-float", delay: "-4s" },
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

      {/* road */}
      <div className="absolute inset-x-0 bottom-0 h-24">
        <div className={cn("absolute inset-x-0 bottom-6 h-px", dark ? "bg-white/15" : "bg-navy-700/15")} />
        <div
          className="absolute inset-x-0 bottom-[11px] h-px bg-[length:48px_1px] bg-repeat-x opacity-30 motion-safe:animate-lane"
          style={{
            backgroundImage: dark
              ? "linear-gradient(90deg, hsl(175 100% 55%) 0 22px, transparent 22px 48px)"
              : "linear-gradient(90deg, hsl(220 50% 20%) 0 22px, transparent 22px 48px)",
          }}
        />
        <div
          className={cn(
            "absolute bottom-5 left-0 w-[220px] motion-safe:animate-drive motion-reduce:left-[60%] sm:w-[260px]",
            dark ? "text-teal-500" : "text-teal-500/90",
          )}
        >
          <Car className="w-full" />
        </div>
      </div>
    </div>
  );
}
