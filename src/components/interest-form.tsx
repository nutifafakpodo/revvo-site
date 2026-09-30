import { ExternalLink } from "lucide-react";
import { Eyebrow, Heading } from "./section";
import { GOOGLE_FORM_EMBED_URL, GOOGLE_FORM_URL } from "@/lib/links";

/**
 * Google Form embed that collects interested businesses and drivers. Rendered
 * at the bottom of every page so any "Register interest" link can point to
 * the same anchor.
 */
export function InterestForm() {
  return (
    <section id="interest" className="scroll-mt-16 border-t border-border bg-muted/60 py-16 sm:py-24" data-testid="interest-form">
      <div className="container-x grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="lg:sticky lg:top-24 lg:self-start">
          <Eyebrow>Register your interest</Eyebrow>
          <Heading>Be first in line when Revvo launches.</Heading>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Whether you run a workshop, sell parts, insure vehicles, or just want your own car's
            passport, leave your details and we will contact you as we open up in Accra.
          </p>
          <ul className="mt-6 space-y-2 text-sm text-muted-foreground">
            <li>Businesses: early access to the pilot and onboarding on site.</li>
            <li>Drivers: a passport for your car from the first Revvo service.</li>
            <li>No spam. We only use your details to tell you about Revvo.</li>
          </ul>
          <a
            href={GOOGLE_FORM_URL}
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-teal-600 hover:underline"
            data-testid="interest-form-link"
          >
            Open the form in a new tab <ExternalLink className="size-4" />
          </a>
        </div>
        <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-card">
          <iframe
            src={GOOGLE_FORM_EMBED_URL}
            title="Revvo interest form"
            className="block h-[1100px] w-full"
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
          >
            Loading…
          </iframe>
        </div>
      </div>
    </section>
  );
}
