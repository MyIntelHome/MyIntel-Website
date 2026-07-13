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
  Clock,
  Dashboard,
  EyeOff,
  Heart,
  Home,
  MapPin,
  Moon,
  PersonStanding,
  Pill,
  Quote,
  ShieldCheck,
  Sparkles,
  Star,
  Stethoscope,
  TrendingDown,
  Users,
  Utensils,
} from "@/components/icons";

const features = [
  {
    icon: Activity,
    title: "Activities of Daily Living scores",
    body: "One holistic wellness score built from real daily routines. See at a glance how someone is really doing.",
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
    body: "Around-the-clock detection that alerts the right people quickly, without cameras watching anyone.",
  },
  {
    icon: Pill,
    title: "Medication & hydration reminders",
    body: "Gentle nudges for the small daily habits that keep independence on track.",
  },
  {
    icon: Dashboard,
    title: "Clear health dashboards",
    body: "Families and care teams see calm, digestible updates. Not a flood of raw data or false alarms.",
  },
];

const outcomes = [
  {
    icon: TrendingDown,
    title: "Fewer avoidable emergencies",
    body: "By surfacing changes in routine early, MyIntel is built to help families and care teams step in before a small issue becomes a hospital visit.",
  },
  {
    icon: Clock,
    title: "Earlier awareness",
    body: "The platform learns each person's normal and flags meaningful shifts in sleep, mobility, and meals, often days before anyone would notice on their own.",
  },
  {
    icon: Home,
    title: "More time at home",
    body: "The goal of every MyIntel home: help older adults stay independent, safely, in the place they most want to be.",
  },
];

const stats = [
  { stat: "1 in 4", label: "adults over 65 falls each year", source: "CDC" },
  {
    stat: "Every 11s",
    label: "an older adult is treated in the ER for a fall",
    source: "NCOA",
  },
  {
    stat: "Nearly 90%",
    label: "of older adults want to age in their own home",
    source: "AARP",
  },
];

const audiences = [
  {
    icon: Heart,
    label: "For Older Adults",
    title: "Calm confidence at home",
    body: "Passive, privacy-first monitoring. No wearables, no cameras. You feel supported without feeling watched.",
  },
  {
    icon: Users,
    label: "For Families & Loved Ones",
    title: "Clarity without hovering",
    body: "A clear view of routines and alerts, so you can support from anywhere without constant check-ins.",
  },
  {
    icon: ClipboardCheck,
    label: "For Caregivers & Homecare",
    title: "Prioritize where care matters",
    body: "Exception-based monitoring surfaces who needs attention first, boosting quality and saving time.",
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
    title: "Assess the living space and lifestyle",
    body: "A certified specialist walks the home with you, learns the daily routine, and identifies where risks actually are. That assessment shapes everything that follows.",
  },
  {
    title: "Set up the right smart supports",
    body: "Discreet sensors and safety upgrades are installed in about an hour. No cameras. No microphones. Nothing to wear or charge.",
  },
  {
    title: "Track daily rhythm for proactive care",
    body: "The platform learns what normal looks like, then sends families and care teams calm daily summaries and immediate alerts only when something truly needs attention.",
  },
];

const partners = [
  { src: "/partners/talius.png", alt: "Talius" },
  { src: "/partners/ciap.png", alt: "CIAP" },
  { src: "/partners/adi.png", alt: "ADI" },
  { src: "/partners/portal-io.png", alt: "Portal.io" },
  { src: "/partners/wave.jpg", alt: "WAVE" },
  { src: "/partners/snap-one.jpg", alt: "Snap One" },
];

function FingerprintArcs({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 400 400"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      {[70, 110, 150, 190, 230].map((r) => (
        <path
          key={r}
          d={`M ${200 - r} 400 A ${r} ${r} 0 0 1 ${200 + r} 400`}
          stroke="currentColor"
          strokeWidth="10"
          strokeLinecap="round"
        />
      ))}
    </svg>
  );
}

