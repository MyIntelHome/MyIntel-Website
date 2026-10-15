import { fallStats, site, trust } from "@/lib/site";
import { ArrowRight, Bell, ClipboardCheck, EyeOff, Home, MapPin, Phone, ShieldCheck, Wrench } from "@/components/icons";

const trustIcons = { monitoring: Bell, ots: ShieldCheck, cameras: EyeOff, local: MapPin } as const;

export function TrustRow({ title = "Who is looking out for you.", eyebrow = "Why families trust us", tint = false }: { title?: string; eyebrow?: string; tint?: boolean }) {
  return <section className={`story-section ${tint ? "story-tint" : ""}`} aria-labelledby="trust-title">
    <div className="container-x">
      <p className="eyebrow">{eyebrow}</p><h2 id="trust-title" className="story-title mt-4 max-w-3xl">{title}</h2>
      <ul className="trust-grid mt-10">{trust.map(t => { const Icon = trustIcons[t.key as keyof typeof trustIcons]; return <li key={t.key}><span className="trust-icon"><Icon className="h-6 w-6" /></span><h3>{t.title}</h3><p>{t.body}</p></li>; })}</ul>
    </div>
  </section>;
}

export function FallStats() {
  return <section className="bg-navy text-cream" aria-labelledby="stats-title">
    <div className="container-x story-breath">
      <p className="eyebrow !text-cream/80">Why it matters</p>
      <h2 id="stats-title" className="mt-4 max-w-3xl font-display text-3xl font-extrabold leading-tight sm:text-4xl">A fall at home should never go unnoticed.</h2>
      <dl className="stat-grid mt-10">{fallStats.map(s => <div key={s.label}><dt className="font-display text-4xl font-extrabold tracking-tight sm:text-5xl">{s.stat}</dt><dd className="mt-3 text-lg leading-relaxed text-cream/85">{s.label}<span className="mt-2 block text-sm font-bold uppercase tracking-wider text-cream/60">Source: {s.source}</span></dd></div>)}</dl>
    </div>
  </section>;
}

const steps = [
  { icon: ClipboardCheck, title: "Free home check", body: "Start online in a few minutes, or call us. You see what may need a closer look." },
  { icon: Home, title: "Home safety visit", body: "A licensed occupational therapist walks the home with you and spots fall risks. Included with HomeProtect and HomeComplete." },
  { icon: Wrench, title: "We set it up, free", body: "We put the sensors and help button where they help most, then show everyone how they work." },
  { icon: Bell, title: "Help, day and night", body: "A 24/7 monitoring center answers the help button. Family gets the updates you choose. We check back with you." },
];

export function Steps({ title = "How MyIntel works.", eyebrow = "Four simple steps", tint = false, intro }: { title?: string; eyebrow?: string; tint?: boolean; intro?: string }) {
  return <section className={`story-section ${tint ? "story-tint" : ""}`} aria-labelledby="steps-title">
    <div className="container-x">
      <div className="max-w-3xl"><p className="eyebrow">{eyebrow}</p><h2 id="steps-title" className="story-title mt-4">{title}</h2>{intro && <p className="story-lead mt-5">{intro}</p>}</div>
      <ol className="step-grid mt-10">{steps.map((s, i) => <li key={s.title}><div className="step-top"><span className="step-number">{i + 1}</span><s.icon className="h-7 w-7 text-blue" /></div><h3>{s.title}</h3><p>{s.body}</p></li>)}</ol>
    </div>
  </section>;
}

export function DemoHome({ audience = "family" }: { audience?: "family" | "pro" }) {
  return <section className="story-section container-x" aria-labelledby="demo-title">
    <div className="demo-card">
      <div><p className="eyebrow">See it for yourself</p><h2 id="demo-title" className="story-title mt-4">Visit our demo home in Denver.</h2>
        <p className="story-lead mt-5">{audience === "pro" ? "Bring your team. Press the help button, walk past a sensor and see what an alert looks like before you refer anyone." : "Come see the sensors and help button in a real home. Press the button, ask questions and decide with no pressure."}</p></div>
      <div className="flex flex-col gap-4 sm:flex-row lg:flex-col"><a href={site.demoTourHref} className="btn-primary">Book a tour <ArrowRight className="h-5 w-5" /></a><a href={site.phoneHref} className="btn-outline"><Phone className="h-5 w-5" />{site.phone}</a></div>
    </div>
  </section>;
}
