import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CtaBand } from "@/components/CtaBand";
import { EditorialImage } from "@/components/EditorialImage";
import { SolutionComparison, PackageFeatureComparison } from "@/components/SolutionComparison";
import { positioning } from "@/lib/solutions";
import { site } from "@/lib/site";
import { ArrowRight } from "@/components/icons";

export const metadata: Metadata = {
  title: "Home Safety Packages",
  description: "Compare MyIntel HomeAware, HomeProtect and HomeComplete. Morning reassurance, broader activity and room fall sensing, or added bed and nighttime information.",
  alternates: { canonical: "/solutions" },
};
const questions = [
  { q: "Do all packages detect falls automatically?", a: "No. HomeAware includes a standard emergency pendant for manual help. It does not automatically detect falls. HomeProtect adds one MDsense room fall detector. HomeComplete has two. Each detector works within its approved coverage area." },
  { q: "Does one motion sensor show activity throughout the home?", a: "No. HomeAware's single motion sensor is placed where morning activity is likely to be noticed. HomeProtect and HomeComplete each have five motion sensors for broader activity information. The home layout and placement still matter." },
  { q: "What does voice-activated help mean?", a: "The VPD2 communicator in HomeProtect and HomeComplete adds voice-activated help and extends emergency communication. It is a different device from MDsense and does not add another area of fall detection." },
  { q: "What does SleepSense add?", a: "HomeComplete includes one SleepSense for one resident's compatible bed. It adds bed occupancy and supported sleep-related information. Motion at night alone is not a measurement of sleep." },
  { q: "Who responds when someone requests help?", a: positioning.response },
  { q: "Are grab bars, home modifications or remote-vitals devices included?", a: "These are separately scoped. HomeComplete adds a detailed safety plan and scheduled follow-up, with timing agreed together. Physical work and remote-vitals equipment have their own scope and costs." },
];

