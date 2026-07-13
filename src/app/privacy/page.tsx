import type { Metadata } from "next";
import { site } from "@/lib/site";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How MyIntel collects, uses, and protects your information.",
};

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Privacy Policy"
        title="Your privacy is the product"
        body="Privacy isn't a legal checkbox for us. It's the reason MyIntel exists. Here's how we handle your information."
      />

      <section className="mx-auto max-w-3xl space-y-10 px-6 py-24 text-lg leading-relaxed text-clay">
        <div>
          <h2 className="font-display text-2xl font-extrabold tracking-tight text-ink">
            Information we collect
          </h2>
          <p className="mt-3">
            When you contact us, join our waitlist, or subscribe to updates, we
            collect the information you provide, such as your name, email
            address, and phone number. If you use the MyIntel platform, our
            sensors collect activity and routine data from the home. We never
            record video or audio of you or your loved ones.
          </p>
        </div>
        <div>
          <h2 className="display text-2xl">How we use it</h2>
          <p className="mt-3">
            We use your information to provide and improve our services,
            respond to your inquiries, deliver wellness insights to the people
            you authorize, and send updates you&apos;ve opted into. We do not
            sell your personal information.
          </p>
        </div>
        <div>
          <h2 className="display text-2xl">Who can see monitoring data</h2>
          <p className="mt-3">
            Wellness insights are shared only with the family members and care
            providers that the account holder explicitly authorizes. You stay
            in control of who sees what.
          </p>
        </div>
        <div>
          <h2 className="display text-2xl">Questions</h2>
          <p className="mt-3">
            For any privacy questions or requests regarding your data, contact
            us at{" "}
            <a href={site.emailHref} className="font-extrabold text-navy">
              {site.email}
            </a>{" "}
            or call {site.phone}.
          </p>
        </div>
        <p className="text-base">Last updated: July 2026</p>
      </section>
    </>
  );
}
