import type { Metadata } from "next";
import { EditorialHero } from "@/components/EditorialHero";
import { RoutineInsight, Steps, TrustRow } from "@/components/Proof";
import { site } from "@/lib/site";
import { WebsiteInquiryForm } from "@/components/WebsiteInquiryForm";
import { Phone, Mail, ArrowRight, Building, Stethoscope, Users, Home, ClipboardCheck, Heart, Dashboard, GraduationCap, Wrench, Sparkles } from "@/components/icons";

export const metadata: Metadata={title:"For Care Companies",description:"MyIntel gives home care companies the sensors, help buttons, training and a team dashboard to watch over every client at home, with AI that flags changes in daily routine.",alternates:{canonical:"/partners"}};
const partnerSteps=[
 {icon:Dashboard,title:"We set up your dashboard",body:"Your company gets its own MyIntel dashboard, with logins for the staff who need them."},
 {icon:GraduationCap,title:"We train your team",body:"We show your staff how to set up the sensors and help button, read the dashboard and act on alerts."},
 {icon:Wrench,title:"You set up your clients",body:"Your team puts the equipment in each client's home, on your schedule. We are a call away if you need help."},
 {icon:Sparkles,title:"Watch over every client",body:"See each client's daily routine in one place. Our AI flags changes, so you know who needs a call today."},
];
const who=[
 {icon:Users,title:"Home care agencies",body:"Know what happens between visits, and give families one more reason to choose you."},
 {icon:Stethoscope,title:"Home health and therapy teams",body:"Spot changes in mobility, sleep and routine early, before they turn into a fall or a hospital stay."},
 {icon:Building,title:"Senior living and housing",body:"Watch over residents in their own apartments with no cameras and no rewiring."},
 {icon:ClipboardCheck,title:"Care management",body:"Keep track of many clients from one screen and focus your time on the ones who need it."},
 {icon:Home,title:"Hospital and rehab discharge",body:"Help patients go home safely, with their routine watched in the weeks after a stay."},
 {icon:Heart,title:"Aging and caregiver groups",body:"Give the people you serve a simple way to stay safe at home."},
];
const gains=[
 {title:"One dashboard for every client",body:"Daily activity, routine changes and alerts for all of your clients, in one place your whole team can use."},
 {title:"AI that flags what changed",body:"The system learns each client's normal routine and points out what is different, so your team spends time where it matters."},
 {title:"The equipment, ready to go",body:"Help buttons, room and door sensors, fall sensors and bed sensors, chosen to fit each client's needs."},
 {title:"Training and support",body:"We get your team comfortable with setup and the dashboard, and we stay available when questions come up."},
 {title:"Help button answered 24/7",body:"When a client presses the help button, a UL-listed professional monitoring center answers, day or night."},
];
const limits=[
 "Your clients choose who sees their information. Your team records their consent before setup.",
 "Fall sensors work in the spots they are set up in. They can miss a fall, so the help button still matters.",
 "MyIntel flags changes in routine. It does not diagnose, or replace care, visits or 911.",
];
export default function PartnersPage(){
 return <>
  <EditorialHero eyebrow="For care companies" title="Watch over every client, between every visit." body="MyIntel gives care teams the tools to keep clients safe at home. We set up your company's dashboard, supply the sensors and help buttons, and train your staff. Your team sets up clients and watches over them, and our AI flags when someone's routine changes." image="/photos/packages/care-dashboard.webp" imageFit="contain" alt="Care professional at a laptop with an example MyIntel dashboard showing a client's daily activity, sleep and alerts.">
   <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap"><a href="#partnership-contact" className="btn-primary">Talk to our team <ArrowRight className="h-5 w-5" /></a><a href={site.phoneHref} className="btn-outline"><Phone className="h-5 w-5" />{site.phone}</a></div>
   <p className="mt-5 text-lg text-clay">Example screen. What you see depends on the sensors in each home.</p>
  </EditorialHero>

  <Steps tint eyebrow="How it works for your team" title="We give you the tools. Your team does what it does best." steps={partnerSteps} />

  <RoutineInsight audience="pro" />

  <section className="story-section story-tint" aria-labelledby="gains-title"><div className="container-x story-faq-layout"><div><p className="eyebrow">What you get</p><h2 id="gains-title" className="story-title mt-4">Everything your team needs.</h2><p className="story-lead mt-5">Would you rather we handle a client for you? We can also do the setup and a home safety visit by a licensed OT.</p></div>
   <dl className="story-lines">{gains.map(g=><div key={g.title}><dt>{g.title}</dt><dd>{g.body}</dd></div>)}</dl>
  </div></section>

  <section className="story-section" aria-labelledby="who-title"><div className="container-x"><p className="eyebrow">Who we work with</p><h2 id="who-title" className="story-title mt-4 max-w-3xl">Built for the people who care for older adults.</h2>
   <ul className="who-grid mt-10">{who.map(w=><li key={w.title}><span className="trust-icon"><w.icon className="h-6 w-6" /></span><h3>{w.title}</h3><p>{w.body}</p></li>)}</ul>
  </div></section>

  <TrustRow tint eyebrow="Why partners trust us" title="Credentials you can share with families." />

  <section className="story-section" aria-labelledby="limits-title"><div className="container-x story-faq-layout"><div><p className="eyebrow">Good to know</p><h2 id="limits-title" className="story-title mt-4">Clear about what it does.</h2></div><ul className="limits-list">{limits.map(l=><li key={l}>{l}</li>)}</ul></div></section>

  <section id="partnership-contact" className="story-breath scroll-mt-28 bg-navy text-cream"><div className="container-x inquiry-partner-layout"><div><p className="eyebrow !text-cream/80">Let&apos;s talk</p><h2 className="story-title mt-4 !text-cream">Bring MyIntel to your clients.</h2><p className="mt-5 max-w-2xl text-xl leading-relaxed text-cream/90">Tell us about your team and the people you serve. We will walk you through the dashboard and talk about what would fit. Just want to refer one client? We can take care of that too. We usually reply within one business day.</p><div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap"><a href={site.referralHref} className="btn-light"><Mail className="h-5 w-5" />Email our team</a><a href={site.phoneHref} className="btn-light"><Phone className="h-5 w-5" />{site.phone}</a></div></div><WebsiteInquiryForm type="care_company" light /></div></section>
 </>;
}
