# MyIntel Website

Marketing website for [MyIntel](https://myintelhome.com) — privacy-first aging-in-place technology. No cameras, no wearables.

Built with [Next.js 15](https://nextjs.org) (App Router) and [Tailwind CSS 4](https://tailwindcss.com). All pages are statically generated.

## Pages

| Route | Purpose |
| --- | --- |
| `/` | Home — hero, stats, how it works, features, audiences, assessments, testimonial |
| `/how-it-works` | Platform deep-dive, privacy by design, pilot program |
| `/assessments` | Home Safety Assessments (CAPS), process, financial aid, service areas |
| `/about` | Founding story, mission, values |
| `/faq` | Frequently asked questions by category |
| `/careers` | Open roles (CAPS, ECHM) |
| `/contact` | Phone, email, waitlist, service areas |
| `/privacy` | Privacy policy |

## Development

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
```

## Editing content

- Contact info, waitlist URL, service areas, and navigation live in [`src/lib/site.ts`](src/lib/site.ts) — edit once, updates everywhere.
- Colors and fonts are defined in [`src/app/globals.css`](src/app/globals.css) (`@theme` block).
- Each page's copy lives in its file under `src/app/`.

## Deploying to Vercel

1. Push this repo to GitHub.
2. Go to [vercel.com/new](https://vercel.com/new), import the repository, and click **Deploy** — no configuration needed (Next.js is auto-detected).
3. Add your custom domain (`myintelhome.com`) under Project → Settings → Domains.

Every push to `main` will auto-deploy.
