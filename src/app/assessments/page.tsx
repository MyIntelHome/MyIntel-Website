import type { Metadata } from "next";
import { site } from "@/lib/site";
import { CtaBand } from "@/components/CtaBand";
import { PageHero } from "@/components/PageHero";
import {
  ArrowRight,
  BadgeDollar,
  Check,
  ClipboardCheck,
  GraduationCap,
  Lightbulb,
  Mail,
  MapPin,
  PersonStanding,
  Phone,
  Shield,
  Wrench,
} from "@/components/icons";

export const metadata: Metadata = {
  title: "Home Safety Assessments",
  description:
    "CAPS-certified Home Safety Assessments identify fall risks, lighting, and accessibility needs — with personalized recommendations and financial aid guidance.",
};

const evaluations = [
  {
    icon: PersonStanding,
    title: "Fall risks",
    body: "Loose rugs, thresholds, stairs, and bathroom hazards — the leading causes of injury at home, identified room by room.",
  },
  {
    icon: Lightbulb,
    title: "Lighting & visibility",
    body: "Poor lighting is a silent threat to independence. We evaluate every pathway, entry, and night route.",
  },
  {
    icon: PersonStanding,
    title: "Mobility & accessibility",
    body: "Doorways, handles, counter heights, and entries — assessed against how you actually move through your home.",
  },
  {
    icon: Shield,
    title: "Smart safety opportunities",
    body: "Where technology genuinely helps: fall detection, motion lighting, smart locks, and monitoring that fits your life.",
  },
];

const processSteps = [
  {
    title: "Schedule your assessment",
    body: "Call or email us to book a time that works. We'll ask a few questions about the home and your goals.",
  },
  {
    title: "Walk through with a specialist",
    body: "A Certified Aging in Place Specialist (CAPS) evaluates the home top to bottom — with you, at your pace.",
  },
  {
    title: "Receive a personalized plan",
    body: "You get clear, prioritized recommendations — from simple fixes to smart technology — matched to your budget.",
  },
  {
    title: "Installation & training",
    body: "Choose what fits. We handle professional installation, teach you everything, and stay available for support.",
  },
];

const financial = [
  "Grants and funding programs for senior home modifications",
  "Tax credits and deductions you may qualify for",
  "Long-term care insurance and Medicare Advantage coverage",
  "Medicaid Home and Community-Based Services (HCBS) waivers",
];

