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
    "Talk to a MyIntel home safety expert. Call (720) 989-1123, email info@myintelhome.com, or start a free HomeCheck.",
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
    body: "Questions, assessments, partnerships, careers. We answer everything personally.",
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
        body="Whether you're planning ahead, worried about a parent, or running a care community, we'd love to hear from you."
      />

      <section className="container-x section">
        <div className="grid gap-6 md:grid-cols-3">
          {channels.map(({ icon: ChannelIcon, title, body, linkLabel, href, external }) => (
            <a
              key={title}
              href={href}
              {...(external
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              className="group card card-hover p-8"
            >
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-sky text-navy">
                <ChannelIcon className="h-6 w-6" />
              </span>
              <h2 className="mt-5 font-display text-2xl font-semibold text-ink">
                {title}
              </h2>
              <p className="mt-2.5 leading-relaxed text-clay">{body}</p>
              <p className="mt-5 inline-flex items-center gap-2 font-extrabold text-navy">
                {linkLabel}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </p>
            </a>
          ))}
        </div>

        {/* Free home check */}
        <div className="mt-14 grid items-center gap-10 rounded-3xl bg-navy p-6 text-cream sm:p-10 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <h2 className="font-display text-3xl font-extrabold tracking-tight text-cream sm:text-4xl">
              Want a clear starting point for your home?
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-cream/75">
              Answer a few simple questions about the home and get a clear
              starting point. It&apos;s free, and there&apos;s no payment to see your results.
            </p>
          </div>
          <div className="lg:text-right">
            <a
              href={site.homeCheckUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-accent"
            >
              Start a free home check
              <ArrowRight className="h-5 w-5" />
            </a>
          </div>
        </div>

        {/* Service areas */}
        <div className="mt-14">
          <h2 className="font-display text-3xl font-extrabold tracking-tight text-ink">
            Where we work in person
          </h2>
          <div className="mt-6 grid gap-5 sm:grid-cols-3">
            {site.serviceAreas.map((area) => (
              <div
                key={area}
                className="flex items-center gap-4 rounded-2xl bg-sand px-6 py-5"
              >
                <MapPin className="h-6 w-6 shrink-0 text-blue" />
                <p className="font-display text-lg font-semibold text-ink">
                  {area}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-5 font-semibold text-clay">
            Not nearby? You can take the free home check wherever you live.
            Remote consultations are also available.
          </p>
        </div>
      </section>
    </>
  );
}
