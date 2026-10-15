# Codex prompt: website contact and care company forms

Paste everything below the line into Codex.

---

Add two lead forms to the MyIntel marketing website so every inquiry lands in the HomeCheck Operations inbox, next to HomeCheck help requests. This touches two repos:

- **HomeCheck** (yours): `MyIntelHome/myintel-assesment`, live at https://homecheck.myintelhome.com
- **Website**: `MyIntelHome/MyIntel-Website` (Next.js 15, Tailwind 4, static pages), live at https://www.myintelhome.com. Work from the latest `main`; pull first. Claude just merged a large content rewrite there. Do not change page copy or layout beyond adding the forms.

## 1. HomeCheck: accept website inquiries

Add a public endpoint (for example `POST /api/website-inquiry`) that:

- Accepts two inquiry types:
  - `contact` (families and older adults): name, email and/or phone (at least one required), who the help is for (myself / a parent or relative / someone else), ZIP (optional), message, contact consent (required checkbox).
  - `care_company`: company name, contact name, role, email, phone (optional), approximate number of clients (optional select: 1-10, 11-50, 51-200, 200+), message, contact consent (required).
- Saves each inquiry as a lead record that shows in **Operations** with its type clearly labeled ("Website contact" / "Care company"), using the existing lead tables or an additive table. No destructive migrations.
- Sends the staff notification through the existing Resend outbox (same idempotency, leasing and retry behavior as help requests) to `MYINTEL_STAFF_NOTIFICATION_EMAIL` (currently austin@myintelhome.com). Notification shows the submitted fields and an Operations link. No customer auto-reply for now.
- Respects the existing production flags: when lead capture is off, return a friendly error, and the website shows "Please call (720) 989-1123."
- Protects against abuse: CORS limited to `https://www.myintelhome.com`, `https://myintelhome.com` and the website's Vercel preview domains; a honeypot field; server-side validation and length limits; basic per-IP rate limiting.
- Does not expose secrets or send any data to the browser beyond a success/failure result.

Update the docs in `docs/` with what you added and how to roll it back.

## 2. Website: add the forms

- **Contact page (`src/app/contact/page.tsx`)**: add the `contact` form as the main way to reach us. Keep the phone and email blocks next to it.
- **Partners page (`src/app/partners/page.tsx`)**: add the `care_company` form inside the existing navy `#partnership-contact` section. Keep the phone button. The header button on that page already links to `#partnership-contact`.
- Put the HomeCheck endpoint URL in `src/lib/site.ts` next to the other links, not hard-coded in components.
- Make the forms a small client component. Use large inputs (18px+), visible labels, clear error messages, and a plain thank-you message after sending ("Thanks. We usually reply within one business day.").
- Match the existing style: navy `#1e3357`, `btn-primary` / `btn-light`, the rounded cards already on the site. Phone layout must work at 375px with no sideways scrolling.
- Copy rules: plain language, no em dashes, and do not use the words "AI" or "monitoring" on the contact form.

## 3. Test before calling it done

- On the HomeCheck preview with the preview allowlist, send one test of each type and confirm: the record appears in Operations, the staff email arrives, and a second submit with the same data is not double-sent by a retry.
- On the website preview, submit both forms against the HomeCheck preview endpoint, then switch the URL to production only after Austin approves.
- Report what you changed, the test results, and any Vercel environment variables Austin needs to set. Do not enable new production flags without his OK.
