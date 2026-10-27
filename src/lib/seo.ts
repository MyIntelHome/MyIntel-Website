import type { Metadata } from "next";
import { site } from "@/lib/site";
import { serviceCities } from "@/lib/serviceArea";

const defaultImage = { url: "/photos/stories/coming-home.webp", alt: "Older woman coming home from a walk with her dog." };

// Every page gets its own canonical URL and share card, so search engines and
// AI answer engines see one clear address per page.
export function pageMeta({ path, title, description, absoluteTitle = false }: { path: string; title: string; description: string; absoluteTitle?: boolean }): Metadata {
  const fullTitle = absoluteTitle ? title : `${title} | ${site.name}`;
  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: { canonical: path },
    openGraph: { title: fullTitle, description, url: path, siteName: site.name, type: "website", locale: "en_US", images: [defaultImage] },
    twitter: { card: "summary_large_image", title: fullTitle, description, images: [defaultImage.url] },
  };
}

const orgId = `${site.url}/#organization`;

// Who MyIntel is, for search engines and AI answers. Keep every field true (see trust in site.ts).
// No street address on purpose: we serve people in their homes, so we list the service area instead.
export const organizationLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": orgId,
      name: site.name,
      legalName: site.legalName,
      url: site.url,
      logo: `${site.url}/myintel-logo.png`,
      image: `${site.url}/photos/stories/coming-home.webp`,
      description: site.description,
      telephone: "+1-720-989-1123",
      email: site.email,
      founder: { "@type": "Person", name: "Austin Gough", jobTitle: "Founder" },
      areaServed: [
        { "@type": "AdministrativeArea", name: "Denver metro area, Colorado" },
        ...serviceCities.map((name) => ({ "@type": "City", name, containedInPlace: { "@type": "State", name: "Colorado" } })),
      ],
      knowsAbout: ["Aging in place", "Home safety for older adults", "Fall prevention", "Home safety assessments", "Medical alert help buttons", "Fall detection sensors"],
      sameAs: [site.facebookUrl, "https://www.linkedin.com/company/myintel-co/"],
    },
    {
      "@type": "WebSite",
      "@id": `${site.url}/#website`,
      url: site.url,
      name: site.name,
      publisher: { "@id": orgId },
      inLanguage: "en-US",
    },
  ],
};

export function faqLd(items: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((i) => ({ "@type": "Question", name: i.q, acceptedAnswer: { "@type": "Answer", text: i.a } })),
  };
}

export function serviceLd({ name, description, path, serviceType }: { name: string; description: string; path: string; serviceType: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    serviceType,
    url: `${site.url}${path}`,
    provider: { "@id": orgId },
    areaServed: { "@type": "AdministrativeArea", name: "Denver metro area, Colorado" },
  };
}

export function articleLd({ headline, description, path, updated }: { headline: string; description: string; path: string; updated: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline,
    description,
    url: `${site.url}${path}`,
    mainEntityOfPage: `${site.url}${path}`,
    datePublished: updated,
    dateModified: updated,
    inLanguage: "en-US",
    author: { "@id": orgId },
    publisher: { "@id": orgId },
    image: `${site.url}/photos/stories/coming-home.webp`,
  };
}

export function breadcrumbLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((i, n) => ({ "@type": "ListItem", position: n + 1, name: i.name, item: `${site.url}${i.path}` })),
  };
}
