import type { Metadata } from "next";
import { site } from "@/lib/site";
import { PageHero } from "@/components/PageHero";
import {
  ArrowRight,
  Facebook,
  Mail,
  MapPin,
  Phone,
} from "@/components/icons";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Talk to a MyIntel home safety expert. Call (720) 989-1123, email info@myintelhome.com, or join the waitlist for early access.",
};

const channels = [
  {
    icon: Phone,
    title: "Call us",
    body: "The fastest way to talk through your family's situation with a real person.",
    linkLabel: site.phone,
    href: site.phoneHref,
  },
  {
    icon: Mail,
    title: "Email us",
    body: "Questions, assessments, partnerships, careers — we answer everything personally.",
    linkLabel: site.email,
    href: site.emailHref,
  },
  {
    icon: Facebook,
    title: "Follow along",
    body: "Home safety tips, product updates, and stories from families we work with.",
    linkLabel: "MyIntel on Facebook",
    href: site.facebookUrl,
    external: true,
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Talk to a real person about your home"
        body="Whether you're planning ahead, worried about a parent, or running a care community — we'd love to hear from you."
      />

      <section className="mx-auto max-w-6xl px-5 py-24">
        <div className="grid gap-6 md:grid-cols-3">
          {channels.map(({ icon: ChannelIcon, title, body, linkLabel, href, external }) => (
            <a
              key={title}
              href={href}
              {...(external
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              className="group rounded-3xl border border-ink/8 bg-white p-8 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-pine/10"
            >
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-sage text-pine">
                <ChannelIcon className="h-6 w-6" />
              </span>
              <h2 className="mt-5 font-display text-2xl font-semibold text-ink">
                {title}
              </h2>
              <p className="mt-2.5 leading-relaxed text-clay">{body}</p>
              <p className="mt-5 inline-flex items-center gap-2 font-extrabold text-pine">
                {linkLabel}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </p>
            </a>
          ))}
        </div>

        {/* Waitlist highlight */}
        <div className="mt-14 grid items-center gap-10 rounded-3xl bg-pine p-10 text-cream lg:grid-cols-[1.4fr_1fr]">
          <div>
            <h2 className="display text-3xl !text-cream sm:text-4xl">
              Want early access to the MyIntel platform?
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-cream/75">
              Join the waitlist and we&apos;ll reach out as the pilot program
              expands. It takes about a minute, and there&apos;s no commitment.
            </p>
          </div>
          <div className="lg:text-right">
            <a
              href={site.waitlistUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-accent"
            >
              Join the Waitlist
              <ArrowRight className="h-5 w-5" />
            </a>
          </div>
        </div>

        {/* Service areas */}
        <div className="mt-14">
          <h2 className="display text-3xl">Where we work in person</h2>
          <div className="mt-6 grid gap-5 sm:grid-cols-3">
            {site.serviceAreas.map((area) => (
              <div
                key={area}
                className="flex items-center gap-4 rounded-2xl bg-sand px-6 py-5"
              >
                <MapPin className="h-6 w-6 shrink-0 text-terracotta" />
                <p className="font-display text-lg font-semibold text-ink">
                  {area}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-5 font-semibold text-clay">
            Not nearby? Remote consultations are available, and the waitlist
            helps us decide where to expand next.
          </p>
        </div>
      </section>
    </>
  );
}
