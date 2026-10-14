import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { site } from "@/lib/site";
import { Phone, Mail, ArrowRight } from "@/components/icons";

export const metadata: Metadata={title:"Contact",description:"Call MyIntel at (720) 989-1123, email info@myintelhome.com or take a free home check."};
export default function ContactPage(){
 return <>
  <PageHero eyebrow="Contact" title="Let&apos;s talk about your home." body="Have a question? Want help for a parent? We would love to hear from you." />
  <section className="container-x pb-16 lg:pb-24"><div className="contact-open-grid">
   <div><h2 className="story-title">Call us.</h2><p className="story-lead mt-4">Talk it through with a real person.</p><a href={site.phoneHref} className="btn-outline mt-6"><Phone className="h-5 w-5" />{site.phone}</a></div>
   <div><h2 className="story-title">Send a note.</h2><p className="story-lead mt-4">Tell us what you need help with.</p><a href={site.emailHref} className="story-link mt-6 break-all"><Mail className="h-5 w-5 shrink-0" />{site.email}</a></div>
  </div></section>
  <section className="story-section story-tint"><div className="container-x story-heading"><div><p className="eyebrow">Close to home</p><h2 className="story-title mt-4">Where we visit.</h2></div><div><p className="story-lead">{site.serviceAreas.join(" and ")}.</p><p className="story-lead mt-5">You can take the free home check wherever you live.</p><a href={site.homeCheckUrl} className="btn-primary mt-7">Start a free home check</a><a href={site.facebookUrl} target="_blank" rel="noopener noreferrer" className="story-link mt-4">Find us on Facebook <ArrowRight aria-hidden="true" className="h-5 w-5" /></a></div></div></section>
 </>;
}
