import type { Metadata } from "next";
import Link from "next/link";
import { EditorialHero } from "@/components/EditorialHero";
import { Steps, TrustRow } from "@/components/Proof";
import { site } from "@/lib/site";
import { Phone, Mail, ArrowRight, Building, Stethoscope, Users, Home, ClipboardCheck, Heart } from "@/components/icons";

export const metadata: Metadata={title:"For Professionals",description:"Refer clients to MyIntel for home safety visits by licensed OTs, free sensor and help button setup, and 24/7 professional monitoring in the Denver area.",alternates:{canonical:"/partners"}};
const who=[
 {icon:Users,title:"Home care agencies",body:"Know when a client needs a check-in between visits, and give families one more reason to choose you."},
 {icon:Stethoscope,title:"OTs, PTs and nurses",body:"Pair your recommendations with a safer home setup and a help button your patient can actually reach."},
 {icon:ClipboardCheck,title:"Case managers and care coordinators",body:"One local call gets a client a home safety visit, setup and 24/7 help, without a pile of separate vendors."},
 {icon:Building,title:"Senior housing and communities",body:"Add help buttons and fall alerts to residents' homes with no cameras and no rewiring."},
 {icon:Home,title:"Discharge planners",body:"Help a patient go home safely after a hospital or rehab stay, with the home checked and help in place."},
 {icon:Heart,title:"Aging and caregiver groups",body:"Give the families you serve a simple, local next step when they ask how to keep a parent safe at home."},
];
const gains=[
 {title:"Fewer surprises between visits",body:"With your client's permission, your team can get updates when something changes, like a missed morning routine or a help button press."},
 {title:"A home safety report you can use",body:"Our licensed OTs write a plan for the home that you can add to your client's care plan."},
 {title:"One local contact",body:"You talk to the same Denver team for the visit, the setup and every question after."},
 {title:"Help for your clients at 2am",body:"A UL-listed monitoring center answers the help button 24/7, so your client is never on their own."},
];
const limits=[
 "Your client chooses who sees their information. We set this up with them and record their consent.",
 "Fall sensors work in the spots we set them up in. They can miss a fall, so the help button still matters.",
 "MyIntel adds safety at home. It does not diagnose, or replace care, visits or 911.",
];
export default function PartnersPage(){
 return <>
  <EditorialHero eyebrow="For professionals" title="Help your clients stay safely at home." body="Refer a client to MyIntel. A licensed occupational therapist checks the home for fall risks, we set up a help button and sensors for free, and a 24/7 monitoring center answers when they need help. Your team stays in the loop." image="/photos/packages/care-dashboard.webp" imageFit="contain" alt="Care professional at a laptop with an example MyIntel screen showing a client's daily activity, sleep and alerts.">
   <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap"><a href="#partnership-contact" className="btn-primary">Refer a client <ArrowRight className="h-5 w-5" /></a><a href={site.phoneHref} className="btn-outline"><Phone className="h-5 w-5" />{site.phone}</a></div>
   <p className="mt-5 text-lg text-clay">Serving {site.serviceArea}.</p>
  </EditorialHero>

  <section className="story-section story-tint" aria-labelledby="who-title"><div className="container-x"><p className="eyebrow">Who we work with</p><h2 id="who-title" className="story-title mt-4 max-w-3xl">Built for the people who care for older adults.</h2>
   <ul className="who-grid mt-10">{who.map(w=><li key={w.title}><span className="trust-icon"><w.icon className="h-6 w-6" /></span><h3>{w.title}</h3><p>{w.body}</p></li>)}</ul>
  </div></section>

  <Steps eyebrow="How a referral works" title="You refer. We handle the rest." intro="Call or email us with your client's name and a good time to reach them. We take it from there and keep you updated." />

  <section className="story-section story-tint" aria-labelledby="gains-title"><div className="container-x story-faq-layout"><div><p className="eyebrow">What your team gets</p><h2 id="gains-title" className="story-title mt-4">More eyes on the home. Less work for you.</h2><Link href="/solutions" className="story-link mt-6">See what each plan includes <ArrowRight className="h-5 w-5" aria-hidden="true" /></Link></div>
   <dl className="story-lines">{gains.map(g=><div key={g.title}><dt>{g.title}</dt><dd>{g.body}</dd></div>)}</dl>
  </div></section>

  <TrustRow eyebrow="Why partners trust us" title="Credentials you can share with families." />

  <section className="story-section story-tint" aria-labelledby="limits-title"><div className="container-x story-faq-layout"><div><p className="eyebrow">Good to know</p><h2 id="limits-title" className="story-title mt-4">Clear about what we do.</h2></div><ul className="limits-list">{limits.map(l=><li key={l}>{l}</li>)}</ul></div></section>

  <section id="partnership-contact" className="story-breath scroll-mt-28 bg-navy text-cream"><div className="container-x"><p className="eyebrow !text-cream/80">Let&apos;s talk</p><h2 className="story-title mt-4 !text-cream">Refer a client or start a partnership.</h2><p className="mt-5 max-w-2xl text-xl leading-relaxed text-cream/90">Tell us who you serve and what your team needs. To refer a client, include their name, the best way to reach them and anything we should know. We usually reply within one business day.</p><div className="mt-8 flex flex-col gap-4 sm:flex-row"><a href={site.referralHref} className="btn-light"><Mail className="h-5 w-5" />Email a referral</a><a href={site.phoneHref} className="btn-light"><Phone className="h-5 w-5" />{site.phone}</a></div></div></section>
 </>;
}
