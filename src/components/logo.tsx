import { cn } from "@/lib/utils";

export function Logo({ className, light = false }: { className?: string; light?: boolean }) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <svg
        width="32"
        height="32"
        viewBox="0 0 64 64"
        aria-hidden="true"
        className="shrink-0"
      >
        <rect width="64" height="64" rx="14" className={light ? "fill-white/10" : "fill-navy-700"} />
        <path
          d="M17 42l7-20h4l-7 20h-4zm11 0l7-20h4l-7 20h-4zm11 0l7-20h4l-7 20h-4z"
          className="fill-teal-500"
        />
      </svg>
      <span
        className={cn(
          "text-xl font-extrabold tracking-tight",
          light ? "text-white" : "text-navy-700",
        )}
      >
        Revvo
      </span>
    </span>
  );
}
