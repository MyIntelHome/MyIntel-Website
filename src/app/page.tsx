import Link from "next/link";
import { site } from "@/lib/site";
import { CtaBand } from "@/components/CtaBand";
import { Photo } from "@/components/Photo";
import { Arcs, DotGrid } from "@/components/Illustrations";
import {
  Activity,
  ArrowRight,
  Bell,
  Building,
  Check,
  ClipboardCheck,
  EyeOff,
  Heart,
  Home,
  MapPin,
  Moon,
  PersonStanding,
  Phone,
  Pill,
  ShieldCheck,
  ShowerHead,
  Sparkles,
  Star,
  Stethoscope,
  TrendingDown,
  Users,
  Utensils,
} from "@/components/icons";

/* The offer, in plain terms. */
const offer = [
  {
    title: "A home safety visit",
    body: "A certified specialist walks through the home with you and finds what's actually risky: loose rugs, poor lighting, a bathroom that's hard to get in and out of. You get a clear plan and no pressure to buy anything.",
  },
  {
    title: "A safer home",
    body: "We take care of the changes that matter, from grab bars and better lighting to quiet technology that can tell when someone falls. Most homes are set up in about an hour.",
  },
  {
    title: "Someone looking out, every day",
    body: "You get a simple daily update: they slept well, they ate, they're moving around like usual. If something looks wrong, you hear about it right away.",
  },
];

/* What the system notices, described the way a person would say it. */
const watchesFor = [
  {
    icon: Bell,
    title: "A fall",
    body: "If someone falls and doesn't get up, the right people are told right away. No button to press.",
  },
  {
    icon: Moon,
    title: "Sleep",
    body: "Restless nights and getting up at 3 a.m. are often the very first sign that something is wrong.",
  },
  {
    icon: Utensils,
    title: "Meals",
    body: "When the kitchen goes quiet, meals are usually being skipped. That's worth knowing early.",
  },
  {
    icon: PersonStanding,
    title: "Getting around",
    body: "Moving slower, or moving less, tends to show up here before anyone notices it in person.",
  },
  {
    icon: ShowerHead,
    title: "Daily routines",
    body: "A change in everyday habits can be an early clue about an infection or a problem worth a check-up.",
  },
  {
    icon: Pill,
    title: "Medications",
    body: "Gentle reminders for the pills and the glass of water that are easy to forget.",
  },
];

const crisisScenarios = [
  {
    icon: Bell,
    title: "The fall nobody finds for hours",
    body: "Help arrives late, and a bad fall becomes a much worse one.",
  },
  {
    icon: Home,
    title: "The hospital stay that becomes a move",
    body: "One emergency, and suddenly the family is touring assisted living.",
  },
  {
    icon: TrendingDown,
    title: "The slow decline nobody caught",
    body: "Eating less, sleeping worse, moving less. It builds for weeks before anyone sees it.",
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
    label: "of older adults want to stay in their own home",
    source: "AARP",
  },
];

const steps = [
  {
    title: "We visit",
    body: "A specialist spends about an hour in the home, gets to know the daily routine, and points out what's risky.",
  },
  {
    title: "We set it up",
    body: "Small sensors go on a few walls and doors. Nothing to wear, nothing to charge, nothing to remember.",
  },
  {
    title: "You stay in the loop",
    body: "After a few days it learns what a normal day looks like. From then on you get calm updates, and a fast alert when it really counts.",
  },
];

const audiences = [
  { icon: Heart, label: "Older adults" },
  { icon: Users, label: "Families" },
  { icon: ClipboardCheck, label: "Caregivers" },
  { icon: Building, label: "Senior communities" },
];

