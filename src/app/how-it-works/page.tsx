import type { Metadata } from "next";
import { site } from "@/lib/site";
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
    "Small sensors around the home, a few days of learning what's normal, and a call when something's wrong. No cameras, nothing to wear. Here's how MyIntel works, start to finish.",
};

const shortVersion = [
  {
    icon: Wrench,
    title: "We put up a few small sensors",
    body: "They go on walls, doors, and under the mattress. Most homes take about an hour. Nothing gets drilled, nothing gets worn, nothing needs charging.",
  },
  {
    icon: Activity,
    title: "It learns what a normal day looks like",
    body: "Over the first several days it gets to know the routine: when they usually wake up, how often they're in the kitchen, how much they move around at night.",
  },
  {
    icon: Bell,
    title: "You hear about it when something changes",
    body: "A fall gets someone on the phone right away. A slow change, like eating less all week, shows up in the daily update instead.",
  },
];

const monitors = [
  {
    icon: Bell,
    title: "Falls",
    body: "If someone goes down and doesn't get back up, the people on the contact list are told immediately. There's no button to press and no pendant to remember.",
  },
  {
    icon: Moon,
    title: "Sleep",
    body: "Tossing all night, or getting up at 3 a.m. over and over, is often the very first sign that something is wrong. It shows up here before anywhere else.",
  },
  {
    icon: Utensils,
    title: "Meals",
    body: "When the kitchen stops getting used, meals are being skipped. That is one of the most reliable early warnings there is.",
  },
  {
    icon: PersonStanding,
    title: "Getting around",
    body: "Moving slower, or making fewer trips through the house, tends to show up in the data weeks before family notices it in person.",
  },
  {
    icon: ShowerHead,
    title: "Daily routines",
    body: "A change in bathing and everyday habits can be an early clue about an infection or something else worth a check-up.",
  },
  {
    icon: DoorOpen,
    title: "Coming and going",
    body: "Know if the front door opens at two in the morning, or if someone who normally gets out every day suddenly isn't.",
  },
];

const privacyPoints = [
  {
    icon: EyeOff,
    title: "No cameras, ever",
    body: "Nothing in the system records video, images, or audio. Nobody is ever watching your mom or dad. The sensors notice movement, not people.",
  },
  {
    icon: Shield,
    title: "Nothing to wear or charge",
    body: "No pendants, no watches, no button that ends up forgotten on the nightstand. The house does the work.",
  },
  {
    icon: Users,
    title: "You decide who sees it",
    body: "Only the family members and caregivers you approve can see anything. You choose who is on the list, and you can change it whenever you want.",
  },
];

/* The genuinely technical layer, for people who want it. */
const technical = [
  {
    icon: Wrench,
    title: "The sensors",
    body: "Battery-powered motion sensors, door contacts, a sleep sensor for the bed, fall detection, and optional extras like a medication-cabinet sensor. They mount with adhesive in most homes, so there's usually no wiring or drilling, and the batteries last months.",
  },
  {
    icon: Activity,
    title: "How the data moves",
    body: "Sensors report to a small hub in the home every few seconds, around the clock. The hub uses the home's internet connection, or cellular where there isn't one. No cameras or microphones are part of the system at any point.",
  },
  {
    icon: ClipboardCheck,
    title: "Building the baseline",
    body: "Over the first several days the system builds a picture of that specific person's normal. There's no generic template applied to everyone. What counts as unusual for one person is an ordinary Tuesday for another.",
  },
  {
    icon: Bell,
    title: "Deciding what's worth a call",
    body: "Each day gets compared against that baseline. Normal day-to-day variation is ignored on purpose, which is what keeps false alarms down. Sustained changes and sudden events are what actually generate an alert.",
  },
  {
    icon: Users,
    title: "How alerts are routed",
    body: "Alerts go out by urgency. A fall reaches the contact list immediately. A gradual change shows up in the daily summary instead, so nobody gets woken up over a late breakfast.",
  },
  {
    icon: Dashboard,
    title: "For care organizations",
    body: "Agencies and communities get a multi-resident view, wellness scoring across daily living activities, exportable reports, and integration options so the data can reach the systems a team already uses.",
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
    body: "A simple daily update, and a fast call when it matters",
  },
  {
    icon: Dashboard,
    title: "Care teams",
    body: "A clear list of who needs attention first",
  },
  {
    icon: Shield,
    title: "Providers",
    body: "Wellness trends that support better decisions",
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
        title="A few small sensors. Nothing to wear."
        body="MyIntel notices the everyday things a person would notice if they lived there, and speaks up when something changes. Here's the whole thing, start to finish, in plain English."
      />

      {/* The short version */}
      <section className="container-x section">
        <div className="max-w-2xl">
          <p className="eyebrow">The short version</p>
          <h2 className="statement mt-4">Three things happen.</h2>
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
              A real emergency usually has a run-up to it. Someone eats less for
              a week. Sleeps badly for a few nights. Stops moving around the way
              they used to. MyIntel watches that whole pattern instead of
              waiting for one alarm to go off.
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
              Nobody is watching your mom.
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-cream/75">
              This is the question we get before any other one, and it deserves
              a straight answer. There are no cameras in a MyIntel home. There
              never will be.
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
            Most days, there's nothing dramatic to report, and that's the point.
            You open the app, see that they slept fine and ate breakfast, and
            get on with your day. When there is something worth knowing, it's
            right at the top.
          </p>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {[
              "How they slept",
              "Whether they've eaten",
              "How much they're moving",
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
              Everything the sensors pick up runs through one system, which
              decides what matters and who needs to know about it. The same
              information reaches a daughter in another state and a nurse down
              the hall in the form each of them actually needs.
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
              className="btn-accent mt-9"
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
        title="Still have questions?"
        body="Call us to talk it through, or take the free home check for a clear starting point. Answer a few simple questions about the home, with no payment to see your results."
      />
    </>
  );
}
