import type { Metadata } from "next";
import Link from "next/link";
import { EditorialHero } from "@/components/EditorialHero";
import { EditorialImage } from "@/components/EditorialImage";
import { CtaBand } from "@/components/CtaBand";
import { site } from "@/lib/site";
import { positioning } from "@/lib/solutions";
import { Phone } from "@/components/icons";

export const metadata: Metadata = {
  title: "For Families",
  description: "Help a parent stay at home with practical safety improvements, appropriate monitoring and an agreed plan. Start with MyIntel's free HomeCheck.",
};

const familyQuestions = [
  { q: "Where should we start?", a: "Take the free HomeCheck together where possible. It provides a starting point from your answers. A professional visit can help confirm priorities before choosing home improvements or technology." },
  { q: "Does my parent have to wear a device?", a: "No. There are configurations that do not require a wearable. Optional personal alarms or wearable fall detection may be discussed if your parent wants another layer of protection. We confirm availability and coverage." },
  { q: "Who gets the updates?", a: "We agree who should receive updates and alerts, based on the person's preferences and the selected system. Sharing a HomeCheck with a professional is a separate choice." },
  { q: "Can MyIntel tell us that someone is safe?", a: "No system can confirm that for certain. The selected equipment can help notice particular changes or events, within its coverage and limits. Personal check-ins and an agreed response plan still matter." },
];
export default function FamiliesPage() {
  return <>
    <EditorialHero eyebrow="For families" title="More time together. A clearer plan for home." body="Supporting a parent can bring a lot of questions. Start with their priorities, understand what needs attention, and choose the right support together." image="/photos/editorial/family-connection.png" alt="Illustrative photograph of a father and daughter enjoying a family album">
      <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap"><a href={site.homeCheckUrl} className="btn-primary">Start a free home check</a><a href={site.phoneHref} className="btn-outline"><Phone className="h-5 w-5" />{site.phone}</a></div>
      <p className="mt-5 text-base text-clay">Free to view results. Go at your own pace.</p>
    </EditorialHero>
    <section className="bg-sand"><div className="container-x grid items-center gap-12 py-16 lg:grid-cols-2 lg:py-24">
      <EditorialImage src="/photos/editorial/home-independence.png" alt="Illustrative photograph of an older woman enjoying her own morning routine" className="aspect-[4/3] rounded-3xl" />
      <div><p className="eyebrow">Independence comes first</p><h2 className="mt-4 font-display text-3xl font-extrabold leading-tight text-navy sm:text-4xl">You shouldn&apos;t have to call five times a day.</h2><p className="mt-6 text-xl leading-relaxed text-clay">You want to know how things are going. They want to keep living their own life. MyIntel helps you make a plan that respects both.</p><p className="mt-5 text-lg leading-relaxed text-clay">That might begin with better lighting or grab bars. It may include quiet monitoring of selected routines, fall protection or an optional personal alarm. The right combination depends on the person and home.</p></div>
    </div></section>
    <section className="container-x py-16 lg:py-24">
      <div className="max-w-3xl"><p className="eyebrow">A practical way forward</p><h2 className="mt-4 font-display text-3xl font-extrabold text-navy sm:text-4xl">Start with a conversation, then a plan.</h2></div>
      <ol className="mt-10 grid gap-8 md:grid-cols-3">
        {[{title:"Understand the home",body:"Use HomeCheck to discuss the rooms, routines and concerns that matter. Ask for a professional review when needed."},{title:"Choose what helps",body:"Agree practical home changes and suitable technology. We explain the options, coverage and costs."},{title:"Know what happens next",body:"Decide who gets updates, who checks a concern and how to follow up. Review the plan as needs change."}].map((s,i)=><li key={s.title} className="border-t-2 border-navy/15 pt-6"><p className="text-base font-bold text-blue">0{i+1}</p><h3 className="mt-3 font-display text-2xl font-bold text-navy">{s.title}</h3><p className="mt-4 text-lg leading-relaxed text-clay">{s.body}</p></li>)}
      </ol>
    </section>
    <section className="bg-sky"><div className="container-x grid items-center gap-12 py-16 lg:grid-cols-2">
      <div><p className="eyebrow">Your circle of support</p><h2 className="mt-4 font-display text-3xl font-extrabold leading-tight text-navy sm:text-4xl">Keep the right people involved.</h2><p className="mt-6 text-xl leading-relaxed text-clay">Family members and caregivers can play different roles. We agree who receives information and what each person should do when a concern is raised.</p><p className="mt-5 text-lg leading-relaxed text-clay">{positioning.response}</p><p className="mt-5 text-lg leading-relaxed text-clay">Already using home care? We can discuss how MyIntel fits alongside that support, with the person's involvement and clear responsibilities.</p><Link href="/solutions" className="mt-5 inline-flex min-h-12 items-center text-lg font-bold text-navy underline underline-offset-4">Explore levels of support</Link></div>
      <EditorialImage src="/photos/editorial/home-visit.png" alt="Illustrative photograph of a professional discussing support with an older adult" className="aspect-[4/3] rounded-3xl" />
    </div></section>
    <section className="mx-auto max-w-4xl px-6 py-16 lg:py-24"><h2 className="font-display text-3xl font-extrabold text-navy">Questions families ask</h2><div className="mt-8 space-y-4">{familyQuestions.map(f=><details key={f.q} className="rounded-2xl border border-ink/10 bg-white px-6"><summary className="cursor-pointer py-5 text-xl font-bold text-navy">{f.q}</summary><p className="pb-6 text-lg leading-relaxed text-clay">{f.a}</p></details>)}</div></section>
    <CtaBand title="Take the first step together." body="A free home check gives you a practical starting point. Your family chooses what to do next." />
  </>;
}
