import Link from "next/link";
import { EditorialImage } from "@/components/EditorialImage";

const paths = [
  { label: "For you", title: "Stay at home, on your terms.", body: "Explore support that respects your routines and choices.", image: "/photos/editorial/home-independence.png", alt: "Illustrative photograph of an older woman enjoying coffee at home", href: "/solutions", link: "Explore your options" },
  { label: "For families", title: "Make room for time together.", body: "Understand the next steps without taking over a loved one's life.", image: "/photos/editorial/family-connection.png", alt: "Illustrative photograph of a father and daughter sharing a family album", href: "/families", link: "Support for families" },
  { label: "For care partners", title: "Connect care with the home.", body: "Bring home safety and agreed follow-up into the support you provide.", image: "/photos/editorial/home-visit.png", alt: "Illustrative photograph of a specialist and older adult planning home support", href: "/partners", link: "Work with MyIntel" },
];

export function AudiencePaths() {
  return <section className="container-x pb-20 pt-6" aria-labelledby="audience-title">
    <div className="mb-9 max-w-3xl"><p className="eyebrow">A place to start</p><h2 id="audience-title" className="mt-4 font-display text-3xl font-extrabold leading-tight text-navy sm:text-4xl">For you. For your family. For the people who care.</h2></div>
    <div className="grid gap-8 lg:grid-cols-3">{paths.map(p => <article key={p.label}>
      <EditorialImage src={p.image} alt={p.alt} className="aspect-[4/3] rounded-3xl" sizes="(min-width: 1024px) 33vw, 100vw" />
      <p className="mt-6 text-base font-bold text-clay">{p.label}</p><h3 className="mt-2 font-display text-2xl font-bold leading-tight text-navy">{p.title}</h3><p className="mt-4 text-lg leading-relaxed text-clay">{p.body}</p>
      <Link href={p.href} className="mt-3 inline-flex min-h-12 items-center text-lg font-bold text-navy underline underline-offset-4">{p.link} <span className="ml-2" aria-hidden="true">→</span></Link>
    </article>)}</div>
  </section>;
}
