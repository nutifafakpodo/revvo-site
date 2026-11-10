import { useEffect, useRef, useState } from "react";
import { ChevronDown, LogIn } from "lucide-react";
import { ACCOUNT_LINKS } from "@/lib/links";
import { cn } from "@/lib/utils";

/**
 * "Sign in" in the header: Revvo Business or Revvo for car owners, each with
 * sign in and create account. The only app screens the site links to.
 */
export function AccountMenu({ onDark }: { onDark: boolean }) {
  const [open, setOpen] = useState(false);
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const close = (e: MouseEvent | KeyboardEvent) => {
      if (e instanceof KeyboardEvent ? e.key === "Escape" : !root.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", close);
    document.addEventListener("keydown", close);
    return () => {
      document.removeEventListener("mousedown", close);
      document.removeEventListener("keydown", close);
    };
  }, [open]);

  if (ACCOUNT_LINKS.length === 0) return null;

  return (
    <div ref={root} className="relative">
      <button
        type="button"
        aria-expanded={open}
        aria-controls="account-menu"
        onClick={() => setOpen((v) => !v)}
        className={cn(
          "inline-flex h-9 items-center gap-1.5 rounded-md px-3 text-sm font-semibold transition-colors",
          onDark ? "text-white hover:bg-white/10" : "text-foreground hover:bg-muted",
        )}
        data-testid="button-sign-in-menu"
      >
        <LogIn className="size-4" />
        Sign in
        <ChevronDown className={cn("size-4 transition-transform", open && "rotate-180")} />
      </button>
      {open && (
        <div
          id="account-menu"
          className="absolute right-0 top-full z-50 mt-2 w-80 rounded-xl border border-border bg-card p-2 text-card-foreground shadow-lg"
        >
          {ACCOUNT_LINKS.map((link) => (
            <div key={link.key} className="rounded-lg p-3" data-testid={`account-${link.key}`}>
              <p className="font-semibold">{link.product}</p>
              <p className="text-xs text-muted-foreground">{link.audience}</p>
              <div className="mt-2.5 flex gap-2 text-sm">
                <a href={link.signIn} className="rounded-md bg-primary px-3 py-1.5 font-semibold text-primary-foreground hover:bg-navy-600">
                  Sign in
                </a>
                <a href={link.signUp} className="rounded-md border border-border px-3 py-1.5 font-semibold hover:bg-muted">
                  Create account
                </a>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

/** The same choices, listed in the mobile menu. */
export function AccountLinksMobile() {
  if (ACCOUNT_LINKS.length === 0) return null;
  return (
    <div className="mt-2 space-y-3 border-t border-border pt-4">
      {ACCOUNT_LINKS.map((link) => (
        <div key={link.key} className="px-3">
          <p className="text-sm font-semibold text-foreground">{link.product}</p>
          <p className="text-xs text-muted-foreground">{link.audience}</p>
          <div className="mt-2 flex gap-4 text-sm font-semibold">
            <a href={link.signIn} className="text-teal-600 hover:underline">Sign in</a>
            <a href={link.signUp} className="text-teal-600 hover:underline">Create account</a>
          </div>
        </div>
      ))}
    </div>
  );
}
