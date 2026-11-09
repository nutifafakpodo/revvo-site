import { ArrowRight, Check } from "lucide-react";
import { ButtonLink } from "@/components/button";
import { Eyebrow, Heading, IconBadge, Section, SectionHeader } from "@/components/section";
import { CtaBand } from "@/components/cta-band";
import { Reveal } from "@/components/reveal";
import { AUDIENCES } from "@/lib/content";
import { INTEREST_ANCHOR } from "@/lib/links";
import { ComingSoonBadge } from "@/components/coming-soon";
import { usePageMeta } from "@/lib/seo";
import { cn } from "@/lib/utils";

const MODULES: { name: string; types: string }[] = [
  { name: "Dashboard, onboarding, analytics, team", types: "Every business" },
  { name: "Log service", types: "Garages, service bays, fleets, dealerships" },
  { name: "Customers (CRM)", types: "Garages, service bays, dealerships" },
  { name: "Vehicles", types: "Garages, service bays, dealerships, fleets" },
  { name: "Marketplace, orders, inventory", types: "Garages, service bays, dealerships, sellers, manufacturers" },
  { name: "Sales", types: "Dealerships" },
  { name: "Insurance operations", types: "Insurance companies" },
];

export default function Businesses() {
  usePageMeta(
    "For businesses",
    "Revvo Business is built for garages and service bays first: log services, grow a CRM from real jobs, bring customers back. Parts sellers, dealerships, insurers and fleets share the same verified records.",
  );

  return (
    <>
      <section className="border-b border-border bg-card">
        <div className="container-x py-16 sm:py-20">
          <div className="mb-4">
            <ComingSoonBadge />
          </div>
          <Eyebrow>Revvo Business</Eyebrow>
          <Heading as="h1" className="max-w-3xl">
            Built for the bay. Open to everyone around it.
          </Heading>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Garages and service bays are where Revvo starts: service logging, invoices with payment
            links, a CRM that fills itself, reminders, loyalty and parts ordering. Parts sellers, dealerships, insurers and
            fleets plug into the same verified vehicle records, and only see the modules they need.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href={INTEREST_ANCHOR} variant="secondary" size="lg">
              Register your workshop <ArrowRight />
            </ButtonLink>
            <ButtonLink href="/pilot" variant="outline" size="lg">
              About the pilot
            </ButtonLink>
          </div>
          <nav className="mt-10 flex flex-wrap gap-2" aria-label="Business types">
            {AUDIENCES.map((a) => (
              <a
                key={a.id}
                href={`#${a.id}`}
                className="rounded-full border border-border bg-background px-3.5 py-1.5 text-sm font-medium text-muted-foreground transition-colors hover:border-teal-400 hover:text-foreground"
              >
                {a.label}
              </a>
            ))}
          </nav>
        </div>
      </section>

      {AUDIENCES.map((a, i) => (
        <Section
          key={a.id}
          id={a.id}
          className={cn("scroll-mt-20", i % 2 === 1 && "bg-muted/60")}
          data-testid={`section-${a.id}`}
        >
          <div className="grid items-start gap-10 lg:grid-cols-[1fr_1fr]">
            <Reveal>
              <IconBadge icon={a.icon} tone="teal" />
              <p className="mt-5 text-sm font-semibold text-teal-600">{a.label}</p>
              <Heading className="mt-2">{a.headline}</Heading>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">{a.intro}</p>
              <ButtonLink href={a.cta.href} variant="primary" className="mt-8">
                {a.cta.label} <ArrowRight />
              </ButtonLink>
            </Reveal>
            <Reveal delay={0.1}>
              <ul className="divide-y divide-border rounded-2xl border border-border bg-card shadow-card">
                {a.points.map((p) => (
                  <li key={p} className="flex items-start gap-3 px-5 py-4 text-sm leading-relaxed">
                    <Check className="mt-0.5 size-4 shrink-0 text-teal-600" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </Section>
      ))}

      <Section>
        <SectionHeader
          eyebrow="Role-aware by design"
          title="You only see what your business does."
          lede="Modules are switched on by business type, and the API enforces the same rules. A garage cannot reach insurance operations, and an insurer never sees a CRM it does not need."
        />
        <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-card">
          <table className="w-full text-left text-sm">
            <thead className="bg-muted text-xs uppercase tracking-wider text-muted-foreground">
              <tr>
                <th className="px-5 py-3 font-semibold">Module</th>
                <th className="px-5 py-3 font-semibold">Available to</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {MODULES.map((m) => (
                <tr key={m.name}>
                  <td className="px-5 py-3.5 font-medium">{m.name}</td>
                  <td className="px-5 py-3.5 text-muted-foreground">{m.types}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
