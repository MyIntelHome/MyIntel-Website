import type { Metadata } from "next";
import { site } from "@/lib/site";
import { capabilities, journey, positioning } from "@/lib/solutions";
import { CtaBand } from "@/components/CtaBand";
import { PageHero } from "@/components/PageHero";
import { Photo } from "@/components/Photo";
import {
  Activity,
  ArrowRight,
  Bell,
  Check,
  ClipboardCheck,
  Dashboard,
  DoorOpen,
  EyeOff,
  Moon,
  PersonStanding,
  Pill,
  Shield,
  ShowerHead,
  Users,
  Utensils,
  Wrench,
} from "@/components/icons";

export const metadata: Metadata = {
  title: "How It Works",
  description:
    "Assessment, practical home improvements and appropriate monitoring. Learn how MyIntel chooses support for the person, home and risks identified.",
};

const shortVersion = journey.map((step, i) => ({ ...step, title: step.label + ": " + step.title, icon: [ClipboardCheck, Wrench, Bell][i] }));

const monitors = capabilities.map((c, i) => ({ ...c, icon: [Bell, Moon, Utensils, PersonStanding, ShowerHead, Pill][i] }));

const privacyPoints = [
  { icon: EyeOff, title: "Core monitoring without cameras", body: "Our core monitoring doesn't require cameras. Optional customer-controlled security products are separate choices, discussed before installation." },
  { icon: Shield, title: "No wearable required", body: "Ambient monitoring is one option. Personal protection may be an option for people who want a wearable fall detector or a way to call for help. Availability and coverage are confirmed." },
  { icon: Users, title: "Choose who is involved", body: "We agree who receives updates and alerts. Voice-capable hubs may use a microphone for calls or communication. We explain the relevant data collection and privacy choices for the configuration." },
];

/* The genuinely technical layer, for people who want it. */
const technical = [
  { icon: Wrench, title: "Equipment chosen for the home", body: "Motion and door sensing, room-level fall sensing, optional personal alarms, supported sleep sensing or reminders may be considered. Your plan confirms the actual equipment. Installation and maintenance needs vary." },
  { icon: Activity, title: "Connectivity and coverage", body: "The selected hub and devices determine whether home internet, cellular connectivity or both are needed. We confirm coverage, power requirements and what happens when connectivity is interrupted." },
  { icon: ClipboardCheck, title: "Understanding routine changes", body: "Supported routine-monitoring features compare activity over time. Setup and learning periods vary by system. A change is a reason to check in, not a diagnosis." },
  { icon: Bell, title: "Detection has limits", body: "The chosen devices determine what can be detected and in which spaces. False alerts and missed events are possible. We explain those limits rather than promise every incident will be caught." },
  { icon: Users, title: "Agreeing how alerts are handled", body: positioning.response },
  { icon: Dashboard, title: "Working with care teams", body: "Shared views, reporting and integrations depend on the selected platform, permissions and agreed service. We confirm what is supported before promising access or integration." },
];

const platformInputs = [
  { icon: PersonStanding, label: "Motion & mobility" },
  { icon: DoorOpen, label: "Doors & entry" },
  { icon: Moon, label: "Optional sleep sensing" },
  { icon: Utensils, label: "Kitchen activity" },
  { icon: ShowerHead, label: "Bathroom routines" },
  { icon: Bell, label: "Falls" },
];

