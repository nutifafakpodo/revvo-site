import { Link } from "wouter";
import {
  ArrowRight,
  BadgeCheck,
  BarChart3,
  Bell,
  ClipboardList,
  Fingerprint,
  Lock,
  MessageSquare,
  ShoppingCart,
  Smartphone,
  Store,
  Users,
  Wrench,
} from "lucide-react";
import { ButtonLink } from "@/components/button";
import { Card, Eyebrow, Heading, IconBadge, Section, SectionHeader } from "@/components/section";
import { PassportPreview } from "@/components/passport-preview";
import { CtaBand } from "@/components/cta-band";
import { Faq } from "@/components/faq";
import { Reveal } from "@/components/reveal";
import { AUDIENCES, DRIVER_AUDIENCE } from "@/lib/content";
import { INTEREST_ANCHOR } from "@/lib/links";
import { ComingSoonBadge } from "@/components/coming-soon";
import { usePageMeta } from "@/lib/seo";

const STEPS = [
  {
    icon: Wrench,
    title: "The workshop logs the job",
    body: "Plate, work done, mileage, parts used. Under a minute on a phone or tablet, by a signed-in member of a registered business.",
  },
  {
    icon: MessageSquare,
    title: "The owner gets the proof",
    body: "An SMS lands with a link to the vehicle passport. The new record is already there, marked verified, with the workshop's name on it.",
  },
  {
    icon: Bell,
    title: "The record keeps working",
    body: "Reminders bring the car back. Buyers can check the history. Insurers quote on real data. Parts fit because the vehicle is known.",
  },
];

const BUSINESS_FEATURES = [
  { icon: ClipboardList, title: "Log service", body: "Verified records with parts, mileage and technician, in seconds." },
  { icon: Users, title: "CRM", body: "Customers and vehicles grouped from real jobs. Search, export, follow up." },
  { icon: BarChart3, title: "Analytics", body: "Monthly volume, service mix, repeat visits and revenue at a glance." },
  { icon: ShoppingCart, title: "Marketplace", body: "Find parts by vehicle or fault and send purchase requests to sellers." },
  { icon: Bell, title: "Reminders & loyalty", body: "Automatic next-service reminders and points that bring customers back." },
  { icon: Users, title: "Team", body: "Invite staff by email. Every record carries who logged it." },
];

const DRIVER_FEATURES = [
  { icon: BadgeCheck, title: "Your passport", body: "Verified history, ownership timeline, and a QR code you can share with a buyer." },
  { icon: Fingerprint, title: "Claim your car", body: "A one-time code to the phone on file makes you the verified owner." },
  { icon: Store, title: "Stations & store", body: "Verified workshops near you, parts that fit, fuel prices, rewards." },
  { icon: Smartphone, title: "Insurance renewal", body: "Find your policy, compare quotes and request a renewal in a few taps." },
];

