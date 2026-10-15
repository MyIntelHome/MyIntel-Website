import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { CtaBand } from "@/components/CtaBand";
import { site } from "@/lib/site";

export const metadata: Metadata={title:"Common Questions",description:"Simple answers about MyIntel home checks, plans, setup, privacy and help for families."};
const groups=[
 {name:"Getting started",items:[
  {q:"What does MyIntel do?",a:"We help older adults stay safely at home. We check the home for fall risks, set up a help button and simple sensors for free, and a 24/7 monitoring center answers when help is needed. Family gets the updates you choose."},
  {q:"Where do I start?",a:"Try the free home check online, or call us. It takes a few minutes and shows what may need a closer look."},
  {q:"Where do you work?",a:`We set up homes and do home safety visits in ${site.serviceArea}. The online home check works anywhere.`},
 ]},
 {name:"Cost",items:[
  {q:"How much does it cost?",a:"We are finalizing plan prices. Call us and we will give you a quote for your home. Setup is always free."},
  {q:"Does insurance or Medicare pay for it?",a:"We do not bill insurance or Medicare right now. Call us and we will talk through your options."},
  {q:"Are grab bars and other home changes included?",a:"No. Home changes are quoted separately. We go over any extra work and cost with you first."},
 ]},
 {name:"Help and safety",items:[
  {q:"Who answers when I press the help button?",a:"A trained person at a UL-listed professional monitoring center, 24 hours a day. They talk with you, send help if needed and let your family know."},
  {q:"Who does the home safety visit?",a:"A licensed, insured occupational therapist with CAPS (Certified Aging-in-Place Specialist) certification. The visit is included with HomeProtect and HomeComplete."},
  {q:"Will every fall be found?",a:"No system can promise that. Fall sensors work in the rooms where we set them up, and the help button works when it is pressed. Together they give two ways to get help fast."},
  {q:"Does this replace care or 911?",a:"No. MyIntel adds safety at home. It does not diagnose anything or replace care, visits or emergency services."},
 ]},
 {name:"Privacy and family",items:[
  {q:"Are there cameras?",a:"No. Room sensors notice movement, not faces. The voice unit in some plans uses a microphone only for help calls."},
  {q:"Who gets updates?",a:"You choose. Most people pick one or two family members. A care team can be added too, with your OK. You can change it any time."},
  {q:"Do I have to wear something?",a:"Just the help button, on the wrist or around the neck. The room sensors work on their own."},
  {q:"Can the plan change over time?",a:"Yes. As needs change, we can add sensors or move to a bigger plan. We go over any cost first."},
 ]},
];
export default function FaqPage(){
 return <>
  <PageHero eyebrow="Common questions" title="Straight answers." body="What MyIntel does, what it costs and who answers when you need help." />
  <section className="container-x pb-16 lg:pb-24"><div className="faq-index">{groups.map(g=><a key={g.name} href={"#"+g.name.toLowerCase().replaceAll(" ","-")}>{g.name}</a>)}</div><div className="mt-10 space-y-16">{groups.map(g=><section key={g.name} id={g.name.toLowerCase().replaceAll(" ","-")} className="story-faq-layout scroll-mt-28"><h2 className="text-3xl font-bold text-navy">{g.name}</h2><div className="simple-faq">{g.items.map(f=><details key={f.q}><summary>{f.q}</summary><p>{f.a}</p></details>)}</div></section>)}</div><p className="story-lead mt-12">Still have a question? <a href={site.phoneHref} className="font-bold text-navy underline underline-offset-4">Call {site.phone}</a> or <Link href="/contact" className="font-bold text-navy underline underline-offset-4">send us a note</Link>.</p></section>
  <CtaBand title="Take a look at your home." body="Our free home check gives you a place to start." />
 </>;
}
