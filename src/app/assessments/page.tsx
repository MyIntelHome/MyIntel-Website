import type { Metadata } from "next";
import { site } from "@/lib/site";
import { CtaBand } from "@/components/CtaBand";
import { PageHero } from "@/components/PageHero";
import { Photo } from "@/components/Photo";
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
    "A specialist walks through the home with you, finds what's actually risky, and gives you a plain list of what to fix. About an hour, and no pressure to buy anything.",
};

const evaluations = [
  {
    icon: PersonStanding,
    title: "Where a fall would happen",
    body: "Loose rugs, raised thresholds, stairs without a good rail, and the bathroom, which is where a great many falls happen. We go room by room.",
  },
  {
    icon: Lightbulb,
    title: "Lighting",
    body: "A hallway that's perfectly fine at noon can be dangerous at two in the morning. We walk the paths someone actually takes at night.",
  },
  {
    icon: PersonStanding,
    title: "Getting around",
    body: "Doorways, door handles, counter heights, the front step. Measured against how this person actually moves, not a generic checklist.",
  },
  {
    icon: Shield,
    title: "Where technology helps",
    body: "And where it doesn't. Fall detection and motion lighting are worth it in some homes. In others, a grab bar and a better lamp are the whole answer, and we'll say so.",
  },
];

const processSteps = [
  {
    title: "Set up a time",
    body: "Call or email. We'll ask a few questions about the home and about what's been worrying you.",
  },
  {
    title: "Walk through together",
    body: "A Certified Aging in Place Specialist goes through the house with you, at your pace. Bring every question you have.",
  },
  {
    title: "Get a plain list",
    body: "Clear recommendations, sorted by what matters most, with what each one costs. Nothing hidden, nothing upsold.",
  },
  {
    title: "We do the work",
    body: "Pick what you want done. We handle the installation, show you how it all works, and stay available afterward.",
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
        eyebrow="Home safety assessments"
        title="Most homes were never built for getting older."
        body="Stairs with no rail. A tub you have to climb into. A hallway that's dark at two in the morning. A specialist walks through with you, finds what's actually risky, and hands you a plain list of what to do about it. About an hour, and there's no pressure to buy anything."
      />

      {/* What we look at */}
      <section className="container-x section grid items-center gap-14 lg:grid-cols-2">
        <div className="relative">
          <Photo
            src="/photos/home-assessment.jpg"
            alt="A MyIntel specialist going through a home safety plan with an older adult at her kitchen table"
            label="Home visit photo"
            className="aspect-[4/3] rounded-3xl shadow-[0_20px_60px_-20px_rgba(20,36,60,0.35)]"
          />
          <div className="absolute -bottom-5 -right-5 hidden rounded-2xl border border-ink/8 bg-white px-5 py-4 shadow-xl shadow-navy/10 sm:block">
            <p className="font-display text-2xl font-extrabold text-navy">
              ~1 hour
            </p>
            <p className="text-xs font-bold text-clay">A typical visit</p>
          </div>
        </div>

        <div>
          <p className="eyebrow">What we look at</p>
          <h2 className="statement mt-4">
            Room by room, the way someone actually lives in it
          </h2>
          <ul className="mt-10 divide-y divide-ink/8">
            {evaluations.map(({ icon: EvalIcon, title, body }) => (
              <li key={title} className="flex gap-5 py-6 first:pt-0">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-blue/12 text-blue">
                  <EvalIcon className="h-6 w-6" />
                </span>
                <div>
                  <h3 className="font-display text-xl font-extrabold text-ink">
                    {title}
                  </h3>
                  <p className="mt-2 leading-relaxed text-clay">{body}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Process */}
      <section className="bg-sand">
        <div className="container-x section">
          <div className="max-w-2xl">
            <p className="eyebrow">What to expect</p>
            <h2 className="statement mt-4">Four steps, no surprises</h2>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, i) => (
              <div key={step.title} className="rounded-3xl bg-white p-7">
                <span className="grid h-11 w-11 place-items-center rounded-full bg-navy font-display text-lg font-bold text-cream">
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
      <section className="container-x section">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="card p-10">
            <span className="grid h-12 w-12 place-items-center rounded-2xl bg-sky text-navy">
              <GraduationCap className="h-6 w-6" />
            </span>
            <h3 className="mt-6 font-display text-3xl font-extrabold tracking-tight text-ink">
              Certified specialists, not salespeople
            </h3>
            <p className="prose-warm mt-4">
              Your visit is done by a Certified Aging in Place Specialist, who
              is trained specifically in making homes safer to grow older in.
              They will tell you what you need and what you don&apos;t, even
              when the honest answer is that you don&apos;t need us.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                "CAPS-certified assessment team",
                "Executive Certification in Home Modification (ECHM) expertise",
                "Personalized recommendations, never one-size-fits-all",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <ClipboardCheck className="mt-0.5 h-5 w-5 shrink-0 text-navy" />
                  <span className="font-semibold text-ink/80">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl bg-navy p-10 text-cream">
            <span className="grid h-12 w-12 place-items-center rounded-2xl bg-gold/20 text-gold">
              <BadgeDollar className="h-6 w-6" />
            </span>
            <h3 className="mt-6 font-display text-3xl font-extrabold tracking-tight">
              Help paying for it
            </h3>
            <p className="mt-4 text-lg leading-relaxed text-cream/75">
              Staying at home costs a small fraction of assisted living, and a
              lot of these changes qualify for help paying for them. Most
              families have no idea this exists. We&apos;ll walk you through:
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
      <section className="bg-sand">
        <div className="container-x section text-center">
          <p className="eyebrow justify-center">Where we work</p>
          <h2 className="statement mx-auto mt-4 max-w-2xl">
            In-home assessments in two regions
          </h2>
          <div className="mx-auto mt-12 grid max-w-3xl gap-5 sm:grid-cols-3">
            {site.serviceAreas.map((area) => (
              <div
                key={area}
                className="flex flex-col items-center gap-3 rounded-3xl bg-white p-8"
              >
                <span className="grid h-12 w-12 place-items-center rounded-full bg-blue/15 text-blue">
                  <MapPin className="h-6 w-6" />
                </span>
                <p className="font-display text-xl font-semibold text-ink">
                  {area}
                </p>
              </div>
            ))}
          </div>
          <p className="mx-auto mt-8 max-w-xl font-semibold text-clay">
            Somewhere else? Reach out anyway. Remote consultations are
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
      <section className="container-x section">
        <div className="card flex flex-col items-start justify-between gap-8 p-10 md:flex-row md:items-center">
          <div className="flex items-start gap-5">
            <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-sky text-navy">
              <Wrench className="h-7 w-7" />
            </span>
            <div>
              <h3 className="font-display text-2xl font-extrabold text-ink">
                Then we make the changes
              </h3>
              <p className="mt-2 max-w-xl leading-relaxed text-clay">
                Grab bars and better lighting, and where it earns its keep,
                technology like fall detection, lights that come on by
                themselves, and door locks that don&apos;t need a key. We
                install it and we teach you how to use it, so it doesn&apos;t
                sit there unused.
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
