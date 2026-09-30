import { ArrowRight, Check } from "lucide-react";
import { ButtonLink } from "@/components/button";
import { Card, Eyebrow, Heading, Section } from "@/components/section";
import { ComingSoonBadge } from "@/components/coming-soon";
import { Reveal } from "@/components/reveal";
import { INTEREST_ANCHOR } from "@/lib/links";
import { usePageMeta } from "@/lib/seo";

const INCLUDED = [
  "Onboarding session for your team, on site or on a call.",
  "Passport QR cards and SMS invites for your customers.",
  "Direct line to the product team; what you ask for shapes the roadmap.",
  "Verified partner badge on every record you log.",
];

const COHORT = [
  { who: "10 to 20 service bays and garages", why: "They log real services and share passport links with customers." },
  { who: "2 to 3 parts sellers", why: "Verified inventory that workshops can request without leaving a job." },
  { who: "1 insurance partner", why: "A quote and renewal lead flow, not a regulated payment flow." },
  { who: "Dealerships and fleets", why: "Vehicles enter Revvo at the point of sale or as a maintained fleet." },
];

const STEPS = [
  { n: "1", title: "Register your interest", body: "Fill in the short form below. Tell us what you run and roughly how many vehicles you see." },
  { n: "2", title: "We call you", body: "A quick conversation about your bays, your team and what you use today." },
  { n: "3", title: "Onboarding on site", body: "We set up your workspace, train the team, and you log your first verified service." },
];

export default function Pilot() {
  usePageMeta(
    "The Accra pilot",
    "Revvo is launching with a first cohort of service bays, parts sellers, dealerships and an insurance partner in Accra. Register your interest to be included.",
  );

  return (
    <>
      <section className="border-b border-border bg-card">
        <div className="container-x py-16 sm:py-20">
          <ComingSoonBadge className="mb-4" />
          <Eyebrow>The Accra pilot · limited cohort</Eyebrow>
          <Heading as="h1" className="max-w-3xl">
            Be part of the first cohort to log verified services.
          </Heading>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Before launch we are hand-picking a small group of businesses in Accra to run Revvo
            with us. Register your interest and we will be in touch before we open the doors.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href={INTEREST_ANCHOR} variant="secondary" size="lg" data-testid="pilot-register">
              Register your interest <ArrowRight />
            </ButtonLink>
            <ButtonLink href="/businesses" variant="outline" size="lg">
              What each business type gets
            </ButtonLink>
          </div>
        </div>
      </section>

      <Section>
        <div className="grid gap-6 lg:grid-cols-2">
          <Reveal>
            <Card className="h-full">
              <h2 className="text-lg font-bold">Who we are looking for</h2>
              <ul className="mt-4 divide-y divide-border">
                {COHORT.map((c) => (
                  <li key={c.who} className="py-3">
                    <p className="font-semibold">{c.who}</p>
                    <p className="text-sm text-muted-foreground">{c.why}</p>
                  </li>
                ))}
              </ul>
            </Card>
          </Reveal>
          <div className="space-y-6">
            <Reveal delay={0.05}>
              <Card>
                <h2 className="text-lg font-bold">What the pilot includes</h2>
                <ul className="mt-4 space-y-3 text-sm leading-relaxed text-muted-foreground">
                  {INCLUDED.map((i) => (
                    <li key={i} className="flex gap-3">
                      <Check className="mt-0.5 size-4 shrink-0 text-teal-600" />
                      <span>{i}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </Reveal>
            <Reveal delay={0.1}>
              <Card className="bg-navy-700 text-white">
                <h2 className="text-lg font-bold">What we ask of you</h2>
                <p className="mt-3 text-sm leading-relaxed text-navy-200">
                  Log real services, share passport links with customers, and tell us what gets in
                  the way. That is it. There is no long-term commitment during the pilot.
                </p>
              </Card>
            </Reveal>
          </div>
        </div>
      </Section>

      <Section className="bg-muted/60">
        <ol className="grid gap-6 md:grid-cols-3">
          {STEPS.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.08}>
              <Card className="h-full">
                <span className="flex size-9 items-center justify-center rounded-full bg-navy-700 font-mono text-sm font-bold text-white">
                  {s.n}
                </span>
                <h3 className="mt-4 text-lg font-bold">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
              </Card>
            </Reveal>
          ))}
        </ol>
      </Section>
    </>
  );
}
