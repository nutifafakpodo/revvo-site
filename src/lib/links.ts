/**
 * Where the product apps live. The site links to exactly two account
 * screens: Revvo Business (workshops and other businesses) and Revvo for car
 * owners, each with sign in and create account.
 *
 * Set VITE_BUSINESS_APP_URL / VITE_CONSUMER_APP_URL to where each app is
 * served (e.g. https://app.example.com/business, or /business beside it). In
 * local dev they default to the apps' dev servers. In a production build
 * without them the account links are left out, so the live site never links
 * to a page that isn't there.
 */
const dev = import.meta.env.DEV;

function appUrl(configured: string | undefined, devDefault: string): string | null {
  const url = configured?.trim() || (dev ? devDefault : "");
  return url ? url.replace(/\/+$/, "") : null;
}

export const CONSUMER_APP_URL = appUrl(import.meta.env.VITE_CONSUMER_APP_URL, "http://localhost:5175/app");
export const BUSINESS_APP_URL = appUrl(import.meta.env.VITE_BUSINESS_APP_URL, "http://localhost:5173/business");

export type AccountLink = { key: "business" | "owners"; product: string; audience: string; signIn: string; signUp: string };

/** The account screens the site links to, in the order shown. */
export const ACCOUNT_LINKS: AccountLink[] = [
  BUSINESS_APP_URL && {
    key: "business" as const,
    product: "Revvo Business",
    audience: "Workshops, service bays and other businesses",
    signIn: `${BUSINESS_APP_URL}/sign-in`,
    signUp: `${BUSINESS_APP_URL}/sign-up`,
  },
  CONSUMER_APP_URL && {
    key: "owners" as const,
    product: "Revvo",
    audience: "Car owners",
    signIn: `${CONSUMER_APP_URL}/sign-in`,
    signUp: `${CONSUMER_APP_URL}/sign-up`,
  },
].filter((link): link is AccountLink => Boolean(link));

export const CONTACT_EMAIL: string = import.meta.env.VITE_CONTACT_EMAIL || "";

/**
 * "Revvo — Register your interest" Google Form. The site renders its own form
 * and posts straight to the Google Form's formResponse endpoint (no embed, no
 * Google sign-in). Responses land in the form's Responses tab / linked Sheet.
 * Entry ids come from the published form's viewform HTML.
 */
export const INTEREST_FORM = {
  viewUrl:
    "https://docs.google.com/forms/d/e/1FAIpQLSdJc8nkHK9KQ1bs0AMR4cIYf1LDaSSdGCAgRwL2cZGCUiZwiA/viewform",
  action:
    "https://docs.google.com/forms/d/e/1FAIpQLSdJc8nkHK9KQ1bs0AMR4cIYf1LDaSSdGCAgRwL2cZGCUiZwiA/formResponse",
  fields: {
    type: "entry.735727478",
    name: "entry.503804975",
    business: "entry.1497303247",
    phone: "entry.400873194",
    email: "entry.142340320",
    city: "entry.1647367719",
    message: "entry.1959086185",
  },
  /** Must match the Google Form's multiple-choice options exactly. */
  types: [
    "Driver / car owner",
    "Garage or workshop",
    "Service bay (fuel station, quick-lube)",
    "Parts reseller",
    "Parts manufacturer",
    "Dealership",
    "Insurance company",
    "Fleet operator",
    "Other",
  ],
} as const;

/** Same-page anchor of the interest form rendered on every page. */
export const INTEREST_ANCHOR = "#interest";
