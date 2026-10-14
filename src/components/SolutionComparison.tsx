import Image from "next/image";
import { solutions } from "@/lib/solutions";
import { ArrowRight, Check } from "@/components/icons";

export function SolutionComparison() {
  return <div className="package-cards">
    {solutions.map((s, i) => <article key={s.id} id={s.id} className="package-card">
      <div className="package-card-top"><p className="package-number">0{i + 1}</p><p className="package-focus">{s.focus}</p></div>
      <div className="package-photo">
        <Image src={s.image} alt={s.imageAlt} fill sizes="(min-width: 1024px) 360px, (min-width: 768px) 50vw, 100vw" className="object-contain" quality={85} />
      </div>
      <div className="package-card-body">
        <h3 className="font-display text-3xl font-extrabold tracking-tight text-navy">{s.shortName}</h3>
        <p className="mt-4 text-lg leading-relaxed text-clay">{s.audience}</p>
        <ul className="package-benefits">{s.options.map(o => <li key={o}><Check aria-hidden="true" className="h-5 w-5 shrink-0" /><span>{o}</span></li>)}</ul>
        <details className="package-device-details">
          <summary>See all {s.deviceCount} devices <span aria-hidden="true">+</span></summary>
          <ul className="package-device-list">{s.devices.map(d => <li key={d.key}><span className="device-quantity">{d.count}</span><div><p className="font-bold text-navy">{d.label}</p><p className="mt-1 text-lg leading-relaxed text-clay">{d.detail}</p></div></li>)}</ul>
        </details>
        <p className="package-limit"><strong>Good to know:</strong> {s.limits}</p>
      </div>
    </article>)}
  </div>;
}

const comparisonRows = [
  { label: "Essence hub", values: ["1", "1", "1"] },
  { label: "Standard emergency pendant", values: ["1, manual help", "1, manual help", "1, manual help"] },
  { label: "Motion sensors", values: ["1", "5", "5"] },
  { label: "Door/window sensors", values: ["Not included", "3", "3"] },
  { label: "MDsense fall sensing", values: ["Not included", "1 selected area", "2 selected areas"] },
  { label: "VPD2 voice help", values: ["Not included", "1 communicator", "1 communicator"] },
  { label: "SleepSense", values: ["Not included", "Not included", "1 compatible bed"] },
  { label: "Detailed safety plan and scheduled follow-up", values: ["Not part of this package", "Not part of this package", "Included"] },
];
export function PackageFeatureComparison() {
  return <div className="package-feature-table" role="table" aria-label="Exact package contents and services">
    <div role="rowgroup">
      <div role="row" className="package-feature-row package-feature-heading">
        <div role="columnheader" className="feature-name">What is included</div>
        {solutions.map(s => <div role="columnheader" key={s.id}>{s.shortName}</div>)}
      </div>
    </div>
    <div role="rowgroup">{comparisonRows.map(row => <div key={row.label} role="row" className="package-feature-row">
      <div role="rowheader" className="feature-name">{row.label}</div>
      {row.values.map((v,i) => <div role="cell" key={i}><span className="feature-mobile-name">{solutions[i].shortName}</span>{v}</div>)}
    </div>)}</div>
  </div>;
}

export function PackagePreview() {
  return <section className="container-x py-16 lg:py-24">
    <div className="max-w-3xl"><p className="eyebrow">Three packages. One personal plan.</p><h2 className="mt-4 font-display text-3xl font-extrabold leading-tight text-navy sm:text-4xl">Support for the home you love.</h2><p className="mt-5 text-xl leading-relaxed text-clay">Begin with morning reassurance. Add broader activity information, room fall sensing or nighttime support when it fits your needs.</p></div>
    <div className="mt-8 grid gap-5 lg:grid-cols-3">{solutions.map(s => <article key={s.id} className="package-preview-card"><div className="relative aspect-[4/3]"><Image src={s.image} alt={s.imageAlt} fill sizes="(min-width: 1024px) 33vw, 100vw" className="object-contain" /></div><div className="p-6 pt-3"><h3 className="font-display text-2xl font-extrabold text-navy">{s.shortName}</h3><p className="mt-3 text-lg text-clay">{s.focus}</p></div></article>)}</div>
    <a href="/solutions#compare" className="mt-7 inline-flex min-h-12 items-center gap-3 font-bold text-navy underline underline-offset-4">Compare the packages <ArrowRight aria-hidden="true" className="h-5 w-5" /></a>
  </section>;
}
