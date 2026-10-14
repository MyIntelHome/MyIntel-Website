import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { EditorialImage } from "@/components/EditorialImage";
import { CtaBand } from "@/components/CtaBand";
import { site } from "@/lib/site";
import { ArrowRight } from "@/components/icons";

export const metadata: Metadata={title:"How It Works",description:"Learn how MyIntel room sensors, help buttons, room fall sensing and bed sensing can support life at home."};
const tools=[
 {title:"Room and door checks",body:"Small sensors note moves near them. Door sensors note when a door or window opens. What you see depends on where they are."},
 {title:"Press for help",body:"Each plan has a help button. Press it when you need help. The button does not sense falls."},
 {title:"Fall sensing in set spots",body:"Protect has one fall sensor. Complete has two. Each works in a spot we check first. They can miss a fall."},
 {title:"Voice and sleep help",body:"Protect and Complete let you use your voice to ask for help. Complete also has a bed sensor. Sleep details need the right bed."},
];
export default function HowItWorksPage(){
 return <>
  <PageHero eyebrow="How it works" title="Small tools. A little more help." body="We choose the tools that fit your home. They can help you ask for help or notice a change in the day." />
  <section className="container-x pb-16 lg:pb-24"><figure className="m-0"><EditorialImage src="/photos/packages/home-layout.webp" alt="Sample home with room sensors, a fall sensor, a home hub and a voice help unit." fit="contain" className="aspect-[3/2] max-h-[620px] rounded-[2rem]" priority /><figcaption className="story-caption">One sample home. We check each spot with you.</figcaption></figure></section>
  <section className="story-section story-tint"><div className="container-x story-faq-layout"><div><p className="eyebrow">Help around the home</p><h2 className="story-title mt-4">What the tools can do.</h2></div><dl className="story-lines">{tools.map(t=><div key={t.title}><dt>{t.title}</dt><dd>{t.body}</dd></div>)}</dl></div></section>
  <section className="story-section container-x"><div className="story-heading"><div><p className="eyebrow">Your home. Your say.</p><h2 className="story-title mt-4">Pick who gets the news.</h2></div><div className="story-lead space-y-5"><p>You help choose who gets calls and alerts. We agree who will help and how before setup.</p><p>Room sensors work with no cameras. Some units use a mic for calls. We talk through that with you.</p><p>We fit and set up each plan for free. We also check in after setup. We agree when to check back.</p><Link href="/solutions" className="story-link">See what each plan includes <ArrowRight className="h-5 w-5" aria-hidden="true" /></Link></div></div></section>
  <section className="story-section story-tint"><div className="container-x story-heading"><div><p className="eyebrow">Our first homes</p><h2 className="story-title mt-4">Help us learn from real homes.</h2></div><div><p className="story-lead">Want to be part of our first group of homes? Share your interest. We will talk through the fit with you.</p><a href={site.waitlistUrl} target="_blank" rel="noopener noreferrer" className="story-link mt-6">Join the founding homes list <ArrowRight className="h-5 w-5" aria-hidden="true" /></a></div></div></section>
  <CtaBand title="Start with a free home check." body="See what may need a closer look. You can choose what to do next." />
 </>;
}
