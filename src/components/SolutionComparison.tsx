import { solutions } from "@/lib/solutions";

export function SolutionComparison() {
  return (
    <div className="overflow-x-auto rounded-3xl border border-ink/10 bg-white" tabIndex={0} role="region" aria-label="Compare MyIntel support levels">
      <table className="w-full min-w-[760px] text-left text-base">
        <caption className="px-6 py-5 text-left font-semibold text-clay">Compare levels of support. Options below are discussed during assessment, not included in every system.</caption>
        <thead><tr className="bg-sky"><th scope="col" className="p-5">Your needs</th>{solutions.map(s => <th key={s.id} scope="col" className="p-5 font-display text-lg text-navy">{s.name}</th>)}</tr></thead>
        <tbody>
          <tr className="border-t border-ink/10"><th scope="row" className="p-5 align-top">Main focus</th>{solutions.map(s => <td key={s.id} className="p-5 align-top">{s.focus}</td>)}</tr>
          <tr className="border-t border-ink/10"><th scope="row" className="p-5 align-top">Who it may suit</th>{solutions.map(s => <td key={s.id} className="p-5 align-top">{s.audience}</td>)}</tr>
          <tr className="border-t border-ink/10"><th scope="row" className="p-5 align-top">Options to discuss</th>{solutions.map(s => <td key={s.id} className="p-5 align-top"><ul className="list-disc space-y-3 pl-5">{s.options.map(o => <li key={o}>{o}</li>)}</ul></td>)}</tr>
          <tr className="border-t border-ink/10"><th scope="row" className="p-5 align-top">As needs change</th>{solutions.map(s => <td key={s.id} className="p-5 align-top">{s.growth}</td>)}</tr>
        </tbody>
      </table>
    </div>
  );
}
