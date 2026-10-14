import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { EditorialImage } from "@/components/EditorialImage";
import { CtaBand } from "@/components/CtaBand";

export const metadata: Metadata={title:"About MyIntel",description:"MyIntel began with Austin Gough's own grandparents and a wish to help them stay in the home they love."};
export default function AboutPage(){
 return <>
  <PageHero eyebrow="About MyIntel" title="It began with our own family." body="It started with a wish to help our family stay home." />
  <section className="container-x pb-16 lg:pb-24"><div className="story-split"><div><h2 className="story-title">A home worth keeping.</h2><div className="story-lead mt-6 space-y-5"><p>Austin Gough had a question. How could he help his grandparents when he could not be there each day?</p><p>He added simple tools to their home. They could help him notice a change. Their home could still feel like their home.</p><p>MyIntel grew from that idea. We help people find the right help for the place they love.</p></div></div><figure className="m-0"><EditorialImage src="/photos/family-couch.jpg" alt="Illustrative family spending time together at home." className="aspect-[4/3] rounded-[2rem]" /><figcaption className="story-caption">Family is at the heart of our work.</figcaption></figure></div></section>
  <section className="story-quote-section"><figure className="container-x m-auto"><blockquote className="story-title">&ldquo;I wanted to know they were okay.&rdquo;</blockquote><figcaption className="mt-6 text-lg font-bold text-navy">Austin Gough <span className="ml-2 font-normal text-clay">Founder</span></figcaption></figure></section>
  <section className="story-section container-x"><div className="story-heading"><h2 className="story-title">Your home.<br />Your life. Your say.</h2><div className="story-lead space-y-5"><p>We listen to what matters to you. We look for help that fits your home and needs.</p><p>You help choose who gets calls and alerts. Room sensors do not need cameras.</p><p>We go over the costs with you first. You choose what feels right.</p></div></div></section>
  <CtaBand title="A small check is a good start." body="Take the free home check. See what may need a closer look." />
 </>;
}
