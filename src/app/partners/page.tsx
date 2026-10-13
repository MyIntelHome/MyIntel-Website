import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { site } from "@/lib/site";
import { followUp, positioning } from "@/lib/solutions";
import { Phone, Mail } from "@/components/icons";

export const metadata: Metadata = {
  title: "For Care and Community Partners",
  description: "Work with MyIntel on assessment, home safety improvements, appropriate monitoring and practical follow-up for people aging in place.",
};

const audiences = [
  { title: "Home care agencies", body: "Connect changes noticed between visits with an agreed check-in or review. Technology supports your team without replacing personal care." },
  { title: "Senior and 55+ housing", body: "Help residents identify home risks and explore appropriate support while respecting each person's choices and privacy." },
  { title: "Healthcare and discharge partners", body: "Make home safety and practical follow-up part of returning home. MyIntel does not diagnose, treat or replace clinical care." },
  { title: "Aging-in-place organizations and nonprofits", body: "Connect people with assessment, home changes and support that fit their needs and resources." },
];
const serviceSteps = [
  { title: "Assessment", body: "Use HomeCheck and professional assessment where appropriate to understand the person and home." },
  { title: "Recommendations", body: "Prioritize physical risks and recommend the least intrusive suitable technology." },
  { title: "Installation", body: "Confirm scope and costs, make agreed improvements and explain the selected equipment." },
  { title: "Monitoring", body: "Use only the capabilities enabled in the person's configuration." },
  { title: "Escalation", body: "Agree who receives a concern, when to contact them and what happens if they cannot be reached." },
  { title: "Intervention and follow-up", body: "Assign practical next steps and review the home or care plan with the person's involvement." },
];

export default function PartnersPage() {
  return <>
    <PageHero eyebrow="For partners" title="A practical service around the person and home." body="MyIntel brings assessment, home safety improvements and appropriate technology together. We work alongside care and community teams, with clear responsibilities for what happens next." />
    <section className="container-x section">
      <h2 className="statement">Support the care you already provide</h2>
      <div className="mt-10 grid gap-6 md:grid-cols-2">{audiences.map(a => <article key={a.title} className="card p-7"><h3 className="font-display text-2xl font-bold">{a.title}</h3><p className="mt-4 leading-relaxed text-clay">{a.body}</p></article>)}</div>
    </section>
    <section className="bg-sand"><div className="container-x section">
      <h2 className="statement">From assessment to follow-up</h2>
      <p className="lead mt-5 max-w-3xl">{positioning.principle}</p>
      <ol className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">{serviceSteps.map((s,i) => <li key={s.title} className="rounded-3xl bg-white p-7"><span className="font-bold text-blue">{i+1}</span><h3 className="mt-3 font-display text-xl font-bold">{s.title}</h3><p className="mt-3 leading-relaxed text-clay">{s.body}</p></li>)}</ol>
    </div></section>
    <section className="container-x section">
      <h2 className="statement">We don&apos;t stop at the alert.</h2>
      <p className="lead mt-5 max-w-3xl">An alert needs a practical next step. As part of an agreed service plan, we clarify who is responsible for checking, acting and following up.</p>
      <ol className="mt-8 space-y-5">{followUp.map(s => <li key={s.title} className="border-b border-ink/10 pb-5"><h3 className="font-display text-xl font-bold">{s.title}</h3><p className="mt-2 text-clay">{s.body}</p></li>)}</ol>
      <p className="mt-6 max-w-3xl leading-relaxed text-clay">{positioning.response} Monitoring does not replace emergency services or clinical judgment.</p>
    </section>
    <section className="bg-navy"><div className="container-x py-16 text-cream">
      <h2 className="font-display text-3xl font-bold">Plan a partnership with MyIntel</h2>
      <p className="mt-5 max-w-3xl text-lg leading-relaxed text-cream/80">Discuss your clients, service area and referral process. Before a pilot, agree responsibilities, consent, data access, coverage and follow-up. Integrations and shared reporting are reviewed for the systems involved, rather than assumed.</p>
      <div className="mt-8 flex flex-col gap-4 sm:flex-row"><a href={`${site.emailHref}?subject=MyIntel%20partnership`} className="btn-light"><Mail className="h-5 w-5" /> Discuss a partnership</a><a href={site.phoneHref} className="btn-light"><Phone className="h-5 w-5" />{site.phone}</a></div>
    </div></section>
  </>;
}
