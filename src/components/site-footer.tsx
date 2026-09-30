import { Link } from "wouter";
import { Logo } from "./logo";
import { ADMIN_APP_URL, BUSINESS_SIGN_IN_URL, BUSINESS_SIGN_UP_URL, CONSUMER_APP_URL, CONTACT_EMAIL, GOOGLE_FORM_URL } from "@/lib/links";

const COLUMNS: { title: string; links: { label: string; href: string; external?: boolean }[] }[] = [
  {
    title: "Product",
    links: [
      { label: "Open the driver app", href: CONSUMER_APP_URL, external: true },
      { label: "Business sign in", href: BUSINESS_SIGN_IN_URL, external: true },
      { label: "Create a business account", href: BUSINESS_SIGN_UP_URL, external: true },
      { label: "Admin console", href: ADMIN_APP_URL, external: true },
    ],
  },
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
      { label: "Register your interest", href: GOOGLE_FORM_URL, external: true },
      { label: "About the pilot", href: "/pilot" },
      { label: "Trust & privacy", href: "/trust" },
      ...(CONTACT_EMAIL ? [{ label: "Contact", href: `mailto:${CONTACT_EMAIL}`, external: true }] : []),
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-navy-950 text-navy-200">
      <div className="container-x grid gap-10 py-14 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div className="max-w-xs">
          <Logo light />
          <p className="mt-4 text-sm leading-relaxed">
            The verified service record for every car. Built for garages, sellers, dealers,
            insurers, fleets and the drivers they serve.
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
      <div className="border-t border-white/10">
        <div className="container-x flex flex-col gap-2 py-6 text-xs text-navy-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Revvo. All rights reserved.</p>
          <p>Payments are request-based during the pilot. No card details are collected.</p>
        </div>
      </div>
    </footer>
  );
}
