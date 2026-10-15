import type { Metadata } from "next";
import Link from "next/link";
import type { ComponentType, SVGProps } from "react";
import { PageHero } from "@/components/PageHero";
import { EditorialImage } from "@/components/EditorialImage";
import { CtaBand } from "@/components/CtaBand";
import { Activity, ArrowRight, Bell, DoorOpen, Home, Moon, Phone, PersonStanding } from "@/components/icons";

export const metadata: Metadata={title:"How It Works",description:"A quick tour of a MyIntel home: the help button, home hub, room and door sensors, fall sensors, voice help and bed sensor, and what each one does."};
const devices:{icon:ComponentType<SVGProps<SVGSVGElement>>;name:string;where:string;does:string;plans:string}[]=[
 {icon:Bell,name:"Help button",where:"Worn on the wrist or around the neck",does:"Press it and a trained person answers, day or night. They send help and call your family.",plans:"Every plan"},
 {icon:Home,name:"Home hub",where:"Near an outlet in a main room",does:"Connects all the sensors and sends your help calls through.",plans:"Every plan"},
 {icon:Activity,name:"Room sensors",where:"In the rooms used most, like the kitchen and bedroom",does:"Notice everyday movement and learn the usual day, so changes do not go unnoticed.",plans:"1 in HomeAware, 5 in HomeProtect and HomeComplete"},
 {icon:DoorOpen,name:"Door sensors",where:"On the front door and other key doors",does:"Notice when a door opens, like a late-night trip outside.",plans:"HomeProtect and HomeComplete"},
 {icon:PersonStanding,name:"Fall sensor",where:"Where a fall is most likely, like the bathroom",does:"Can tell help is needed even if the help button cannot be reached.",plans:"1 in HomeProtect, 2 in HomeComplete"},
 {icon:Phone,name:"Voice help unit",where:"In a main room",does:"Call for help out loud, no button needed.",plans:"HomeProtect and HomeComplete"},
 {icon:Moon,name:"Bed sensor",where:"On the bed",does:"Shows how someone slept and notices restless nights.",plans:"HomeComplete"},
];
export default function HowItWorksPage(){
 return <>
  <PageHero eyebrow="How it works" title="A quick tour of a MyIntel home." body="A few small devices, each in the right spot. Here is what goes where, and what each one does." />
  <section className="container-x pb-12 lg:pb-16"><figure className="m-0"><EditorialImage src="/photos/packages/home-layout.webp" alt="Sample home with room sensors, a fall sensor, a home hub and a voice help unit." fit="contain" className="aspect-[3/2] max-h-[620px] rounded-[2rem]" priority /><figcaption className="story-caption">A sample home. Our installers choose each spot with you during setup.</figcaption></figure></section>
  <section className="story-section story-tint" aria-labelledby="devices-title"><div className="container-x">
   <div className="story-heading"><div><p className="eyebrow">What goes in the home</p><h2 id="devices-title" className="story-title mt-4">Simple tools. Nothing to learn.</h2></div><div><p className="story-lead">Everything is set up for free by insured, professional installers, who show you how it all works.</p><Link href="/solutions" className="story-link mt-4">Compare the three plans <ArrowRight className="h-5 w-5" aria-hidden="true" /></Link></div></div>
   <ul className="device-tour mt-10">{devices.map(d=><li key={d.name}><span className="trust-icon shrink-0"><d.icon className="h-6 w-6" /></span><div><h3>{d.name}</h3><p className="device-where">{d.where}</p><p>{d.does}</p><p className="device-plans">{d.plans}</p></div></li>)}</ul>
  </div></section>
  <section className="story-section container-x"><div className="story-heading"><div><p className="eyebrow">Your home. Your say.</p><h2 className="story-title mt-4">You choose who knows what.</h2></div><div className="story-lead space-y-5"><p>You pick who gets updates, like a daughter, a neighbor or a care team. You can change it any time.</p><p>Sensors notice movement, not faces. There are no cameras. The voice unit uses its microphone only for help calls.</p></div></div></section>
  <CtaBand title="Start with a free home check." body="See what may need a closer look. Then we can talk through the next step together." />
 </>;
}
