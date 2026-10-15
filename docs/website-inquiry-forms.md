# Contact and care company forms

The contact page now has the family form first, with the existing phone and email blocks beside it. The care company form is inside `#partnership-contact`, with the existing header anchor and phone/email actions preserved. Other page copy, navigation, images and sections are unchanged.

`WebsiteInquiryForm` is the shared client component. Inputs use visible labels, 18px text and large tap targets. Required fields use native browser checks. Email or phone is required on the contact form, contact permission is required on both forms, and a failed send preserves entered values. The browser omits credentials and reuses the same UUID when retrying unchanged data. The thank-you text is: "Thanks. We usually reply within one business day."

## Preview setup

Set `NEXT_PUBLIC_WEBSITE_INQUIRY_URL` in Vercel **Preview** to the tested HomeCheck preview URL plus `/api/website-inquiry`. This is a public address, never a secret. Its only source is `src/lib/site.ts`. Redeploy after changes because Next.js embeds public variables at build time.

Set `MYINTEL_WEBSITE_PREVIEW_ORIGINS` on that HomeCheck preview to the exact website preview origins. Use the stable branch alias and the deployment URL actually opened. Only project-specific `my-intel-website-*.vercel.app` HTTPS origins are supported. Configure the HomeCheck preview's isolated database, capture flag, Resend delivery flag and Austin-only email allowlist as described in its `docs/website-inquiries.md`.

If the endpoint is unset, capture is disabled, or the request fails, the form displays "Please call (720) 989-1123." with a phone link. There is no customer auto-reply.

Do not set a production endpoint or merge for release until Austin approves. After approval, set Production `NEXT_PUBLIC_WEBSITE_INQUIRY_URL=https://homecheck.myintelhome.com/api/website-inquiry` and redeploy, after HomeCheck's production migration and endpoint are verified. Do not change production feature flags as part of website setup.

Current branch aliases, both require Vercel sign-in:

- Website: https://my-intel-website-git-feature-websi-5023cb-austin-8620s-projects.vercel.app
- HomeCheck: https://myintel-assesment-git-feature-webs-536818-austin-8620s-projects.vercel.app

For these previews, set website Preview `NEXT_PUBLIC_WEBSITE_INQUIRY_URL` to `https://myintel-assesment-git-feature-webs-536818-austin-8620s-projects.vercel.app/api/website-inquiry`. On the HomeCheck preview, set `APP_ORIGIN` to its branch alias above, and `MYINTEL_WEBSITE_PREVIEW_ORIGINS` to the website alias above. Configure only the new branches, keep the backend isolated and use Austin-only staff delivery as detailed in the companion instructions. The preview's cross-origin API must be accessible to the website's credential-free requests; do not disable production protections. No environment values have been set by this change.

## Validation and rollback

`npm run build` passes, and Vercel reports successful deployments for both repositories. Browser checks cover both pages at 1440, 1024, 768, 375 and 320px, input labels/font sizes, the required contact-method check, retained values after a failed request and the phone fallback. A local browser integration submitted both forms through the actual intake handler, checked two Operations records and retried both original payloads. Only two staff notifications reached the fake provider, no customer replies were created, and success-message focus passed. Test both forms on the hosted preview against the configured HomeCheck preview, confirm the Operations records and actual staff inbox arrival, then retry the original payload and UUID to verify no second staff email. Local provider mocks are not evidence of email arrival.

To roll back, remove the public endpoint variable and redeploy, or revert this form change. Keep the HomeCheck inquiry records and additive tables. Do not disable existing HomeCheck help requests.