export default function AssessmentsPage() {
  return (
    <>
      <PageHero
        eyebrow="Home Safety Assessments"
        title="Every safe home starts with a clear picture"
        body="1 in 4 adults over 65 falls each year — and most homes were never designed for aging safely. A professional Home Safety Assessment finds the hidden risks and shows you exactly what to do about them."
      />

      {/* What we evaluate */}
      <section className="mx-auto max-w-6xl px-5 py-24">
        <div className="max-w-2xl">
          <p className="eyebrow">What we evaluate</p>
          <h2 className="display mt-4 text-4xl sm:text-5xl">
            A room-by-room look at safety and independence
          </h2>
        </div>
        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {evaluations.map(({ icon: EvalIcon, title, body }) => (
            <div
              key={title}
              className="flex gap-5 rounded-3xl border border-ink/8 bg-white p-7 shadow-sm"
            >
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-terracotta/15 text-terracotta">
                <EvalIcon className="h-6 w-6" />
              </span>
              <div>
                <h3 className="font-display text-xl font-semibold text-ink">
                  {title}
                </h3>
                <p className="mt-2 leading-relaxed text-clay">{body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="bg-sand py-24">
        <div className="mx-auto max-w-6xl px-5">
          <div className="max-w-2xl">
            <p className="eyebrow">The process</p>
            <h2 className="display mt-4 text-4xl sm:text-5xl">
              Simple, respectful, and built around you
            </h2>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, i) => (
              <div key={step.title} className="rounded-3xl bg-white p-7">
                <span className="grid h-11 w-11 place-items-center rounded-full bg-pine font-display text-lg font-bold text-cream">
                  {i + 1}
                </span>
                <h3 className="mt-5 font-display text-xl font-semibold text-ink">
                  {step.title}
                </h3>
                <p className="mt-2.5 leading-relaxed text-clay">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Credentials + financial aid */}
      <section className="mx-auto max-w-6xl px-5 py-24">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-ink/8 bg-white p-10 shadow-sm">
            <span className="grid h-12 w-12 place-items-center rounded-2xl bg-sage text-pine">
              <GraduationCap className="h-6 w-6" />
            </span>
            <h3 className="mt-6 font-display text-3xl font-semibold text-ink">
              Certified specialists, not salespeople
            </h3>
            <p className="prose-warm mt-4">
              Assessments are performed by Certified Aging in Place Specialists
              (CAPS) with training in home modification. You get honest,
              expert recommendations — whether or not they involve our
              products.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                "CAPS-certified assessment team",
                "Executive Certification in Home Modification (ECHM) expertise",
                "Personalized recommendations, never one-size-fits-all",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <ClipboardCheck className="mt-0.5 h-5 w-5 shrink-0 text-pine" />
                  <span className="font-semibold text-ink/80">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl bg-pine p-10 text-cream">
            <span className="grid h-12 w-12 place-items-center rounded-2xl bg-gold/20 text-gold">
              <BadgeDollar className="h-6 w-6" />
            </span>
            <h3 className="mt-6 font-display text-3xl font-semibold">
              Help paying for it
            </h3>
            <p className="mt-4 text-lg leading-relaxed text-cream/75">
              Aging in place costs a fraction of assisted living — and many
              modifications qualify for financial assistance. We help you
              navigate:
            </p>
            <ul className="mt-6 space-y-3">
              {financial.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <Check className="mt-1 h-5 w-5 shrink-0 text-gold" />
                  <span className="font-semibold text-cream/90">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Service areas */}
      <section className="bg-sand py-24">
        <div className="mx-auto max-w-6xl px-5 text-center">
          <p className="eyebrow justify-center">Where we work</p>
          <h2 className="display mx-auto mt-4 max-w-2xl text-4xl sm:text-5xl">
            In-home assessments in three regions
          </h2>
          <div className="mx-auto mt-12 grid max-w-3xl gap-5 sm:grid-cols-3">
            {site.serviceAreas.map((area) => (
              <div
                key={area}
                className="flex flex-col items-center gap-3 rounded-3xl bg-white p-8"
              >
                <span className="grid h-12 w-12 place-items-center rounded-full bg-terracotta/15 text-terracotta">
                  <MapPin className="h-6 w-6" />
                </span>
                <p className="font-display text-xl font-semibold text-ink">
                  {area}
                </p>
              </div>
            ))}
          </div>
          <p className="mx-auto mt-8 max-w-xl font-semibold text-clay">
            Somewhere else? Reach out anyway — remote consultations are
            available, and we&apos;re expanding.
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a href={site.phoneHref} className="btn-primary">
              <Phone className="h-5 w-5" />
              Call {site.phone}
            </a>
            <a href={site.emailHref} className="btn-outline">
              <Mail className="h-5 w-5" />
              {site.email}
            </a>
          </div>
        </div>
      </section>

      {/* Smart install teaser */}
      <section className="mx-auto max-w-6xl px-5 py-24">
        <div className="flex flex-col items-start justify-between gap-8 rounded-3xl border border-ink/8 bg-white p-10 shadow-sm md:flex-row md:items-center">
          <div className="flex items-start gap-5">
            <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-sage text-pine">
              <Wrench className="h-7 w-7" />
            </span>
            <div>
              <h3 className="font-display text-2xl font-semibold text-ink">
                From assessment to a smarter, safer home
              </h3>
              <p className="mt-2 max-w-xl leading-relaxed text-clay">
                Fall detection, motion lighting, smart locks, thermostats, and
                monitoring — professionally installed, with hands-on training
                so everything actually gets used.
              </p>
            </div>
          </div>
          <a
            href={site.waitlistUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-accent shrink-0"
          >
            Get started
            <ArrowRight className="h-5 w-5" />
          </a>
        </div>
      </section>

      <CtaBand
        title="Schedule a Home Safety Assessment"
        body="Talk to a home safety expert today. One visit can prevent the fall that changes everything."
      />
    </>
  );
}
