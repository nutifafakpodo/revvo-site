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
import { PlateLookup } from "@/components/plate-lookup";
import { Reveal } from "@/components/reveal";
import { CONSUMER_APP_URL } from "@/lib/links";
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
  { n: "1", title: "Get serviced at a Revvo workshop", body: "Give the agent your plate and phone number when the job is done." },
  { n: "2", title: "Open the link in your SMS", body: "Your passport is already waiting, with the service marked verified." },
  { n: "3", title: "Claim it", body: "Confirm the one-time code to unlock reminders, rewards and owner controls." },
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
        <div className="container-x relative grid items-center gap-12 py-20 lg:grid-cols-2 lg:py-24">
          <div>
            <Eyebrow className="text-teal-300">Revvo App</Eyebrow>
            <Heading as="h1" className="text-white">
              Your car's full story, in your pocket.
            </Heading>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-navy-200">
              A permanent, verified record of every service your car has had, plus everything you
              need to keep it running: reminders, trusted workshops, parts that fit, insurance and
              rewards.
            </p>
            <div className="mt-8">
              <p className="mb-2 text-sm font-medium text-navy-200">Look up a vehicle by number plate</p>
              <PlateLookup dark size="lg" />
            </div>
            <div className="mt-6">
              <ButtonLink href={CONSUMER_APP_URL} variant="inverse" external>
                Open the app <ArrowRight />
              </ButtonLink>
            </div>
          </div>
          <Reveal className="flex justify-center lg:justify-end" delay={0.15}>
            <PassportPreview />
          </Reveal>
        </div>
      </section>

      <Section>
        <SectionHeader
          eyebrow="Getting your passport"
          title="No sign-up form. It starts at the workshop."
          lede="Your passport is created the first time a Revvo workshop services your car. From there, it is yours to claim."
        />
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

      <Section className="bg-muted/60">
        <SectionHeader
          eyebrow="Everything in the app"
          title="Built for owning a car, not just servicing it."
          align="center"
        />
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

      <Section>
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
            <ButtonLink href={CONSUMER_APP_URL} variant="primary" size="lg" external>
              Open the app <ArrowRight />
            </ButtonLink>
            <ButtonLink href="/trust" variant="outline" size="lg">
              What buyers can and cannot see
            </ButtonLink>
          </div>
        </div>
      </Section>
    </>
  );
}