const partners = [
  { src: "/partners/talius.png", alt: "Talius" },
  { src: "/partners/ciap.png", alt: "CIAP" },
  { src: "/partners/adi.png", alt: "ADI" },
  { src: "/partners/portal-io.png", alt: "Portal.io" },
  { src: "/partners/wave.jpg", alt: "WAVE" },
  { src: "/partners/snap-one.jpg", alt: "Snap One" },
];

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
              Stay in the <span className="text-blue">home you love</span>.
            </h1>
            <p className="lead mt-6 max-w-xl">
              MyIntel helps older adults live safely on their own, and helps
              families stop worrying. We make the home safer, then quietly look
              out for it, so small problems get caught before they turn into
              emergencies.
            </p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
              <a
                href={site.homeCheckUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Start a free home check
                <ArrowRight className="h-5 w-5" />
              </a>
              <a href={site.phoneHref} className="btn-outline">
                <Phone className="h-5 w-5" />
                {site.phone}
              </a>
            </div>
            <p className="mt-4 text-sm font-semibold text-clay">
              Free to view your results. No account needed.
            </p>
            <ul className="mt-10 flex flex-wrap gap-x-7 gap-y-3 text-sm font-bold text-clay">
              {["No cameras", "Nothing to wear", "Set up in about an hour"].map(
                (item) => (
                  <li key={item} className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-blue" />
                    {item}
                  </li>
                )
              )}
            </ul>
          </div>

          <div className="relative mx-auto w-full max-w-lg">
            <div
              aria-hidden="true"
              className="absolute -inset-6 rounded-[3rem] bg-gradient-to-br from-sky via-cream to-blue/15"
            />
            <Photo
              src="/photos/app-nightstand.jpg"
              alt="The MyIntel app on a bedside stand with small sensors in a warm home"
              label="Product photo"
              className="relative aspect-[4/3] rounded-[2rem] border border-white/60 shadow-[0_30px_70px_-20px_rgba(20,36,60,0.4)]"
            />
            <div className="absolute -left-4 -bottom-5 flex items-center gap-3 rounded-2xl border border-ink/8 bg-white px-5 py-4 shadow-xl shadow-navy/10">
              <span className="grid h-10 w-10 place-items-center rounded-full bg-blue/15 text-blue">
                <EyeOff className="h-5 w-5" />
              </span>
              <div>
                <p className="text-sm font-extrabold text-ink">
                  Private by design
                </p>
                <p className="text-xs font-semibold text-clay">
                  No cameras. Ever.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* HomeCheck introduction */}
      <section aria-labelledby="homecheck-title" className="border-y border-blue/20 bg-sky">
        <div className="container-x grid gap-10 py-14 sm:py-16 lg:grid-cols-[1.3fr_1fr] lg:items-center">
          <div>
            <p className="eyebrow"><Sparkles className="h-4 w-4" /> New · HomeCheck pilot</p>
            <h2 id="homecheck-title" className="mt-4 font-display text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
              A clearer starting point for a safer home.
            </h2>
            <p className="lead mt-5">
              HomeCheck is MyIntel&apos;s guided online home check for you and your family.
              Choose the rooms you use, answer simple questions at your own pace, and
              review a report with practical next steps and areas that may need professional attention.
            </p>
            <Link
              href="/assessments"
              className="mt-7 inline-flex items-center gap-2 font-bold text-navy underline underline-offset-4"
            >
              See what HomeCheck covers <ArrowRight className="h-5 w-5 shrink-0" />
            </Link>
          </div>
          <div className="rounded-3xl border border-blue/15 bg-white p-7 sm:p-8">
            <p className="font-display text-xl font-extrabold text-navy">Know what to expect</p>
            <ul className="mt-5 space-y-4">
              {["Choose your rooms and describe everyday life at home", "Answer yes, no, or not sure. No clinical training needed", "Review your next steps and explore professional support"].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <Check className="mt-1 h-5 w-5 shrink-0 text-blue" />
                  <span className="font-semibold text-ink/80">{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm leading-relaxed text-clay">
              No payment to view your results. HomeCheck is a starting point based on your answers;
              it does not replace an in-home professional assessment.
            </p>
          </div>
        </div>
      </section>

      {/* Trust strip */}
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

      {/* The crisis we're preventing */}
      <section className="section">
        <div className="container-x">
          <div className="mx-auto max-w-3xl text-center">
            <p className="eyebrow justify-center">Why it matters</p>
            <h2 className="statement mt-4">
              Most emergencies don&apos;t come out of nowhere.
            </h2>
            <p className="lead mx-auto mt-5 max-w-2xl">
              Usually there were signs for days, sometimes weeks. Eating less.
              Sleeping worse. Moving around less than usual. The hard part
              isn&apos;t that the signs are hidden. It&apos;s that nobody is
              there to see them.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {crisisScenarios.map(({ icon: CrisisIcon, title, body }) => (
              <div key={title} className="card p-8">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-blue/12 text-blue">
                  <CrisisIcon className="h-6 w-6" />
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

      {/* Stat band */}
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

      {/* The offer , what you get */}
      <section className="section">
        <div className="container-x grid items-center gap-14 lg:grid-cols-2">
          <div className="relative">
            <Photo
              src="/photos/home-assessment.jpg"
              alt="A MyIntel specialist going over a home safety plan with an older adult at her kitchen table"
              label="Home visit photo"
              className="aspect-[4/3] rounded-3xl shadow-[0_20px_60px_-20px_rgba(20,36,60,0.35)]"
            />
            <div className="absolute -bottom-5 -right-5 hidden rounded-2xl border border-ink/8 bg-white px-5 py-4 shadow-xl shadow-navy/10 sm:block">
              <p className="font-display text-2xl font-extrabold text-navy">
                ~1 hour
              </p>
              <p className="text-xs font-bold text-clay">Typical setup</p>
            </div>
          </div>

          <div>
            <p className="eyebrow">What you get</p>
            <h2 className="statement mt-4">
              Three things that keep someone safely at home.
            </h2>
            <ol className="mt-10 space-y-8">
              {offer.map((item, i) => (
                <li key={item.title} className="relative flex gap-5">
                  {i < offer.length - 1 && (
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
                      {item.title}
                    </h3>
                    <p className="mt-2 leading-relaxed text-clay">{item.body}</p>
                  </div>
                </li>
              ))}
            </ol>
            <p className="mt-8 flex items-center gap-2 text-sm font-bold text-clay">
              <MapPin className="h-4 w-4 shrink-0 text-blue" />
              In-home visits in {site.serviceAreas.join(" and ")}
            </p>
            <div className="mt-6">
              <Link href="/assessments#professional-assessment" className="inline-flex items-center gap-2 font-bold text-navy underline underline-offset-4">
                Learn about professional home assessments
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Peace of mind / reduced burden */}
      <section className="bg-sand">
        <div className="container-x section grid items-center gap-14 lg:grid-cols-2">
          <div className="order-2 lg:order-1">
            <p className="eyebrow">For families</p>
            <h2 className="statement mt-4">
              You shouldn&apos;t have to call five times a day.
            </h2>
            <p className="lead mt-6">
              Caring for a parent from across town, or across the country,
              turns into a second job: the check-in calls, the guessing, the
              late-night drive over just to make sure. MyIntel carries that
              weight for you.
            </p>
            <ul className="mt-8 space-y-4">
              {[
                "Know they're okay without having to ask",
                "Sleep through the night without wondering",
                "Share updates with siblings and caregivers, so it isn't all on you",
                "Step in early, instead of reacting to a crisis",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-blue text-white">
                    <Check className="h-3.5 w-3.5" />
                  </span>
                  <span className="font-semibold text-ink/80">{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-8 font-display text-lg font-bold text-navy">
              Time together goes back to being time together.
            </p>
          </div>

          <div className="order-1 lg:order-2">
            <Photo
              src="/photos/family-couch.jpg"
              alt="An adult daughter and her mother talking and laughing together at home"
              label="Family photo"
              className="aspect-[16/10] rounded-3xl shadow-[0_20px_60px_-20px_rgba(20,36,60,0.3)]"
            />
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="section">
        <div className="container-x grid items-center gap-14 lg:grid-cols-2">
          <div>
            <p className="eyebrow">How it works</p>
            <h2 className="statement mt-4">
              Simple to set up. Nothing to learn.
            </h2>
            <ol className="mt-10 space-y-8">
              {steps.map((step, i) => (
                <li key={step.title} className="relative flex gap-5">
                  {i < steps.length - 1 && (
                    <span
                      aria-hidden="true"
                      className="absolute left-[21px] top-12 h-[calc(100%-1rem)] w-0.5 bg-blue/20"
                    />
                  )}
                  <span className="relative z-10 grid h-11 w-11 shrink-0 place-items-center rounded-full bg-navy font-display text-lg font-extrabold text-cream">
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
            <Link
              href="/how-it-works"
              className="mt-9 inline-flex items-center gap-2 font-extrabold text-blue hover:text-blue-dark"
            >
              See it in more detail
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>

          <div>
            <Photo
              src="/photos/care-network.jpg"
              alt="A home where daily wellness reaches family, caregivers, and care providers"
              label="How it works illustration"
              className="aspect-[16/9] rounded-3xl"
            />
          </div>
        </div>
      </section>

      {/* What it watches for */}
      <section className="relative overflow-hidden bg-navy text-cream">
        <Arcs className="absolute -top-24 right-0 w-96 rotate-180 text-white/5" />
        <div className="container-x section relative">
          <div className="max-w-2xl">
            <p className="eyebrow !text-gold">What it watches for</p>
            <h2 className="statement mt-4 !text-cream">
              It notices what you would, if you were there.
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-cream/75">
              No cameras. No microphones. No wristband to charge. Just small
              sensors that pick up on movement and everyday patterns, and let
              someone know when those patterns change.
            </p>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {watchesFor.map(({ icon: WatchIcon, title, body }) => (
              <div
                key={title}
                className="rounded-3xl border border-cream/10 bg-white/5 p-7 transition-colors hover:bg-white/10"
              >
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-blue/20 text-sky-dark">
                  <WatchIcon className="h-6 w-6" />
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

      {/* The daily update */}
      <section className="section">
        <div className="container-x grid items-center gap-14 lg:grid-cols-2">
          <div>
            <p className="eyebrow">The daily update</p>
            <h2 className="statement mt-4">One screen. The whole picture.</h2>
            <p className="lead mt-6">
              Open the app and see how the day is going, in plain language. No
              charts to figure out, and no alarms going off over nothing. If a
              professional care team is involved, they can dig deeper when they
              need to.
            </p>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {[
                "How they slept",
                "Whether they've eaten",
                "How much they're moving",
                "Anything that needs attention",
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
        </div>
      </section>

      {/* Testimonial + who we help */}
      <section className="bg-sand">
        <div className="container-x section">
          <figure className="relative overflow-hidden rounded-[2rem] bg-navy px-8 py-14 text-cream sm:px-16">
            <Arcs
              className="absolute -bottom-20 -right-10 w-80 text-white/5"
              count={6}
            />
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

          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <span className="text-sm font-extrabold uppercase tracking-widest text-clay">
              We help
            </span>
            {audiences.map(({ icon: AudienceIcon, label }) => (
              <div
                key={label}
                className="flex items-center gap-2.5 rounded-full border border-ink/10 bg-white px-4 py-2.5 shadow-sm"
              >
                <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-sky text-navy">
                  <AudienceIcon className="h-4 w-4" />
                </span>
                <span className="text-sm font-bold text-ink/80">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why you can trust us */}
      <section className="section">
        <div className="container-x">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow justify-center">Why you can trust us</p>
            <h2 className="statement mt-4">
              Real people. Proven technology.
            </h2>
          </div>
          <div className="mt-14 grid gap-y-12 sm:grid-cols-3 sm:gap-x-4 sm:divide-x sm:divide-ink/10">
            {[
              {
                icon: Stethoscope,
                title: "Certified specialists",
                body: "Your visit is done by a Certified Aging in Place Specialist, trained in making homes safer. They'll tell you what you need, and what you don't.",
              },
              {
                icon: ShieldCheck,
                title: "Private by design",
                body: "No cameras, ever. We look at patterns, not people. Nobody is watching your mom or dad, and nothing is recorded.",
              },
              {
                icon: Activity,
                title: "Proven technology",
                body: "The sensors we install are already trusted by senior living communities and professional care providers around the world.",
              },
            ].map(({ icon: TrustIcon, title, body }) => (
              <div key={title} className="px-2 text-center sm:px-8">
                <span className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-sky text-navy">
                  <TrustIcon className="h-7 w-7" />
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

      <CtaBand
        title="Not sure where to start?"
        body="Answer a few simple questions about the home and get a clear starting point. It's free, and there's no payment to see your results."
      />
    </>
  );
}

