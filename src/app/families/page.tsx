import type { Metadata } from "next";
import Link from "next/link";
import { EditorialHero } from "@/components/EditorialHero";
import { EditorialImage } from "@/components/EditorialImage";
import { CtaBand } from "@/components/CtaBand";
import { Steps, TrustRow } from "@/components/Proof";
import { site } from "@/lib/site";
import { ArrowRight, Phone } from "@/components/icons";

export const metadata: Metadata = {title:"For Families",description:"Help a parent stay safely in the home they love. A home safety visit, free setup, a help button answered 24/7 and updates you choose."};
const moments=[
 {time:"7:30 am",title:"Mom is up and moving.",body:"Her morning looks like every other morning, so there is nothing to worry about. If it does not, you get a gentle heads up."},
 {time:"2:00 pm",title:"Dad presses his help button.",body:"A trained person answers right away, day or night, talks with him, sends help if needed and calls you."},
 {time:"11:00 pm",title:"A fall in the bathroom.",body:"With a fall sensor in that room, help is alerted even if they cannot reach the button."},
];
const questions=[
 {q:"Does my parent have to wear something?",a:"There is a help button to wear on the wrist or neck. The room sensors work on their own, so nothing else needs to be worn."},
 {q:"Who gets updates?",a:"You and your parent choose together. Most families pick one or two people. You can change it any time."},
 {q:"Are there cameras?",a:"No. Room sensors notice movement, not faces. Nobody is watching on video."},
 {q:"What if they live far from me?",a:"That is who this is for. You get updates wherever you live. We take care of setup and visits in the Denver area."},
];
export default function FamiliesPage(){
 return <>
  <EditorialHero eyebrow="For families" title="Know they're okay, without calling five times a day." body="Your parent wants to stay in their own home. You want to know they are safe. MyIntel checks the home for fall risks, learns their usual day and lets you know when something is different. A help button is answered 24/7." image="/photos/stories/family-time.webp" alt="Father and daughter sharing tea and a laugh on a porch.">
   <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap"><a href={site.homeCheckUrl} target="_blank" rel="noopener noreferrer" className="btn-primary">Start a free home check <ArrowRight className="h-5 w-5" /></a><a href={site.phoneHref} className="btn-outline"><Phone className="h-5 w-5" />{site.phone}</a></div><p className="mt-5 text-lg text-clay">Take it together, at your own pace.</p>
  </EditorialHero>
  <section className="story-section story-tint" aria-labelledby="day-title"><div className="container-x"><p className="eyebrow">A day with MyIntel</p><h2 id="day-title" className="story-title mt-4 max-w-3xl">Quiet most days. There when it counts.</h2>
   <ol className="step-grid step-grid-3 mt-10">{moments.map(m=><li key={m.time}><p className="text-base font-extrabold uppercase tracking-wider text-blue">{m.time}</p><h3>{m.title}</h3><p>{m.body}</p></li>)}</ol>
   <p className="story-caption">Fall sensors come with HomeProtect and HomeComplete.</p>
  </div></section>
  <section className="story-section container-x"><div className="story-split"><figure className="m-0"><EditorialImage src="/photos/packages/family-dashboard.webp" alt="Mother and daughter looking at an example MyIntel screen together." fit="contain" className="aspect-[4/3] rounded-[2rem]" /><figcaption className="story-caption">An example screen. What you see depends on the plan.</figcaption></figure><div><p className="eyebrow">Their home. Their say.</p><h2 className="story-title mt-4">Help that respects their independence.</h2><div className="story-lead mt-5 space-y-5"><p>Ask what matters to your parent. What do they want to keep doing? Where would a little help feel good?</p><p>Then choose the help together. Your parent decides who gets updates, and there are no cameras anywhere.</p></div><Link href="/solutions" className="story-link mt-6">Find a plan for their home <ArrowRight aria-hidden="true" className="h-5 w-5" /></Link></div></div></section>
  <Steps tint eyebrow="Getting started" title="You don't have to figure this out alone." />
  <TrustRow />
  <section className="story-section story-tint"><div className="container-x story-faq-layout"><div><p className="eyebrow">A few answers</p><h2 className="story-title mt-4">What families ask.</h2><Link href="/faq" className="story-link mt-6">More questions <ArrowRight aria-hidden="true" className="h-5 w-5" /></Link></div><div className="simple-faq">{questions.map(f=><details key={f.q}><summary>{f.q}</summary><p>{f.a}</p></details>)}</div></div></section>
  <CtaBand title="Start with one small check." body="Our free home check gives you and your parent a place to start. You choose what comes next." />
 </>;
}
