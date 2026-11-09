import { Fragment } from "react";
import { Link } from "wouter";
import {
  ArrowRight,
  BadgeCheck,
  BarChart3,
  Bell,
  ClipboardList,
  Gift,
  Megaphone,
  MessageSquare,
  QrCode,
  Receipt,
  Repeat,
  ShoppingCart,
  Smartphone,
  Timer,
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
import { HeroScene } from "@/components/motion/hero-scene";
import { ToolBoard } from "@/components/motion/tool-board";
import { Marquee } from "@/components/motion/marquee";
import { SmsPhone } from "@/components/motion/sms-phone";
import { Stagger, StaggerItem } from "@/components/motion/stagger";
import { usePageMeta } from "@/lib/seo";

const OUTCOMES = [
  { icon: Timer, text: "Log a service in under a minute on any phone, tablet or laptop." },
  { icon: Repeat, text: "Customers get proof by SMS and a reminder that brings them back." },
  { icon: BadgeCheck, text: "Every record carries your workshop's name and a verified badge." },
];

const PAINS = [
  {
    title: "You see hundreds of cars. You know almost none of the owners.",
    body: "Every job is a transaction that vanishes. No names, no numbers, no way to tell last quarter's customer it is time to come back.",
  },
  {
    title: "The service card ends up in the glovebox, or the bin.",
    body: "Owners cannot remember what was done or when, so the next mechanic starts from zero and the car is under-serviced until something fails.",
  },
  {
    title: "Next time, they go wherever is nearest.",
    body: "Without a reason to return, loyalty is luck. Revvo gives you the record, the reminder and the reward that bring the car back to your bay.",
  },
];

const STEPS = [
  {
    icon: Wrench,
    title: "You log the job",
    body: "Plate, work done, mileage, parts used. Under a minute on the phone or tablet you already have. The vehicle is created automatically if it is new.",
  },
  {
    icon: MessageSquare,
    title: "Your customer gets the proof",
    body: "An SMS lands with the itemised invoice, a payment link, and a link to their car's passport. The record is already there, marked verified, with your workshop's name on it.",
  },
  {
    icon: Repeat,
    title: "They come back to you",
    body: "The next-service reminder fires with your name on it. Loyalty points build up per visit. Your CRM already knows who they are.",
  },
];

const WORKSHOP_FEATURES = [
  { icon: ClipboardList, title: "Log service", body: "Verified records with parts, mileage and technician, in seconds. Attach marketplace parts straight from the job." },
  { icon: Receipt, title: "Invoices & payment links", body: "Itemise parts and labour, then send the customer a payment link by SMS. They pay by mobile money or card, and the receipt sits on their passport." },
  { icon: Users, title: "Customers (CRM)", body: "Customers and their vehicles grouped from real jobs. Search, export to CSV, follow up." },
  { icon: Bell, title: "Reminders", body: "Automatic next-service reminders tied to real mileage and dates, sent under your name." },
  { icon: Gift, title: "Loyalty programme", body: "Points per visit and redeemable rewards that give customers a reason to return." },
  { icon: Megaphone, title: "Promotions", body: "Send an offer to your past customers, for example every Toyota owner you serviced this year." },
  { icon: BarChart3, title: "Analytics", body: "Monthly volume, service mix, repeat visits and revenue at a glance." },
  { icon: ShoppingCart, title: "Parts marketplace", body: "Find parts by vehicle or fault and send purchase requests to verified sellers." },
  { icon: Users, title: "Team", body: "Invite your staff by email. Every record carries who logged it." },
  { icon: QrCode, title: "Passport link & QR", body: "Hand over a QR card or link at completion. Shareable proof your customer will show the next buyer." },
];

const CUSTOMER_SIDE = [
  { icon: BadgeCheck, title: "A verified passport", body: "Every job you log appears with a verified badge and your workshop's name." },
  { icon: Bell, title: "Reminders that land", body: "Next oil change or inspection, based on the mileage you recorded." },
  { icon: Gift, title: "Rewards from you", body: "Loyalty progress per workshop, so returning to your bay pays off." },
  { icon: Smartphone, title: "Pay and claim from their phone", body: "The invoice is paid by mobile money or card from the link. Claiming the car takes a one-time code. Nothing to install." },
];

export default function Home() {
  usePageMeta(
    "Revvo",
    "Revvo is the workshop system for garages and service bays in Accra: log a service in under a minute, build a CRM from real jobs, and bring customers back with reminders and rewards. Every record becomes a verified passport for the customer's car.",
  );

  return (
    <>
      {/* Hero */}
      <section className="relative -mt-16 overflow-hidden bg-navy-700 pt-16 text-white">
        <div className="hero-grid pointer-events-none absolute inset-0" aria-hidden="true" />
        <div
          className="pointer-events-none absolute -left-32 top-24 size-96 rounded-full bg-teal-500/25 blur-3xl motion-safe:animate-drift"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -bottom-40 right-0 size-[28rem] rounded-full bg-navy-500/40 blur-3xl motion-safe:animate-drift [animation-delay:-8s]"
          aria-hidden="true"
        />
        <HeroScene />
        <div className="container-x relative z-10 grid items-center gap-12 pb-36 pt-16 lg:grid-cols-[1.25fr_0.75fr] lg:pb-40 lg:pt-24">
          <Stagger>
            <StaggerItem>
              <ComingSoonBadge light />
            </StaggerItem>
            <StaggerItem>
              <p className="mt-6 text-xs font-bold uppercase tracking-[0.14em] text-teal-300">
                For garages & service bays
              </p>
            </StaggerItem>
            <StaggerItem>
              <Heading as="h1" className="mt-3 text-[2.1rem] leading-[1.1] text-white sm:text-[2.75rem] lg:text-[3rem] lg:leading-[1.08]">
                <span className="block">Log the servicing job.</span>
                <span className="block text-teal-300">Get paid by the customer.</span>
                <span className="block bg-gradient-to-r from-teal-300 to-teal-400 bg-clip-text text-transparent">
                  Keep the customer coming back for years.
                </span>
              </Heading>
            </StaggerItem>
            <StaggerItem>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-navy-200">
                Revvo turns every service you log into a verified record for the customer's car, a
                customer in your CRM, and a reminder that brings them back to your bay. Built for
                workshops in Accra.
              </p>
            </StaggerItem>
            <StaggerItem className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href={INTEREST_ANCHOR} variant="secondary" size="lg" data-testid="hero-interest">
                Register your workshop <ArrowRight />
              </ButtonLink>
              <ButtonLink href="#how-it-works" variant="inverse" size="lg">
                See how it works
              </ButtonLink>
            </StaggerItem>
          </Stagger>
          <Reveal className="flex flex-col items-center lg:items-end" delay={0.3}>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-navy-200">
              What your customer receives after every job
            </p>
            <div className="w-full max-w-md motion-safe:animate-float [animation-duration:9s]">
              <PassportPreview />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Outcomes strip + module ticker */}
      <section className="border-b border-border bg-card">
        <div className="container-x grid gap-8 py-10 sm:grid-cols-3">
          {OUTCOMES.map(({ icon: Icon, text }, i) => (
            <Reveal
              key={text}
              delay={i * 0.08}
              className="group flex flex-col items-center gap-3 text-center text-sm leading-relaxed text-muted-foreground"
            >
              <IconBadge icon={Icon} tone="teal" className="size-10" />
              <span className="max-w-xs">{text}</span>
            </Reveal>
          ))}
        </div>
        <div className="border-t border-border bg-background py-4">
          <Marquee items={WORKSHOP_FEATURES.map((f) => ({ icon: f.icon, label: f.title }))} />
        </div>
      </section>

      {/* The problem */}
      <Section id="problem">
        <SectionHeader
          eyebrow="The problem"
          title="Busy bays lose customers they never knew they had."
          lede="Workshops in Accra see hundreds of vehicles a week and keep almost nothing about them. Revvo fixes that at the moment it matters: when the job is done."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {PAINS.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.08}>
              <Card className="h-full border-l-4 border-l-teal-500">
                <h3 className="text-lg font-bold leading-snug">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* How it works */}
      <Section className="bg-muted/60" id="how-it-works">
        <SectionHeader
          eyebrow="How it works"
          title="One log at the bay. A customer who keeps coming back."
          lede="The loop is simple, and it compounds: every job you log makes the passport more valuable to the owner, and the owner more likely to return to you."
        />
        <div className="grid gap-6 md:grid-cols-[1fr_auto_1fr_auto_1fr] md:gap-4">
          {STEPS.map((step, i) => (
            <Fragment key={step.title}>
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
                  <div className="flex items-center justify-between">
                    <IconBadge icon={step.icon} tone="teal" />
                    <span className="flex size-8 items-center justify-center rounded-full bg-navy-700 font-mono text-xs font-bold text-white">
                      {i + 1}
                    </span>
                  </div>
                  <h3 className="mt-5 text-lg font-bold">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.body}</p>
                </Card>
              </Reveal>
            </Fragment>
          ))}
        </div>
      </Section>

      {/* Workshop product */}
      <Section id="workshop">
        <div className="grid items-start gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="lg:sticky lg:top-24">
            <Reveal>
              <Eyebrow>Revvo Business</Eyebrow>
              <Heading>Everything a busy bay needs. Nothing it doesn't.</Heading>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                A service log, invoices with payment links, a CRM, reminders, loyalty, promotions,
                analytics and parts ordering in one workspace. It only shows the modules a workshop uses.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <ButtonLink href={INTEREST_ANCHOR} variant="secondary">
                  Register your workshop <ArrowRight />
                </ButtonLink>
                <ButtonLink href="/businesses#garages" variant="outline">
                  Full workshop details
                </ButtonLink>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <ToolBoard className="mt-10 max-w-none" />
            </Reveal>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {WORKSHOP_FEATURES.map((f, i) => (
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

      {/* Customer side */}
      <Section className="bg-navy-900 text-white" id="customers" decor="dark">
        <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <SectionHeader
              align="left"
              dark
              className="mb-8"
              eyebrow="What your customers get"
              title="A passport they will actually use, with your name on every record."
              lede="Your customers get a permanent, verified history of their car that reminds them what is due and proves it was looked after when they sell. Every entry points back to the workshop that did the work."
            />
            <div className="grid gap-4 sm:grid-cols-2">
              {CUSTOMER_SIDE.map((f, i) => (
                <Reveal key={f.title} delay={(i % 2) * 0.06}>
                  <div className="group h-full rounded-2xl border border-white/10 bg-white/5 p-5 transition-colors hover:border-teal-400/40 hover:bg-white/[0.08]">
                    <IconBadge icon={f.icon} tone="light" className="size-10" />
                    <h3 className="mt-4 font-bold">{f.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-navy-200">{f.body}</p>
                  </div>
                </Reveal>
              ))}
            </div>
            <div className="mt-8">
              <ButtonLink href="/drivers" variant="inverse">
                See the driver experience <ArrowRight />
              </ButtonLink>
            </div>
          </div>
          <Reveal delay={0.15} className="flex justify-center lg:justify-end">
            <div className="motion-safe:animate-float [animation-duration:10s]">
              <SmsPhone />
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Also on Revvo */}
      <Section id="who">
        <SectionHeader
          eyebrow="Also on Revvo"
          title="The businesses around your bay plug into the same records."
          lede="Because every record is tied to a verified vehicle, parts sellers, dealerships, insurers and fleets can build on what workshops log. They are welcome in the pilot too."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {AUDIENCES.filter((a) => a.id !== "garages").map((a, i) => (
            <Reveal key={a.id} delay={(i % 3) * 0.06}>
              <Link
                href={`/businesses#${a.id}`}
                className="group flex h-full items-start gap-4 rounded-2xl border border-border bg-card p-5 shadow-card transition-[transform,box-shadow,border-color] duration-300 hover:border-teal-400/60 hover:shadow-lift motion-safe:hover:-translate-y-1"
                data-testid={`audience-${a.id}`}
              >
                <IconBadge icon={a.icon} className="size-10" />
                <div className="min-w-0">
                  <h3 className="font-bold">{a.label}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{a.short}</p>
                  <span className="mt-2 inline-flex items-center gap-1 text-sm font-semibold text-teal-600">
                    Learn more <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
          <Reveal delay={0.12}>
            <Link
              href="/drivers"
              className="group flex h-full items-start gap-4 rounded-2xl border border-border bg-card p-5 shadow-card transition-[transform,box-shadow,border-color] duration-300 hover:border-teal-400/60 hover:shadow-lift motion-safe:hover:-translate-y-1"
              data-testid="audience-drivers"
            >
              <IconBadge icon={DRIVER_AUDIENCE.icon} className="size-10" />
              <div className="min-w-0">
                <h3 className="font-bold">{DRIVER_AUDIENCE.label}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{DRIVER_AUDIENCE.short}</p>
                <span className="mt-2 inline-flex items-center gap-1 text-sm font-semibold text-teal-600">
                  For drivers <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                </span>
              </div>
            </Link>
          </Reveal>
        </div>
      </Section>

      {/* FAQ */}
      <Section className="bg-muted/60" id="faq">
        <SectionHeader eyebrow="Questions from workshops" title="Straight answers." />
        <Faq />
      </Section>

      <CtaBand />
    </>
  );
}
