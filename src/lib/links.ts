/**
 * Where the product apps live. In production nginx serves them beside this
 * site (/app, /business, /admin); in local dev each runs on its own port.
 * Override with VITE_CONSUMER_APP_URL / VITE_BUSINESS_APP_URL / VITE_ADMIN_APP_URL.
 */
const dev = import.meta.env.DEV;

function trim(url: string) {
  return url.replace(/\/+$/, "");
}

export const CONSUMER_APP_URL = trim(
  import.meta.env.VITE_CONSUMER_APP_URL || (dev ? "http://localhost:5175/app" : "/app"),
);
export const BUSINESS_APP_URL = trim(
  import.meta.env.VITE_BUSINESS_APP_URL || (dev ? "http://localhost:5173/business" : "/business"),
);
export const ADMIN_APP_URL = trim(
  import.meta.env.VITE_ADMIN_APP_URL || (dev ? "http://localhost:5174/admin" : "/admin"),
);

export const BUSINESS_SIGN_IN_URL = `${BUSINESS_APP_URL}/sign-in`;
export const BUSINESS_SIGN_UP_URL = `${BUSINESS_APP_URL}/sign-up`;

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
