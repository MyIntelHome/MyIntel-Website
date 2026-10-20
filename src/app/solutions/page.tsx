import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
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
  {q:"How much does it cost?",a:"We are finalizing plan prices now. Call us and we will give you a quote for your home. Setup is always free."},
  {q:"Who answers when I press the help button?",a:"A trained person at a UL-listed response center, 24 hours a day. They talk with you, send help if needed and let your family know."},
  {q:"Will you check in after setup?",a:"Yes, with each plan. We agree when to check back with you. You can tell us what works and what needs a change."},
  {q:"Is a home safety visit included?",a:"Yes, with HomeProtect and HomeComplete. A trained pro checks the home with you. You get a plan made for your home and needs."},
  {q:"Will every fall be found?",a:"No system can promise that. Fall sensors work in the rooms where we set them up, and the help button works when it is pressed. Together they give two ways to get help fast."},
  {q:"Who gets updates?",a:"You choose. Most people pick one or two family members. A care team can be added too, with your OK."},
  {q:"Are home changes and health tools included?",a:"No. Work such as grab bars has its own cost. Extra tools that check health also have their own cost. We go over any extra work with you first."},
  {q:"Does this replace care or 911?",a:"No. MyIntel adds safety at home. It does not diagnose anything or replace care, visits or emergency services."},
];
export default function SolutionsPage(){
  return <>
    <section className="package-hero"><div className="container-x package-hero-grid">
      <div><p className="eyebrow">MyIntel packages</p><h1 className="mt-5 font-display text-4xl font-extrabold leading-[1.1] tracking-tight text-navy sm:text-5xl lg:text-6xl">Choose the help that fits your home.</h1><p className="story-lead mt-6">Every plan includes a help button answered 24/7, free setup and check-ins after. Bigger plans add fall sensors, more room sensors and a home safety visit by a licensed OT.</p><a href="#compare" className="package-jump mt-8">See the three plans <ArrowRight aria-hidden="true" className="h-5 w-5" /></a><p className="mt-5 text-lg text-clay">Free setup with each plan.</p></div>
      <figure className="package-hero-photo"><EditorialImage src="/photos/packages/plant-care.webp" alt="Illustrative older man watering plants in his home." className="aspect-[5/4] rounded-[2rem]" priority /><figcaption className="package-photo-caption">Keep doing the things you love.</figcaption></figure>
    </div></section>

    <section id="compare" className="container-x package-section scroll-mt-28" aria-labelledby="package-heading">
      <div className="story-heading"><div><p className="eyebrow">Find your fit</p><h2 id="package-heading" className="story-title mt-4">Three plans. Your choice.</h2></div><p className="story-lead">Each has a home hub and a help button. More sensors add more ways to help.</p></div>
      <div className="mt-10"><SolutionComparison /></div>
      <p className="price-note">Plan prices are being finalized. Call <a href={site.phoneHref} className="font-bold underline underline-offset-4">{site.phone}</a> for a quote for your home.</p>
      <details className="package-comparison-details"><summary>Compare what you get <span aria-hidden="true">+</span></summary><PackageFeatureComparison /></details>
    </section>

    <section className="story-section story-tint"><div className="container-x story-heading">
      <div><p className="eyebrow">Real people, close by</p><h2 className="story-title mt-4">We set it up.<br />We stay in touch.</h2><p className="story-lead mt-5">Insured, professional installers set everything up and show you how it works. We check back after setup to make sure it fits.</p></div>
      <dl className="story-lines">
        <div><dt>Every plan</dt><dd>Free professional setup, check-ins after setup and a help button answered by a real person 24/7.</dd></div>
        <div><dt>Protect and Complete</dt><dd>Sensors that notice changes in the daily routine, plus a home safety visit and a plan made for you.</dd></div>
        <div><dt>You get a say</dt><dd>We go over any costs and who gets updates before we start.</dd></div>
      </dl>
    </div></section>

    <section className="story-section container-x"><div className="story-split">
      <div><p className="eyebrow">See what matters</p><h2 className="story-title mt-4">A clearer view of the day.</h2><p className="story-lead mt-5">The sensors learn their usual day and notice changes, like a late start to the day or more trips to the bathroom at night. More sensors mean a fuller picture.</p><p className="story-lead mt-5">If something looks off, you hear about it. If the help button is pressed, you know help is on the way.</p><Link href="/contact" className="story-link mt-6">Ask us about a plan <ArrowRight aria-hidden="true" className="h-5 w-5" /></Link></div>
      <figure className="story-phone"><Image src="/photos/packages/mobile-dashboard.webp" alt="Sample MyIntel phone view with daily and sleep details." width={1024} height={1536} sizes="(min-width: 1024px) 400px, 80vw" className="h-auto max-h-[500px] w-auto max-w-full object-contain" /><figcaption>Example view. Your screen may differ. Sleep details need the right bed sensor.</figcaption></figure>
    </div></section>

    <section className="container-x pb-16 lg:pb-24"><div className="story-faq-layout"><div><p className="eyebrow">A few answers</p><h2 className="story-title mt-4">Good to know.</h2></div><div className="simple-faq">{questions.map(f=><details key={f.q}><summary>{f.q}</summary><p>{f.a}</p></details>)}</div></div></section>
    <CtaBand title="Ready for a system at home?" body="Talk with us about the right plan, a quote and setup. You do not need to complete the online home check first." primary="contact" />
  </>;
}
