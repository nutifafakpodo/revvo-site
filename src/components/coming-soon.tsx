import { ArrowRight, Sparkles } from "lucide-react";
import { INTEREST_ANCHOR } from "@/lib/links";
import { cn } from "@/lib/utils";

/** Slim announcement bar shown above the header on every page. */
export function ComingSoonBar() {
  return (
    <div className="bg-teal-500 text-white" data-testid="coming-soon-bar">
      <div className="container-x flex min-h-10 flex-wrap items-center justify-center gap-x-3 gap-y-1 py-1.5 text-center text-sm">
        <span className="inline-flex items-center gap-1.5 font-bold uppercase tracking-wider">
          <Sparkles className="size-4" /> Coming soon
        </span>
        <span className="text-white/90">Revvo launches in Accra, Ghana.</span>
        <a href={INTEREST_ANCHOR} className="inline-flex items-center gap-1 font-semibold underline-offset-4 hover:underline">
          Register your interest <ArrowRight className="size-4" />
        </a>
      </div>
    </div>
  );
}

/** Small pill used in page heroes. */
export function ComingSoonBadge({ light = false, className }: { light?: boolean; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-semibold",
        light
          ? "border-teal-400/30 bg-teal-500/15 text-teal-300"
          : "border-teal-500/30 bg-teal-50 text-teal-600",
        className,
      )}
      data-testid="coming-soon-badge"
    >
      <span className={cn("size-1.5 rounded-full", light ? "bg-teal-300" : "bg-teal-500")} aria-hidden="true" />
      Coming soon to Accra, Ghana
    </span>
  );
}
