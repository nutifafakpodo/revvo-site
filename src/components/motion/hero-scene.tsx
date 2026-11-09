import { Cog, Fuel, Gauge, Wrench } from "lucide-react";
import { Car } from "./car";
import { cn } from "@/lib/utils";

const TOOLS = [
  { icon: Wrench, className: "left-[6%] top-[18%] size-10 motion-safe:animate-float", delay: "0s" },
  { icon: Cog, className: "left-[22%] top-[62%] size-14 motion-safe:animate-rotate-slow", delay: "0s" },
  { icon: Gauge, className: "right-[8%] top-[14%] size-12 motion-safe:animate-float", delay: "-2.5s" },
  { icon: Cog, className: "right-[30%] top-[70%] size-8 motion-safe:animate-rotate-slow-reverse", delay: "0s" },
  { icon: Fuel, className: "left-[48%] top-[8%] size-9 motion-safe:animate-float", delay: "-4s" },
];

/**
 * Decorative hero layer: faint floating workshop tools, and a car driving
 * along a road at the bottom of the hero. Pointer-events are off; it sits
 * behind the hero content.
 */
export function HeroScene() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {TOOLS.map(({ icon: Icon, className, delay }, i) => (
        <Icon
          key={i}
          className={cn("absolute text-white/[0.07]", className)}
          style={{ animationDelay: delay }}
          strokeWidth={1.5}
        />
      ))}

      {/* road */}
      <div className="absolute inset-x-0 bottom-0 h-24">
        <div className="absolute inset-x-0 bottom-6 h-px bg-white/15" />
        <div
          className="absolute inset-x-0 bottom-[11px] h-px bg-[length:48px_1px] bg-repeat-x opacity-30 motion-safe:animate-lane"
          style={{
            backgroundImage: "linear-gradient(90deg, hsl(175 100% 55%) 0 22px, transparent 22px 48px)",
          }}
        />
        <div className="absolute bottom-5 left-0 w-[220px] text-teal-500 motion-safe:animate-drive sm:w-[260px]">
          <Car className="w-full" />
        </div>
      </div>
    </div>
  );
}
