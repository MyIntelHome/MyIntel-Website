import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { site } from "@/lib/site";

export const metadata: Metadata={title:"Privacy Policy",description:"How MyIntel collects, uses and shares your information."};
export default function PrivacyPage(){
 return <>
  <PageHero eyebrow="Privacy policy" title="Your data. Your say." body="Here is how we use the details you share with us." />
  <section className="mx-auto max-w-3xl space-y-10 px-6 pb-20 text-lg leading-relaxed text-clay">
   <div><h2 className="text-2xl font-bold text-navy">What we collect</h2><p className="mt-4">You may give us your name, email or phone number. This can happen when you contact us, join a list or ask for news.</p><p className="mt-4">If you use our service, the tools in your home get data. They may note moves near them. What they get depends on your plan.</p><p className="mt-4">Room sensors do not need cameras. Some extra tools may get other data. A voice unit may use a mic for calls. We explain this to you. We share each tool&apos;s privacy terms before setup.</p></div>
   <div><h2 className="text-2xl font-bold text-navy">How we use it</h2><p className="mt-4">We use your data to run our service. We use it to make the service better. We reply to you. We share home news with people you allow.</p><p className="mt-4">We send news you choose to get. We do not sell your personal data.</p></div>
   <div><h2 className="text-2xl font-bold text-navy">Who can see home data</h2><p className="mt-4">The account holder picks who may see home data. This can be family or care staff.</p></div>
   <div><h2 className="text-2xl font-bold text-navy">Ask us about your data</h2><p className="mt-4">For questions or requests, email <a href={site.emailHref} className="font-bold text-navy break-all">{site.email}</a> or call <a href={site.phoneHref} className="font-bold text-navy">{site.phone}</a>.</p></div>
   <p className="text-base">Last updated: October 14, 2026</p>
  </section>
 </>;
}
