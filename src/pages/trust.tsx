import { Check, EyeOff, Fingerprint, History, KeyRound, Lock, ShieldCheck, Timer, X } from "lucide-react";
import { Card, Eyebrow, Heading, IconBadge, Section, SectionHeader } from "@/components/section";
import { CtaBand } from "@/components/cta-band";
import { Reveal } from "@/components/reveal";
import { usePageMeta } from "@/lib/seo";

const PRINCIPLES = [
  {
    icon: ShieldCheck,
    title: "Verified at source",
    body: "Only authenticated members of a registered business can create service records. Each record stores who created it and for which business.",
  },
  {
    icon: KeyRound,
    title: "Phone numbers are not lookup keys",
    body: "A phone number is used to deliver a link or verify an owner. It is never a way to find someone's vehicle, and public phone lookup does not exist.",
  },
  {
    icon: EyeOff,
    title: "Public means minimal",
    body: "Plate search returns only what is needed to open a passport. Shared passports redact owner names, phones and emails from every part of the response.",
  },
  {
    icon: Fingerprint,
    title: "Owner control needs proof",
    body: "Claiming a vehicle requires a one-time code sent to the phone on file. Codes expire, repeated wrong attempts fail the claim, and a live claim cannot be restarted early.",
  },
  {
    icon: History,
    title: "Auditable, not editable",
    body: "Service creation and invitations are recorded as events. Corrections will append to history rather than silently rewrite it.",
  },
  {
    icon: Timer,
    title: "Rate-limited public endpoints",
    body: "Plate lookup, passport reads, claims, invitations, loyalty and insurance lookups are all rate-limited to deter scraping.",
  },
];

const VISIBILITY: { item: string; pub: boolean; owner: boolean }[] = [
  { item: "Make, model, year, plate", pub: true, owner: true },
  { item: "Verified service summaries and dates", pub: true, owner: true },
  { item: "Ownership timeline (neutral status only)", pub: true, owner: true },
  { item: "Owner name, phone, email", pub: false, owner: true },
  { item: "Service costs, invoices, private notes", pub: false, owner: true },
  { item: "Photos and documents", pub: false, owner: true },
  { item: "Reminders and loyalty balance", pub: false, owner: true },
];

export default function Trust() {
  usePageMeta(
    "Trust & privacy",
    "How Revvo keeps vehicle records trustworthy and owner data private: verified at source, minimal public data, OTP-protected ownership, audit events and rate limits.",
  );

  return (
    <>
      <section className="border-b border-border bg-card">
        <div className="container-x py-16 sm:py-20">
          <Eyebrow>Trust & privacy</Eyebrow>
          <Heading as="h1" className="max-w-3xl">
            A record is only useful if it can be trusted. And only fair if it protects the owner.
          </Heading>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            These are the rules Revvo is built on. They are enforced in the API, not just in the
            interface, and they are tested before every release.
          </p>
        </div>
      </section>

      <Section>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {PRINCIPLES.map((p, i) => (
            <Reveal key={p.title} delay={(i % 3) * 0.06}>
              <Card className="h-full">
                <IconBadge icon={p.icon} tone="teal" />
                <h2 className="mt-4 text-lg font-bold">{p.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="bg-muted/60">
        <SectionHeader
          eyebrow="What a shared passport shows"
          title="Public sees the car. The owner sees everything."
          lede="Anyone with a passport link or a plate can verify the vehicle and its service summary. Anything personal or financial requires the verified owner."
        />
        <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-card">
          <table className="w-full text-left text-sm" data-testid="visibility-table">
            <thead className="bg-muted text-xs uppercase tracking-wider text-muted-foreground">
              <tr>
                <th className="px-5 py-3 font-semibold">Data</th>
                <th className="px-5 py-3 text-center font-semibold">Public link</th>
                <th className="px-5 py-3 text-center font-semibold">Verified owner</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {VISIBILITY.map((row) => (
                <tr key={row.item}>
                  <td className="px-5 py-3.5 font-medium">{row.item}</td>
                  <td className="px-5 py-3.5 text-center">
                    <Mark ok={row.pub} />
                  </td>
                  <td className="px-5 py-3.5 text-center">
                    <Mark ok={row.owner} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <Section>
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <IconBadge icon={Lock} />
            <Heading className="mt-5">Pilot-stage honesty</Heading>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              Some things are deliberately not automated yet. We would rather be clear about them
              than pretend otherwise.
            </p>
          </div>
          <ul className="space-y-4 text-sm leading-relaxed text-muted-foreground">
            <li className="rounded-xl border border-border bg-card p-5">
              <strong className="text-foreground">Payments are request-based.</strong> Marketplace
              orders and insurance renewals create a request that the seller or insurer confirms.
              Revvo does not collect card details or move money during the pilot.
            </li>
            <li className="rounded-xl border border-border bg-card p-5">
              <strong className="text-foreground">Insurance renewals are quotes and intent.</strong>{" "}
              Policies are issued by the licensed insurer, on their terms, after they follow up.
            </li>
            <li className="rounded-xl border border-border bg-card p-5">
              <strong className="text-foreground">Data export and deletion are on the roadmap</strong>{" "}
              before broad consumer launch, along with consent language for using service history in
              insurance quotes.
            </li>
          </ul>
        </div>
      </Section>

      <CtaBand
        title="Questions about data handling?"
        body="Tell us what you need on the pilot form and we will walk you through exactly what is stored, who can see it, and why."
      />
    </>
  );
}

function Mark({ ok }: { ok: boolean }) {
  return ok ? (
    <span className="inline-flex items-center gap-1 text-teal-600">
      <Check className="size-4" />
      <span className="sr-only">Yes</span>
    </span>
  ) : (
    <span className="inline-flex items-center gap-1 text-muted-foreground">
      <X className="size-4" />
      <span className="sr-only">No</span>
    </span>
  );
}
