import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      // Legacy WordPress search-results query string. The current site has
      // no search feature at this URL, but blocking it keeps crawlers from
      // wasting budget on it if any old links still point here.
      disallow: "/?s=",
    },
    sitemap: "https://rapid-tyres.com/sitemap.xml",
  };
}
