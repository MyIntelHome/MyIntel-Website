import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { CtaBand } from "@/components/CtaBand";
import { SolutionComparison } from "@/components/SolutionComparison";
import { EditorialImage } from "@/components/EditorialImage";
import { capabilities, positioning, solutionPolicy } from "@/lib/solutions";

export const metadata: Metadata = {
  title: "Solutions for Staying at Home",
  description: "Compare MyIntel HomeAware, HomeProtect and HomeComplete. Assessment-first support, home improvements and technology chosen for the person and home.",
};
export default function SolutionsPage() {
  return <>
    <PageHero eyebrow="Levels of support" title="The right help for your home." body="Start with what you need today. We can review your plan as your needs change." />
    <section className="container-x pb-16 pt-8">
      <p className="mx-auto max-w-3xl text-center text-xl leading-relaxed text-clay">We learn what matters to you, look for risks in the home, and recommend practical support. You choose what feels right.</p>
      <div className="mt-10"><SolutionComparison /></div>
      <p className="mx-auto mt-7 max-w-3xl text-center text-lg leading-relaxed text-clay">These are levels of support. Equipment, features, availability and costs are confirmed after your assessment.</p>
    </section>
    <section className="bg-sand"><div className="container-x grid items-center gap-10 py-16 lg:grid-cols-2">
      <EditorialImage src="/photos/editorial/homecheck-rooms.png" alt="Conceptual cutaway of a comfortable home showing its different rooms" className="aspect-[3/2] rounded-3xl" />
      <div><h2 className="font-display text-3xl font-extrabold text-navy sm:text-4xl">Your home. Your choices.</h2>
      <p className="mt-5 text-xl leading-relaxed text-clay">No wearable required. Some people prefer quiet monitoring around the home. Others want to discuss an optional personal alarm or wearable fall detector.</p>
      <p className="mt-5 text-lg leading-relaxed text-clay">{positioning.principle}</p>
      <p className="mt-5 text-lg leading-relaxed text-clay">We explain what each option can detect, where it works, and who receives an alert.</p></div>
    </div></section>
    <section className="mx-auto max-w-4xl px-6 py-16">
      <h2 className="font-display text-3xl font-extrabold text-navy">Questions about the technology?</h2>
      <p className="mt-4 text-xl leading-relaxed text-clay">You don&apos;t need to choose devices yourself. These details are here when you want them.</p>
      <div className="mt-7 space-y-4">{capabilities.map(c => <details key={c.id} className="rounded-2xl border border-ink/10 bg-white px-6">
        <summary className="cursor-pointer py-5 text-xl font-bold text-navy">{c.title}</summary><p className="pb-6 text-lg leading-relaxed text-clay">{c.body}</p>
      </details>)}</div>
      <details className="mt-4 rounded-2xl border border-ink/10 bg-white px-6"><summary className="cursor-pointer py-5 text-xl font-bold text-navy">Coverage and response</summary>
        <div className="space-y-4 pb-6 text-lg leading-relaxed text-clay"><p>{positioning.response}</p><p>Detection and alerts cannot guarantee that every fall will be detected or help will arrive. In-home protection does not automatically include GPS or protection away from home. Monitoring does not replace emergency services or clinical care.</p>
        {solutionPolicy.advancedVitalsVerified && <p>Supported remote-vitals equipment requires an agreed plan for reviewing measurements.</p>}
        <p>Changes to your system depend on compatible equipment and service availability. We explain new costs and data collection before proceeding.</p></div>
      </details>
    </section>
    <section className="bg-sand"><div className="container-x py-16">
      <h2 className="font-display text-3xl font-extrabold text-navy">Start where you are.</h2>
      <div className="mt-7 grid gap-6 md:grid-cols-2">
        <article id="planning-myself" className="card scroll-mt-28 p-7"><h3 className="font-display text-2xl font-bold">Planning for myself</h3><p className="mt-4 text-lg leading-relaxed text-clay">Choose the rooms and routines that matter to you. You decide what changes to make and who to involve.</p></article>
        <article id="helping-parent" className="card scroll-mt-28 p-7"><h3 className="font-display text-2xl font-bold">Helping a parent</h3><p className="mt-4 text-lg leading-relaxed text-clay">Take HomeCheck together where possible. Start with their priorities and agree who should receive updates.</p></article>
      </div>
      <Link href="/partners" className="mt-6 inline-flex min-h-12 items-center text-lg font-bold text-navy underline underline-offset-4">Information for care and community partners</Link>
    </div></section>
    <CtaBand title="Start with a free home check" body="Answer simple questions about your home. See practical next steps, with no payment to view your results." />
  </>;
}
