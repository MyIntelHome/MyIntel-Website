import type { Metadata } from "next";
import { EditorialHero } from "@/components/EditorialHero";
import { EditorialImage } from "@/components/EditorialImage";
import { site } from "@/lib/site";
import { positioning } from "@/lib/solutions";
import { Phone, Mail } from "@/components/icons";

export const metadata: Metadata = {
  title: "For Care and Community Partners",
  description: "Partner with MyIntel on home assessment, appropriate technology, safety improvements and practical follow-up for people aging in place.",
};
const audiences = [
  { title: "Home care agencies", body: "Bring home safety, selected monitoring and agreed follow-up into the care you already provide." },
  { title: "Senior and 55+ housing", body: "Offer residents a practical way to explore support in their own homes, with their choice and involvement." },
  { title: "Healthcare and discharge teams", body: "Connect returning home with assessment, practical changes and appropriate follow-up." },
  { title: "Community organizations", body: "Help people find suitable home improvements and support that fits their needs and resources." },
];
export default function PartnersPage() {
  return <>
    <EditorialHero eyebrow="For care partners" title="Better support starts with the home." body="Work with MyIntel to connect assessment, practical home improvements and appropriate technology with the care your organization provides." image="/photos/editorial/home-visit.png" alt="Illustrative photograph of a home specialist discussing a plan with an older adult">
      <a href="#partnership-contact" className="btn-primary mt-8">Explore a partnership</a>
    </EditorialHero>
    <section className="bg-sand"><div className="container-x grid items-center gap-12 py-16 lg:grid-cols-2 lg:py-24">
      <div><p className="eyebrow">Alongside your team</p><h2 className="mt-4 font-display text-3xl font-extrabold leading-tight text-navy sm:text-4xl">Make the next step clearer between visits.</h2><p className="mt-6 text-xl leading-relaxed text-clay">When the selected equipment highlights a change, the value comes from knowing who should check it and what to do next.</p><p className="mt-5 text-lg leading-relaxed text-clay">MyIntel brings together assessment, recommendations, installation and monitoring with agreed escalation and follow-up. The plan defines responsibilities, rather than assuming someone else will act.</p><p className="mt-5 text-lg leading-relaxed text-clay">Technology supports personal care. It does not replace caregivers, clinical judgment or emergency services.</p></div>
      <EditorialImage src="/photos/editorial/family-connection.png" alt="Illustrative photograph of a family sharing time together at home" className="aspect-[4/3] rounded-3xl" />
    </div></section>
    <section className="container-x py-16 lg:py-24"><h2 className="font-display text-3xl font-extrabold text-navy sm:text-4xl">Built around the people you serve.</h2><div className="mt-10 grid gap-8 md:grid-cols-2">{audiences.map(a=><article key={a.title} className="rounded-3xl bg-white p-8 ring-1 ring-ink/10"><h3 className="font-display text-2xl font-bold text-navy">{a.title}</h3><p className="mt-4 text-lg leading-relaxed text-clay">{a.body}</p></article>)}</div></section>
    <section className="bg-sky"><div className="container-x py-16 lg:py-24"><p className="eyebrow">A manageable first step</p><h2 className="mt-4 font-display text-3xl font-extrabold text-navy sm:text-4xl">Begin with a focused pilot.</h2><ol className="mt-10 grid gap-8 md:grid-cols-3">{[{title:"Agree the fit",body:"Discuss your clients, service area and referral process. Identify where MyIntel could help."},{title:"Define the plan",body:"Confirm consent, data access, equipment, installation, costs and response responsibilities."},{title:"Review what works",body:"Gather feedback from the person, family and care team. Adjust before expanding."}].map((s,i)=><li key={s.title} className="border-t-2 border-navy/15 pt-6"><p className="text-base font-bold text-blue">0{i+1}</p><h3 className="mt-3 font-display text-2xl font-bold text-navy">{s.title}</h3><p className="mt-4 text-lg leading-relaxed text-clay">{s.body}</p></li>)}</ol></div></section>
    <section className="mx-auto max-w-4xl px-6 py-16">
      <details className="rounded-2xl border border-ink/10 bg-white px-6"><summary className="cursor-pointer py-5 text-xl font-bold text-navy">Coverage, reporting and response</summary><div className="space-y-4 pb-6 text-lg leading-relaxed text-clay"><p>{positioning.response}</p><p>Shared views, reporting and integrations depend on the selected platform and permissions. We confirm what is supported for your organization before starting.</p><p>Each person's plan determines what is monitored. Fall detection has limits and does not guarantee every event will be detected.</p></div></details>
    </section>
    <section id="partnership-contact" className="scroll-mt-28 bg-navy"><div className="container-x py-16 text-cream">
      <h2 className="font-display text-3xl font-extrabold sm:text-4xl">Let&apos;s discuss where MyIntel could help.</h2><p className="mt-5 max-w-3xl text-xl leading-relaxed text-cream/85">Tell us who you serve and how your team works. We can explore a referral relationship or a focused pilot.</p><div className="mt-8 flex flex-col gap-4 sm:flex-row"><a href={`${site.emailHref}?subject=MyIntel%20partnership`} className="btn-light"><Mail className="h-5 w-5" />Discuss a partnership</a><a href={site.phoneHref} className="btn-light"><Phone className="h-5 w-5" />{site.phone}</a></div>
    </div></section>
  </>;
}
