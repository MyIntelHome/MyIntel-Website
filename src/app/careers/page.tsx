import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { site } from "@/lib/site";
import { ArrowRight } from "@/components/icons";

export const metadata: Metadata={title:"Work With MyIntel",description:"Help older adults stay at home. MyIntel welcomes home safety and home modification professionals."};
const roles=[
 {title:"Home safety visits",body:"Meet people in their homes. Check what may need care. Help them choose what to do next.",credential:"Certified Aging in Place Specialist (CAPS)"},
 {title:"Home changes",body:"Help plan and fit changes that make a home easier to use. Work with the person and their family.",credential:"Executive Certification in Home Modification (ECHM)"},
];
export default function CareersPage(){
 return <>
  <PageHero eyebrow="Work with us" title="Help people stay at home." body="We want to meet people who care about safer homes. Your skills can make a difference." />
  <section className="container-x pb-16 lg:pb-24"><div className="professional-topic-list">{roles.map(r=><article key={r.title}><div><h2 className="text-3xl font-bold text-navy">{r.title}</h2><p className="mt-3 text-lg font-semibold text-clay">{r.credential}</p></div><div><p className="story-lead">{r.body}</p><a href={site.emailHref+"?subject="+encodeURIComponent("Work with MyIntel: "+r.title)} className="story-link mt-4">Talk about the role <ArrowRight className="h-5 w-5" aria-hidden="true" /></a></div></article>)}</div></section>
  <section className="story-section story-tint"><div className="container-x story-heading"><h2 className="story-title">Good work.<br />Real care.</h2><div className="story-lead space-y-5"><p>We put the person and their home first. We want good ideas and honest advice.</p><p>Do not see your role here? Send us a note about your skills.</p><a href={site.emailHref} className="story-link break-all">{site.email}</a></div></div></section>
 </>;
}
