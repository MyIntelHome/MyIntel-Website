import type { Metadata } from "next";
import { EditorialImage } from "@/components/EditorialImage";

export const metadata: Metadata = { title: "Visual concepts | MyIntel", robots: { index: false, follow: false } };
const concepts = [
  {
    "file": "everyday-awareness",
    "title": "Everyday awareness",
    "alt": "Generated concept showing a white home hub, motion sensor and door sensor on an oak surface.",
    "devices": "Home hub, motion sensor and door sensor.",
    "placement": "Solutions page, beside everyday awareness.",
    "review": "Refine the hub button, reset control and sensor proportions against the original photographs."
  },
  {
    "file": "extra-protection",
    "title": "Extra protection",
    "alt": "Generated concept showing a home hub, room fall sensor, motion sensor and door sensor.",
    "devices": "Home hub, room fall sensor, motion sensor and door sensor.",
    "placement": "Solutions page, beside extra protection.",
    "review": "The hub face has drifted from the reference. Replace or correct it before customer use. Confirm relative device sizes."
  },
  {
    "file": "personal-support",
    "title": "Personal support",
    "alt": "Generated concept of the supplied blank-face wearable with black strap and oval touchscreen hub.",
    "devices": "Optional wearable and oval touchscreen hub.",
    "placement": "An optional personal support section, after compatibility is confirmed.",
    "review": "Check exact scale, screen details and compatibility before describing these as a package."
  },
  {
    "file": "personal-support-at-home",
    "title": "A quiet afternoon at home",
    "alt": "Illustrative older woman reading with a blank-face wearable and an oval touchscreen hub on her side table.",
    "devices": "Optional wearable and oval touchscreen hub in a home setting.",
    "placement": "Families page, beside the explanation of optional personal support.",
    "review": "Illustrative person, not a customer testimonial. Confirm device size and screen details."
  },
  {
    "file": "ambient-support-at-home",
    "title": "Support that fits everyday life",
    "alt": "Illustrative older man reading in a living room with a home hub and a room sensor.",
    "devices": "Home hub and room fall sensor in a home setting.",
    "placement": "How it works page, beside the explanation of support around the home.",
    "review": "Concept scene, not an installation or coverage guide. Check mounting and device proportions."
  }
];
const steps = [
  { title: "Start with the home", copy: "Take the free home check. Get a clear starting point." },
  { title: "Choose support together", copy: "Discuss practical improvements and suitable devices. The plan fits your home, needs and preferences." },
  { title: "Agree the next steps", copy: "Confirm who receives alerts and what happens next. Features and response depend on the agreed plan." }
];
export default function VisualReviewPage() {
  return <main className="bg-sand">
    <section className="mx-auto max-w-6xl px-5 py-12 md:py-20">
      <p className="text-lg font-bold text-navy">MyIntel visual review</p>
      <h1 className="mt-4 max-w-3xl font-display text-4xl font-extrabold leading-tight text-navy md:text-6xl">Real devices. A warmer story.</h1>
      <p className="mt-6 max-w-3xl text-xl leading-relaxed text-clay">First concepts based on the supplied device photographs and product information. These are generated illustrations for review. Package contents, compatibility and hardware details still need confirmation.</p>
      <div className="mt-10 grid gap-8 md:grid-cols-2">
        {concepts.map((c, i) => <article key={c.file} className="overflow-hidden rounded-3xl border border-ink/10 bg-white">
          <EditorialImage src={`/photos/device-concepts/${c.file}.png`} alt={c.alt} className="aspect-[3/2]" sizes="(min-width: 1024px) 560px, (min-width: 768px) 50vw, 100vw" priority={i < 2} />
          <div className="p-6 md:p-8">
            <p className="text-base font-bold text-clay">Concept {i + 1}</p>
            <h2 className="mt-2 text-3xl font-bold text-navy">{c.title}</h2>
            <p className="mt-4 text-lg leading-relaxed text-clay">{c.devices}</p>
            <p className="mt-4 text-lg leading-relaxed text-clay"><strong className="text-navy">Suggested placement:</strong> {c.placement}</p>
            <p className="mt-4 text-lg leading-relaxed text-clay"><strong className="text-navy">Before final use:</strong> {c.review}</p>
            <a className="mt-6 inline-block rounded-lg py-2 text-lg font-bold text-navy underline underline-offset-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4" href={`/photos/device-concepts/${c.file}.png`}>Open full-size image</a>
          </div>
        </article>)}
      </div>
    </section>
    <section className="mx-auto max-w-6xl px-5 pb-16">
      <div className="rounded-3xl border border-ink/10 bg-white p-6 md:p-10">
        <p className="text-lg font-bold text-clay">Infographic 1</p>
        <h2 className="mt-3 text-3xl font-bold text-navy md:text-4xl">A home plan, built around you</h2>
        <ol className="mt-8 grid gap-6 lg:grid-cols-3">
          {steps.map((s, i) => <li key={s.title} className="rounded-2xl bg-sand p-6"><span className="flex h-12 w-12 items-center justify-center rounded-full bg-navy text-2xl font-bold text-white">{i + 1}</span><h3 className="mt-5 text-2xl font-bold text-navy">{s.title}</h3><p className="mt-4 text-lg leading-relaxed text-clay">{s.copy}</p></li>)}
        </ol>
        <a href="/visual-review/support-path.svg" className="mt-6 inline-block py-2 text-lg font-bold text-navy underline underline-offset-4">Open shareable infographic</a>
      </div>
      <div className="mt-8 rounded-3xl border border-ink/10 bg-white p-6 md:p-10">
        <p className="text-lg font-bold text-clay">Infographic 2</p>
        <h2 className="mt-3 text-3xl font-bold text-navy md:text-4xl">Two ways to add support</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <article className="rounded-2xl bg-sand p-6"><h3 className="text-2xl font-bold text-navy">Around the home</h3><p className="mt-4 text-lg leading-relaxed text-clay">Suitable sensors can help notice activity or risks. Room fall sensing may be an option. Placement and coverage are checked for the home.</p></article>
          <article className="rounded-2xl bg-sand p-6"><h3 className="text-2xl font-bold text-navy">Optional personal support</h3><p className="mt-4 text-lg leading-relaxed text-clay">A wearable may suit some people. We discuss comfort, features and compatibility. A wearable is not required for every home plan.</p></article>
        </div>
        <p className="mt-6 text-lg leading-relaxed text-clay">Your devices and response arrangements are confirmed together. These are support options, not fixed package contents.</p>
        <a href="/visual-review/support-choices.svg" className="mt-6 inline-block py-2 text-lg font-bold text-navy underline underline-offset-4">Open shareable infographic</a>
      </div>
      <div className="mt-8 max-w-3xl text-lg leading-relaxed text-clay"><h2 className="text-2xl font-bold text-navy">Where real photographs will help most</h2><p className="mt-4">Use original product cutouts for final package images, especially the control panel. Use real installation photographs when showing device placement. Use a genuine, consented app screenshot for the family experience and a real team photograph for the partner page.</p><p className="mt-4">The black square device is excluded until its name and role are confirmed.</p></div>
    </section>
  </main>;
}