function HeroVisual() {
  return (
    <div className="relative mx-auto w-full max-w-md">
      <div
        aria-hidden="true"
        className="absolute -inset-8 rounded-[3rem] bg-gradient-to-br from-sky via-cream to-blue/15"
      />
      <FingerprintArcs className="absolute -bottom-8 -left-10 w-48 text-sky-dark/50" />

      <div className="relative rounded-3xl border border-ink/8 bg-white p-6 shadow-[0_20px_60px_-15px_rgba(20,36,60,0.25)]">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-widest text-clay">
              Today at Mom&apos;s
            </p>
            <p className="font-display text-xl font-extrabold text-ink">
              All routines on track
            </p>
          </div>
          <div className="relative grid h-16 w-16 place-items-center">
            <svg
              viewBox="0 0 64 64"
              className="absolute inset-0 h-16 w-16 -rotate-90"
            >
              <circle
                cx="32"
                cy="32"
                r="27"
                fill="none"
                stroke="var(--color-sky)"
                strokeWidth="7"
              />
              <circle
                cx="32"
                cy="32"
                r="27"
                fill="none"
                stroke="var(--color-blue)"
                strokeWidth="7"
                strokeLinecap="round"
                strokeDasharray="169.6"
                strokeDashoffset="13.6"
              />
            </svg>
            <div className="text-center">
              <p className="font-display text-lg font-extrabold leading-none text-navy">
                92
              </p>
              <p className="text-[9px] font-extrabold uppercase tracking-wide text-clay">
                ADL
              </p>
            </div>
          </div>
        </div>

        <ul className="mt-5 space-y-3">
          {[
            { icon: Moon, text: "Slept 7h 40m, restful night" },
            { icon: Utensils, text: "Breakfast activity at 8:12 AM" },
            { icon: PersonStanding, text: "Morning walk around the house" },
            { icon: Pill, text: "Medication reminder acknowledged" },
          ].map(({ icon: ItemIcon, text }) => (
            <li
              key={text}
              className="flex items-center gap-3 rounded-xl bg-cream px-4 py-3"
            >
              <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-sky text-navy">
                <ItemIcon className="h-4 w-4" />
              </span>
              <span className="text-sm font-semibold text-ink/80">{text}</span>
              <Check className="ml-auto h-4 w-4 shrink-0 text-blue" />
            </li>
          ))}
        </ul>
      </div>

      <div className="absolute -right-4 -bottom-6 hidden items-center gap-3 rounded-2xl border border-ink/8 bg-white px-5 py-4 shadow-xl shadow-navy/10 sm:flex">
        <span className="grid h-10 w-10 place-items-center rounded-full bg-blue/15 text-blue">
          <EyeOff className="h-5 w-5" />
        </span>
        <div>
          <p className="text-sm font-extrabold text-ink">Privacy-first</p>
          <p className="text-xs font-semibold text-clay">
            No cameras. No wearables.
          </p>
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
          className="absolute -right-40 top-0 h-[34rem] w-[34rem] rounded-full bg-sky/70 blur-3xl"
        />
        <div className="container-x relative grid items-center gap-14 pb-20 pt-14 lg:grid-cols-2 lg:pb-28 lg:pt-24">
          <div className="reveal">
            <p className="eyebrow">
              <Sparkles className="h-4 w-4" />
              Safer, Smarter Care
            </p>
            <h1 className="statement mt-5 text-5xl sm:text-6xl lg:text-7xl">
              Peace of mind for families.{" "}
              <span className="text-blue">Independence</span> for seniors.
            </h1>
            <p className="lead mt-6 max-w-xl">
              MyIntel combines privacy-first sensors with routine-learning AI to
              deliver calm, clear updates. No cameras. No wearables. Built for
              homes and senior living communities.
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
                    <Check className="h-4 w-4 text-blue" />
                    {item}
                  </li>
                )
              )}
            </ul>
          </div>
          <div className="reveal">
            <HeroVisual />
          </div>
        </div>
      </section>

      {/* Trust / partner strip */}
      <section className="border-y border-ink/8 bg-white">
        <div className="container-x py-10">
          <p className="text-center text-xs font-extrabold uppercase tracking-[0.2em] text-clay">
            Powered by proven care technology
          </p>
          <div className="mt-7 flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
            {partners.map(({ src, alt }) => (
              /* eslint-disable-next-line @next/next/no-img-element */
              <img
                key={alt}
                src={src}
                alt={alt}
                className="h-9 w-auto opacity-60 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0 sm:h-11"
              />
            ))}
          </div>
          <p className="mt-8 text-center text-sm font-semibold text-clay">
            Enterprise-grade sensors read the home every few seconds, around the
            clock, so nothing meaningful slips through.
          </p>
        </div>
      </section>

      {/* Outcomes (research-backed) */}
      <section className="section">
        <div className="container-x">
          <div className="mx-auto max-w-3xl text-center reveal">
            <p className="eyebrow justify-center">Why it matters</p>
            <h2 className="statement mt-4">
              Detect early. Act sooner. Stay home longer.
            </h2>
            <p className="lead mx-auto mt-5 max-w-2xl">
              Most emergencies among older adults are preceded by small,
              detectable changes in daily life. MyIntel is designed to catch
              those signals early, when there&apos;s still time to help.
            </p>
          </div>

          {/* Research stat row */}
          <div className="mx-auto mt-14 grid max-w-4xl gap-6 sm:grid-cols-3 reveal">
            {stats.map(({ stat, label, source }) => (
              <div
                key={label}
                className="rounded-3xl bg-sand p-8 text-center"
              >
                <p className="font-display text-4xl font-extrabold tracking-tight text-navy sm:text-5xl">
                  {stat}
                </p>
                <p className="mx-auto mt-3 max-w-[15rem] font-semibold text-clay">
                  {label}
                </p>
                <p className="mt-4 text-xs font-extrabold uppercase tracking-widest text-clay/60">
                  Source: {source}
                </p>
              </div>
            ))}
          </div>

          {/* Outcome cards */}
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {outcomes.map(({ icon: OutcomeIcon, title, body }) => (
              <div key={title} className="card card-hover p-8 reveal">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-blue/12 text-blue">
                  <OutcomeIcon className="h-6 w-6" />
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

      {/* How it works */}
      <section className="bg-sand">
        <div className="container-x section">
          <div className="max-w-2xl reveal">
            <p className="eyebrow">How we help at home</p>
            <h2 className="statement mt-4">Start with a safer, smarter home</h2>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {steps.map((step, i) => (
              <div key={step.title} className="rounded-3xl bg-white p-8 reveal">
                <span className="grid h-11 w-11 place-items-center rounded-full bg-blue font-display text-lg font-extrabold text-white">
                  {i + 1}
                </span>
                <h3 className="mt-5 font-display text-2xl font-extrabold text-ink">
                  {step.title}
                </h3>
                <p className="mt-3 leading-relaxed text-clay">{step.body}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 reveal">
            <Link
              href="/how-it-works"
              className="inline-flex items-center gap-2 font-extrabold text-blue hover:text-blue-dark"
            >
              Explore the platform in depth
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="relative overflow-hidden bg-navy text-cream">
        <FingerprintArcs className="absolute -top-24 right-0 w-96 rotate-180 text-white/5" />
        <div className="container-x section relative">
          <div className="max-w-2xl reveal">
            <p className="eyebrow !text-gold">One platform. Real-time action.</p>
            <h2 className="statement mt-4 !text-cream">
              Everything you need to feel confident, nothing you don&apos;t
            </h2>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map(({ icon: FeatureIcon, title, body }) => (
              <div
                key={title}
                className="rounded-3xl border border-cream/10 bg-white/5 p-7 transition-colors hover:bg-white/10 reveal"
              >
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-blue/20 text-sky-dark">
                  <FeatureIcon className="h-6 w-6" />
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

      {/* Emotional — circle of care */}
      <section className="section">
        <div className="container-x">
          <div className="grid items-center gap-14 lg:grid-cols-2">
            <div className="reveal">
              <p className="eyebrow">The circle of care</p>
              <h2 className="statement mt-4">
                An invisible safety net for everyone who loves them
              </h2>
              <p className="lead mt-6">
                Aging in place shouldn&apos;t mean choosing between independence
                and safety, or between privacy and peace of mind. MyIntel gives
                older adults the freedom of their own home and gives the people
                who love them the quiet reassurance that someone is always
                paying attention.
              </p>
              <ul className="mt-8 space-y-4">
                {[
                  "Seniors keep their independence, privacy, and dignity",
                  "Families trade constant worry for calm, honest updates",
                  "Caregivers know exactly who needs them first",
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

            <div className="grid gap-6 sm:grid-cols-2">
              {audiences.map(({ icon: AudienceIcon, label, title }) => (
                <div
                  key={label}
                  className="card p-6 reveal"
                >
                  <span className="grid h-11 w-11 place-items-center rounded-2xl bg-sky text-navy">
                    <AudienceIcon className="h-5 w-5" />
                  </span>
                  <p className="mt-4 text-xs font-extrabold uppercase tracking-widest text-blue">
                    {label}
                  </p>
                  <h3 className="mt-1 font-display text-lg font-extrabold text-ink">
                    {title}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Home Safety Assessment */}
      <section className="bg-sand">
        <div className="container-x section grid items-center gap-14 lg:grid-cols-2">
          <div className="reveal">
            <p className="eyebrow">Start here</p>
            <h2 className="statement mt-4">
              Every safe home starts with a Home Safety Assessment
            </h2>
            <p className="lead mt-6">
              Our Certified Aging in Place Specialists walk through your home,
              identify fall risks and hidden hazards, and build a personalized
              plan. From lighting and grab bars to smart technology.
            </p>
            <ul className="mt-8 space-y-4">
              {[
                "Identify fall risks, lighting, and accessibility needs",
                "Personalized recommendations for your home and budget",
                "Guidance on grants, tax credits, and financial aid",
                "Professional installation, training, and ongoing support",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-blue text-white">
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

          <div className="relative reveal">
            <div className="card p-8">
              <div className="flex items-center gap-4">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-blue/15 text-blue">
                  <Home className="h-6 w-6" />
                </span>
                <div>
                  <p className="font-display text-xl font-extrabold text-ink">
                    Now serving two regions
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
                    <MapPin className="h-5 w-5 text-blue" />
                    {area}
                  </li>
                ))}
              </ul>
              <p className="mt-5 text-sm font-semibold leading-relaxed text-clay">
                Outside these areas? Join the waitlist. We&apos;re expanding, and
                remote consultations are available.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Credibility */}
      <section className="section">
        <div className="container-x">
          <div className="mx-auto max-w-2xl text-center reveal">
            <p className="eyebrow justify-center">Built to be trusted</p>
            <h2 className="statement mt-4">
              Credible people, proven technology
            </h2>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {[
              {
                icon: Stethoscope,
                title: "Clinically informed",
                body: "Assessments follow Certified Aging in Place Specialist (CAPS) standards and are shaped with input from occupational therapists.",
              },
              {
                icon: ShieldCheck,
                title: "Privacy by design",
                body: "No cameras and no wearables, ever. We sense patterns, not moments, so dignity and privacy are protected from day one.",
              },
              {
                icon: Activity,
                title: "Enterprise-grade platform",
                body: "MyIntel runs on professional care-sensing technology trusted by senior living operators and care providers worldwide.",
              },
            ].map(({ icon: CredIcon, title, body }) => (
              <div key={title} className="card p-8 reveal">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-sky text-navy">
                  <CredIcon className="h-6 w-6" />
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

      {/* Testimonial + founder */}
      <section className="bg-sand">
        <div className="container-x section">
          <div className="grid gap-6 lg:grid-cols-2">
            <figure className="flex flex-col justify-between rounded-3xl bg-navy p-10 text-cream reveal">
              <div>
                <div className="flex gap-1 text-gold">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-gold" />
                  ))}
                </div>
                <blockquote className="mt-6 font-display text-2xl font-semibold leading-snug">
                  &ldquo;My husband and I couldn&apos;t be happier with our
                  experience with MyIntel. From start to finish, the team was
                  professional, and the system has given us so much peace of
                  mind.&rdquo;
                </blockquote>
              </div>
              <figcaption className="mt-8 font-extrabold text-cream/80">
                Alice Koehn
                <span className="block text-sm font-semibold text-cream/60">
                  Founding pilot member
                </span>
              </figcaption>
            </figure>

            <div className="flex flex-col justify-between rounded-3xl bg-white p-10 shadow-sm reveal">
              <div>
                <p className="eyebrow">Why we exist</p>
                <blockquote className="mt-6 font-display text-2xl font-semibold leading-snug text-ink">
                  &ldquo;MyIntel started with my own grandparents. I wanted to
                  know they were safe and comfortable, even from miles away.
                  That&apos;s the peace of mind we build for every
                  family.&rdquo;
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
                  className="inline-flex items-center gap-2 font-extrabold text-blue hover:text-blue-dark"
                >
                  Our story
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
