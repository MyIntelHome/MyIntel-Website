import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { CtaBand } from "@/components/CtaBand";
import { GuideLinks } from "@/components/GuideLinks";
import { JsonLd } from "@/components/JsonLd";
import { Phone } from "@/components/icons";
import { breadcrumbLd, pageMeta } from "@/lib/seo";
import { serviceCounties } from "@/lib/serviceArea";
import { site } from "@/lib/site";

export const metadata: Metadata = pageMeta({ path: "/service-area", title: "Senior Home Safety Across Metro Denver", description: "MyIntel helps older adults stay safely at home across metro Denver, including Aurora, Lakewood, Arvada, Westminster, Thornton, Centennial, Littleton, Highlands Ranch, Parker, Broomfield and Boulder." });

export default function ServiceAreaPage() {
  return <>
    <JsonLd data={breadcrumbLd([{ name: "Home", path: "/" }, { name: "Service area", path: "/service-area" }])} />
    <PageHero eyebrow="Where we work" title="Help across metro Denver." body="We set up homes and do home safety visits all across the Denver metro area." />
    <section className="container-x pb-16 lg:pb-24">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {serviceCounties.map((c) => (
          <section key={c.county} className="card p-8" aria-labelledby={`county-${c.county.replaceAll(" ", "-")}`}>
            <h2 id={`county-${c.county.replaceAll(" ", "-")}`} className="text-2xl font-bold text-navy">{c.county}</h2>
            <ul className="mt-4 space-y-1.5 text-lg text-clay">{c.cities.map((city) => <li key={city}>{city}</li>)}</ul>
          </section>
        ))}
      </div>
      <div className="story-heading mt-16">
        <div><p className="eyebrow">Not on the list?</p><h2 className="story-title mt-4">Just ask.</h2></div>
        <div>
          <p className="story-lead">If you live near metro Denver and do not see your town, call us. We will tell you if we can help.</p>
          <p className="story-lead mt-5">Family who live far away can still get updates from anywhere. The <a href={site.homeCheckUrl} target="_blank" rel="noopener noreferrer" className="font-bold text-navy underline underline-offset-4">free online home check</a> works wherever you live.</p>
          <div className="mt-7 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
            <a href={site.phoneHref} className="btn-primary"><Phone className="h-5 w-5" />Call {site.phone}</a>
            <Link href="/contact" className="btn-outline">Send us a note</Link>
          </div>
        </div>
      </div>
    </section>
    <GuideLinks tint slugs={["help-aging-parent-live-alone", "home-safety-assessment", "medicare-home-safety-colorado"]} />
    <CtaBand />
  </>;
}
