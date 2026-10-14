import Image from "next/image";
import { solutions } from "@/lib/solutions";
import { Check } from "@/components/icons";

export function SolutionComparison() {
  return <div className="package-cards">
    {solutions.map((s,i) => <article key={s.id} id={s.id} className="package-card">
      <div className="package-card-top"><p className="package-number">0{i+1}</p><p className="package-focus">{s.focus}</p></div>
      <div className="package-photo"><Image src={s.image} alt={s.imageAlt} fill sizes="(min-width: 1100px) 360px, (min-width: 768px) 50vw, 100vw" className="object-contain" quality={85} /></div>
      <div className="package-card-body">
        <h3 className="font-display text-3xl font-extrabold tracking-tight text-navy">{s.shortName}</h3>
        <p className="mt-4 text-lg leading-relaxed text-clay">{s.audience}</p>
        <ul className="package-benefits">{s.options.map(o=><li key={o}><Check aria-hidden="true" className="h-5 w-5 shrink-0" /><span>{o}</span></li>)}</ul>
        <p className="package-service-note">Free setup. Help after setup.{s.services.assessmentIncluded && <span className="mt-2 block">Also: a home safety visit and a plan for your home.</span>}</p>
        <details className="package-device-details">
          <summary>See all {s.deviceCount} devices <span aria-hidden="true">+</span></summary>
          <ul className="package-device-list">{s.devices.map(d=><li key={d.key}><span className="device-quantity">{d.count}</span><div><p className="font-bold text-navy">{d.label}</p><p className="device-model">{d.model}</p><p className="mt-1 text-lg leading-relaxed text-clay">{d.detail}</p></div></li>)}</ul>
        </details>
        <p className="package-limit"><strong>Keep in mind:</strong> {s.limits}</p>
      </div>
    </article>)}
  </div>;
}

const count = (key: string) => solutions.map(s => s.devices.find(d=>d.key===key)?.count ?? 0);
const rows = [
  {label:"Home hub", values:count("hub").map(String)},
  {label:"Help button", values:count("pendant").map(n=>n+"")},
  {label:"Room sensors", values:count("motion").map(String)},
  {label:"Door sensors", values:count("door").map(n=>n ? n+"" : "Not included")},
  {label:"Fall sensors", values:count("radar").map(n=>n ? n+" set "+(n===1?"spot":"spots") : "Not included")},
  {label:"Voice help unit", values:count("voice").map(n=>n ? n+"" : "Not included")},
  {label:"Bed sensor", values:count("sleep").map(n=>n ? "1 bed" : "Not included")},
  {label:"Free setup", values:solutions.map(s=>s.services.installationIncluded?"Included":"Not included")},
  {label:"Help after setup", values:solutions.map(s=>s.services.followUpIncluded?"Included":"Not included")},
  {label:"Home safety visit", values:solutions.map(s=>s.services.assessmentIncluded?"Included":"Not included")},
  {label:"A plan for your home", values:solutions.map(s=>s.services.homePlanIncluded?"Included":"Not included")},
];
export function PackageFeatureComparison() {
  return <div className="package-feature-table" role="table" aria-label="What each plan includes">
    <div role="rowgroup"><div role="row" className="package-feature-row package-feature-heading"><div role="columnheader" className="feature-name">What you get</div>{solutions.map(s=><div role="columnheader" key={s.id}>{s.shortName}</div>)}</div></div>
    <div role="rowgroup">{rows.map(row=><div key={row.label} role="row" className="package-feature-row"><div role="rowheader" className="feature-name">{row.label}</div>{row.values.map((v,i)=><div role="cell" key={i}><span className="feature-mobile-name">{solutions[i].shortName}</span>{v}</div>)}</div>)}</div>
  </div>;
}
