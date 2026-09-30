# Revvo marketing site

The public website for [Revvo](https://github.com/nutifafakpodo), the verified service
record for every car. Static Vite + React + Tailwind site, no backend.

## Pages

| Route | Purpose |
|---|---|
| `/` | Home: hero, how it works, audiences, business and driver highlights, FAQ |
| `/businesses` | One section per business type (garages, parts sellers, manufacturers, dealerships, insurers, fleets) |
| `/drivers` | The consumer app: passport, claim, reminders, stations, store, insurance, rewards |
| `/trust` | Trust & privacy principles and what a shared passport reveals |
| `/pilot` | Accra pilot sign-up form |

## Develop

```bash
pnpm install
pnpm dev        # http://localhost:5176
pnpm check      # typecheck + production build
```

## Configuration

All settings are build-time `VITE_*` variables (see `.env.example`).

| Variable | Purpose | Default |
|---|---|---|
| `VITE_CONSUMER_APP_URL` | Driver app (plate lookup, "Open the app") | `/app` |
| `VITE_BUSINESS_APP_URL` | Business app (sign in / sign up) | `/business` |
| `VITE_ADMIN_APP_URL` | Admin console (footer link) | `/admin` |
| `VITE_PILOT_FORM_ENDPOINT` | JSON `POST` target for the pilot form (Formspree, your API, …) | unset |
| `VITE_CONTACT_EMAIL` | Fallback: the pilot form opens a pre-filled `mailto:` | unset |
| `BASE_PATH` | Sub-path the site is served from | `/` |

The pilot form needs one of `VITE_PILOT_FORM_ENDPOINT` or `VITE_CONTACT_EMAIL`;
without either it shows a configuration error on submit.

## Deploy

**Vercel.** `vercel.json` sets the framework, SPA rewrites and cache headers.
Import the repo or run `vercel --prod`. Set the `VITE_*` variables in the
project settings.

**GitHub Pages.** `.github/workflows/pages.yml` builds with
`BASE_PATH=/<repo>/` and publishes `dist` on every push to `main`. Set the
`VITE_*` values as repository *variables* (Settings → Secrets and variables →
Actions → Variables). `index.html` is copied to `404.html` so client-side
routes survive a hard refresh.