const platformOutputs = [
  {
    icon: Users,
    title: "Families",
    body: "Updates and alerts from the agreed features",
  },
  {
    icon: Dashboard,
    title: "Care teams",
    body: "Relevant information for agreed follow-up",
  },
  {
    icon: Shield,
    title: "Providers",
    body: "Supported trends to discuss with the person",
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

      {/* Core */}
      <div className="rounded-3xl bg-navy p-8 text-center text-cream shadow-2xl shadow-navy/25">
        <div className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-blue">
          <Activity className="h-7 w-7 text-white" />
        </div>
        <p className="mt-4 font-display text-2xl font-extrabold">MyIntel</p>
        <p className="mt-2 text-sm font-semibold text-cream/70">
          Turns everyday signals into something useful
        </p>
        <ul className="mt-5 space-y-2 text-left">
          {[
            "Learns this person's normal",
            "Spots what's out of the ordinary",
            "Filters out the noise",
          ].map((item) => (
            <li
              key={item}
              className="flex items-center gap-2.5 text-sm font-semibold text-cream/85"
            >
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
        title="Understand the home. Choose the right support."
        body="We assess risks, make practical improvements and recommend suitable technology. No wearable is required. The features and support depend on your plan."
      />

      {/* The short version */}
      <section className="container-x section">
        <div className="max-w-2xl">
          <p className="eyebrow">The short version</p>
          <h2 className="statement mt-4">Assess. Improve. Protect.</h2>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {shortVersion.map(({ icon: StepIcon, title, body }, i) => (
            <div key={title} className="card p-8">
              <div className="flex items-center gap-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-blue font-display text-lg font-extrabold text-white">
                  {i + 1}
                </span>
                <span className="grid h-11 w-11 place-items-center rounded-2xl bg-sky text-navy">
                  <StepIcon className="h-6 w-6" />
                </span>
              </div>
              <h3 className="mt-5 font-display text-xl font-extrabold text-ink">
                {title}
              </h3>
              <p className="mt-2.5 leading-relaxed text-clay">{body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* What it pays attention to */}
      <section className="bg-sand">
        <div className="container-x section">
          <div className="max-w-2xl">
            <p className="eyebrow">What it pays attention to</p>
            <h2 className="statement mt-4">
              The things that go wrong quietly, before they go wrong loudly
            </h2>
            <p className="lead mt-5">
              Depending on the system recommended for the home, selected features
              can help you notice changes in routines or potential concerns.
              Not every system includes every feature. We explain what the
              information means and when a personal check-in may be useful.
            </p>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {monitors.map(({ icon: MonitorIcon, title, body }) => (
              <div key={title} className="card p-7">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-sky text-navy">
                  <MonitorIcon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 font-display text-xl font-extrabold text-ink">
                  {title}
                </h3>
                <p className="mt-2.5 leading-relaxed text-clay">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Privacy */}
      <section className="bg-navy text-cream">
        <div className="container-x section">
          <div className="max-w-2xl">
            <p className="eyebrow !text-gold">The part people ask about first</p>
            <h2 className="statement mt-4 !text-cream">
              Dignity and choice come first.
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-cream/75">
              MyIntel monitors patterns, not people. Our core monitoring doesn't
              require cameras. We recommend only the technology that fits the
              person and explain the choices before anything is installed.
            </p>
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
                <h3 className="mt-5 font-display text-xl font-extrabold">
                  {title}
                </h3>
                <p className="mt-2.5 leading-relaxed text-cream/70">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What you see */}
      <section className="container-x section grid items-center gap-14 lg:grid-cols-2">
        <div>
          <p className="eyebrow">What you actually see</p>
          <h2 className="statement mt-4">A daily update, in plain words</h2>
          <p className="lead mt-6">
            The selected system determines what you see. A summary may show
            changes in movement or kitchen activity, with sleep information only
            when supported sensing is installed. It helps guide a check-in,
            rather than confirm a meal was eaten or that someone is safe.
          </p>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {[
              "Sleep patterns, with supported sensing",
              "Kitchen and meal-related activity",
              "Movement in covered spaces",
              "Anything worth a look",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-blue text-white">
                  <Check className="h-3.5 w-3.5" />
                </span>
                <span className="font-semibold text-ink/80">{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="relative">
          <div
            aria-hidden="true"
            className="absolute -inset-4 rounded-[2.5rem] bg-sky/50 blur-2xl"
          />
          <Photo
            src="/photos/product-dashboard.jpg"
            alt="The MyIntel daily update shown on a tablet and a phone"
            label="Dashboard photo"
            className="relative aspect-[4/3] rounded-3xl border border-white/60 shadow-[0_30px_70px_-25px_rgba(20,36,60,0.4)]"
          />
        </div>
      </section>

      {/* Where the information goes */}
      <section className="bg-sand">
        <div className="container-x section">
          <div className="max-w-2xl">
            <p className="eyebrow">Where the information goes</p>
            <h2 className="statement mt-4">
              Everyday signals in. Something useful out.
            </h2>
            <p className="lead mt-5">
              Your selected devices and platform determine the signals available.
              We agree who should receive updates and how concerns should be
              handled. The examples below depend on the equipment and permissions
              in the person's plan.
            </p>
          </div>
          <PlatformDiagram />
        </div>
      </section>

      {/* Under the hood , the real technical detail */}
      <section className="container-x section">
        <div className="max-w-2xl">
          <p className="eyebrow">Under the hood</p>
          <h2 className="statement mt-4">The details, for those who want them</h2>
          <p className="lead mt-5">
            Plenty of families never need this part, and that's fine. But if
            you're the one in the family who reads the manual, or you're a care
            provider evaluating us, here's what's actually happening.
          </p>
        </div>
        <div className="mt-14 grid gap-x-8 gap-y-10 sm:grid-cols-2">
          {technical.map(({ icon: TechIcon, title, body }) => (
            <div key={title} className="flex gap-5">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-blue/12 text-blue">
                <TechIcon className="h-6 w-6" />
              </span>
              <div>
                <h3 className="font-display text-xl font-extrabold text-ink">
                  {title}
                </h3>
                <p className="mt-2 leading-relaxed text-clay">{body}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="mt-12 rounded-2xl bg-sand px-6 py-5 font-semibold text-clay">
          Have a question we haven&apos;t answered? Call{" "}
          <a href={site.phoneHref} className="font-extrabold text-navy">
            {site.phone}
          </a>{" "}
          and ask. A real person will pick up, and if we don&apos;t know,
          we&apos;ll tell you that too.
        </p>
      </section>

      {/* Pilot program */}
      <section className="bg-navy text-cream">
        <div className="container-x section grid items-center gap-14 lg:grid-cols-2">
          <div>
            <p className="eyebrow !text-gold">Founding homes</p>
            <h2 className="statement mt-4 !text-cream">
              Be one of our first 50 homes
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-cream/75">
              We&apos;re choosing 50 Colorado households to be MyIntel founding
              homes. You get in early, we set everything up for you personally,
              and you have a direct line to our team while we build the rest of
              this.
            </p>
            <ul className="mt-8 space-y-4">
              {[
                "Early access, before general availability",
                "We handle the setup, start to finish",
                "Your feedback shapes what we build next",
                "A direct line to our team, not a support queue",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-blue text-white">
                    <Check className="h-3.5 w-3.5" />
                  </span>
                  <span className="font-semibold text-cream/85">{item}</span>
                </li>
              ))}
            </ul>
            <a
              href={site.waitlistUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-9 inline-flex items-center gap-2 font-bold text-cream underline underline-offset-4"
            >
              Join the founding homes list
              <ArrowRight className="h-5 w-5" />
            </a>
          </div>

          <div className="rounded-3xl border border-cream/10 bg-white/5 p-10">
            <h3 className="font-display text-2xl font-extrabold">
              Who it&apos;s for
            </h3>
            <ul className="mt-6 space-y-5">
              {[
                {
                  title: "Older adults",
                  body: "who intend to stay in their own home and want it to be a safe place to do that.",
                },
                {
                  title: "Family members",
                  body: "who worry about a parent living alone and are tired of guessing how they're doing.",
                },
                {
                  title: "Care providers",
                  body: "who need to know which of their clients needs attention first, today.",
                },
              ].map(({ title, body }) => (
                <li key={title} className="rounded-2xl bg-navy-dark p-5">
                  <p className="font-extrabold text-gold">{title}</p>
                  <p className="mt-1 leading-relaxed text-cream/70">{body}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <CtaBand
        title="Start with your home"
        body="Take the free home check to find a clear starting point before deciding what support or technology you need. There's no payment to see your results."
      />
    </>
  );
}
