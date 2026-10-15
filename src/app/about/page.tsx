import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { EditorialImage } from "@/components/EditorialImage";
import { CtaBand } from "@/components/CtaBand";
import { TrustRow } from "@/components/Proof";
import { site } from "@/lib/site";

export const metadata: Metadata={title:"About MyIntel",description:"MyIntel is a Denver aging-in-place company founded by Austin Gough to help older adults stay safely in the homes they love."};
const team=[
 {title:"Austin Gough, founder",body:"Austin started MyIntel and is your main point of contact, from your first call through setup and beyond."},
 {title:"Insured, professional installers",body:"Every system is set up by insured professionals who show you and your family how everything works."},
 {title:"Licensed occupational therapists",body:"Our home safety visits are done by licensed, insured OTs with CAPS (Certified Aging-in-Place Specialist) certification."},
 {title:"A 24/7 monitoring center",body:"Help button calls are answered by a UL-listed professional monitoring center, every hour of every day."},
];
export default function AboutPage(){
 return <>
  <PageHero eyebrow="About MyIntel" title="It began with our own family." body={`MyIntel is a Denver company that helps older adults stay safely in the homes they love, and gives their families peace of mind.`} />
  <section className="container-x pb-16 lg:pb-24"><div className="story-split"><div><h2 className="story-title">A home worth keeping.</h2><div className="story-lead mt-6 space-y-5"><p>Austin Gough had a question. How could he help his grandparents stay in their home when he could not be there every day?</p><p>He set up simple tools in their home so he would know if something was wrong, without cameras and without changing how they lived. Their home still felt like their home.</p><p>MyIntel grew from that idea. Today we bring the same help to families across {site.serviceArea}: a safer home, sensors that learn the daily routine and flag when something is off, a help button answered 24/7 and a local team that knows you by name.</p></div></div><figure className="m-0"><EditorialImage src="/photos/family-couch.jpg" alt="Family spending time together at home." className="aspect-[4/3] rounded-[2rem]" /><figcaption className="story-caption">Family is at the heart of our work.</figcaption></figure></div></section>
  <section className="story-quote-section"><figure className="container-x m-auto"><blockquote className="story-title">&ldquo;I wanted to know they were okay.&rdquo;</blockquote><figcaption className="mt-6 text-lg font-bold text-navy">Austin Gough <span className="ml-2 font-normal text-clay">Founder</span></figcaption></figure></section>
  <section className="story-section container-x"><div className="story-faq-layout"><div><p className="eyebrow">Who you will work with</p><h2 className="story-title mt-4">A small team, on purpose.</h2><p className="story-lead mt-5">You will not get lost in a big company. You get one local team, with licensed experts and a 24/7 monitoring center behind it.</p><figure className="m-0 mt-8 max-w-sm"><EditorialImage src="/photos/austin-gough.jpg" alt="Austin Gough, founder of MyIntel." className="aspect-square rounded-[2rem]" sizes="(min-width: 1024px) 384px, 100vw" /><figcaption className="story-caption"><strong className="text-navy">Austin Gough</strong>, founder. Your main point of contact.</figcaption></figure></div><dl className="story-lines">{team.map(t=><div key={t.title}><dt>{t.title}</dt><dd>{t.body}</dd></div>)}</dl></div></section>
  <TrustRow tint eyebrow="What we promise" title="Your home. Your life. Your say." />
  <CtaBand title="A small check is a good start." body="Take the free home check. See what may need a closer look." />
 </>;
}
