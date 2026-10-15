import type { ComponentType, SVGProps } from "react";
import { fallStats, trust } from "@/lib/site";
import { Activity, Bell, ClipboardCheck, EyeOff, Home, Moon, ShieldCheck, Sparkles, Wrench, DoorOpen, ShowerHead } from "@/components/icons";

const trustIcons = { monitoring: Bell, ots: ShieldCheck, cameras: EyeOff, installers: Wrench } as const;

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

type Step = { icon: ComponentType<SVGProps<SVGSVGElement>>; title: string; body: string };

const familySteps: Step[] = [
  { icon: ClipboardCheck, title: "Free home check", body: "Start online in a few minutes, or call us. You see what may need a closer look." },
  { icon: Home, title: "Home safety visit", body: "A licensed occupational therapist walks the home with you and spots fall risks. Included with HomeProtect and HomeComplete." },
  { icon: Wrench, title: "Free professional setup", body: "Insured installers put the sensors and help button where they help most, then show everyone how they work." },
  { icon: Sparkles, title: "We learn the routine", body: "Our AI learns the daily routine and flags when something is off. The help button is answered 24/7." },
];

export function Steps({ title = "How MyIntel works.", eyebrow = "Four simple steps", tint = false, intro, steps = familySteps }: { title?: string; eyebrow?: string; tint?: boolean; intro?: string; steps?: Step[] }) {
  return <section className={`story-section ${tint ? "story-tint" : ""}`} aria-labelledby="steps-title">
    <div className="container-x">
      <div className="max-w-3xl"><p className="eyebrow">{eyebrow}</p><h2 id="steps-title" className="story-title mt-4">{title}</h2>{intro && <p className="story-lead mt-5">{intro}</p>}</div>
      <ol className="step-grid mt-10">{steps.map((s, i) => <li key={s.title}><div className="step-top"><span className="step-number">{i + 1}</span><s.icon className="h-7 w-7 text-blue" /></div><h3>{s.title}</h3><p>{s.body}</p></li>)}</ol>
    </div>
  </section>;
}

const flags = [
  { icon: Activity, text: "Not up and moving at the usual time" },
  { icon: ShowerHead, text: "More bathroom trips at night than normal" },
  { icon: DoorOpen, text: "The front door opening late at night" },
  { icon: Moon, text: "Restless sleep or more time in bed than usual" },
];

/** Explains routine learning in plain words. Keep examples to things the sensors can really notice. */
export function RoutineInsight({ tint = false, audience = "family" }: { tint?: boolean; audience?: "family" | "pro" }) {
  return <section className={`story-section ${tint ? "story-tint" : ""}`} aria-labelledby="routine-title">
    <div className="container-x story-split">
      <div><p className="eyebrow">More than a help button</p><h2 id="routine-title" className="story-title mt-4">It learns their routine. It notices when something is off.</h2>
        <p className="story-lead mt-5">Sensors around the home quietly track everyday activity. Our AI learns what a normal day looks like, then flags changes that can be early signs of a problem, often before anyone thinks to ask.</p>
        <p className="story-lead mt-5">{audience === "pro" ? "Flags show up in your team's dashboard, so you know which clients need a call today." : "When something looks off, our team and the family members you choose get a heads up."}</p>
      </div>
      <div className="routine-card"><p className="text-base font-extrabold uppercase tracking-wider text-blue">Changes we can flag</p>
        <ul className="mt-5 space-y-4">{flags.map(f => <li key={f.text} className="flex items-center gap-4"><span className="trust-icon shrink-0"><f.icon className="h-6 w-6" /></span><span className="text-lg font-bold leading-snug text-navy">{f.text}</span></li>)}</ul>
        <p className="mt-6 text-base leading-relaxed text-clay">What we can see depends on the sensors in the home. Sleep details need the HomeComplete bed sensor.</p>
      </div>
    </div>
  </section>;
}
