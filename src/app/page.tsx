import Link from "next/link";
import { site } from "@/lib/site";
import { CtaBand } from "@/components/CtaBand";
import {
  Activity,
  ArrowRight,
  Bell,
  Building,
  Check,
  ClipboardCheck,
  Dashboard,
  EyeOff,
  Heart,
  Home,
  MapPin,
  Moon,
  PersonStanding,
  Pill,
  Quote,
  Sparkles,
  Users,
  Utensils,
} from "@/components/icons";

const features = [
  {
    icon: Activity,
    title: "Activities of Daily Living scores",
    body: "A single, holistic wellness score built from real daily routines — so you can see at a glance how someone is really doing.",
  },
  {
    icon: PersonStanding,
    title: "Mobility tracking, no wearables",
    body: "Discreet in-home sensors follow movement patterns room to room. Nothing to wear, charge, or remember.",
  },
  {
    icon: Utensils,
    title: "Meal & routine monitoring",
    body: "Kitchen activity, sleep, and daily rhythms are learned over time, so meaningful changes stand out early.",
  },
  {
    icon: Bell,
    title: "Fall detection",
    body: "Around-the-clock detection that alerts the right people quickly — without cameras watching anyone.",
  },
  {
    icon: Pill,
    title: "Medication & hydration reminders",
    body: "Gentle nudges for the small daily habits that keep independence on track.",
  },
  {
    icon: Dashboard,
    title: "Clear health dashboards",
    body: "Families and care teams see calm, digestible updates — not a flood of raw data or false alarms.",
  },
];

const audiences = [
  {
    icon: Heart,
    label: "For Older Adults",
    title: "Calm confidence at home",
    body: "Passive, privacy-first monitoring — no wearables, no cameras — so you feel supported without feeling watched.",
  },
  {
    icon: Users,
    label: "For Families & Loved Ones",
    title: "Clarity without hovering",
    body: "A clear view of routines and alerts — so you can support from anywhere without constant check-ins.",
  },
  {
    icon: ClipboardCheck,
    label: "For Caregivers & Homecare",
    title: "Prioritize where care matters",
    body: "Exception-based monitoring surfaces who needs attention first — boosting quality and saving time.",
  },
  {
    icon: Building,
    label: "For Communities & Facilities",
    title: "Operational calm at scale",
    body: "Portfolio-level oversight reduces response times, strengthens compliance, and builds family trust.",
  },
];

const steps = [
  {
    title: "Discreet sensors are installed",
    body: "Small, privacy-first sensors are placed around the home in about an hour. No cameras. No microphones pointed at conversations. Nothing to wear.",
  },
  {
    title: "AI learns the rhythm of home",
    body: "Over the first days, MyIntel learns what normal looks like — sleep, meals, movement, and daily routines unique to each person.",
  },
  {
    title: "Calm, clear updates reach the right people",
    body: "Families and care teams get simple daily summaries, and immediate alerts only when something truly needs attention.",
  },
];

