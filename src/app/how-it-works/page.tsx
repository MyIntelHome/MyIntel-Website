import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { EditorialImage } from "@/components/EditorialImage";
import { CtaBand } from "@/components/CtaBand";
import { Steps } from "@/components/Proof";
import { ArrowRight } from "@/components/icons";

export const metadata: Metadata={title:"How It Works",description:"From a free home check to a home safety visit, free setup and a help button answered 24/7. See how MyIntel keeps an older adult safe at home."};
const tools=[
 {title:"A help button, answered 24/7",body:"Wear it on the wrist or around the neck. Press it and a trained person at our monitoring center answers, day or night. They send help and call your family."},
 {title:"Room and door sensors",body:"Small sensors notice everyday movement, like getting up in the morning or opening the front door. If the usual routine does not happen, family can get a heads up."},
 {title:"Fall sensors",body:"HomeProtect adds one fall sensor and HomeComplete adds two. We put them where a fall is most likely, like the bathroom or bedroom."},
 {title:"Voice help and sleep",body:"HomeProtect and HomeComplete add a voice unit, so you can call for help without the button. HomeComplete adds a bed sensor that shows how someone slept."},
];
export default function HowItWorksPage(){
 return <>
  <PageHero eyebrow="How it works" title="Safer at home, in four simple steps." body="We check the home, make it safer, set everything up for free and make sure someone is always there to answer." />
  <Steps eyebrow="From first call to everyday help" title="What happens when you choose MyIntel." />
  <section className="container-x pb-16 lg:pb-24"><figure className="m-0"><EditorialImage src="/photos/packages/home-layout.webp" alt="Sample home with room sensors, a fall sensor, a home hub and a voice help unit." fit="contain" className="aspect-[3/2] max-h-[620px] rounded-[2rem]" priority /><figcaption className="story-caption">A sample home. We choose each spot with you during setup.</figcaption></figure></section>
  <section className="story-section story-tint"><div className="container-x story-faq-layout"><div><p className="eyebrow">What goes in the home</p><h2 className="story-title mt-4">Simple tools. Nothing to learn.</h2><Link href="/solutions" className="story-link mt-6">See what each plan includes <ArrowRight className="h-5 w-5" aria-hidden="true" /></Link></div><dl className="story-lines">{tools.map(t=><div key={t.title}><dt>{t.title}</dt><dd>{t.body}</dd></div>)}</dl></div></section>
  <section className="story-section container-x"><div className="story-heading"><div><p className="eyebrow">Your home. Your say.</p><h2 className="story-title mt-4">You choose who knows what.</h2></div><div className="story-lead space-y-5"><p>You pick who gets updates, like a daughter, a neighbor or a care team. You can change it any time.</p><p>Room sensors notice movement, not faces. There are no cameras. The voice unit uses a microphone only for help calls.</p></div></div></section>
  <CtaBand title="Start with a free home check." body="See what may need a closer look. Then we can talk through the next step together." />
 </>;
}
