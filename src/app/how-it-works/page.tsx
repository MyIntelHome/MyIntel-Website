import type { Metadata } from "next";
import { site } from "@/lib/site";
import { CtaBand } from "@/components/CtaBand";
import { PageHero } from "@/components/PageHero";
import {
  Activity,
  ArrowRight,
  Bell,
  Check,
  Dashboard,
  DoorOpen,
  EyeOff,
  Moon,
  PersonStanding,
  Shield,
  ShowerHead,
  Users,
  Utensils,
} from "@/components/icons";

export const metadata: Metadata = {
  title: "How It Works",
  description:
    "Discreet privacy-first sensors and routine-learning AI deliver calm, clear wellness insights for older adults living independently. No cameras, no wearables.",
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
    body: "Passive detection throughout the home alerts the right people quickly. No pendant to wear, no button to press.",
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
    body: "Nothing in the system records video or images. Loved ones are never watched. Patterns are sensed, not seen.",
  },
  {
    icon: Shield,
    title: "Nothing to wear or charge",
    body: "No pendants, watches, or buttons that get forgotten on the nightstand. The home itself does the sensing.",
  },
  {
    icon: Activity,
    title: "Insight, not surveillance",
    body: "We look for patterns and exceptions, not moment-to-moment activity. Families see summaries and alerts. Dignity stays intact.",
  },
];

const platformInputs = [
  { icon: PersonStanding, label: "Motion & mobility" },
  { icon: DoorOpen, label: "Doors & entry" },
  { icon: Moon, label: "Sleep" },
  { icon: Utensils, label: "Kitchen & meals" },
  { icon: ShowerHead, label: "Bathroom routines" },
  { icon: Bell, label: "Falls" },
];

const platformOutputs = [
  {
    icon: Users,
    title: "Families",
    body: "Calm daily summaries and instant alerts",
  },
  {
    icon: Dashboard,
    title: "Care teams",
    body: "Exception-based priorities and ADL trends",
  },
  {
    icon: Shield,
    title: "Providers",
    body: "Wellness data that supports better decisions",
  },
];

