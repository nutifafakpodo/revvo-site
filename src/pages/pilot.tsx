import { ArrowRight, Check } from "lucide-react";
import { ButtonLink } from "@/components/button";
import { Fragment } from "react";
import { Card, Section, SectionHeader } from "@/components/section";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { INTEREST_ANCHOR } from "@/lib/links";
import { usePageMeta } from "@/lib/seo";

const INCLUDED = [
  "Onboarding session for your team, on site or on a call.",
  "Passport QR cards and SMS invites for your customers.",
  "Itemised invoices with payment links, paid by mobile money or card.",
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
      <PageHero
        eyebrow="The Accra pilot · limited cohort"
        title="Be one of the first workshops in Accra to log verified services."
        lede="Before launch we are hand-picking a small group of garages and service bays in Accra to run Revvo with us, alongside a few parts sellers and one insurer. Register your workshop and we will be in touch before we open the doors."
      >
        <ButtonLink href={INTEREST_ANCHOR} variant="secondary" size="lg" data-testid="pilot-register">
          Register your workshop <ArrowRight />
        </ButtonLink>
        <ButtonLink href="/businesses" variant="outline" size="lg">
          What each business type gets
        </ButtonLink>
      </PageHero>

      <Section id="cohort">
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

      <Section className="bg-muted/60" id="how">
        <SectionHeader
          eyebrow="How the pilot runs"
          title="Three steps from here to your first verified service."
        />
        <div className="grid gap-6 md:grid-cols-[1fr_auto_1fr_auto_1fr] md:gap-4">
          {STEPS.map((s, i) => (
            <Fragment key={s.n}>
              {i > 0 && (
                <div className="hidden items-center md:flex" aria-hidden="true">
                  <ArrowRight
                    className="size-6 text-teal-500 motion-safe:animate-nudge-x"
                    style={{ animationDelay: `${i * 0.5}s` }}
                  />
                </div>
              )}
              <Reveal delay={i * 0.1}>
                <Card className="h-full">
                  <span className="flex size-9 items-center justify-center rounded-full bg-navy-700 font-mono text-sm font-bold text-white">
                    {s.n}
                  </span>
                  <h3 className="mt-4 text-lg font-bold">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
                </Card>
              </Reveal>
            </Fragment>
          ))}
        </div>
      </Section>
    </>
  );
}
