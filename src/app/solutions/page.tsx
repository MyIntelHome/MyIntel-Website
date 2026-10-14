import type { Metadata } from "next";
import Image from "next/image";
import { EditorialImage } from "@/components/EditorialImage";
import { CtaBand } from "@/components/CtaBand";
import { SolutionComparison, PackageFeatureComparison } from "@/components/SolutionComparison";
import { site } from "@/lib/site";
import { ArrowRight } from "@/components/icons";

export const metadata: Metadata = {
  title: "Home Safety Packages",
  description: "Compare HomeAware, HomeProtect and HomeComplete. All include free installation and follow-up. Protect and Complete include professional home safety assessments.",
  alternates: { canonical: "/solutions" },
};
const questions = [
  {q:"Is setup free?",a:"Yes. We fit and set up each plan at no extra cost. The plan and service have their own costs. We go over those with you first."},
  {q:"Will you check in after setup?",a:"Yes, with each plan. We agree when to check back with you. You can tell us what works and what needs a change."},
  {q:"Is a home safety visit included?",a:"Yes, with HomeProtect and HomeComplete. A trained pro checks the home with you. You get a plan made for your home and needs."},
  {q:"Will every fall be found?",a:"No. A fall sensor works in the spot we test. It can miss a fall. The help button does not sense falls. Press it to ask for help."},
  {q:"Who gets calls and alerts?",a:"You help choose who gets them. We agree who will help and how before setup."},
  {q:"Are home changes and health tools included?",a:"No. Work such as grab bars has its own cost. Extra tools that check health also have their own cost. We go over any extra work with you first."},
];
export default function SolutionsPage(){
  return <>
    <section className="package-hero"><div className="container-x package-hero-grid">
      <div><p className="eyebrow">MyIntel packages</p><h1 className="mt-5 font-display text-4xl font-extrabold leading-[1.1] tracking-tight text-navy sm:text-5xl lg:text-6xl">Choose the help that fits your home.</h1><p className="story-lead mt-6">Start with a morning check. Add more room checks or help at night. We help you choose.</p><a href="#compare" className="package-jump mt-8">See the three plans <ArrowRight aria-hidden="true" className="h-5 w-5" /></a><p className="mt-5 text-lg text-clay">Free setup with each plan.</p></div>
      <figure className="package-hero-photo"><EditorialImage src="/photos/packages/plant-care.webp" alt="Illustrative older man watering plants in his home." className="aspect-[5/4] rounded-[2rem]" priority /><figcaption className="package-photo-caption">Keep doing the things you love.</figcaption></figure>
    </div></section>

    <section id="compare" className="container-x package-section scroll-mt-28" aria-labelledby="package-heading">
      <div className="story-heading"><div><p className="eyebrow">Find your fit</p><h2 id="package-heading" className="story-title mt-4">Three plans. Your choice.</h2></div><p className="story-lead">Each has a home hub and a help button. More sensors add more ways to help.</p></div>
      <div className="mt-10"><SolutionComparison /></div>
      <details className="package-comparison-details"><summary>Compare what you get <span aria-hidden="true">+</span></summary><PackageFeatureComparison /></details>
    </section>

    <section className="story-section story-tint"><div className="container-x story-heading">
      <div><p className="eyebrow">Real people, real help</p><h2 className="story-title mt-4">We set it up.<br />We stay in touch.</h2><p className="story-lead mt-5">We fit the tools in your home. We show you how to use them. We agree when to check back.</p></div>
      <dl className="story-lines">
        <div><dt>Every plan</dt><dd>Free setup and help after setup.</dd></div>
        <div><dt>Protect and Complete</dt><dd>A home safety visit and a plan made for you.</dd></div>
        <div><dt>You get a say</dt><dd>We go over any costs and who will get calls and alerts.</dd></div>
      </dl>
    </div></section>

    <section className="story-section container-x"><div className="story-split">
      <div><p className="eyebrow">See what matters</p><h2 className="story-title mt-4">A clearer view of the day.</h2><p className="story-lead mt-5">What you see depends on your plan. More room sensors can add more detail. The bed sensor adds sleep details when the bed is a good fit.</p><p className="story-lead mt-5">A change can be a reason to call. These tools cannot tell you for sure that a person is safe.</p><a href={site.homeCheckUrl+"/?view=help"} className="story-link mt-6">Ask us about a plan <ArrowRight aria-hidden="true" className="h-5 w-5" /></a></div>
      <figure className="story-phone"><Image src="/photos/packages/mobile-dashboard.webp" alt="Sample MyIntel phone view with daily and sleep details." width={1024} height={1536} sizes="(min-width: 1024px) 400px, 80vw" className="h-auto max-h-[500px] w-auto max-w-full object-contain" /><figcaption>Example view. Your screen may differ. Sleep details need the right bed sensor.</figcaption></figure>
    </div></section>

    <section className="container-x pb-16 lg:pb-24"><div className="story-faq-layout"><div><p className="eyebrow">A few answers</p><h2 className="story-title mt-4">Good to know.</h2></div><div className="simple-faq">{questions.map(f=><details key={f.q}><summary>{f.q}</summary><p>{f.a}</p></details>)}</div></div></section>
    <CtaBand title="Not sure which plan fits?" body="Start with our free home check. See what may need a closer look. You can go at your own pace." />
  </>;
}
