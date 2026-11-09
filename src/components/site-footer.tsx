import { Link } from "wouter";
import { Logo } from "./logo";
import { Traffic } from "./motion/car";
import { FloatingParts } from "./motion/parts";
import { CONTACT_EMAIL, INTEREST_ANCHOR } from "@/lib/links";

const COLUMNS: { title: string; links: { label: string; href: string; external?: boolean }[] }[] = [
  {
    title: "Who it's for",
    links: [
      { label: "Garages & service bays", href: "/businesses#garages" },
      { label: "Parts sellers", href: "/businesses#parts-sellers" },
      { label: "Dealerships", href: "/businesses#dealerships" },
      { label: "Insurers", href: "/businesses#insurers" },
      { label: "Fleets", href: "/businesses#fleets" },
      { label: "Drivers", href: "/drivers" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Register your interest", href: INTEREST_ANCHOR, external: true },
      { label: "About the pilot", href: "/pilot" },
      { label: "Trust & privacy", href: "/trust" },
      ...(CONTACT_EMAIL ? [{ label: "Contact", href: `mailto:${CONTACT_EMAIL}`, external: true }] : []),
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="relative overflow-clip border-t border-border bg-navy-950 text-navy-200">
      <FloatingParts tone="dark" variant={2} />
      {/* a quiet road along the top edge */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-20 opacity-80" aria-hidden="true">
        <Traffic size="sm" className="h-20" />
      </div>
      <div className="container-x relative grid gap-10 pb-14 pt-24 md:grid-cols-[1.6fr_1fr_1fr]">
        <div className="max-w-xs">
          <Logo light />
          <p className="mt-4 text-sm leading-relaxed">
            The workshop system that keeps customers coming back, built on a verified service
            record for every car. For garages and service bays first, and everyone around them.
          </p>
          <p className="mt-4 text-xs text-navy-500">Coming soon to Accra, Ghana.</p>
        </div>
        {COLUMNS.map((col) => (
          <div key={col.title}>
            <h3 className="text-xs font-bold uppercase tracking-[0.14em] text-white">{col.title}</h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {col.links.map((l) => (
                <li key={l.label}>
                  {l.external ? (
                    <a href={l.href} className="transition-colors hover:text-white">
                      {l.label}
                    </a>
                  ) : (
                    <Link href={l.href} className="transition-colors hover:text-white">
                      {l.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="relative border-t border-white/10">
        <div className="container-x flex flex-col gap-2 py-6 text-xs text-navy-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Revvo. All rights reserved.</p>
          <p>Payments are processed by a licensed provider. Revvo never stores card or mobile money details.</p>
        </div>
      </div>
    </footer>
  );
}