function PlatformDiagram() {
  return (
    <div className="mt-14 grid items-center gap-8 lg:grid-cols-[1fr_auto_1.1fr_auto_1fr]">
      {/* Inputs */}
      <ul className="grid grid-cols-2 gap-3 lg:grid-cols-1">
        {platformInputs.map(({ icon: InputIcon, label }) => (
          <li
            key={label}
            className="flex items-center gap-3 rounded-full border border-ink/8 bg-white px-4 py-2.5 shadow-sm"
          >
            <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-sky text-navy">
              <InputIcon className="h-4 w-4" />
            </span>
            <span className="text-sm font-bold text-ink/80">{label}</span>
          </li>
        ))}
      </ul>

      <ArrowRight
        aria-hidden="true"
        className="mx-auto h-8 w-8 rotate-90 text-sky-dark lg:rotate-0"
      />

      {/* Platform core */}
      <div className="rounded-3xl bg-navy p-8 text-center text-cream shadow-2xl shadow-navy/25">
        <div className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-blue">
          <Activity className="h-7 w-7 text-white" />
        </div>
        <p className="mt-4 font-display text-2xl font-extrabold">
          The MyIntel Platform
        </p>
        <p className="mt-2 text-sm font-semibold text-cream/70">
          Routine-learning AI turns sensor data into care action
        </p>
        <ul className="mt-5 space-y-2 text-left">
          {[
            "Learns each person's normal",
            "Scores Activities of Daily Living",
            "Flags exceptions, filters noise",
          ].map((item) => (
            <li key={item} className="flex items-center gap-2.5 text-sm font-semibold text-cream/85">
              <Check className="h-4 w-4 shrink-0 text-gold" />
              {item}
            </li>
          ))}
        </ul>
      </div>

      <ArrowRight
        aria-hidden="true"
        className="mx-auto h-8 w-8 rotate-90 text-sky-dark lg:rotate-0"
      />

      {/* Outputs */}
      <ul className="space-y-3">
        {platformOutputs.map(({ icon: OutputIcon, title, body }) => (
          <li
            key={title}
            className="flex items-start gap-4 rounded-2xl border border-ink/8 bg-white p-5 shadow-sm"
          >
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-blue/15 text-blue">
              <OutputIcon className="h-5 w-5" />
            </span>
            <div>
              <p className="font-display font-bold text-ink">{title}</p>
              <p className="text-sm font-semibold text-clay">{body}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function HowItWorksPage() {
  return (
    <>
      <PageHero
        eyebrow="How it works"
        title="A safety and wellness platform that learns, not watches"
        body="MyIntel is a comprehensive in-home safety and wellness monitoring platform for older adults living independently. Sensors and analytics work together to detect patterns and risks, not just trigger alarms."
      />

      {/* Platform diagram */}
      <section className="mx-auto max-w-6xl px-5 py-24">
        <div className="max-w-2xl">
          <p className="eyebrow">The MyIntel Platform</p>
          <h2 className="display mt-4 text-4xl sm:text-5xl">
            One platform. Any sensor. Real-time action.
          </h2>
          <p className="prose-warm mt-5">
            Professional-grade Talius sensors feed one intelligent platform
            that turns raw home data into calm, useful updates for everyone in
            the circle of care.
          </p>
        </div>
        <PlatformDiagram />
      </section>

      {/* What we monitor */}
      <section className="bg-sand py-24">
        <div className="mx-auto max-w-6xl px-5">
          <div className="max-w-2xl">
            <p className="eyebrow">The full picture</p>
            <h2 className="display mt-4 text-4xl sm:text-5xl">
              What MyIntel quietly keeps an eye on
            </h2>
            <p className="prose-warm mt-5">
              Real risks show up as changes in routine long before an
              emergency. That&apos;s why MyIntel watches the whole pattern of
              daily life instead of waiting for a single alarm.
            </p>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {monitors.map(({ icon: MonitorIcon, title, body }) => (
              <div key={title} className="rounded-3xl bg-white p-7 shadow-sm">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-sky text-navy">
                  <MonitorIcon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 font-display text-xl font-bold text-ink">
                  {title}
                </h3>
                <p className="mt-2.5 leading-relaxed text-clay">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Privacy by design */}
      <section className="bg-navy py-24 text-cream">
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
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-blue/20 text-sky-dark">
                  <PrivacyIcon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 font-display text-xl font-bold">{title}</h3>
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
            <p className="eyebrow">Founding homes</p>
            <h2 className="display mt-4 text-4xl sm:text-5xl">
              Join the 50-home founding pilot
            </h2>
            <p className="prose-warm mt-6">
              We&apos;re selecting 50 Colorado households to become MyIntel
              founding homes. Founding members get early access to the
              platform, white-glove installation, and a direct line to our
              team as we shape the future of aging in place together.
            </p>
            <ul className="mt-8 space-y-4">
              {[
                "Early access to the full monitoring platform",
                "Professional installation and personalized setup",
                "Direct input into the features we build next",
                "Priority support from the MyIntel team",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-blue text-white">
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
            <h3 className="font-display text-2xl font-bold text-ink">
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
                  body: "seeking reassurance about a parent or loved one, without intrusive monitoring.",
                },
                {
                  title: "Care providers",
                  body: "who need better insight to deliver informed, proactive support.",
                },
              ].map(({ title, body }) => (
                <li key={title} className="rounded-2xl bg-white p-5">
                  <p className="font-extrabold text-navy">{title}</p>
                  <p className="mt-1 leading-relaxed text-clay">{body}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <CtaBand
        title="Be first in line for the pilot"
        body="Founding home spots are limited. Join the waitlist and we'll reach out as the pilot expands to your area."
      />
    </>
  );
}
