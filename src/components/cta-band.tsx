import { ArrowRight } from "lucide-react";
import { ButtonLink } from "./button";
import { INTEREST_ANCHOR } from "@/lib/links";

export function CtaBand({
  title = "Bring your workshop onto Revvo.",
  body = "We are lining up a first cohort of service bays, parts sellers and insurers in Accra. Register your interest and we will contact you before launch.",
}: {
  title?: string;
  body?: string;
}) {
  return (
    <section className="py-16 sm:py-24">
      <div className="container-x">
        <div className="relative overflow-hidden rounded-3xl bg-navy-700 px-6 py-14 text-center text-white sm:px-12 sm:py-20">
          <div className="hero-grid pointer-events-none absolute inset-0" aria-hidden="true" />
          <div
            className="pointer-events-none absolute -right-24 -top-24 size-72 rounded-full bg-teal-500/30 blur-3xl"
            aria-hidden="true"
          />
          <div className="relative mx-auto max-w-2xl">
            <h2 className="text-balance text-3xl font-extrabold tracking-tight sm:text-4xl">{title}</h2>
            <p className="mt-4 text-lg text-navy-200">{body}</p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <ButtonLink href={INTEREST_ANCHOR} variant="secondary" size="lg">
                Register your interest <ArrowRight />
              </ButtonLink>
              <ButtonLink href="/pilot" variant="inverse" size="lg">
                About the pilot
              </ButtonLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
