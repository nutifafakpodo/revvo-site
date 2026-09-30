import { useState } from "react";
import { ArrowRight, Check, Loader2, Mail } from "lucide-react";
import { Button } from "@/components/button";
import { Card, Eyebrow, Heading, Section } from "@/components/section";
import { CONTACT_EMAIL, PILOT_FORM_ENDPOINT } from "@/lib/links";
import { usePageMeta } from "@/lib/seo";
import { cn } from "@/lib/utils";

const BUSINESS_TYPES = [
  { value: "garage", label: "Garage / workshop" },
  { value: "service_bay", label: "Service bay (fuel station, quick-lube)" },
  { value: "parts_seller", label: "Parts reseller" },
  { value: "parts_manufacturer", label: "Parts manufacturer" },
  { value: "dealership", label: "Dealership" },
  { value: "insurance", label: "Insurance company" },
  { value: "fleet", label: "Fleet operator" },
  { value: "other", label: "Something else" },
];

const INCLUDED = [
  "Onboarding session for your team, on site or on a call.",
  "Passport QR cards and SMS invites for your customers.",
  "Direct line to the product team; what you ask for shapes the roadmap.",
  "Verified partner badge on every record you log.",
];

type FormState = {
  business: string;
  type: string;
  name: string;
  phone: string;
  email: string;
  city: string;
  notes: string;
};

const EMPTY: FormState = { business: "", type: "", name: "", phone: "", email: "", city: "Accra", notes: "" };

type Status = { kind: "idle" } | { kind: "sending" } | { kind: "sent"; via: "endpoint" | "email" } | { kind: "error"; message: string };

function buildMessage(f: FormState) {
  return [
    `Business: ${f.business}`,
    `Type: ${BUSINESS_TYPES.find((t) => t.value === f.type)?.label ?? f.type}`,
    `Contact: ${f.name}`,
    `Phone: ${f.phone}`,
    `Email: ${f.email || "-"}`,
    `City: ${f.city}`,
    "",
    f.notes,
  ].join("\n");
}