export default function Home() {
  usePageMeta(
    "Revvo",
    "Revvo gives every vehicle a digital passport. Garages log verified service work, owners get proof, and buyers, insurers and dealers can trust the record. Coming soon to Accra, Ghana.",
  );

  return (
    <>
      {/* Hero */}
      <section className="relative -mt-16 overflow-hidden bg-navy-700 pt-16 text-white">
        <div className="hero-grid pointer-events-none absolute inset-0" aria-hidden="true" />
        <div
          className="pointer-events-none absolute -left-32 top-24 size-96 rounded-full bg-teal-500/25 blur-3xl"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -bottom-40 right-0 size-[28rem] rounded-full bg-navy-500/40 blur-3xl"
          aria-hidden="true"
        />
        <div className="container-x relative grid items-center gap-12 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:py-28">
          <div>
            <ComingSoonBadge light />
            <Heading as="h1" className="mt-6 text-white">
              Every service your car gets, <span className="text-teal-300">verified and on record.</span>
            </Heading>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-navy-200">
              Revvo gives every vehicle a digital passport. Workshops log the work, owners get the
              proof, and buyers, insurers and dealers can finally trust what they see.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href={INTEREST_ANCHOR} variant="secondary" size="lg" data-testid="hero-interest">
                Register your interest <ArrowRight />
              </ButtonLink>
              <ButtonLink href="/businesses" variant="inverse" size="lg">
                See how it works for your business
              </ButtonLink>
            </div>
          </div>
          <Reveal className="flex justify-center lg:justify-end" delay={0.15}>
            <PassportPreview />
          </Reveal>
        </div>
      </section>

      {/* Principles strip */}
      <section className="border-b border-border bg-card">
        <div className="container-x grid gap-6 py-8 sm:grid-cols-3">
          {[
            { icon: BadgeCheck, text: "Verified at source: only registered businesses write history." },
            { icon: Lock, text: "Owner names and phone numbers are never public." },
            { icon: Smartphone, text: "No app install needed. A link works in any browser." },
          ].map(({ icon: Icon, text }) => (
            <div key={text} className="flex items-start gap-3 text-sm text-muted-foreground">
              <Icon className="mt-0.5 size-5 shrink-0 text-teal-600" />
              <span>{text}</span>
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <Section id="how-it-works">
        <SectionHeader
          eyebrow="How it works"
          title="One log at the bay. A record that follows the car for life."
          lede="The loop is simple, and it compounds: every job logged makes the passport more valuable to the owner, and the owner more likely to come back."
        />
        <ol className="grid gap-6 md:grid-cols-3">
          {STEPS.map((step, i) => (
            <Reveal key={step.title} delay={i * 0.08}>
              <Card className="h-full">
                <div className="flex items-center justify-between">
                  <IconBadge icon={step.icon} tone="teal" />
                  <span className="font-mono text-sm text-muted-foreground">0{i + 1}</span>
                </div>
                <h3 className="mt-5 text-lg font-bold">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.body}</p>
              </Card>
            </Reveal>
          ))}
        </ol>
      </Section>

      {/* Audiences */}
      <Section className="bg-muted/60" id="who">
        <SectionHeader
          eyebrow="Who it's for"
          title="Built around the vehicle, so every business around it benefits."
          lede="Revvo is a trust layer first. Marketplace, insurance and dealer flows all attach to a verified vehicle identity and its service history."
          align="center"
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {AUDIENCES.map((a, i) => (
            <Reveal key={a.id} delay={(i % 4) * 0.06}>
              <Link
                href={`/businesses#${a.id}`}
                className="group flex h-full flex-col rounded-2xl border border-border bg-card p-5 shadow-card transition-colors hover:border-teal-400"
                data-testid={`audience-${a.id}`}
              >
                <IconBadge icon={a.icon} />
                <h3 className="mt-4 font-bold">{a.label}</h3>
                <p className="mt-1.5 flex-1 text-sm text-muted-foreground">{a.short}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-teal-600">
                  Learn more <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                </span>
              </Link>
            </Reveal>
          ))}
          <Reveal delay={0.12}>
            <Link
              href="/drivers"
              className="group flex h-full flex-col rounded-2xl bg-navy-700 p-5 text-white shadow-card transition-colors hover:bg-navy-600"
              data-testid="audience-drivers"
            >
              <IconBadge icon={DRIVER_AUDIENCE.icon} tone="light" />
              <h3 className="mt-4 font-bold">{DRIVER_AUDIENCE.label}</h3>
              <p className="mt-1.5 flex-1 text-sm text-navy-200">{DRIVER_AUDIENCE.short}</p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-teal-300">
                For drivers <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
              </span>
            </Link>
          </Reveal>
        </div>
      </Section>

      {/* Business product */}
      <Section id="business">
        <div className="grid items-start gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="lg:sticky lg:top-24">
            <Eyebrow>Revvo Business</Eyebrow>
            <Heading>The workshop system that pays for itself in repeat visits.</Heading>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              A CRM, a service log, a parts marketplace and a loyalty engine, in one workspace that
              only shows the modules your business type needs.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/businesses" variant="primary">
                Explore business tools <ArrowRight />
              </ButtonLink>
              <ButtonLink href={INTEREST_ANCHOR} variant="outline">
                Register interest
              </ButtonLink>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {BUSINESS_FEATURES.map((f, i) => (
              <Reveal key={f.title} delay={(i % 2) * 0.06}>
                <Card className="h-full p-5">
                  <IconBadge icon={f.icon} tone="teal" className="size-10" />
                  <h3 className="mt-4 font-bold">{f.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{f.body}</p>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      {/* Driver product */}
      <Section className="bg-navy-900 text-white" id="drivers">
        <SectionHeader
          eyebrow="Revvo App"
          title="For drivers, the car finally has a memory."
          lede="No more receipts in the glovebox. Your passport holds every verified service, reminds you what's due, and proves the car was looked after when it's time to sell."
          dark
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {DRIVER_FEATURES.map((f, i) => (
            <Reveal key={f.title} delay={(i % 4) * 0.06}>
              <div className="h-full rounded-2xl border border-white/10 bg-white/5 p-5">
                <IconBadge icon={f.icon} tone="light" className="size-10" />
                <h3 className="mt-4 font-bold">{f.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-navy-200">{f.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <ButtonLink href="/drivers" variant="secondary">
            See the driver app <ArrowRight />
          </ButtonLink>
        </div>
      </Section>

      {/* FAQ */}
      <Section id="faq">
        <SectionHeader eyebrow="Questions" title="Straight answers." align="center" />
        <Faq />
      </Section>

      <CtaBand />
    </>
  );
}
