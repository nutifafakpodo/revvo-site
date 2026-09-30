import * as React from "react";
import { cn } from "@/lib/utils";

export function Section({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  return (
    <section className={cn("py-16 sm:py-24", className)} {...props}>
      <div className="container-x">{children}</div>
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

export function SectionHeader({
  eyebrow,
  title,
  lede,
  align = "left",
  dark = false,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  lede?: React.ReactNode;
  align?: "left" | "center";
  dark?: boolean;
}) {
  return (
    <div className={cn("mb-12 max-w-3xl", align === "center" && "mx-auto text-center")}>
      {eyebrow && <Eyebrow className={dark ? "text-teal-300" : undefined}>{eyebrow}</Eyebrow>}
      <Heading className={dark ? "text-white" : undefined}>{title}</Heading>
      {lede && (
        <Lede className={cn(align === "center" && "mx-auto", dark && "text-navy-200")}>{lede}</Lede>
      )}
    </div>
  );
}

export function Card({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("rounded-2xl border border-border bg-card p-6 shadow-card", className)}
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
        "flex size-11 shrink-0 items-center justify-center rounded-xl",
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
