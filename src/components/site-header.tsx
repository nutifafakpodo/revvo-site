import { useEffect, useState } from "react";
import { Link, useLocation } from "wouter";
import { ArrowRight, Menu, X } from "lucide-react";
import { Logo } from "./logo";
import { ButtonLink } from "./button";
import { INTEREST_ANCHOR } from "@/lib/links";
import { cn } from "@/lib/utils";

/** Routes whose hero is dark navy: the transparent header renders light on top of it. */
const DARK_HERO_ROUTES = new Set(["/", "/drivers"]);

const NAV = [
  { href: "/businesses", label: "For businesses" },
  { href: "/drivers", label: "For drivers" },
  { href: "/trust", label: "Trust & privacy" },
];

export function SiteHeader() {
  const [location] = useLocation();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [location]);

  const solid = scrolled || open;
  const onDark = !solid && DARK_HERO_ROUTES.has(location);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 border-b transition-colors",
        solid
          ? "border-border bg-background/90 backdrop-blur supports-[backdrop-filter]:bg-background/75"
          : "border-transparent bg-transparent",
      )}
    >
      <div className="container-x flex h-16 items-center justify-between gap-4">
        <Link href="/" aria-label="Revvo home" data-testid="link-home">
          <Logo light={onDark} />
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "rounded-md px-3 py-2 text-sm font-medium transition-colors",
                onDark
                  ? "text-navy-200 hover:bg-white/10 hover:text-white"
                  : location.startsWith(item.href)
                    ? "text-foreground hover:bg-muted"
                    : "text-muted-foreground hover:bg-muted",
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <ButtonLink href={INTEREST_ANCHOR} variant="secondary" size="sm" data-testid="link-interest">
            Register interest <ArrowRight />
          </ButtonLink>
        </div>

        <button
          type="button"
          className={cn(
            "inline-flex size-10 items-center justify-center rounded-md md:hidden",
            onDark ? "text-white hover:bg-white/10" : "text-foreground hover:bg-muted",
          )}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
          data-testid="button-menu"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open && (
        <div id="mobile-nav" className="border-t border-border bg-background md:hidden">
          <nav className="container-x flex flex-col py-3" aria-label="Mobile">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-md px-3 py-3 text-base font-medium text-foreground hover:bg-muted"
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-2 flex flex-col gap-2 border-t border-border pt-4">
              <ButtonLink href={INTEREST_ANCHOR} variant="secondary" onClick={() => setOpen(false)}>
                Register interest <ArrowRight />
              </ButtonLink>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
