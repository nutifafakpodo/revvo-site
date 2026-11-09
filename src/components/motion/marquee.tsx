import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Endless horizontal ticker of chips. Pauses on hover; under reduced motion
 * it becomes a static wrapped row.
 */
export function Marquee({
  items,
  className,
}: {
  items: { icon: LucideIcon; label: string }[];
  className?: string;
}) {
  const row = (hidden: boolean) => (
    <ul
      className={cn("flex shrink-0 items-center gap-3 pr-3", hidden && "motion-reduce:hidden")}
      aria-hidden={hidden || undefined}
    >
      {items.map(({ icon: Icon, label }) => (
        <li
          key={label}
          className="inline-flex items-center gap-2 whitespace-nowrap rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-muted-foreground shadow-card"
        >
          <Icon className="size-4 text-teal-600" />
          {label}
        </li>
      ))}
    </ul>
  );
  return (
    <div className={cn("fade-x relative overflow-hidden", className)}>
      <div className="flex w-max motion-safe:animate-marquee motion-safe:hover:[animation-play-state:paused] motion-reduce:w-auto motion-reduce:flex-wrap motion-reduce:justify-center motion-reduce:gap-y-3 motion-reduce:px-4">
        {row(false)}
        {row(true)}
      </div>
    </div>
  );
}