export default function Pilot() {
  usePageMeta(
    "Join the pilot",
    "Revvo is onboarding service bays, parts sellers, dealerships and an insurance partner in Accra. Tell us about your business and we will get you set up.",
  );

  const [form, setForm] = useState<FormState>(EMPTY);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [status, setStatus] = useState<Status>({ kind: "idle" });

  const set = (key: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm((f) => ({ ...f, [key]: e.target.value }));
    if (errors[key]) setErrors((er) => ({ ...er, [key]: undefined }));
  };

  const validate = () => {
    const next: typeof errors = {};
    if (!form.business.trim()) next.business = "Tell us the business name.";
    if (!form.type) next.type = "Pick the closest business type.";
    if (!form.name.trim()) next.name = "Who should we contact?";
    if (!/^\+?[0-9 ()-]{7,20}$/.test(form.phone.trim())) next.phone = "Enter a phone number we can reach you on.";
    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = "That email does not look right.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    if (PILOT_FORM_ENDPOINT) {
      setStatus({ kind: "sending" });
      try {
        const res = await fetch(PILOT_FORM_ENDPOINT, {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify({ ...form, source: "revvo-marketing" }),
        });
        if (!res.ok) throw new Error(`Request failed (${res.status})`);
        setStatus({ kind: "sent", via: "endpoint" });
      } catch (err) {
        setStatus({
          kind: "error",
          message: err instanceof Error ? err.message : "Something went wrong. Please try again.",
        });
      }
      return;
    }

    if (CONTACT_EMAIL) {
      const subject = encodeURIComponent(`Revvo pilot: ${form.business}`);
      const body = encodeURIComponent(buildMessage(form));
      window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
      setStatus({ kind: "sent", via: "email" });
      return;
    }

    setStatus({
      kind: "error",
      message: "Pilot sign-up is not connected in this environment yet. Set VITE_PILOT_FORM_ENDPOINT or VITE_CONTACT_EMAIL.",
    });
  };

  return (
    <>
      <section className="border-b border-border bg-card">
        <div className="container-x py-16 sm:py-20">
          <Eyebrow>Accra pilot · limited cohort</Eyebrow>
          <Heading as="h1" className="max-w-3xl">
            Start logging verified services this month.
          </Heading>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            We are onboarding a small group of service bays, parts sellers, dealerships and one
            insurance partner. Tell us about your business and we will get you set up in person.
          </p>
        </div>
      </section>

      <Section>
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="space-y-6">
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
            <Card className="bg-navy-700 text-white">
              <h2 className="text-lg font-bold">What we ask of you</h2>
              <p className="mt-3 text-sm leading-relaxed text-navy-200">
                Log real services, share passport links with customers, and tell us what gets in
                the way. That is it. There is no long-term commitment during the pilot.
              </p>
            </Card>
            {CONTACT_EMAIL && (
              <p className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="size-4" />
                Prefer email?{" "}
                <a href={`mailto:${CONTACT_EMAIL}`} className="font-semibold text-teal-600 hover:underline">
                  {CONTACT_EMAIL}
                </a>
              </p>
            )}
          </div>

          <Card className="p-6 sm:p-8">
            {status.kind === "sent" ? (
              <div className="py-8 text-center" data-testid="pilot-success" role="status">
                <span className="mx-auto flex size-12 items-center justify-center rounded-full bg-teal-100 text-teal-600">
                  <Check className="size-6" />
                </span>
                <h2 className="mt-4 text-xl font-bold">
                  {status.via === "endpoint" ? "Thanks, we have your details." : "Your email is ready to send."}
                </h2>
                <p className="mt-2 text-sm text-muted-foreground">
                  {status.via === "endpoint"
                    ? "Someone from the team will call you within two working days."
                    : "We opened a pre-filled message in your mail app. Hit send and we will call you within two working days."}
                </p>
              </div>
            ) : (
              <form onSubmit={submit} noValidate className="space-y-5" data-testid="pilot-form">
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Business name" error={errors.business} htmlFor="business">
                    <input id="business" className={inputClass(!!errors.business)} value={form.business} onChange={set("business")} autoComplete="organization" data-testid="input-business" />
                  </Field>
                  <Field label="Business type" error={errors.type} htmlFor="type">
                    <select id="type" className={inputClass(!!errors.type)} value={form.type} onChange={set("type")} data-testid="select-type">
                      <option value="">Select one</option>
                      {BUSINESS_TYPES.map((t) => (
                        <option key={t.value} value={t.value}>{t.label}</option>
                      ))}
                    </select>
                  </Field>
                  <Field label="Your name" error={errors.name} htmlFor="name">
                    <input id="name" className={inputClass(!!errors.name)} value={form.name} onChange={set("name")} autoComplete="name" data-testid="input-name" />
                  </Field>
                  <Field label="Phone" error={errors.phone} htmlFor="phone">
                    <input id="phone" type="tel" className={inputClass(!!errors.phone)} value={form.phone} onChange={set("phone")} placeholder="+233 24 000 0000" autoComplete="tel" data-testid="input-phone" />
                  </Field>
                  <Field label="Email (optional)" error={errors.email} htmlFor="email">
                    <input id="email" type="email" className={inputClass(!!errors.email)} value={form.email} onChange={set("email")} autoComplete="email" data-testid="input-email" />
                  </Field>
                  <Field label="City" htmlFor="city">
                    <input id="city" className={inputClass(false)} value={form.city} onChange={set("city")} autoComplete="address-level2" />
                  </Field>
                </div>
                <Field label="Anything we should know? (optional)" htmlFor="notes">
                  <textarea id="notes" rows={4} className={inputClass(false)} value={form.notes} onChange={set("notes")} placeholder="Number of bays, vehicles serviced per week, what you use today…" />
                </Field>

                {status.kind === "error" && (
                  <p className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700" role="alert" data-testid="pilot-error">
                    {status.message}
                  </p>
                )}

                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <p className="text-xs text-muted-foreground">
                    We only use these details to contact you about the pilot.
                  </p>
                  <Button type="submit" variant="secondary" size="lg" disabled={status.kind === "sending"} data-testid="button-submit">
                    {status.kind === "sending" ? <Loader2 className="animate-spin" /> : <ArrowRight />}
                    Request to join
                  </Button>
                </div>
              </form>
            )}
          </Card>
        </div>
      </Section>
    </>
  );
}

function inputClass(invalid: boolean) {
  return cn(
    "h-11 w-full rounded-lg border bg-background px-3 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-teal-500 focus:ring-2 focus:ring-teal-500/25 [&:is(textarea)]:h-auto [&:is(textarea)]:py-2.5",
    invalid ? "border-red-400" : "border-border",
  );
}

function Field({
  label,
  htmlFor,
  error,
  children,
}: {
  label: string;
  htmlFor: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={htmlFor} className="mb-1.5 block text-sm font-medium">
        {label}
      </label>
      {children}
      {error && (
        <p className="mt-1.5 text-xs text-red-600" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}
