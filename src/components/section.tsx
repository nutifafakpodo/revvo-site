import * as React from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "./reveal";
import { FloatingParts } from "./motion/parts";

/**
 * Page section with faint car parts drifting in its corners. `decor` picks
 * the tone (or "none"); `decorVariant` changes the layout so neighbouring
 * sections differ (defaults to a hash of the id).
 */
export function Section({
  className,
  children,
  decor = "light",
  decorVariant,
  id,
  ...props
}: React.HTMLAttributes<HTMLElement> & { decor?: "light" | "dark" | "none"; decorVariant?: number }) {
  const variant =
    decorVariant ?? (id ? Array.from(id).reduce((sum, ch) => sum + ch.charCodeAt(0), 0) : 0);
  return (
    <section id={id} className={cn("relative scroll-mt-16 overflow-clip py-16 sm:py-24", className)} {...props}>
      {decor !== "none" && <FloatingParts tone={decor} variant={variant} />}
      <div className="container-x relative">{children}</div>
    </section>
  );
}

export function Eyebrow({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <p
      className={cn(
        "mb-3 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-teal-600",
        className,
      )}
    >
      {children}
    </p>
  );
}

export function Heading({
  as: Tag = "h2",
  children,
  className,
}: {
  as?: "h1" | "h2" | "h3";
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Tag
      className={cn(
        "text-balance font-extrabold tracking-tight text-foreground",
        Tag === "h1" ? "text-4xl sm:text-5xl lg:text-6xl" : "text-3xl sm:text-4xl",
        className,
      )}
    >
      {children}
    </Tag>
  );
}

export function Lede({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <p className={cn("mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground", className)}>
      {children}
    </p>
  );
}

/**
 * Section title block. Full-width sections centre it over their grid; split
 * (two-column) sections pass `align="left"` so it lines up with the column.
 */
export function SectionHeader({
  eyebrow,
  title,
  lede,
  align = "center",
  dark = false,
  className,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  lede?: React.ReactNode;
  align?: "left" | "center";
  dark?: boolean;
  className?: string;
}) {
  return (
    <Reveal className={cn("mb-12 max-w-3xl", align === "center" && "mx-auto text-center", className)}>
      {eyebrow && <Eyebrow className={dark ? "text-teal-300" : undefined}>{eyebrow}</Eyebrow>}
      <Heading className={dark ? "text-white" : undefined}>{title}</Heading>
      {lede && (
        <Lede className={cn(align === "center" && "mx-auto", dark && "text-navy-200")}>{lede}</Lede>
      )}
    </Reveal>
  );
}

export function Card({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "group rounded-2xl border border-border bg-card p-6 shadow-card transition-[transform,box-shadow,border-color] duration-300 hover:border-teal-400/60 hover:shadow-lift motion-safe:hover:-translate-y-1",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export function IconBadge({
  icon: Icon,
  tone = "navy",
  className,
}: {
  icon: React.ComponentType<{ className?: string }>;
  tone?: "navy" | "teal" | "light";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex size-11 shrink-0 items-center justify-center rounded-xl transition-transform duration-300 motion-safe:group-hover:-rotate-3 motion-safe:group-hover:scale-110",
        tone === "navy" && "bg-navy-100 text-navy-700",
        tone === "teal" && "bg-teal-100 text-teal-600",
        tone === "light" && "bg-white/10 text-teal-300",
        className,
      )}
    >
      <Icon className="size-5" />
    </div>
  );
}
