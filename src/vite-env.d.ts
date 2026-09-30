/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_CONSUMER_APP_URL?: string;
  readonly VITE_BUSINESS_APP_URL?: string;
  readonly VITE_ADMIN_APP_URL?: string;
  readonly VITE_PILOT_FORM_ENDPOINT?: string;
  readonly VITE_CONTACT_EMAIL?: string;
}
