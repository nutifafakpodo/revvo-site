import { useState } from "react";
import { ArrowRight, Check, ExternalLink, Loader2 } from "lucide-react";
import { Button } from "./button";
import { Eyebrow, Heading } from "./section";
import { INTEREST_FORM } from "@/lib/links";
import { cn } from "@/lib/utils";

type Values = {
  type: string;
  name: string;
  business: string;
  phone: string;
  email: string;
  city: string;
  message: string;
  website: string; // honeypot, stays empty for humans
};

const EMPTY: Values = { type: "", name: "", business: "", phone: "", email: "", city: "", message: "", website: "" };

type Status = { kind: "idle" } | { kind: "sending" } | { kind: "sent" } | { kind: "error"; message: string };

/**
 * Native "register your interest" form. Posts to the Google Form's
 * formResponse endpoint (opaque no-cors response), so visitors never see
 * Google's UI or a sign-in prompt. Rendered at the bottom of every page.
 */
export function InterestForm() {
  const [values, setValues] = useState<Values>(EMPTY);
  const [errors, setErrors] = useState<Partial<Record<keyof Values, string>>>({});
  const [status, setStatus] = useState<Status>({ kind: "idle" });

  const set =
    (key: keyof Values) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
      setValues((v) => ({ ...v, [key]: e.target.value }));
      if (errors[key]) setErrors((er) => ({ ...er, [key]: undefined }));
    };

  const validate = () => {
    const next: typeof errors = {};
    if (!values.type) next.type = "Tell us which best describes you.";
    if (!values.name.trim()) next.name = "Please enter your name.";
    if (!/^\+?[0-9 ()-]{7,20}$/.test(values.phone.trim())) next.phone = "Enter a phone number we can reach you on.";
    if (values.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) next.email = "That email does not look right.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    if (values.website) return; // bot filled the hidden field

    const body = new URLSearchParams();
    (Object.keys(INTEREST_FORM.fields) as (keyof typeof INTEREST_FORM.fields)[]).forEach((key) => {
      const value = values[key].trim();
      if (value) body.append(INTEREST_FORM.fields[key], value);
    });

    setStatus({ kind: "sending" });
    try {
      // Google Forms sends no CORS headers; a resolved request means it reached Google.
      await fetch(INTEREST_FORM.action, { method: "POST", mode: "no-cors", body });
      setStatus({ kind: "sent" });
    } catch {
      setStatus({ kind: "error", message: "We could not send that. Check your connection and try again." });
    }
  };

  return (
    <section
      id="interest"
      className="scroll-mt-16 border-t border-border bg-muted/60 py-16 sm:py-24"
      data-testid="interest-form"
    >
      <div className="container-x grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="lg:sticky lg:top-24 lg:self-start">
          <Eyebrow>Register your interest</Eyebrow>
          <Heading>Be first in line when Revvo launches.</Heading>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Whether you run a workshop, sell parts, insure vehicles, or just want your own car's
            passport, leave your details and we will contact you as we open up in Accra.
          </p>
          <ul className="mt-6 space-y-2 text-sm text-muted-foreground">
            <li>Businesses: early access to the pilot and onboarding on site.</li>
            <li>Drivers: a passport for your car from the first Revvo service.</li>
            <li>No spam. We only use your details to tell you about Revvo.</li>
          </ul>
          <a
            href={INTEREST_FORM.viewUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-teal-600 hover:underline"
            data-testid="interest-form-link"
          >
            Prefer Google Forms? Open it in a new tab <ExternalLink className="size-4" />
          </a>
        </div>

        <div className="rounded-2xl border border-border bg-card p-6 shadow-card sm:p-8">
          {status.kind === "sent" ? (
            <div className="py-10 text-center" role="status" data-testid="interest-success">
              <span className="mx-auto flex size-12 items-center justify-center rounded-full bg-teal-100 text-teal-600">
                <Check className="size-6" />
              </span>
              <h3 className="mt-4 text-xl font-bold">Thanks, you are on the list.</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                We will contact you before Revvo launches in Accra.
              </p>
            </div>
          ) : (
            <form onSubmit={submit} noValidate className="space-y-5" data-testid="interest-form-fields">
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="I am a…" htmlFor="interest-type" error={errors.type}>
                  <select
                    id="interest-type"
                    className={inputClass(!!errors.type)}
                    value={values.type}
                    onChange={set("type")}
                    data-testid="select-type"
                  >
                    <option value="">Select one</option>
                    {INTEREST_FORM.types.map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                </Field>
                <Field label="Your name" htmlFor="interest-name" error={errors.name}>
                  <input id="interest-name" className={inputClass(!!errors.name)} value={values.name} onChange={set("name")} autoComplete="name" data-testid="input-name" />
                </Field>
                <Field label="Phone (WhatsApp preferred)" htmlFor="interest-phone" error={errors.phone}>
                  <input id="interest-phone" type="tel" className={inputClass(!!errors.phone)} value={values.phone} onChange={set("phone")} placeholder="+233 24 000 0000" autoComplete="tel" data-testid="input-phone" />
                </Field>
                <Field label="Email (optional)" htmlFor="interest-email" error={errors.email}>
                  <input id="interest-email" type="email" className={inputClass(!!errors.email)} value={values.email} onChange={set("email")} autoComplete="email" data-testid="input-email" />
                </Field>
                <Field label="Business name (optional)" htmlFor="interest-business">
                  <input id="interest-business" className={inputClass(false)} value={values.business} onChange={set("business")} autoComplete="organization" data-testid="input-business" />
                </Field>
                <Field label="City or town (optional)" htmlFor="interest-city">
                  <input id="interest-city" className={inputClass(false)} value={values.city} onChange={set("city")} placeholder="Accra" autoComplete="address-level2" data-testid="input-city" />
                </Field>
              </div>
              <Field label="Anything we should know? (optional)" htmlFor="interest-message">
                <textarea id="interest-message" rows={4} className={inputClass(false)} value={values.message} onChange={set("message")} placeholder="Vehicles per week, what you use today, questions…" data-testid="input-message" />
              </Field>
              <div className="hidden" aria-hidden="true">
                <label htmlFor="interest-website">Website</label>
                <input id="interest-website" name="website" tabIndex={-1} autoComplete="off" value={values.website} onChange={set("website")} />
              </div>

              {status.kind === "error" && (
                <p className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700" role="alert" data-testid="interest-error">
                  {status.message}
                </p>
              )}

              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-xs text-muted-foreground">We only use these details to contact you about Revvo.</p>
                <Button type="submit" variant="secondary" size="lg" disabled={status.kind === "sending"} data-testid="button-submit">
                  {status.kind === "sending" ? <Loader2 className="animate-spin" /> : <ArrowRight />}
                  {status.kind === "sending" ? "Sending…" : "Register interest"}
                </Button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
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
