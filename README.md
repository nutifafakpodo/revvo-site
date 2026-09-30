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
| `/pilot` | About the Accra pilot cohort |

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
| `VITE_CONTACT_EMAIL` | Optional contact email in the footer | unset |
| `BASE_PATH` | Sub-path the site is served from | `/` |

## Interest form

Every page ends with a "Register your interest" form (`#interest`), and a
"Coming soon" bar sits above the header. The form is the site's own HTML and
posts directly to the Google Form **"Revvo — Register your interest"**
(`formResponse` endpoint), so visitors never see Google's UI or a sign-in
prompt. Responses appear in that form's Responses tab. The endpoint, entry ids
and the "I am a…" options live in `INTEREST_FORM` in `src/lib/links.ts`; if
you change the Google Form's questions, update them there (ids are in the
published form's page source as `entry.NNN`).

## Deploy

**Vercel.** `vercel.json` sets the framework, SPA rewrites and cache headers.
Import the repo or run `vercel --prod`. Set the `VITE_*` variables in the
project settings.

**GitHub Pages.** `.github/workflows/pages.yml` builds with
`BASE_PATH=/<repo>/` and publishes `dist` on every push to `main`. Set the
`VITE_*` values as repository *variables* (Settings → Secrets and variables →
Actions → Variables). `index.html` is copied to `404.html` so client-side
routes survive a hard refresh.
