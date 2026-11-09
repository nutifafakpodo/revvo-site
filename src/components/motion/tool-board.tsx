import { CircleDot, Cog, Fuel, Gauge, Hammer, Wrench } from "lucide-react";
import { cn } from "@/lib/utils";
import { BrakeDisc, ObdScanner } from "./parts";

/**
 * A workshop pegboard with gently moving tools. Decorative; used beside the
 * workshop feature grid.
 */
export function ToolBoard({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "relative aspect-[4/3] w-full max-w-sm overflow-hidden rounded-2xl border border-border bg-navy-700 shadow-card",
        className,
      )}
      aria-hidden="true"
    >
      {/* pegboard holes */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: "radial-gradient(hsl(0 0% 100% / 0.35) 1.2px, transparent 1.3px)",
          backgroundSize: "22px 22px",
          backgroundPosition: "11px 11px",
        }}
      />
      {/* shelf */}
      <div className="absolute inset-x-6 bottom-8 h-1.5 rounded-full bg-white/15" />

      {/* hanging wrench, swinging from its top hole */}
      <div className="absolute left-[12%] top-[14%] origin-top motion-safe:animate-swing">
        <Wrench className="size-16 text-teal-300 drop-shadow-[0_6px_10px_rgba(0,0,0,0.35)]" strokeWidth={1.75} />
      </div>
      {/* OBD scanner hanging by its cable */}
      <div className="absolute left-[58%] top-[10%] origin-top motion-safe:animate-swing [animation-duration:6.5s] [animation-delay:-3s]">
        <ObdScanner className="h-24 w-16 text-teal-200 drop-shadow-[0_6px_10px_rgba(0,0,0,0.35)]" strokeWidth={1.6} />
      </div>
      {/* brake disc on the shelf */}
      <div className="absolute bottom-[14%] left-[30%] motion-safe:animate-rotate-slow [animation-duration:16s]">
        <BrakeDisc className="size-12 text-white/70" strokeWidth={1.6} />
      </div>
      {/* hammer, slower swing */}
      <div className="absolute left-[36%] top-[12%] origin-top motion-safe:animate-swing [animation-duration:5.5s] [animation-delay:-1.5s]">
        <Hammer className="size-14 text-white/80 drop-shadow-[0_6px_10px_rgba(0,0,0,0.35)]" strokeWidth={1.75} />
      </div>
      {/* gears */}
      <div className="absolute right-[6%] top-[12%] motion-safe:animate-rotate-slow">
        <Cog className="size-16 text-teal-400" strokeWidth={1.75} />
      </div>
      <div className="absolute right-[22%] top-[40%] motion-safe:animate-rotate-slow-reverse [animation-duration:9s]">
        <Cog className="size-10 text-white/70" strokeWidth={1.75} />
      </div>
      {/* gauge needle bob */}
      <div className="absolute left-[14%] bottom-[22%] motion-safe:animate-float [animation-duration:4s]">
        <Gauge className="size-12 text-white/80" strokeWidth={1.75} />
      </div>
      {/* tyre rolling on the shelf */}
      <div className="absolute bottom-[16%] left-[50%] motion-safe:animate-roll">
        <CircleDot className="size-14 text-white" strokeWidth={1.75} />
      </div>
      <div className="absolute bottom-[20%] right-[12%] motion-safe:animate-float [animation-delay:-2s]">
        <Fuel className="size-11 text-teal-300" strokeWidth={1.75} />
      </div>

      <span className="absolute left-4 top-3 text-[10px] font-bold uppercase tracking-[0.18em] text-white/50">
        Accra Auto Care · Bay 2
      </span>
    </div>
  );
}
