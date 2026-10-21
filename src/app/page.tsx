import Link from "next/link";
import type { ComponentType, SVGProps } from "react";
import { site } from "@/lib/site";
import { EditorialHero } from "@/components/EditorialHero";
import { EditorialImage } from "@/components/EditorialImage";
import { AudiencePaths } from "@/components/AudiencePaths";
import { CtaBand } from "@/components/CtaBand";
import { FallStats, RoutineInsight, Steps, TrustRow } from "@/components/Proof";
import { Activity, ArrowRight, Bell, Check, ClipboardCheck, DoorOpen, Home, Moon, Phone, PersonStanding, Sparkles, Wrench } from "@/components/icons";

const offer = [
  { title: "We find the risks.", body: "A licensed occupational therapist walks the home with you and points out what could cause a fall, like loose rugs, dark stairs or a hard-to-reach shower." },
  { title: "We notice when something changes.", body: "Small sensors learn their usual day, like when they get up and move around. If something is different, you hear about it early, before a small problem becomes a big one." },
  { title: "Someone is always there.", body: "Press the help button any time, day or night, and a trained person answers. Family gets the updates you choose." },
];

type Feature = { icon: ComponentType<SVGProps<SVGSVGElement>>; text: string };
const plans: { id: string; name: string; tag: string; bestFor: string; base?: string; features: Feature[]; devices: number }[] = [
  { id: "homeaware", name: "HomeAware", tag: "Start here", bestFor: "Someone who is doing well and wants a simple safety net.", devices: 3, features: [
    { icon: Bell, text: "Help button answered 24/7" },
    { icon: Activity, text: "Morning routine check in one key room" },
    { icon: Wrench, text: "Free setup and ongoing support" },
  ] },
  { id: "homeprotect", name: "HomeProtect", tag: "More help through the day", bestFor: "Someone who lives alone or has had a fall or a close call.", base: "Everything in HomeAware, plus", devices: 12, features: [
    { icon: Sparkles, text: "Notices changes in the daily routine" },
    { icon: DoorOpen, text: "Door sensors on key doors" },
    { icon: PersonStanding, text: "Fall sensing in one key room" },
    { icon: Phone, text: "Voice help, no button needed" },
    { icon: ClipboardCheck, text: "Home safety visit by a licensed OT" },
  ] },
  { id: "homecomplete", name: "HomeComplete", tag: "Day and night", bestFor: "Someone with more care needs, or restless nights.", base: "Everything in HomeProtect, plus", devices: 14, features: [
    { icon: PersonStanding, text: "Fall sensing in a second room" },
    { icon: Moon, text: "Bed sensor for sleep and night routines" },
    { icon: Home, text: "The fullest picture of the day" },
  ] },
];

export default function HomePage() {
  return <>
    <EditorialHero eyebrow="Aging in place in Denver" title={<>Stay in the <span className="text-blue">home you love</span>.</>} body="MyIntel helps older adults live safely at home and lets family know when something is wrong. We check the home for fall risks, set up simple sensors that notice when the day looks different, and a real person answers the help button 24/7." image="/photos/stories/coming-home.webp" alt="Older woman coming home from a walk with her dog.">
      <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
        <a href={site.homeCheckUrl} target="_blank" rel="noopener noreferrer" className="btn-primary">Start a free home check <ArrowRight className="h-5 w-5" /></a>
        <Link href="/contact" className="btn-outline">Talk about a system <ArrowRight className="h-5 w-5" /></Link>
      </div>
      <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-lg font-bold text-navy">{["Free setup", "No cameras", "Help answered 24/7"].map(t => <li key={t} className="flex items-center gap-2"><Check className="h-5 w-5 text-blue" />{t}</li>)}</ul>
    </EditorialHero>

    <FallStats />

    <section className="story-section" aria-labelledby="what-we-do">
      <div className="container-x story-split">
        <figure className="m-0"><EditorialImage src="/photos/care-network.jpg" alt="Illustration of a home with sensors in each room, connected to a daughter's phone, a nurse's laptop and a son's tablet." fit="contain" className="aspect-[16/9] rounded-[2rem]" /></figure>
        <div><p className="eyebrow">What MyIntel does</p><h2 id="what-we-do" className="story-title mt-4">Three things that keep someone safe at home.</h2>
          <ol className="mt-8 space-y-7">{offer.map((o, i) => <li key={o.title} className="flex gap-5"><span className="step-number shrink-0">{i + 1}</span><div><h3 className="font-display text-2xl font-extrabold text-navy">{o.title}</h3><p className="mt-2 text-lg leading-relaxed text-clay">{o.body}</p></div></li>)}</ol>
        </div>
      </div>
    </section>

    <RoutineInsight tint />

    <section className="story-section container-x" aria-labelledby="home-plans">
      <div className="story-heading"><div><p className="eyebrow">Three plans</p><h2 id="home-plans" className="story-title mt-4">Start simple. Add help as needs grow.</h2></div><p className="story-lead">Every plan includes a help button answered 24/7 and free professional setup. Each step up covers more of the home.</p></div>
      <ol className="plan-ladder mt-10">{plans.map((p, i) => <li key={p.id} className={`plan-step plan-step-${i + 1}`}>
        <div className="plan-step-head"><p className="plan-tag">{p.tag}</p><h3>{p.name}</h3><p className="plan-best">{p.bestFor}</p></div>
        <div className="plan-step-body">{p.base && <p className="plan-base">{p.base}</p>}
          <ul>{p.features.map(f => <li key={f.text}><f.icon className="h-5 w-5 shrink-0" aria-hidden="true" /><span>{f.text}</span></li>)}</ul>
          <Link href={`/solutions#${p.id}`} className="plan-more">See all {p.devices} devices <ArrowRight className="h-4 w-4" aria-hidden="true" /></Link>
        </div>
      </li>)}</ol>
      <div className="mt-8 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between"><p className="text-lg text-navy">Prices are being finalized. Call <a href={site.phoneHref} className="font-bold underline underline-offset-4">{site.phone}</a> for a quote for your home.</p><Link href="/solutions" className="story-link">Compare plans in detail <ArrowRight aria-hidden="true" className="h-5 w-5" /></Link></div>
    </section>

    <Steps tint />

    <AudiencePaths />

    <TrustRow tint />

    <section className="story-quote-section"><figure className="container-x m-auto"><blockquote className="max-w-4xl font-display text-3xl font-semibold leading-snug text-navy sm:text-4xl">&ldquo;The system has given us so much peace of mind.&rdquo;</blockquote><figcaption className="mt-6 text-lg font-bold text-navy">Alice Koehn <span className="ml-2 font-normal text-clay">MyIntel client</span></figcaption></figure></section>

    <CtaBand title="Not sure where to start?" body="Take our free home check. Pick your rooms, answer a few short questions and see what may need a closer look." />
  </>;
}
