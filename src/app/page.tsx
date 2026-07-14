import Link from "next/link";
import { site } from "@/lib/site";
import { CtaBand } from "@/components/CtaBand";
import { Photo } from "@/components/Photo";
import { Arcs, CareNetwork, DotGrid, HomeScene } from "@/components/Illustrations";
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
  { icon: Heart, label: "Older Adults", title: "Calm confidence at home" },
  { icon: Users, label: "Families", title: "Clarity without hovering" },
  {
    icon: ClipboardCheck,
    label: "Caregivers",
    title: "Prioritize where care matters",
  },
  { icon: Building, label: "Communities", title: "Operational calm at scale" },
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

function HeroVisual() {
  return (
    <div className="relative mx-auto w-full max-w-md">
      <div
        aria-hidden="true"
        className="absolute -inset-8 rounded-[3rem] bg-gradient-to-br from-sky via-cream to-blue/15"
      />
      <Arcs className="absolute -bottom-8 -left-10 w-48 text-sky-dark/50" />

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
        <DotGrid className="pointer-events-none absolute left-0 top-24 h-64 w-64 text-sky-dark/25" />
        <div className="container-x relative grid items-center gap-14 pb-20 pt-14 lg:grid-cols-2 lg:pb-28 lg:pt-24">
          <div>
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
          <HeroVisual />
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
        </div>
      </section>

      {/* Stat band (dark, full-bleed) */}
      <section className="relative overflow-hidden bg-navy text-cream">
        <Arcs className="absolute -bottom-16 -left-10 w-72 text-white/5" count={6} />
        <div className="container-x relative py-16 sm:py-20">
          <div className="grid gap-10 text-center sm:grid-cols-3">
            {stats.map(({ stat, label, source }) => (
              <div key={label}>
                <p className="font-display text-5xl font-extrabold tracking-tight text-cream sm:text-6xl">
                  {stat}
                </p>
                <p className="mx-auto mt-3 max-w-[15rem] font-semibold text-cream/70">
                  {label}
                </p>
                <p className="mt-3 text-xs font-extrabold uppercase tracking-widest text-gold">
                  Source: {source}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Outcomes — asymmetric editorial */}
      <section className="section">
        <div className="container-x grid gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <p className="eyebrow">Why it matters</p>
            <h2 className="statement mt-4">
              Detect early. Act sooner. Stay home longer.
            </h2>
            <p className="lead mt-5">
              Most emergencies among older adults are preceded by small,
              detectable changes in daily life. MyIntel is designed to catch
              those signals early, when there&apos;s still time to help.
            </p>
            <Link
              href="/how-it-works"
              className="mt-7 inline-flex items-center gap-2 font-extrabold text-blue hover:text-blue-dark"
            >
              See how the platform works
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>

          <ul className="divide-y divide-ink/8">
            {outcomes.map(({ icon: OutcomeIcon, title, body }) => (
              <li key={title} className="flex gap-6 py-8 first:pt-0">
                <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-sky text-navy">
                  <OutcomeIcon className="h-7 w-7" />
                </span>
                <div>
                  <h3 className="font-display text-2xl font-extrabold text-ink">
                    {title}
                  </h3>
                  <p className="mt-2 leading-relaxed text-clay">{body}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* How it works — illustration split */}
      <section className="bg-sand">
        <div className="container-x section grid items-center gap-14 lg:grid-cols-2">
          <div className="order-2 lg:order-1">
            <p className="eyebrow">How we help at home</p>
            <h2 className="statement mt-4">Start with a safer, smarter home</h2>
            <ol className="mt-10 space-y-8">
              {steps.map((step, i) => (
                <li key={step.title} className="relative flex gap-5">
                  {i < steps.length - 1 && (
                    <span
                      aria-hidden="true"
                      className="absolute left-[21px] top-12 h-[calc(100%-1rem)] w-0.5 bg-blue/20"
                    />
                  )}
                  <span className="relative z-10 grid h-11 w-11 shrink-0 place-items-center rounded-full bg-blue font-display text-lg font-extrabold text-white">
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="font-display text-xl font-extrabold text-ink">
                      {step.title}
                    </h3>
                    <p className="mt-2 leading-relaxed text-clay">{step.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <div className="order-1 lg:order-2">
            <div className="relative mx-auto max-w-md">
              <div
                aria-hidden="true"
                className="absolute -inset-6 rounded-[2.5rem] bg-white/60"
              />
              <HomeScene className="relative w-full" />
            </div>
          </div>
        </div>
      </section>

      {/* Features — dark showcase grid */}
      <section className="relative overflow-hidden bg-navy text-cream">
        <Arcs className="absolute -top-24 right-0 w-96 rotate-180 text-white/5" />
        <div className="container-x section relative">
          <div className="max-w-2xl">
            <p className="eyebrow !text-gold">One platform. Real-time action.</p>
            <h2 className="statement mt-4 !text-cream">
              Everything you need to feel confident, nothing you don&apos;t
            </h2>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map(({ icon: FeatureIcon, title, body }) => (
              <div
                key={title}
                className="rounded-3xl border border-cream/10 bg-white/5 p-7 transition-colors hover:bg-white/10"
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

      {/* Circle of care — illustration split */}
      <section className="section">
        <div className="container-x grid items-center gap-14 lg:grid-cols-2">
          <div className="relative order-2 lg:order-1">
            <CareNetwork
              className="mx-auto w-full max-w-sm"
              centerIcon={Home}
              nodeIconList={[Users, ClipboardCheck, Building]}
            />
          </div>
          <div className="order-1 lg:order-2">
            <p className="eyebrow">The circle of care</p>
            <h2 className="statement mt-4">
              An invisible safety net for everyone who loves them
            </h2>
            <p className="lead mt-6">
              Aging in place shouldn&apos;t mean choosing between independence
              and safety, or between privacy and peace of mind. MyIntel gives
              older adults the freedom of their own home and gives the people
              who love them the quiet reassurance that someone is always paying
              attention.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {audiences.map(({ icon: AudienceIcon, label, title }) => (
                <div
                  key={label}
                  className="flex items-center gap-2.5 rounded-full border border-ink/10 bg-white px-4 py-2.5 shadow-sm"
                >
                  <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-sky text-navy">
                    <AudienceIcon className="h-4 w-4" />
                  </span>
                  <span className="text-sm font-bold text-ink/80" title={title}>
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Assessment — photo split */}
      <section className="bg-sand">
        <div className="container-x section grid items-center gap-14 lg:grid-cols-2">
          <div className="relative">
            <Photo
              src="/photos/home-assessment.jpg"
              alt="A MyIntel specialist reviewing a home safety assessment with an older adult"
              label="Home visit photo"
              className="aspect-[4/3] rounded-3xl shadow-[0_20px_60px_-20px_rgba(20,36,60,0.35)]"
            />
            <div className="absolute -bottom-5 -right-5 hidden rounded-2xl border border-ink/8 bg-white px-5 py-4 shadow-xl shadow-navy/10 sm:block">
              <p className="font-display text-2xl font-extrabold text-navy">
                ~1 hour
              </p>
              <p className="text-xs font-bold text-clay">
                Typical install time
              </p>
            </div>
          </div>

          <div>
            <p className="eyebrow">Start here</p>
            <h2 className="statement mt-4">
              Every safe home starts with a Home Safety Assessment
            </h2>
            <p className="lead mt-6">
              Our Certified Aging in Place Specialists walk through your home,
              identify fall risks and hidden hazards, and build a personalized
              plan. From lighting and grab bars to smart technology.
            </p>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {[
                "Fall risks & accessibility",
                "Lighting & visibility",
                "Grants & financial aid",
                "Install, training & support",
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
        </div>
      </section>

      {/* Credibility — inline row with dividers */}
      <section className="section">
        <div className="container-x">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow justify-center">Built to be trusted</p>
            <h2 className="statement mt-4">Credible people, proven technology</h2>
          </div>
          <div className="mt-14 grid gap-y-12 sm:grid-cols-3 sm:gap-x-4 sm:divide-x sm:divide-ink/10">
            {[
              {
                icon: Stethoscope,
                title: "Clinically informed",
                body: "Assessments follow Certified Aging in Place Specialist (CAPS) standards and are shaped with occupational-therapist input.",
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
              <div key={title} className="px-2 text-center sm:px-8">
                <span className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-sky text-navy">
                  <CredIcon className="h-7 w-7" />
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

      {/* Testimonial — wide feature quote */}
      <section className="bg-sand">
        <div className="container-x section">
          <figure className="relative overflow-hidden rounded-[2rem] bg-navy px-8 py-14 text-cream sm:px-16">
            <Arcs className="absolute -bottom-20 -right-10 w-80 text-white/5" count={6} />
            <div className="relative mx-auto max-w-3xl text-center">
              <div className="flex justify-center gap-1 text-gold">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-6 w-6 fill-gold" />
                ))}
              </div>
              <blockquote className="mt-6 font-display text-2xl font-semibold leading-snug sm:text-3xl">
                &ldquo;My husband and I couldn&apos;t be happier with our
                experience with MyIntel. From start to finish, the team was
                professional, and the system has given us so much peace of
                mind.&rdquo;
              </blockquote>
              <figcaption className="mt-8 font-extrabold text-cream/80">
                Alice Koehn
                <span className="block text-sm font-semibold text-cream/55">
                  Founding pilot member
                </span>
              </figcaption>
            </div>
          </figure>

          <div className="mt-6 flex flex-col items-start justify-between gap-6 rounded-3xl border border-ink/8 bg-white p-8 sm:flex-row sm:items-center">
            <div className="flex items-start gap-4">
              <Quote className="h-8 w-8 shrink-0 text-blue" />
              <p className="font-display text-lg font-semibold text-ink">
                &ldquo;MyIntel started with my own grandparents. That&apos;s the
                peace of mind we build for every family.&rdquo;
                <span className="mt-1 block text-sm font-semibold text-clay">
                  Austin Gough, Founder &amp; CEO
                </span>
              </p>
            </div>
            <Link
              href="/about"
              className="inline-flex shrink-0 items-center gap-2 font-extrabold text-blue hover:text-blue-dark"
            >
              Our story
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
