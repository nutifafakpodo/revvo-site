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

/** Consumer-app plate search (see revvo-app /my-car). */
export function plateLookupUrl(plate: string) {
  return `${CONSUMER_APP_URL}/my-car?plate=${encodeURIComponent(plate.trim().toUpperCase())}`;
}

/** Pilot sign-up delivery. Either a JSON POST endpoint or a mailto fallback. */
export const PILOT_FORM_ENDPOINT: string = import.meta.env.VITE_PILOT_FORM_ENDPOINT || "";
export const CONTACT_EMAIL: string = import.meta.env.VITE_CONTACT_EMAIL || "";
