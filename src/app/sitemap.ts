import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://soulweddingfilms.de";
  const locales = ["de", "en"];

  const routes = [
    "",
    "/portfolio",
    "/leistungen",
    "/ueber-mich",
    "/kontakt",
    "/impressum",
    "/datenschutz",
  ];

  const entries: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
    for (const route of routes) {
      entries.push({
        url: `${baseUrl}/${locale}${route}`,
        lastModified: new Date(),
        changeFrequency: route === "" ? "weekly" : "monthly",
        priority: route === "" ? 1 : 0.8,
      });
    }
  }

  return entries;
}
