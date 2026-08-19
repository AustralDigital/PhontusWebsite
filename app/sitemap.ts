import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/config";
import { solutions } from "@/lib/redesign-content";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/product",
    "/solutions",
    "/how-it-works",
    "/security",
    "/about",
    "/contact",
    "/privacy",
    "/terms",
    "/accessibility",
    ...solutions.map((solution) => `/solutions/${solution.slug}`),
  ];

  return routes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route.startsWith("/solutions/") ? 0.8 : 0.7,
  }));
}
