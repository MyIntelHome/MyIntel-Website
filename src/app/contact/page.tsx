import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { site } from "@/lib/site";
import { Phone, Mail, ArrowRight } from "@/components/icons";
import { WebsiteInquiryForm } from "@/components/WebsiteInquiryForm";

export const metadata: Metadata = pageMeta({ path: "/contact", title: "Contact MyIntel in Denver", description: "Talk with MyIntel about home safety for an older adult, a quote or setup. Call (720) 989-1123, email info@myintelhome.com or send a note. We reply within one business day." });
export default function ContactPage(){
 return <>
  <PageHero eyebrow="Contact" title="Let&apos;s talk about your home." body="Ready for a MyIntel system, looking for a quote or asking about a parent? Talk with a real person in Denver. No online home check required." />
  <section className="container-x pb-16 lg:pb-24"><div className="inquiry-contact-layout"><WebsiteInquiryForm type="contact" /><div className="contact-open-grid inquiry-contact-options">
   <div><h2 className="story-title">Call us.</h2><p className="story-lead mt-4">The fastest way to get a quote or ask a question.</p><a href={site.phoneHref} className="btn-primary mt-6"><Phone className="h-5 w-5" />{site.phone}</a></div>
   <div><h2 className="story-title">Send a note.</h2><p className="story-lead mt-4">Tell us who the help is for and the best way to reach you.</p><a href={site.emailHref} className="story-link mt-6 break-all"><Mail className="h-5 w-5 shrink-0" />{site.email}</a></div>
  </div></div></section>
  <section className="story-section story-tint"><div className="container-x story-heading"><div><p className="eyebrow">Close to home</p><h2 className="story-title mt-4">Where we work.</h2></div><div><p className="story-lead">We set up homes and do home safety visits in {site.serviceArea}.</p><p className="story-lead mt-5">You can take the free online home check wherever you live.</p><a href={site.homeCheckUrl} target="_blank" rel="noopener noreferrer" className="btn-primary mt-7">Start a free home check</a><Link href="/partners#partnership-contact" className="story-link mt-4">Care company or referral? <ArrowRight aria-hidden="true" className="h-5 w-5" /></Link><a href={site.facebookUrl} target="_blank" rel="noopener noreferrer" className="story-link">Find us on Facebook <ArrowRight aria-hidden="true" className="h-5 w-5" /></a></div></div></section>
 </>;
}
