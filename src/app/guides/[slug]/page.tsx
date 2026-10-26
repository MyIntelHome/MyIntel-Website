import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CtaBand } from "@/components/CtaBand";
import { JsonLd } from "@/components/JsonLd";
import { getGuide, guides } from "@/lib/guides";
import { articleLd, breadcrumbLd, faqLd, pageMeta } from "@/lib/seo";
import { site } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return guides.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const guide = getGuide((await params).slug);
  if (!guide) return {};
  return pageMeta({ path: `/guides/${guide.slug}`, title: guide.title, description: guide.description });
}

const formatDate = (iso: string) => new Date(`${iso}T12:00:00Z`).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric", timeZone: "UTC" });

export default async function GuidePage({ params }: Props) {
  const guide = getGuide((await params).slug);
  if (!guide) notFound();
  const path = `/guides/${guide.slug}`;
  const others = guides.filter((g) => g.slug !== guide.slug).slice(0, 3);
  return <>
    <JsonLd data={[
      articleLd({ headline: guide.question, description: guide.description, path, updated: guide.updated }),
      faqLd(guide.faqs),
      breadcrumbLd([{ name: "Home", path: "/" }, { name: "Guides", path: "/guides" }, { name: guide.title, path }]),
    ]} />
    <article>
      <header className="bg-sand">
        <div className="mx-auto max-w-3xl px-6 pb-12 pt-16 lg:pt-24">
          <nav aria-label="Breadcrumb" className="text-base text-clay"><Link href="/guides" className="font-bold text-navy underline underline-offset-4">Guides</Link></nav>
          <h1 className="statement mt-4">{guide.question}</h1>
          <p className="mt-4 text-base text-clay">From {site.name}. Updated <time dateTime={guide.updated}>{formatDate(guide.updated)}</time>.</p>
        </div>
      </header>
      <div className="mx-auto max-w-3xl px-6 py-12 lg:py-16">
        <section aria-labelledby="short-answer" className="card p-8">
          <h2 id="short-answer" className="eyebrow">The short answer</h2>
          <p className="mt-4 text-xl leading-relaxed text-ink">{guide.answer}</p>
        </section>
        {guide.sections.map((s) => (
          <section key={s.heading} className="mt-12">
            <h2 className="text-3xl font-bold text-navy">{s.heading}</h2>
            {s.paragraphs?.map((p) => <p key={p.slice(0, 40)} className="prose-warm mt-4">{p}</p>)}
            {s.bullets && <ul className="prose-warm mt-4 list-disc space-y-2 pl-6">{s.bullets.map((b) => <li key={b.slice(0, 40)}>{b}</li>)}</ul>}
          </section>
        ))}
        <section className="mt-14" aria-labelledby="guide-faq">
          <h2 id="guide-faq" className="text-3xl font-bold text-navy">Common questions</h2>
          <div className="simple-faq mt-6">{guide.faqs.map((f) => <details key={f.q}><summary>{f.q}</summary><p>{f.a}</p></details>)}</div>
        </section>
        {guide.sources && (
          <section className="mt-14" aria-labelledby="guide-sources">
            <h2 id="guide-sources" className="text-xl font-bold text-navy">Sources</h2>
            <ul className="mt-3 space-y-2 text-base text-clay">{guide.sources.map((s) => <li key={s.url}><a href={s.url} className="underline underline-offset-4" rel="noopener">{s.label}</a></li>)}</ul>
          </section>
        )}
        <p className="story-lead mt-14">Questions about your home? <a href={site.phoneHref} className="font-bold text-navy underline underline-offset-4">Call {site.phone}</a> or <Link href="/contact" className="font-bold text-navy underline underline-offset-4">send us a note</Link>.</p>
        <nav aria-labelledby="more-guides" className="mt-14 border-t border-ink/10 pt-10">
          <h2 id="more-guides" className="text-xl font-bold text-navy">More guides</h2>
          <ul className="mt-4 space-y-3 text-lg">{others.map((g) => <li key={g.slug}><Link href={`/guides/${g.slug}`} className="font-bold text-navy underline underline-offset-4">{g.question}</Link></li>)}</ul>
        </nav>
      </div>
    </article>
    <CtaBand title="Take a look at your home." body="Our free home check gives you a place to start." />
  </>;
}
