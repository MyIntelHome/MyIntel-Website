import { solutions } from "@/lib/solutions";
import { SupportIllustration } from "@/components/SupportIllustration";

const labels = ["Everyday awareness", "Extra protection", "A complete home plan"];
const kinds = ["aware", "protect", "complete"] as const;
export function SolutionComparison() {
  return <div className="grid gap-7 lg:grid-cols-3">
    {solutions.map((s, i) => <article key={s.id} id={s.id} className="card scroll-mt-28 overflow-hidden">
      <SupportIllustration kind={kinds[i]} className="mx-auto mt-5 w-full max-w-xs px-4" />
      <div className="p-7 pt-4">
        <p className="text-base font-bold text-clay">{s.name}</p>
        <h2 className="mt-2 font-display text-3xl font-extrabold leading-tight text-navy">{labels[i]}</h2>
        <p className="mt-4 text-lg leading-relaxed text-clay">{s.audience}</p>
        <details className="mt-6 border-t border-ink/10 pt-3">
          <summary className="cursor-pointer py-3 text-lg font-bold text-navy">What we can discuss</summary>
          <ul className="mt-3 list-disc space-y-4 pl-5 pb-3 text-lg leading-relaxed text-clay">{s.options.map(o => <li key={o}>{o}</li>)}</ul>
          <p className="pb-3 text-lg leading-relaxed text-clay">{s.growth}</p>
        </details>
      </div>
    </article>)}
  </div>;
}
