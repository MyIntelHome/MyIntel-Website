import type { Metadata } from "next";
import { site } from "@/lib/site";
import { CtaBand } from "@/components/CtaBand";
import { PageHero } from "@/components/PageHero";
import {
  ArrowRight,
  GraduationCap,
  Heart,
  Sparkles,
  Wrench,
} from "@/components/icons";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Join MyIntel and help families age in place with dignity. We're hiring Certified Aging in Place Specialists (CAPS) and home modification experts (ECHM).",
};

const roles = [
  {
    icon: GraduationCap,
    title: "Certified Aging in Place Specialist (CAPS)",
    body: "Lead in-home safety assessments and guide families through practical, dignified modifications. You'll be the trusted expert who shows people what's possible in the home they love.",
    tag: "Assessments",
  },
  {
    icon: Wrench,
    title: "Executive Certification in Home Modification (ECHM)",
    body: "Design and oversee home modification projects that transform safety and accessibility, from planning through professional installation.",
    tag: "Modifications",
  },
];

const perks = [
  {
    icon: Heart,
    title: "Work that matters",
    body: "Every visit helps someone stay independent in the home they love. Few jobs let you see the impact this directly.",
  },
  {
    icon: Sparkles,
    title: "Ground-floor opportunity",
    body: "MyIntel is growing fast across Colorado and Missouri. Join early and help shape how the company and the industry grow.",
  },
  {
    icon: GraduationCap,
    title: "Your expertise, valued",
    body: "We're built around certified specialists, not commissioned salespeople. Your professional judgment leads.",
  },
];

export default function CareersPage() {
  return (
    <>
      <PageHero
        eyebrow="Careers"
        title="Help families age in place with dignity"
        body="We're building the team that makes safe, independent living possible in Denver CO and Lake of the Ozarks MO."
      />

      {/* Open roles */}
      <section className="mx-auto max-w-6xl px-5 py-24">
        <div className="max-w-2xl">
          <p className="eyebrow">Who we&apos;re looking for</p>
          <h2 className="display mt-4 text-4xl sm:text-5xl">Open roles</h2>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {roles.map(({ icon: RoleIcon, title, body, tag }) => (
            <div
              key={title}
              className="flex flex-col rounded-3xl border border-ink/8 bg-white p-9 shadow-sm"
            >
              <div className="flex items-center justify-between gap-4">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-sky text-navy">
                  <RoleIcon className="h-6 w-6" />
                </span>
                <span className="rounded-full bg-blue/10 px-4 py-1.5 text-xs font-extrabold uppercase tracking-widest text-blue">
                  {tag}
                </span>
              </div>
              <h3 className="mt-6 font-display text-2xl font-semibold text-ink">
                {title}
              </h3>
              <p className="mt-3 grow leading-relaxed text-clay">{body}</p>
              <a
                href={`${site.emailHref}?subject=Career opportunity: ${encodeURIComponent(title)}`}
                className="btn-primary mt-8 self-start"
              >
                Reach out now
                <ArrowRight className="h-5 w-5" />
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Why MyIntel */}
      <section className="bg-sand py-24">
        <div className="mx-auto max-w-6xl px-5">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow justify-center">Why MyIntel</p>
            <h2 className="display mt-4 text-4xl sm:text-5xl">
              Do the most meaningful work of your career
            </h2>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {perks.map(({ icon: PerkIcon, title, body }) => (
              <div key={title} className="rounded-3xl bg-white p-8 text-center">
                <span className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-blue/15 text-blue">
                  <PerkIcon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 font-display text-xl font-semibold text-ink">
                  {title}
                </h3>
                <p className="mt-3 leading-relaxed text-clay">{body}</p>
              </div>
            ))}
          </div>
          <p className="mx-auto mt-12 max-w-xl text-center font-semibold text-clay">
            Don&apos;t see your exact role? If you&apos;re passionate about
            helping older adults live independently, we want to hear from you
            anyway. Email{" "}
            <a href={site.emailHref} className="font-extrabold text-navy">
              {site.email}
            </a>
            .
          </p>
        </div>
      </section>

      <CtaBand
        title="Ready to join the team?"
        body="Send us a note about your background and certifications. We respond to every application personally."
      />
    </>
  );
}
