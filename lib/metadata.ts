import type { Metadata } from "next";
import { siteConfig } from "@/lib/config";

export function createMetadata(
  title: string,
  description: string,
  path = "/",
): Metadata {
  const url = new URL(path, siteConfig.url);

  return {
    title: path === "/" ? { absolute: title } : title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      type: "website",
      locale: "en_US",
    },
    twitter: {
      card: "summary",
      title,
      description,
    },
  };
}
