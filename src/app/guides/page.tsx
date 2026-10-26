import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { CtaBand } from "@/components/CtaBand";
import { JsonLd } from "@/components/JsonLd";
import { ArrowRight } from "@/components/icons";
import { guides } from "@/lib/guides";
import { breadcrumbLd, pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({ path: "/guides", title: "Guides for Families and Older Adults", description: "Plain answers to common questions about home safety, falls, help buttons, Medicare and helping a parent stay safely at home." });

export default function GuidesPage() {
  return <>
    <JsonLd data={breadcrumbLd([{ name: "Home", path: "/" }, { name: "Guides", path: "/guides" }])} />
    <PageHero eyebrow="Guides" title="Plain answers for families." body="Common questions about home safety, falls and helping someone stay in the home they love." />
    <section className="container-x pb-16 lg:pb-24">
      <ul className="grid gap-6 md:grid-cols-2">
        {guides.map((g) => (
          <li key={g.slug} className="card card-hover p-8">
            <h2 className="text-2xl font-bold text-navy"><Link href={`/guides/${g.slug}`} className="underline-offset-4 hover:underline">{g.question}</Link></h2>
            <p className="mt-4 text-lg leading-relaxed text-clay">{g.description}</p>
            <Link href={`/guides/${g.slug}`} className="mt-6 inline-flex items-center gap-2 font-bold text-navy" aria-label={`Read: ${g.question}`}>Read the answer <ArrowRight className="h-5 w-5" /></Link>
          </li>
        ))}
      </ul>
    </section>
    <CtaBand title="Take a look at your home." body="Our free home check gives you a place to start." />
  </>;
}