export default function SolutionsPage() {
  return <>
    <section className="package-hero">
      <div className="container-x package-hero-grid">
        <div>
          <p className="eyebrow">MyIntel packages</p>
          <h1 className="mt-5 font-display text-4xl font-extrabold leading-[1.1] tracking-tight text-navy sm:text-5xl lg:text-6xl">Choose the support that fits your home.</h1>
          <p className="mt-6 max-w-xl text-xl leading-relaxed text-clay">A reassuring start to the morning. More awareness around the home. Extra support at night. Choose what matters to you today.</p>
          <a href="#compare" className="package-jump mt-8">Explore the three packages <ArrowRight aria-hidden="true" className="h-5 w-5" /></a>
          <p className="mt-5 text-lg text-clay">We help you choose. You don&apos;t need to know the devices.</p>
        </div>
        <figure className="package-hero-photo">
          <EditorialImage src="/photos/packages/plant-care.webp" alt="Illustrative older man watering plants in his home, with MyIntel support devices nearby." className="aspect-[5/4] rounded-[2rem]" priority sizes="(min-width: 1024px) 50vw, 100vw" />
          <figcaption className="package-photo-caption">Keep enjoying your everyday life.</figcaption>
        </figure>
      </div>
    </section>

    <section id="compare" className="container-x package-section scroll-mt-28" aria-labelledby="package-heading">
      <div className="package-section-heading">
        <div><p className="eyebrow">Find your starting point</p><h2 id="package-heading" className="mt-4 font-display text-3xl font-extrabold leading-tight text-navy sm:text-4xl">Three ways to support everyday life.</h2></div>
        <p className="max-w-lg text-lg leading-relaxed text-clay">Each package includes an Essence hub and a standard emergency pendant. Broader sensing is added as you move through the packages.</p>
      </div>
      <div className="mt-10"><SolutionComparison /></div>
      <p className="mt-7 max-w-3xl text-lg leading-relaxed text-clay">Installation, service costs, availability and response arrangements are confirmed for your home before you commit.</p>
      <details className="package-comparison-details">
        <summary>Compare every device and service <span aria-hidden="true">+</span></summary>
        <PackageFeatureComparison />
      </details>
    </section>

    <section className="package-setting-section">
      <div className="container-x grid items-center gap-10 py-16 lg:grid-cols-2 lg:py-24">
        <figure>
          <EditorialImage src="/photos/packages/home-layout.webp" fit="contain" alt="Illustrative cutaway home with examples of motion sensing, room fall sensing, a home hub and a voice communicator." className="aspect-[3/2] rounded-3xl" />
          <figcaption className="mt-4 text-base leading-relaxed text-clay">Illustrative layout. Device numbers, locations and coverage are checked for the chosen package.</figcaption>
        </figure>
        <div>
          <p className="eyebrow">Thoughtfully placed</p>
          <h2 className="mt-4 font-display text-3xl font-extrabold leading-tight text-navy sm:text-4xl">The right devices, in the places that matter.</h2>
          <p className="mt-6 text-xl leading-relaxed text-clay">The home layout makes a difference. We discuss the rooms, entrances and routines that matter most, then check suitable device locations.</p>
          <ol className="package-placement-list">
            <li><span>1</span><div><h3>Understand your day</h3><p>Start with morning activity, frequently used rooms and your main concerns.</p></div></li>
            <li><span>2</span><div><h3>Check the coverage</h3><p>Agree the selected areas for fall sensing and check bed compatibility when SleepSense is included.</p></div></li>
            <li><span>3</span><div><h3>Agree who can help</h3><p>Choose the contacts and response arrangements before installation.</p></div></li>
          </ol>
        </div>
      </div>
    </section>

    <section className="container-x package-section">
      <div className="grid items-center gap-12 lg:grid-cols-[1.2fr_0.8fr]">
        <div>
          <p className="eyebrow">Information you can use</p>
          <h2 className="mt-4 font-display text-3xl font-extrabold leading-tight text-navy sm:text-4xl">A clearer picture, at your own pace.</h2>
          <p className="mt-6 text-xl leading-relaxed text-clay">The information available follows the equipment in your home. Morning activity is a starting point. More sensors add context. SleepSense adds supported bed and sleep information.</p>
          <ul className="mt-7 space-y-5 text-lg leading-relaxed text-clay">
            <li><strong className="text-navy">HomeAware:</strong> focus on morning activity reassurance and manual help.</li>
            <li><strong className="text-navy">HomeProtect:</strong> add activity information from more rooms, one area of fall sensing and voice help.</li>
            <li><strong className="text-navy">HomeComplete:</strong> add a second area of fall sensing, bed information, a detailed safety plan and scheduled follow-up.</li>
          </ul>
          <p className="mt-6 text-lg leading-relaxed text-clay">These updates support a conversation and an agreed plan. They do not diagnose a health problem or confirm that someone is safe.</p>
        </div>
        <figure className="package-app-figure">
          <Image src="/photos/packages/mobile-dashboard.webp" alt="Illustrative MyIntel app on a phone, showing example daily scores, activity and sleep information." width={1024} height={1536} className="h-auto max-h-[580px] w-auto max-w-full object-contain" sizes="(min-width: 1024px) 420px, 80vw" />
          <figcaption className="mt-4 max-w-sm text-center text-base leading-relaxed text-clay">Illustrative app view with example data. Available screens and information depend on the installed system. Sleep information requires SleepSense.</figcaption>
        </figure>
      </div>
    </section>

    <section className="package-setting-section">
      <div className="container-x grid items-center gap-10 py-16 lg:grid-cols-2">
        <div><p className="eyebrow">You choose the next step</p><h2 className="mt-4 font-display text-3xl font-extrabold leading-tight text-navy sm:text-4xl">Start with your home, then choose the package.</h2><p className="mt-6 text-xl leading-relaxed text-clay">HomeCheck helps you see a practical starting point. If you already know you want support, request help and we can discuss a suitable package and installation.</p><a href={site.homeCheckUrl + "/?view=help"} className="mt-6 inline-flex min-h-12 items-center gap-3 font-bold text-navy underline underline-offset-4">Ask about a package or installation <ArrowRight aria-hidden="true" className="h-5 w-5" /></a><Link href="/families" className="mt-3 flex min-h-12 items-center font-bold text-navy underline underline-offset-4">Helping a parent? Read our family guide.</Link></div>
        <EditorialImage src="/photos/packages/family-dashboard.webp" fit="contain" alt="Illustrative mother and daughter using a phone together, with an example MyIntel dashboard alongside them." className="aspect-[3/2] rounded-3xl" />
      </div>
    </section>

    <section className="mx-auto max-w-4xl px-6 py-16 lg:py-24">
      <p className="eyebrow">Clear answers</p><h2 className="mt-4 font-display text-3xl font-extrabold text-navy">Questions about the packages</h2>
      <div className="mt-8 space-y-4">{questions.map(f => <details key={f.q} className="rounded-2xl border border-ink/10 bg-white px-6"><summary className="cursor-pointer py-5 text-xl font-bold text-navy">{f.q}</summary><p className="pb-6 text-lg leading-relaxed text-clay">{f.a}</p></details>)}</div>
    </section>
    <CtaBand title="Begin with a free home check." body="Answer a few simple questions about the home and get a clear starting point. It's free, and there's no payment to see your results." />
  </>;
}