function HeroVisual() {
  return (
    <div className="relative mx-auto w-full max-w-md">
      <div
        aria-hidden="true"
        className="absolute -inset-8 rounded-[3rem] bg-gradient-to-br from-sage via-sand to-terracotta/20"
      />

      <div className="relative rounded-3xl border border-ink/8 bg-white p-6 shadow-2xl shadow-pine/10">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-widest text-clay">
              Today at Mom&apos;s
            </p>
            <p className="font-display text-xl font-semibold text-ink">
              All routines on track
            </p>
          </div>
          <div className="relative grid h-16 w-16 place-items-center">
            <svg viewBox="0 0 64 64" className="absolute inset-0 h-16 w-16 -rotate-90">
              <circle cx="32" cy="32" r="27" fill="none" stroke="var(--color-sage)" strokeWidth="7" />
              <circle
                cx="32"
                cy="32"
                r="27"
                fill="none"
                stroke="var(--color-pine)"
                strokeWidth="7"
                strokeLinecap="round"
                strokeDasharray="169.6"
                strokeDashoffset="13.6"
              />
            </svg>
            <div className="text-center">
              <p className="font-display text-lg font-bold leading-none text-pine">92</p>
              <p className="text-[9px] font-extrabold uppercase tracking-wide text-clay">ADL</p>
            </div>
          </div>
        </div>

        <ul className="mt-5 space-y-3">
          {[
            { icon: Moon, text: "Slept 7h 40m — restful night" },
            { icon: Utensils, text: "Breakfast activity at 8:12 AM" },
            { icon: PersonStanding, text: "Morning walk around the house" },
            { icon: Pill, text: "Medication reminder acknowledged" },
          ].map(({ icon: ItemIcon, text }) => (
            <li
              key={text}
              className="flex items-center gap-3 rounded-xl bg-cream px-4 py-3"
            >
              <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-sage text-pine">
                <ItemIcon className="h-4 w-4" />
              </span>
              <span className="text-sm font-semibold text-ink/80">{text}</span>
              <Check className="ml-auto h-4 w-4 shrink-0 text-pine" />
            </li>
          ))}
        </ul>
      </div>

      <div className="absolute -left-6 -bottom-6 hidden items-center gap-3 rounded-2xl border border-ink/8 bg-white px-5 py-4 shadow-xl shadow-pine/10 sm:flex">
        <span className="grid h-10 w-10 place-items-center rounded-full bg-terracotta/15 text-terracotta">
          <EyeOff className="h-5 w-5" />
        </span>
        <div>
          <p className="text-sm font-extrabold text-ink">Privacy-first</p>
          <p className="text-xs font-semibold text-clay">No cameras. No wearables.</p>
        </div>
      </div>
    </div>
  );
}

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute -right-40 top-0 h-[34rem] w-[34rem] rounded-full bg-sage/60 blur-3xl"
        />
        <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-5 pb-20 pt-16 lg:grid-cols-2 lg:pb-28 lg:pt-24">
          <div>
            <p className="eyebrow">
              <Sparkles className="h-4 w-4" />
              Privacy-first aging in place
            </p>
            <h1 className="display mt-5 text-5xl leading-[1.05] sm:text-6xl">
              Peace of mind for families.{" "}
              <span className="text-pine">Powerful insights</span> for care
              teams.
            </h1>
            <p className="prose-warm mt-6 max-w-xl">
              MyIntel combines privacy-first sensors with routine-learning AI
              to deliver calm, clear updates — no cameras, no wearables. Ideal
              for homes and senior living communities.
            </p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <a
                href={site.waitlistUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Join the Waitlist
                <ArrowRight className="h-5 w-5" />
              </a>
              <Link href="/how-it-works" className="btn-outline">
                See how it works
              </Link>
            </div>
            <ul className="mt-10 flex flex-wrap gap-x-7 gap-y-3 text-sm font-bold text-clay">
              {["No cameras", "No wearables", "Installed in about an hour"].map(
                (item) => (
                  <li key={item} className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-pine" />
                    {item}
                  </li>
                )
              )}
            </ul>
          </div>
          <HeroVisual />
        </div>
      </section>

      {/* Stats band */}
      <section className="border-y border-ink/8 bg-sand">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 text-center sm:grid-cols-3">
          {[
            {
              stat: "90%",
              label: "of seniors want to stay in their own homes as they age",
            },
            {
              stat: "1 in 4",
              label: "adults over 65 experiences a fall each year",
            },
            {
              stat: "0",
              label: "cameras or wearables required — monitoring stays invisible",
            },
          ].map(({ stat, label }) => (
            <div key={stat}>
              <p className="font-display text-5xl font-bold text-pine">{stat}</p>
              <p className="mx-auto mt-3 max-w-xs font-semibold text-clay">
                {label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="mx-auto max-w-6xl px-5 py-24">
        <div className="max-w-2xl">
          <p className="eyebrow">How it works</p>
          <h2 className="display mt-4 text-4xl sm:text-5xl">
            Technology that understands the rhythm of home
          </h2>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {steps.map((step, i) => (
            <div
              key={step.title}
              className="relative rounded-3xl border border-ink/8 bg-white p-8 shadow-sm"
            >
              <span className="grid h-11 w-11 place-items-center rounded-full bg-pine font-display text-lg font-bold text-cream">
                {i + 1}
              </span>
              <h3 className="mt-5 font-display text-2xl font-semibold text-ink">
                {step.title}
              </h3>
              <p className="mt-3 leading-relaxed text-clay">{step.body}</p>
            </div>
          ))}
        </div>
        <div className="mt-10">
          <Link
            href="/how-it-works"
            className="inline-flex items-center gap-2 font-extrabold text-pine hover:text-pine-dark"
          >
            Explore the platform in depth
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>

      {/* Features */}
      <section className="bg-pine-dark py-24 text-cream">
        <div className="mx-auto max-w-6xl px-5">
          <div className="max-w-2xl">
            <p className="eyebrow !text-gold">Smart sensors + clear insights</p>
            <h2 className="display mt-4 text-4xl !text-cream sm:text-5xl">
              Everything you need to feel confident, nothing you don&apos;t
            </h2>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map(({ icon: FeatureIcon, title, body }) => (
              <div
                key={title}
                className="rounded-3xl border border-cream/10 bg-white/5 p-7 transition-colors hover:bg-white/10"
              >
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-gold/15 text-gold">
                  <FeatureIcon className="h-6 w-6" />
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

      {/* Audiences */}
      <section className="mx-auto max-w-6xl px-5 py-24">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow justify-center">Who we help</p>
          <h2 className="display mt-4 text-4xl sm:text-5xl">
            Everyday moments, made safer
          </h2>
          <p className="prose-warm mt-5">
            One system, designed so every person in the circle of care feels
            more supported and confident.
          </p>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {audiences.map(({ icon: AudienceIcon, label, title, body }) => (
            <div
              key={label}
              className="group rounded-3xl border border-ink/8 bg-white p-8 shadow-sm transition-shadow hover:shadow-lg hover:shadow-pine/10"
            >
              <div className="flex items-center gap-4">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-sage text-pine">
                  <AudienceIcon className="h-6 w-6" />
                </span>
                <p className="text-sm font-extrabold uppercase tracking-widest text-terracotta">
                  {label}
                </p>
              </div>
              <h3 className="mt-5 font-display text-2xl font-semibold text-ink">
                {title}
              </h3>
              <p className="mt-3 leading-relaxed text-clay">{body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Home Safety Assessment */}
      <section className="bg-sand">
        <div className="mx-auto grid max-w-6xl items-center gap-14 px-5 py-24 lg:grid-cols-2">
          <div>
            <p className="eyebrow">Start here</p>
            <h2 className="display mt-4 text-4xl sm:text-5xl">
              Every safe home starts with a Home Safety Assessment
            </h2>
            <p className="prose-warm mt-6">
              Our Certified Aging in Place Specialists walk through your home,
              identify fall risks and hidden hazards, and build a personalized
              plan — from lighting and grab bars to smart technology.
            </p>
            <ul className="mt-8 space-y-4">
              {[
                "Identify fall risks, lighting, and accessibility needs",
                "Personalized recommendations for your home and budget",
                "Guidance on grants, tax credits, and financial aid",
                "Professional installation, training, and ongoing support",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-pine text-cream">
                    <Check className="h-3.5 w-3.5" />
                  </span>
                  <span className="font-semibold text-ink/80">{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Link href="/assessments" className="btn-primary">
                Learn about assessments
                <ArrowRight className="h-5 w-5" />
              </Link>
              <a href={site.phoneHref} className="btn-outline">
                Call {site.phone}
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-3xl border border-ink/8 bg-white p-8 shadow-xl shadow-pine/10">
              <div className="flex items-center gap-4">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-terracotta/15 text-terracotta">
                  <Home className="h-6 w-6" />
                </span>
                <div>
                  <p className="font-display text-xl font-semibold text-ink">
                    Now serving three regions
                  </p>
                  <p className="text-sm font-semibold text-clay">
                    In-home assessments and installations
                  </p>
                </div>
              </div>
              <ul className="mt-6 space-y-3">
                {site.serviceAreas.map((area) => (
                  <li
                    key={area}
                    className="flex items-center gap-3 rounded-xl bg-cream px-4 py-3.5 font-bold text-ink/80"
                  >
                    <MapPin className="h-5 w-5 text-terracotta" />
                    {area}
                  </li>
                ))}
              </ul>
              <p className="mt-5 text-sm font-semibold leading-relaxed text-clay">
                Outside these areas? Join the waitlist — we&apos;re expanding,
                and remote consultations are available.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial + founder */}
      <section className="mx-auto max-w-6xl px-5 py-24">
        <div className="grid gap-6 lg:grid-cols-2">
          <figure className="flex flex-col justify-between rounded-3xl bg-pine p-10 text-cream">
            <Quote className="h-10 w-10 text-gold" />
            <blockquote className="mt-6 font-display text-2xl font-medium leading-snug">
              &ldquo;My husband and I couldn&apos;t be happier with our
              experience with MyIntel. From start to finish, the team was
              professional — and the system has given us so much peace of
              mind.&rdquo;
            </blockquote>
            <figcaption className="mt-8 font-extrabold text-cream/80">
              Alice Koehn
              <span className="block text-sm font-semibold text-cream/60">
                MyIntel customer
              </span>
            </figcaption>
          </figure>

          <div className="flex flex-col justify-between rounded-3xl border border-ink/8 bg-white p-10 shadow-sm">
            <div>
              <p className="eyebrow">Why we exist</p>
              <blockquote className="mt-6 font-display text-2xl font-medium leading-snug text-ink">
                &ldquo;MyIntel started with my own grandparents — wanting to
                know they were safe and comfortable, even from miles away.
                That&apos;s the peace of mind we build for every family.&rdquo;
              </blockquote>
            </div>
            <div className="mt-8 flex items-center justify-between gap-4">
              <p className="font-extrabold text-ink">
                Austin Gough
                <span className="block text-sm font-semibold text-clay">
                  Founder &amp; CEO, MyIntel
                </span>
              </p>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 font-extrabold text-pine hover:text-pine-dark"
              >
                Our story
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
