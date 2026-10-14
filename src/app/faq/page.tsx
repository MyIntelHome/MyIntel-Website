import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { CtaBand } from "@/components/CtaBand";
import { site } from "@/lib/site";

export const metadata: Metadata={title:"Common Questions",description:"Simple answers about MyIntel home checks, plans, setup, privacy and help for families."};
const groups=[
 {name:"Getting started",items:[
  {q:"Where do I start?",a:"Try the free home check. Pick your rooms and answer a few short questions. It gives you a place to start."},
  {q:"Is the home check free?",a:"Yes. It is free to see your results. You do not need an account."},
  {q:"Can someone visit my home?",a:"Yes, in areas we serve. A trained pro can check the home with you. The visit comes with HomeProtect and HomeComplete."},
 ]},
 {name:"Your plan",items:[
  {q:"What is in each plan?",a:"Each has a home hub and a help button. HomeAware has one room sensor. Protect and Complete add more room sensors and fall sensing. Complete also adds a bed sensor."},
  {q:"Is setup free?",a:"Yes, with each plan. The plan and service have their own costs. We go over those with you first."},
  {q:"Do you help after setup?",a:"Yes. We agree when to check back with you. You can tell us what works and what needs a change."},
  {q:"Are grab bars and other home changes included?",a:"No. Home changes have their own cost. Extra health tools also have their own cost. We go over any extra work with you first."},
 ]},
 {name:"The tools in your home",items:[
  {q:"Do I have to wear a button?",a:"Each plan has a help button. You press it to ask for help. Room sensors work without wearing it. The button does not sense falls."},
  {q:"Do the room sensors use cameras?",a:"No cameras are needed for room sensing. Some units use a mic for calls. We explain that before setup."},
  {q:"Will every fall be found?",a:"No. A fall sensor works in a spot we check. It can miss a fall. Visits and calls still matter."},
  {q:"Does each plan show sleep details?",a:"No. Sleep details need the bed sensor in HomeComplete. The bed must work with it. A room sensor cannot measure sleep."},
  {q:"Does a kitchen sensor tell you that I ate?",a:"No. It may note moves near it. It cannot tell if you ate."},
 ]},
 {name:"Family and care",items:[
  {q:"Who gets the calls and alerts?",a:"You help choose who gets them. We agree who will help and how before setup."},
  {q:"Does this replace visits and calls?",a:"No. These tools add help. They do not replace people, care or emergency services."},
  {q:"Can the plan change over time?",a:"We can talk about new needs. Extra tools must work with the plan. We go over costs and data changes with you first."},
 ]},
];
export default function FaqPage(){
 return <>
  <PageHero eyebrow="Common questions" title="A few clear answers." body="You do not need to know the tools. We are here to help you choose." />
  <section className="container-x pb-16 lg:pb-24"><div className="faq-index">{groups.map(g=><a key={g.name} href={"#"+g.name.toLowerCase().replaceAll(" ","-")}>{g.name}</a>)}</div><div className="mt-10 space-y-16">{groups.map(g=><section key={g.name} id={g.name.toLowerCase().replaceAll(" ","-")} className="story-faq-layout scroll-mt-28"><h2 className="text-3xl font-bold text-navy">{g.name}</h2><div className="simple-faq">{g.items.map(f=><details key={f.q}><summary>{f.q}</summary><p>{f.a}</p></details>)}</div></section>)}</div><p className="story-lead mt-12">Still have a question? <a href={site.phoneHref} className="font-bold text-navy underline underline-offset-4">Call {site.phone}</a> or <Link href="/contact" className="font-bold text-navy underline underline-offset-4">send us a note</Link>.</p></section>
  <CtaBand title="Take a look at your home." body="Our free home check gives you a place to start." />
 </>;
}
