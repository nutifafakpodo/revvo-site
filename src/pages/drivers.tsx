import { Fragment } from "react";
import {
  ArrowRight,
  BadgeCheck,
  Bell,
  Fingerprint,
  Fuel,
  Gift,
  MapPin,
  QrCode,
  ShieldCheck,
  Store,
} from "lucide-react";
import { ButtonLink } from "@/components/button";
import { Card, Eyebrow, Heading, IconBadge, Section, SectionHeader } from "@/components/section";
import { PassportPreview } from "@/components/passport-preview";
import { Reveal } from "@/components/reveal";
import { INTEREST_ANCHOR } from "@/lib/links";
import { ComingSoonBadge } from "@/components/coming-soon";
import { HeroScene } from "@/components/motion/hero-scene";
import { SmsPhone } from "@/components/motion/sms-phone";
import { Stagger, StaggerItem } from "@/components/motion/stagger";
import { usePageMeta } from "@/lib/seo";

const FEATURES = [
  { icon: BadgeCheck, title: "Verified service history", body: "Every job logged by a Revvo workshop appears on your passport with a verified badge and the workshop's name." },
  { icon: QrCode, title: "Share with a buyer", body: "Send a link or show a QR code. Buyers see the history, never your contact details." },
  { icon: Fingerprint, title: "Claim your vehicle", body: "Enter the phone number on file, confirm the one-time code, and you are the verified owner." },
  { icon: Bell, title: "Reminders that land", body: "Next oil change, inspection or policy expiry, tied to your real mileage and last service." },
  { icon: MapPin, title: "Stations near you", body: "Verified workshops with distance, directions and a call button, plus their service track record." },
  { icon: Store, title: "Store", body: "Parts, accessories, services, rentals and vehicle listings, filtered to fit your car." },
  { icon: ShieldCheck, title: "Insurance", body: "Look up your policy, compare coverage quotes and request a renewal without the paperwork." },
  { icon: Gift, title: "Rewards", body: "Loyalty points from the workshops you visit, with progress and redeemable benefits in one place." },
  { icon: Fuel, title: "Fuel prices", body: "Compare petrol, diesel and LPG prices across providers before you fill up." },
];

const STEPS = [
  { title: "Get serviced at a Revvo workshop", body: "Give the agent your plate and phone number when the job is done." },
  { title: "Open the link in your SMS", body: "Your passport is already waiting, with the service marked verified." },
  { title: "Claim it", body: "Confirm the one-time code to unlock reminders, rewards and owner controls." },
];

export default function Drivers() {
  usePageMeta(
    "For drivers",
    "Your car's verified service history, reminders, nearby workshops, parts that fit, insurance renewal and rewards, all from one vehicle passport.",
  );

  return (
    <>
      <section className="relative -mt-16 overflow-hidden bg-navy-700 pt-16 text-white">
        <div className="hero-grid pointer-events-none absolute inset-0" aria-hidden="true" />
        <div
          className="pointer-events-none absolute -right-24 top-16 size-96 rounded-full bg-teal-500/20 blur-3xl motion-safe:animate-drift"
          aria-hidden="true"
        />
        <HeroScene />
        <div className="container-x relative z-10 grid items-center gap-12 pb-36 pt-16 lg:grid-cols-2 lg:pb-40 lg:pt-24">
          <Stagger>
            <StaggerItem>
              <ComingSoonBadge light />
            </StaggerItem>
            <StaggerItem>
              <Eyebrow className="mt-6 text-teal-300">Revvo App</Eyebrow>
            </StaggerItem>
            <StaggerItem>
              <Heading as="h1" className="text-white">
                <span className="block">Your car's full story,</span>
                <span className="block bg-gradient-to-r from-teal-300 to-teal-400 bg-clip-text text-transparent">
                  in your pocket.
                </span>
              </Heading>
            </StaggerItem>
            <StaggerItem>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-navy-200">
                A permanent, verified record of every service your car has had, plus everything you
                need to keep it running: reminders, trusted workshops, parts that fit, insurance and
                rewards.
              </p>
            </StaggerItem>
            <StaggerItem className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href={INTEREST_ANCHOR} variant="secondary" size="lg">
                Register your interest <ArrowRight />
              </ButtonLink>
            </StaggerItem>
          </Stagger>
          <Reveal className="flex justify-center lg:justify-end" delay={0.3}>
            <div className="w-full max-w-md motion-safe:animate-float [animation-duration:9s]">
              <PassportPreview />
            </div>
          </Reveal>
        </div>
      </section>

      <Section id="getting-started">
        <SectionHeader
          eyebrow="Getting your passport"
          title="No sign-up form. It starts at the workshop."
          lede="Your passport is created the first time a Revvo workshop services your car. From there, it is yours to claim."
        />
        <div className="grid gap-6 md:grid-cols-[1fr_auto_1fr_auto_1fr] md:gap-4">
          {STEPS.map((s, i) => (
            <Fragment key={s.title}>
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
                    {i + 1}
                  </span>
                  <h3 className="mt-4 text-lg font-bold">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
                </Card>
              </Reveal>
            </Fragment>
          ))}
        </div>
      </Section>

      <Section className="bg-navy-900 text-white" id="sms" decor="dark">
        <div className="grid items-center gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <Reveal className="flex justify-center lg:justify-start">
            <div className="motion-safe:animate-float [animation-duration:10s]">
              <SmsPhone />
            </div>
          </Reveal>
          <div>
            <SectionHeader
              align="left"
              dark
              className="mb-6"
              eyebrow="One text after every job"
              title="The invoice, the payment link and the record, in one message."
              lede="Nothing to download. Pay by mobile money or card from the link, and the receipt lands on your passport with the service marked verified by the workshop that did it."
            />
            <ButtonLink href="/trust" variant="inverse">
              What a shared passport shows <ArrowRight />
            </ButtonLink>
          </div>
        </div>
      </Section>

      <Section className="bg-muted/60" id="app">
        <SectionHeader eyebrow="Everything in the app" title="Built for owning a car, not just servicing it." />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f, i) => (
            <Reveal key={f.title} delay={(i % 3) * 0.06}>
              <Card className="h-full p-5">
                <IconBadge icon={f.icon} tone="teal" className="size-10" />
                <h3 className="mt-4 font-bold">{f.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{f.body}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section id="selling">
        <Reveal>
          <div className="grid items-center gap-10 rounded-3xl border border-border bg-card p-8 shadow-card sm:p-12 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <Eyebrow>Selling your car?</Eyebrow>
              <Heading>Proof beats promises.</Heading>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                A car with twelve months of verified history is easier to sell and worth more. Share
                the passport link, let the buyer scan the QR code, and let the record speak. Your name
                and number stay private.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <ButtonLink href={INTEREST_ANCHOR} variant="primary" size="lg">
                Register your interest <ArrowRight />
              </ButtonLink>
              <ButtonLink href="/trust" variant="outline" size="lg">
                What buyers can and cannot see
              </ButtonLink>
            </div>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
