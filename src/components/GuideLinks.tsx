import Link from "next/link";
import { ArrowRight } from "@/components/icons";
import { guides } from "@/lib/guides";

// Links from service pages to related guides, so readers (and search engines) find the plain answers.
export function GuideLinks({ slugs, tint = false, title = "Plain answers to common questions." }: { slugs: string[]; tint?: boolean; title?: string }) {
  const picked = slugs.map((s) => guides.find((g) => g.slug === s)).filter((g) => g !== undefined);
  return (
    <section className={`story-section${tint ? " story-tint" : ""}`} aria-labelledby="related-guides">
      <div className="container-x story-faq-layout">
        <div>
          <p className="eyebrow">Guides</p>
          <h2 id="related-guides" className="story-title mt-4">{title}</h2>
          <Link href="/guides" className="story-link mt-6">All guides <ArrowRight aria-hidden="true" className="h-5 w-5" /></Link>
        </div>
        <ul className="space-y-5">
          {picked.map((g) => (
            <li key={g.slug}>
              <Link href={`/guides/${g.slug}`} className="text-xl font-bold text-navy underline underline-offset-4">{g.question}</Link>
              <p className="mt-2 text-lg leading-relaxed text-clay">{g.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
