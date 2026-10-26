import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { guides } from "@/lib/guides";

const pages: { path: string; priority: number; changeFrequency: "weekly" | "monthly" | "yearly" }[] = [
  { path: "", priority: 1, changeFrequency: "weekly" },
  { path: "/families", priority: 0.9, changeFrequency: "monthly" },
  { path: "/solutions", priority: 0.9, changeFrequency: "monthly" },
  { path: "/assessments", priority: 0.9, changeFrequency: "monthly" },
  { path: "/partners", priority: 0.8, changeFrequency: "monthly" },
  { path: "/faq", priority: 0.8, changeFrequency: "monthly" },
  { path: "/guides", priority: 0.7, changeFrequency: "monthly" },
  { path: "/about", priority: 0.6, changeFrequency: "monthly" },
  { path: "/contact", priority: 0.6, changeFrequency: "yearly" },
  { path: "/careers", priority: 0.4, changeFrequency: "monthly" },
  { path: "/privacy", priority: 0.2, changeFrequency: "yearly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return [
    ...pages.map((p) => ({ url: `${site.url}${p.path}`, lastModified, changeFrequency: p.changeFrequency, priority: p.priority })),
    ...guides.map((g) => ({ url: `${site.url}/guides/${g.slug}`, lastModified: new Date(`${g.updated}T12:00:00Z`), changeFrequency: "monthly" as const, priority: 0.7 })),
  ];
}
