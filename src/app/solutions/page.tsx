import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { CtaBand } from "@/components/CtaBand";
import { SolutionComparison } from "@/components/SolutionComparison";
import { capabilities, positioning, solutionPolicy } from "@/lib/solutions";

export const metadata: Metadata = {
  title: "Solutions for Staying at Home",
  description: "Compare MyIntel HomeAware, HomeProtect and HomeComplete. Assessment-first support, home improvements and technology chosen for the person and home.",
};

export default function SolutionsPage() {
  return <>
    <PageHero eyebrow="MyIntel solutions" title="Start with what you need today. Add protection as needs change." body="Different people need different kinds of support. We begin with the person and home, then recommend a plan that fits." />
    <section className="container-x pb-16 pt-10">
      <p className="max-w-3xl font-display text-2xl font-bold text-navy">{positioning.principle}</p>
      <p className="mt-5 max-w-3xl text-lg leading-relaxed text-clay">HomeAware, HomeProtect and HomeComplete describe levels of support, not fixed hardware bundles. HomeCheck helps identify likely risks. A professional assessment, when appropriate, helps turn those starting points into a recommendation. Features, equipment, availability and costs are confirmed for your plan.</p>
      <div className="mt-10"><SolutionComparison /></div>
      <p className="mt-4 text-sm text-clay">On a smaller screen, scroll the comparison sideways. No level automatically includes every feature.</p>
    </section>
    <section className="bg-sand"><div className="container-x section">
      <h2 className="statement max-w-3xl">Protection that respects your preferences</h2>
      <p className="lead mt-6 max-w-3xl">No wearable required. Personal protection may be an option if you want it. Some people prefer ambient monitoring. Others want to discuss an additional wearable with fall detection or a way to call for help. We confirm the device, coverage and availability before you decide.</p>
      <p className="mt-5 max-w-3xl leading-relaxed text-clay">Fall protection can use non-camera room-level sensing, optional wearable detection or personal emergency activation. Each has its own limits. In-home protection does not automatically provide GPS or coverage away from home. Detection and alerts cannot guarantee that every fall will be detected or help will arrive.</p>
      <p className="mt-5 max-w-3xl font-semibold text-navy">{positioning.response}</p>
    </div></section>
    <section className="container-x section">
      <h2 className="statement max-w-3xl">Useful features, only where they fit</h2>
      <p className="lead mt-5 max-w-3xl">Depending on the system recommended for the home, your plan may use some of these features. We explain what each one can and cannot tell you.</p>
      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">{capabilities.map(c => <article key={c.id} className="card p-7"><h3 className="font-display text-xl font-bold">{c.title}</h3><p className="mt-3 leading-relaxed text-clay">{c.body}</p></article>)}</div>
      {solutionPolicy.advancedVitalsVerified && <p className="mt-6 leading-relaxed text-clay">Ask about supported remote-vitals equipment. Measurements require the relevant device and an agreed plan for reviewing them.</p>}
      <p className="mt-8 max-w-3xl leading-relaxed text-clay">We review the plan as needs change. Additions depend on equipment compatibility, service availability and your preferences. We explain new costs and any changes to data collection before proceeding.</p>
    </section>
    <section className="bg-sand"><div className="container-x section">
      <h2 className="statement">A starting point for your situation</h2>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        <article id="planning-myself" className="card scroll-mt-28 p-7"><h3 className="font-display text-2xl font-bold">Planning for myself</h3><p className="mt-4 leading-relaxed text-clay">Start with the rooms and routines that matter to you. You choose the changes, the technology and who is involved.</p></article>
        <article id="helping-parent" className="card scroll-mt-28 p-7"><h3 className="font-display text-2xl font-bold">Helping a parent</h3><p className="mt-4 leading-relaxed text-clay">Complete HomeCheck together where possible. Discuss their priorities and agree who should receive updates.</p></article>
        <article className="card p-7"><h3 className="font-display text-2xl font-bold">Professional or care provider</h3><p className="mt-4 leading-relaxed text-clay">Build practical assessment and follow-up into the support your organization already provides.</p><Link href="/partners" className="mt-5 inline-flex min-h-11 items-center font-bold text-navy underline underline-offset-4">Explore working with MyIntel</Link></article>
      </div>
    </div></section>
    <CtaBand title="Find your starting point" body="Start with the free home check. Review likely risks, then explore professional support and the right MyIntel configuration when you are ready." />
  </>;
}
