import Link from "next/link";
import { site } from "@/lib/site";
import { EditorialHero } from "@/components/EditorialHero";
import { EditorialImage } from "@/components/EditorialImage";
import { CtaBand } from "@/components/CtaBand";
import { ArrowRight, Phone } from "@/components/icons";

export default function HomePage() {
  return <>
    <EditorialHero eyebrow="Life at home" title={<>Stay in the <span className="text-blue">home you love</span>.</>} body="Your home is part of your life. We help you stay there, with simple ways to get help and keep loved ones close." image="/photos/stories/coming-home.webp" alt="Illustrative older woman coming home from a walk with her dog.">
      <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
        <a href={site.homeCheckUrl} target="_blank" rel="noopener noreferrer" className="btn-primary">Start a free home check <ArrowRight className="h-5 w-5" /></a>
        <a href={site.phoneHref} className="btn-outline"><Phone className="h-5 w-5" />{site.phone}</a>
      </div>
      <p className="mt-5 text-lg text-clay">Free to see your results. No account needed.</p>
    </EditorialHero>

    <section className="story-section story-tint" aria-labelledby="quiet-help">
      <div className="container-x story-split">
        <figure className="m-0"><EditorialImage src="/photos/packages/kitchen-life.webp" alt="Illustrative older woman making a salad at home, with a help button on her wrist." className="aspect-[4/3] rounded-[2rem]" /></figure>
        <div><p className="eyebrow">A little help, each day</p><h2 id="quiet-help" className="story-title mt-4">Small tools. Quiet help.</h2><p className="story-lead mt-5">Life at home should still feel like your life. We add the help you need, in the places that matter.</p>
          <dl className="story-lines mt-7">
            <div><dt>A check in the morning</dt><dd>A room sensor can note moves near it. A missed check may be a reason to call.</dd></div>
            <div><dt>A way to ask for help</dt><dd>Press the help button when you need help. Some plans also let you use your voice.</dd></div>
            <div><dt>Help in key rooms</dt><dd>Some plans can sense falls in set spots. We check where each sensor can work.</dd></div>
          </dl>
          <Link href="/how-it-works" className="story-link mt-6">See how it works <ArrowRight aria-hidden="true" className="h-5 w-5" /></Link>
        </div>
      </div>
    </section>

    <section className="story-breath bg-navy text-cream">
      <div className="container-x"><p className="eyebrow !text-cream/80">For the people you love</p><h2 className="mt-5 max-w-4xl font-display text-4xl font-extrabold leading-tight sm:text-5xl">More time for the good stuff.</h2><p className="mt-6 max-w-2xl text-xl leading-relaxed text-cream/90">You can share the care. Pick who gets news from the home. Make room for visits that are just visits.</p><Link href="/families" className="story-link mt-6 !text-cream">Help for families <ArrowRight aria-hidden="true" className="h-5 w-5" /></Link></div>
    </section>

    <section className="story-section container-x" aria-labelledby="home-plans">
      <div className="story-heading"><div><p className="eyebrow">Your home. Your choice.</p><h2 id="home-plans" className="story-title mt-4">Pick the help you need.</h2></div><p className="story-lead">Setup is free with each plan. We stay in touch after setup, too.</p></div>
      <div className="story-plan-list mt-9">
        {[{name:"HomeAware",body:"A morning check and a button to ask for help."},{name:"HomeProtect",body:"More room checks, fall sensing in one spot, and a home safety visit."},{name:"HomeComplete",body:"More help for sleep. Fall sensing in two set spots."}].map(p=><div key={p.name}><h3>{p.name}</h3><p>{p.body}</p></div>)}
      </div>
      <Link href="/solutions" className="story-link mt-7">Compare the three plans <ArrowRight aria-hidden="true" className="h-5 w-5" /></Link>
    </section>

    <section className="story-quote-section"><figure className="container-x m-auto"><blockquote className="max-w-4xl font-display text-3xl font-semibold leading-snug text-navy sm:text-4xl">&ldquo;The system has given us so much peace of mind.&rdquo;</blockquote><figcaption className="mt-6 text-lg font-bold text-navy">Alice Koehn <span className="ml-2 font-normal text-clay">MyIntel client</span></figcaption></figure></section>

    <CtaBand title="Not sure? Start here." body="Use our free home check. Pick your rooms. Answer a few short questions. See what may need a closer look." />
  </>;
}
