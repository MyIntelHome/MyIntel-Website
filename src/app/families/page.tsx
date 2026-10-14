import type { Metadata } from "next";
import Link from "next/link";
import { EditorialHero } from "@/components/EditorialHero";
import { EditorialImage } from "@/components/EditorialImage";
import { CtaBand } from "@/components/CtaBand";
import { site } from "@/lib/site";
import { ArrowRight, Phone } from "@/components/icons";

export const metadata: Metadata = {title:"For Families",description:"Help a parent stay in the home they love. Share the care, choose who gets updates and find the right MyIntel plan."};
const questions=[
 {q:"Does my parent have to wear a button?",a:"Each plan has a help button. They press it to ask for help. Room sensors work without wearing it. The button does not sense falls."},
 {q:"Who gets news from the home?",a:"You and your parent help choose who gets it. We agree who will help and how before setup."},
 {q:"Can the tools tell us that they are safe?",a:"No tool can tell you that for sure. A change may be a reason to call. Visits and phone calls still matter."},
];
export default function FamiliesPage(){
 return <>
  <EditorialHero eyebrow="For families" title="More time to just be family." body="You want to know how things are going. They want to keep their own life. We help you find a way that works for both." image="/photos/stories/family-time.webp" alt="Illustrative father and daughter sharing tea and a laugh on a porch.">
   <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap"><a href={site.homeCheckUrl} className="btn-primary">Start a free home check</a><a href={site.phoneHref} className="btn-outline"><Phone className="h-5 w-5" />{site.phone}</a></div><p className="mt-5 text-lg text-clay">Take it together, at your own pace.</p>
  </EditorialHero>
  <section className="story-section story-tint"><div className="container-x story-heading"><div><p className="eyebrow">Their home. Their say.</p><h2 className="story-title mt-4">Help that feels right to them.</h2></div><div className="space-y-5 story-lead"><p>Ask what matters to your parent. What do they want to keep doing? Where would a little help feel good?</p><p>Choose the help with them. Room sensors do not need cameras. Your parent helps choose who gets news from the home.</p></div></div></section>
  <section className="story-section container-x"><div className="max-w-3xl"><p className="eyebrow">Share the care</p><h2 className="story-title mt-4">You don&apos;t have to do it all.</h2><p className="story-lead mt-5">Family and care staff can share the load. You help choose who gets calls and alerts. We agree who will help and how.</p></div><figure className="m-0 mt-9"><EditorialImage src="/photos/packages/family-dashboard.webp" alt="Example of a mother and daughter with a sample MyIntel screen." fit="contain" className="aspect-[3/2] max-h-[580px] rounded-[2rem]" /><figcaption className="story-caption">Example view. Your screen may differ. Sleep details need the right bed sensor.</figcaption></figure><Link href="/solutions" className="story-link mt-6">Find a plan for their home <ArrowRight aria-hidden="true" className="h-5 w-5" /></Link></section>
  <section className="story-section story-tint"><div className="container-x story-faq-layout"><div><p className="eyebrow">A few answers</p><h2 className="story-title mt-4">What families ask.</h2></div><div className="simple-faq">{questions.map(f=><details key={f.q}><summary>{f.q}</summary><p>{f.a}</p></details>)}</div></div></section>
  <CtaBand title="Start with one small check." body="Our free home check gives you a place to start. You and your parent can choose what comes next." />
 </>;
}
