import * as React from "react";
import { Link } from "wouter";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "outline" | "ghost" | "inverse";
type Size = "sm" | "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg font-semibold transition-colors disabled:pointer-events-none disabled:opacity-50 [&_svg]:shrink-0";

const variants: Record<Variant, string> = {
  primary: "bg-primary text-primary-foreground hover:bg-navy-600",
  secondary: "bg-secondary text-secondary-foreground hover:bg-teal-600",
  outline: "border border-border bg-card text-foreground hover:bg-muted",
  ghost: "text-foreground hover:bg-muted",
  inverse: "border border-white/25 bg-white/5 text-white hover:bg-white/12",
};

const sizes: Record<Size, string> = {
  sm: "h-9 px-3.5 text-sm [&_svg]:size-4",
  md: "h-11 px-5 text-sm [&_svg]:size-4",
  lg: "h-13 px-7 text-base [&_svg]:size-5",
};

export function buttonClass(variant: Variant = "primary", size: Size = "md", className?: string) {
  return cn(base, variants[variant], sizes[size], className);
}

type CommonProps = { variant?: Variant; size?: Size; className?: string };

export function Button({
  variant,
  size,
  className,
  ...props
}: CommonProps & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return <button className={buttonClass(variant, size, className)} {...props} />;
}

/** Internal (wouter) or external anchor styled as a button. */
export function ButtonLink({
  href,
  variant,
  size,
  className,
  external,
  ...props
}: CommonProps & { href: string; external?: boolean } & Omit<
    React.AnchorHTMLAttributes<HTMLAnchorElement>,
    "href"
  >) {
  const cls = buttonClass(variant, size, className);
  if (external || /^(https?:)?\/\//.test(href) || href.startsWith("mailto:") || href.startsWith("#")) {
    return <a href={href} className={cls} {...props} />;
  }
  return <Link href={href} className={cls} {...props} />;
}
