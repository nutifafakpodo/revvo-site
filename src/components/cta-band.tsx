import { ArrowRight } from "lucide-react";
import { ButtonLink } from "./button";
import { BUSINESS_SIGN_IN_URL } from "@/lib/links";

export function CtaBand({
  title = "Bring your workshop onto Revvo.",
  body = "We are onboarding a small cohort of service bays, parts sellers and insurers in Accra. Join the pilot and start logging verified services this month.",
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
              <ButtonLink href="/pilot" variant="secondary" size="lg">
                Join the pilot <ArrowRight />
              </ButtonLink>
              <ButtonLink href={BUSINESS_SIGN_IN_URL} variant="inverse" size="lg">
                Already a partner? Sign in
              </ButtonLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
