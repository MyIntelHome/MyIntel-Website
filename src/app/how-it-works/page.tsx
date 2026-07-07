import type { Metadata } from "next";
import { site } from "@/lib/site";
import { CtaBand } from "@/components/CtaBand";
import { PageHero } from "@/components/PageHero";
import {
  Activity,
  ArrowRight,
  Bell,
  Check,
  DoorOpen,
  EyeOff,
  Moon,
  PersonStanding,
  Shield,
  ShowerHead,
  Utensils,
} from "@/components/icons";

export const metadata: Metadata = {
  title: "How It Works",
  description:
    "Discreet privacy-first sensors and routine-learning AI deliver calm, clear wellness insights for older adults living independently — no cameras, no wearables.",
};

const monitors = [
  {
    icon: Moon,
    title: "Sleep & activity patterns",
    body: "Restful nights and active days are the foundation of wellness. MyIntel learns each person's natural rhythm and flags meaningful changes.",
  },
  {
    icon: DoorOpen,
    title: "Entry & exit movements",
    body: "Know when doors open at unusual hours or when someone hasn't moved through the home as expected.",
  },
  {
    icon: Bell,
    title: "Fall detection",
    body: "Passive detection throughout the home alerts the right people quickly — no pendant to wear, no button to press.",
  },
  {
    icon: Utensils,
    title: "Kitchen & meal preparation",
    body: "Skipped meals are one of the earliest signs something is off. Kitchen activity is tracked gently and privately.",
  },
  {
    icon: ShowerHead,
    title: "Hygiene routines",
    body: "Changes in bathing and daily care routines can signal declining wellness long before a crisis.",
  },
  {
    icon: PersonStanding,
    title: "Mobility",
    body: "Room-to-room movement reveals gait changes, slowdowns, and increased night activity over time.",
  },
];

const privacyPoints = [
  {
    icon: EyeOff,
    title: "No cameras, ever",
    body: "Nothing in the system records video or images. Loved ones are never watched — patterns are sensed, not seen.",
  },
  {
    icon: Shield,
    title: "Nothing to wear or charge",
    body: "No pendants, watches, or buttons that get forgotten on the nightstand. The home itself does the sensing.",
  },
  {
    icon: Activity,
    title: "Insight, not surveillance",
    body: "We look for patterns and exceptions, not moment-to-moment activity. Families see summaries and alerts — dignity stays intact.",
  },
];

export default function HowItWorksPage() {
  return (
    <>
      <PageHero
        eyebrow="How it works"
        title="A safety and wellness platform that learns, not watches"
        body="MyIntel is a comprehensive in-home safety and wellness monitoring platform for older adults living independently. Sensors and analytics work together to detect patterns and risks — not just trigger alarms."
      />

      {/* What we monitor */}
      <section className="mx-auto max-w-6xl px-5 py-24">
        <div className="max-w-2xl">
          <p className="eyebrow">The full picture</p>
          <h2 className="display mt-4 text-4xl sm:text-5xl">
            What MyIntel quietly keeps an eye on
          </h2>
          <p className="prose-warm mt-5">
            Rather than a single alarm, MyIntel watches the whole pattern of
            daily life — because real risks show up as changes in routine long
            before an emergency.
          </p>
        </div>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {monitors.map(({ icon: MonitorIcon, title, body }) => (
            <div
              key={title}
              className="rounded-3xl border border-ink/8 bg-white p-7 shadow-sm"
            >
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-sage text-pine">
                <MonitorIcon className="h-6 w-6" />
              </span>
              <h3 className="mt-5 font-display text-xl font-semibold text-ink">
                {title}
              </h3>
              <p className="mt-2.5 leading-relaxed text-clay">{body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Privacy by design */}
      <section className="bg-pine-dark py-24 text-cream">
        <div className="mx-auto max-w-6xl px-5">
          <div className="max-w-2xl">
            <p className="eyebrow !text-gold">Privacy by design</p>
            <h2 className="display mt-4 text-4xl !text-cream sm:text-5xl">
              Support without feeling watched
            </h2>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {privacyPoints.map(({ icon: PrivacyIcon, title, body }) => (
              <div
                key={title}
                className="rounded-3xl border border-cream/10 bg-white/5 p-7"
              >
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-gold/15 text-gold">
                  <PrivacyIcon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 font-display text-xl font-semibold">
                  {title}
                </h3>
                <p className="mt-2.5 leading-relaxed text-cream/70">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pilot program */}
      <section className="mx-auto max-w-6xl px-5 py-24">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <div>
            <p className="eyebrow">Early access</p>
            <h2 className="display mt-4 text-4xl sm:text-5xl">
              Join the MyIntel pilot program
            </h2>
            <p className="prose-warm mt-6">
              We&apos;re inviting a limited number of households and care
              providers to shape the future of aging in place. Pilot
              participants get early access to the platform, white-glove
              installation, and a direct line to our team.
            </p>
            <ul className="mt-8 space-y-4">
              {[
                "Early access to the full monitoring platform",
                "Professional installation and personalized setup",
                "Direct input into the features we build next",
                "Priority support from the MyIntel team",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-pine text-cream">
                    <Check className="h-3.5 w-3.5" />
                  </span>
                  <span className="font-semibold text-ink/80">{item}</span>
                </li>
              ))}
            </ul>
            <a
              href={site.waitlistUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary mt-9"
            >
              Join the pilot waitlist
              <ArrowRight className="h-5 w-5" />
            </a>
          </div>

          <div className="rounded-3xl bg-sand p-10">
            <h3 className="font-display text-2xl font-semibold text-ink">
              Who the pilot is for
            </h3>
            <ul className="mt-6 space-y-5">
              {[
                {
                  title: "Aging adults",
                  body: "who want to remain in the homes they love, independently and confidently.",
                },
                {
                  title: "Family members",
                  body: "seeking reassurance about a parent or loved one — without intrusive monitoring.",
                },
                {
                  title: "Care providers",
                  body: "who need better insight to deliver informed, proactive support.",
                },
              ].map(({ title, body }) => (
                <li key={title} className="rounded-2xl bg-white p-5">
                  <p className="font-extrabold text-pine">{title}</p>
                  <p className="mt-1 leading-relaxed text-clay">{body}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <CtaBand
        title="Be first in line for the pilot"
        body="Spots are limited. Join the waitlist and we'll reach out as the pilot expands to your area."
      />
    </>
  );
}
