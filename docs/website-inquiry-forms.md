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

The website Preview `NEXT_PUBLIC_WEBSITE_INQUIRY_URL` is now set to `https://myintel-assesment-git-feature-webs-536818-austin-8620s-projects.vercel.app/api/website-inquiry`, scoped only to `feature/website-inquiry-forms`. On the HomeCheck preview, `APP_ORIGIN` and `MYINTEL_WEBSITE_PREVIEW_ORIGINS` are configured with the branch aliases above, with Austin-only staff delivery settings. Both preview redeployments reached READY after the Vercel connection was repaired on October 15. Production settings and other preview branches were not edited.

The new backend branch still needs its isolated database URL and valid auth token, Supabase server key, and Resend sending key. Existing older-branch Secrets are write-only and cannot be read back for copying. See the companion HomeCheck `docs/website-inquiries.md` for the exact four names and current checkpoint. No hosted submission or actual inbox delivery is verified yet. Protected browser tests also need origin-scoped Vercel test authentication on both previews; do not disable production protection or put bypass secrets in the website bundle.

## Validation and rollback

`npm run build` passes, and Vercel reports successful deployments for both repositories. Browser checks cover both pages at 1440, 1024, 768, 375 and 320px, input labels/font sizes, the required contact-method check, retained values after a failed request and the phone fallback. A local browser integration submitted both forms through the actual intake handler, checked two Operations records and retried both original payloads. Only two staff notifications reached the fake provider, no customer replies were created, and success-message focus passed. Test both forms on the hosted preview against the configured HomeCheck preview, confirm the Operations records and actual staff inbox arrival, then retry the original payload and UUID to verify no second staff email. Local provider mocks are not evidence of email arrival.

To roll back, remove the public endpoint variable and redeploy, or revert this form change. Keep the HomeCheck inquiry records and additive tables. Do not disable existing HomeCheck help requests.


## October 16 hosted verification checkpoint

This checkpoint supersedes the earlier missing-credentials status. Production is unchanged; keep both PRs draft and do not merge or launch.

- Browser control was verified in a local Codex session before operating dashboards. All four missing values are saved as Vercel Secrets only for HomeCheck Preview / `feature/website-inquiries`. No secret values are recorded here.
- The target is `myintel-payment-preview-0928`, never the production database. A database export passed SQLite integrity checks and all 11 existing migration checksums matched saved source, including the payment/billing lineage. Encrypted before/after copies were retained locally.
- Applied only `0008_website_inquiries.sql` (SHA-256 `17d9a0c21f8fc4f28f1856bbada0380f833bf66ecbbc64b14c8e01770de4ed06`). Turso Studio does not retain an explicit transaction across statements, so the three tables and index were added separately and verified before recording the journal entry. All 11 previous entries are preserved; the journal now has 12. Existing unrelated table counts were unchanged.
- HomeCheck deployment `dpl_3MnL6r1m8BCynDQiB34hcThvLSxx`, commit `bbb18f578644b615bfe82cc124abb410688d3f58`, reached READY with the new credentials. Capture and delivery report enabled; shop URL remains empty.
- Through Austin-approved temporary Vercel preview access, one clearly synthetic contact and one synthetic care-company payload returned HTTP 200 / `{ok:true}`. Each original payload and UUID was then retried unchanged, also returning 200. Post-test database inspection found exactly one inquiry, one submitted audit event, and one accepted staff notification per type, with no customer auto-replies.
- Actual Gmail INBOX receipt was verified at `austin@myintelhome.com`: one “MyIntel: Website contact” and one “MyIntel: Care company”, both at 2026-10-16 23:46:19 UTC (5:46:19 PM Denver). A later inbox search still found exactly those two test messages.
- Authenticated exact-origin preflight returned 204; an unapproved origin returned application JSON 403. Credential-free preflight was redirected by Vercel authentication (302). The unmodified hosted website form therefore showed its call fallback and preserved the entered values. Temporary access cookies do not authenticate the form's `credentials:omit` cross-origin request. Never embed a protection token in NEXT_PUBLIC configuration, relax production protection, or claim a browser success from the authenticated API checks.
- Remaining: successful protected browser-to-form submission using a supported origin-scoped test-authentication mechanism; desktop/375px hosted success verification; staff sign-in and visible confirmation of both Operations labels/fields/consent times. The first preview password sign-in returned a generic verification failure; Austin was asked to retry directly in the browser. Backend/API and inbox evidence do not prove the Operations UI or browser success.

The release approval gate remains in place. Do not merge, migrate production, change the production endpoint, or launch until the remaining hosted browser/staff checks pass and Austin approves.
