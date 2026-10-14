import Link from "next/link";
import { site } from "@/lib/site";
import { capabilities, followUp, journey, positioning, solutionPolicy } from "@/lib/solutions";
import { CtaBand } from "@/components/CtaBand";
import { Arcs } from "@/components/Illustrations";
import { EditorialHero } from "@/components/EditorialHero";
import { EditorialImage } from "@/components/EditorialImage";
import { PackagePreview } from "@/components/SolutionComparison";
import { AudiencePaths } from "@/components/AudiencePaths";
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
const offer = journey;

/* What the system notices, described the way a person would say it. */
const watchIcons = [Bell, Moon, Utensils, PersonStanding, ShowerHead, Pill];
const watchesFor = capabilities.map((item, i) => ({ ...item, icon: watchIcons[i] }));

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

const steps = followUp;



const partners = solutionPolicy.partnerLogosApproved ? [{ src: "/partners/talius.png", alt: "Talius" }] : [];

export default function HomePage() {
  return (
    <>
      <EditorialHero
        eyebrow="Safer living at home"
        title={<>Stay in the <span className="text-blue">home you love</span>.</>}
        body="Keep the routines, connections and independence that matter to you. MyIntel helps make the home safer and chooses support around the way you live."
        image="/photos/packages/kitchen-life.webp"
        alt="Illustrative older woman preparing a salad, with a manual emergency pendant and a home hub nearby"
      >
        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
          <a href={site.homeCheckUrl} target="_blank" rel="noopener noreferrer" className="btn-primary">Start a free home check <ArrowRight className="h-5 w-5" /></a>
          <a href={site.phoneHref} className="btn-outline"><Phone className="h-5 w-5" />{site.phone}</a>
        </div>
        <p className="mt-5 text-base text-clay">Free to view your results. No account needed.</p>
        <p className="mt-3 text-base font-semibold text-navy">Room sensing works without wearing a device.</p>
      </EditorialHero>
      <AudiencePaths />

      {/* HomeCheck introduction */}
      <section aria-labelledby="homecheck-title" className="border-y border-blue/20 bg-sky">
        <div className="container-x grid gap-10 py-14 sm:py-16 lg:grid-cols-[1.3fr_1fr] lg:items-center">
          <div>
            <p className="eyebrow"><Sparkles className="h-4 w-4" /> New · HomeCheck pilot</p>
            <h2 id="homecheck-title" className="mt-4 font-display text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
              A clearer starting point for a safer home.
            </h2>
            <p className="lead mt-5">
              Choose the rooms you use. Answer simple questions.
              Get practical next steps you can discuss with your family or a professional.
            </p>
            <Link
              href="/assessments"
              className="mt-7 inline-flex items-center gap-2 font-bold text-navy underline underline-offset-4"
            >
              See what HomeCheck covers <ArrowRight className="h-5 w-5 shrink-0" />
            </Link>
          </div>
          <div className="rounded-3xl border border-blue/15 bg-white p-7 sm:p-8">
            <EditorialImage src="/photos/editorial/homecheck-rooms.png" alt="Conceptual cutaway of a home with a kitchen, bedroom, living room and bathroom" className="mb-6 aspect-[3/2] rounded-2xl" />
            <p className="font-display text-2xl font-extrabold text-navy">One step at a time</p>
            <ul className="mt-5 space-y-4">
              {["Choose your rooms", "Answer yes, no, or not sure", "Review your next steps"].map((item) => (
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

      {/* Logos stay hidden until use and relationship descriptions are approved. */}
      {partners.length > 0 && <section className="border-y border-ink/8 bg-white">
        <div className="container-x py-10">
          <p className="text-center text-xs font-extrabold uppercase tracking-[0.2em] text-clay">
            Our technology partner
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
      </section>}

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
            <EditorialImage src="/photos/editorial/home-visit.png" alt="Illustrative photograph of a home specialist and older adult discussing a plan" className="aspect-[4/3] rounded-3xl" />
            <div className="absolute -bottom-5 -right-5 hidden rounded-2xl border border-ink/8 bg-white px-5 py-4 shadow-xl shadow-navy/10 sm:block">
              <p className="font-display text-2xl font-extrabold text-navy">
                ~1 hour
              </p>
              <p className="text-xs font-bold text-clay">A typical assessment visit</p>
            </div>
          </div>

          <div>
            <p className="eyebrow">Assess · Improve · Protect</p>
            <h2 className="statement mt-4">
              Understand the risks. Make a practical plan.
            </h2>
            <p className="mt-5 text-xl leading-relaxed text-clay">First we understand your needs. Then we make a plan with you.</p>
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
                      {item.label}: {item.title}
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
            <Link href="/solutions" className="mt-3 inline-flex min-h-11 items-center font-bold text-navy underline underline-offset-4">Compare MyIntel packages</Link>
          </div>
        </div>
      </section>

      <PackagePreview />

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
              late-night drive over just to make sure. MyIntel helps you share that
              responsibility, with an agreed plan and updates from the features you choose.
            </p>
            <ul className="mt-8 space-y-4">
              {[
                "Notice changes that may call for a check-in",
                "Agree who receives updates and what to do next",
                "Share updates with siblings and caregivers, so it isn't all on you",
                "Use changes in routines to start a helpful conversation",
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
            <EditorialImage src="/photos/packages/family-dashboard.webp" fit="contain" alt="Illustrative mother and daughter using a phone together with an example MyIntel dashboard" className="aspect-[4/3] rounded-3xl" />
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="section">
        <div className="container-x grid items-center gap-14 lg:grid-cols-2">
          <div>
            <p className="eyebrow">Practical follow-up</p>
            <h2 className="statement mt-4">
              We don&apos;t stop at the alert.
            </h2>
            <p className="lead mt-6">When something changes, the right person needs a clear next step. We agree who checks in, what to do and who follows up.</p>
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
            <EditorialImage src="/photos/editorial/home-visit.png" alt="Illustrative photograph of a specialist discussing a home plan with an older adult" className="aspect-[4/3] rounded-3xl" />
            <p className="mt-4 text-center text-xl font-bold text-navy">Support around the person and home</p>
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
              Notice changes with the right equipment.
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-cream/75">
              Your plan may include some of these features. We explain what
              each one can do before you choose.
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
                <details className="mt-3">
                  <summary className="cursor-pointer py-3 text-lg font-bold text-cream underline underline-offset-4">Learn about {title.toLowerCase()}</summary>
                  <p className="mt-2 text-lg leading-relaxed text-cream/90">{body}</p>
                </details>
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
            <h2 className="statement mt-4">A clearer view of everyday patterns.</h2>
            <p className="lead mt-6">
              See information from the features installed in your home.
              It can help you decide when to check in, but it does not diagnose
              a problem or confirm that someone is safe. We agree which family
              members or care providers should receive updates.
            </p>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {[
                "Sleep patterns, with supported sensing",
                "Kitchen and meal-related activity",
                "Movement detected in covered spaces",
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
            <EditorialImage src="/photos/packages/mobile-dashboard.webp" fit="contain" alt="Illustrative MyIntel phone app with example daily scores and sleep information" className="aspect-[4/3] rounded-3xl" />
            <p className="mt-4 text-base leading-relaxed text-clay">Illustrative app view. Available information depends on the installed equipment. Sleep information requires SleepSense.</p>
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
                body: "Our core monitoring doesn't require cameras. MyIntel monitors patterns, not people. We explain data collection and optional communication features before you choose them.",
              },
              {
                icon: Activity,
                title: "Technology that fits",
                body: "We select technology around the risks and preferences identified in your assessment. Coverage, capabilities and response arrangements are confirmed for your plan.",
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

