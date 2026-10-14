import type { MetadataRoute } from "next";
import { locationPages, publishedBlogSlugs } from "@/lib/stubPages";

const BASE_URL = "https://rapid-tyres.com";

const corePages: MetadataRoute.Sitemap = [
  {
    url: BASE_URL,
    changeFrequency: "weekly",
    priority: 1.0,
  },
  {
    url: `${BASE_URL}/mobile-tyre-fitting`,
    changeFrequency: "monthly",
    priority: 0.9,
  },
  {
    url: `${BASE_URL}/jumpstarts`,
    changeFrequency: "monthly",
    priority: 0.9,
  },
  {
    url: `${BASE_URL}/fuel-delivery`,
    changeFrequency: "monthly",
    priority: 0.9,
  },
  {
    url: `${BASE_URL}/services`,
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    url: `${BASE_URL}/areas-we-cover`,
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    url: `${BASE_URL}/about-us`,
    changeFrequency: "monthly",
    priority: 0.7,
  },
  {
    url: `${BASE_URL}/contact`,
    changeFrequency: "monthly",
    priority: 0.7,
  },
  {
    url: `${BASE_URL}/refund-policy`,
    changeFrequency: "yearly",
    priority: 0.3,
  },
];

// Indexable, canonical service pages not covered by corePages or locationPages.
const servicePages: MetadataRoute.Sitemap = [
  "/emergency-mobile-tyre-fitting-bristol",
  "/mobile-car-tyre-fitting-bristol",
  "/mobile-van-tyre-fitting-bristol",
  "/suv-tyre-fitting-bristol",
  "/tyre-replacement-at-home-bristol",
].map((path) => ({
  url: `${BASE_URL}${path}`,
  changeFrequency: "monthly",
  priority: 0.8,
}));

export default function sitemap(): MetadataRoute.Sitemap {
  const locationEntries: MetadataRoute.Sitemap = locationPages.map((page) => ({
    url: `${BASE_URL}/${page.path}`,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  // The blog index plus every article that has a complete, dedicated page.
  // Placeholder/"coming soon" stub articles are intentionally excluded —
  // they are not indexable, finished content.
  const blogEntries: MetadataRoute.Sitemap = [
    {
      url: `${BASE_URL}/blog`,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    ...publishedBlogSlugs.map((slug) => ({
      url: `${BASE_URL}/${slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];

  return [...corePages, ...servicePages, ...locationEntries, ...blogEntries];
}
