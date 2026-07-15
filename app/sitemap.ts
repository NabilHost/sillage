import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return [
    { url: `${SITE.url}/`, lastModified, changeFrequency: "weekly", priority: 1 },
    { url: `${SITE.url}/agence-seo`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE.url}/agence-sea`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE.url}/creation-site-web`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE.url}/referencement-ia-geo`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE.url}/a-propos`, lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE.url}/blog`, lastModified, changeFrequency: "weekly", priority: 0.7 },
    { url: `${SITE.url}/blog/refonte-site-sans-perdre-seo`, lastModified: new Date("2026-07-15"), changeFrequency: "yearly", priority: 0.65 },
    { url: `${SITE.url}/blog/optimiser-fiche-google-business`, lastModified: new Date("2026-07-14"), changeFrequency: "yearly", priority: 0.65 },
    { url: `${SITE.url}/blog/etre-cite-par-chatgpt`, lastModified: new Date("2026-07-13"), changeFrequency: "yearly", priority: 0.65 },
    { url: `${SITE.url}/blog/combien-de-temps-seo-resultats`, lastModified: new Date("2026-07-12"), changeFrequency: "yearly", priority: 0.65 },
    { url: `${SITE.url}/blog/seo-ou-sea-que-choisir`, lastModified: new Date("2026-07-11"), changeFrequency: "yearly", priority: 0.65 },
    { url: `${SITE.url}/blog/cout-agence-seo-2026`, lastModified: new Date("2026-07-02"), changeFrequency: "yearly", priority: 0.65 },
    { url: `${SITE.url}/blog/budget-google-ads-rentable`, lastModified: new Date("2026-06-25"), changeFrequency: "yearly", priority: 0.65 },
    { url: `${SITE.url}/blog/ai-overviews-impact-seo`, lastModified: new Date("2026-06-18"), changeFrequency: "yearly", priority: 0.6 },
    { url: `${SITE.url}/contact`, lastModified, changeFrequency: "yearly", priority: 0.6 },
  ];
}
