import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";
import { solutions } from "@/lib/solutions";
import { EditorialHero } from "@/components/EditorialHero";
import { EditorialImage } from "@/components/EditorialImage";
import { AudiencePaths } from "@/components/AudiencePaths";
import { CtaBand } from "@/components/CtaBand";
import { DemoHome, FallStats, Steps, TrustRow } from "@/components/Proof";
import { ArrowRight, Check, Phone } from "@/components/icons";

const offer = [
  { title: "We find the risks.", body: "A licensed occupational therapist walks the home with you and points out what could cause a fall, like loose rugs, dark stairs or a hard-to-reach shower." },
  { title: "We make the home safer.", body: "We set up a help button and simple room sensors, free. Some plans add sensors that notice a fall in the bathroom or bedroom." },
  { title: "Someone is always there.", body: "Press the help button any time, day or night, and a trained person at our monitoring center answers. Family gets the updates you choose." },
];

export default function HomePage() {
  return <>
    <EditorialHero eyebrow="Aging in place in Denver" title={<>Stay in the <span className="text-blue">home you love</span>.</>} body="MyIntel helps older adults live safely at home and lets family know when something is wrong. We check the home for fall risks, set up a help button and simple sensors, and a real person answers 24/7." image="/photos/stories/coming-home.webp" alt="Older woman coming home from a walk with her dog.">
      <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
        <a href={site.homeCheckUrl} target="_blank" rel="noopener noreferrer" className="btn-primary">Start a free home check <ArrowRight className="h-5 w-5" /></a>
        <a href={site.phoneHref} className="btn-outline"><Phone className="h-5 w-5" />{site.phone}</a>
      </div>
      <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-lg font-bold text-navy">{["Free setup", "No cameras", "Help answered 24/7"].map(t => <li key={t} className="flex items-center gap-2"><Check className="h-5 w-5 text-blue" />{t}</li>)}</ul>
    </EditorialHero>

    <FallStats />

    <section className="story-section" aria-labelledby="what-we-do">
      <div className="container-x story-split">
        <figure className="m-0"><EditorialImage src="/photos/packages/kitchen-life.webp" alt="Older woman making a salad at home, with a help button on her wrist." className="aspect-[4/3] rounded-[2rem]" /></figure>
        <div><p className="eyebrow">What MyIntel does</p><h2 id="what-we-do" className="story-title mt-4">Three things that keep someone safe at home.</h2>
          <ol className="mt-8 space-y-7">{offer.map((o, i) => <li key={o.title} className="flex gap-5"><span className="step-number shrink-0">{i + 1}</span><div><h3 className="font-display text-2xl font-extrabold text-navy">{o.title}</h3><p className="mt-2 text-lg leading-relaxed text-clay">{o.body}</p></div></li>)}</ol>
        </div>
      </div>
    </section>

    <Steps tint />

    <section className="story-section container-x" aria-labelledby="home-plans">
      <div className="story-heading"><div><p className="eyebrow">Three plans</p><h2 id="home-plans" className="story-title mt-4">Pick the help that fits.</h2></div><p className="story-lead">Every plan comes with a help button, free setup and check-ins after setup. Add more sensors as needs change.</p></div>
      <div className="plan-mini-grid mt-10">{solutions.map(s => <Link key={s.id} href={`/solutions#${s.id}`} className="plan-mini card-hover"><div className="plan-mini-photo"><Image src={s.image} alt={s.imageAlt} fill sizes="(min-width: 768px) 33vw, 100vw" className="object-contain" /></div><div className="plan-mini-body"><p className="text-base font-bold text-blue">{s.focus}</p><h3 className="mt-1">{s.shortName}</h3><p>{s.audience}</p></div></Link>)}</div>
      <p className="price-note">Plan prices are being finalized. Call <a href={site.phoneHref} className="font-bold underline underline-offset-4">{site.phone}</a> for a quote for your home.</p>
      <Link href="/solutions" className="story-link mt-7">Compare the three plans <ArrowRight aria-hidden="true" className="h-5 w-5" /></Link>
    </section>

    <AudiencePaths />

    <TrustRow tint />

    <section className="story-quote-section"><figure className="container-x m-auto"><blockquote className="max-w-4xl font-display text-3xl font-semibold leading-snug text-navy sm:text-4xl">&ldquo;The system has given us so much peace of mind.&rdquo;</blockquote><figcaption className="mt-6 text-lg font-bold text-navy">Alice Koehn <span className="ml-2 font-normal text-clay">MyIntel client</span></figcaption></figure></section>

    <DemoHome />

    <CtaBand title="Not sure where to start?" body="Take our free home check. Pick your rooms, answer a few short questions and see what may need a closer look." />
  </>;
}
