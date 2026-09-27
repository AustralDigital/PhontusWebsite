import type { Metadata } from "next";
import { siteConfig } from "@/lib/config";

const socialImage = {
  url: "/images/phontus-kits-og-v2.webp",
  width: 1200,
  height: 630,
  alt: "Two people speak naturally with a Phontus interpretation kit between them.",
};

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
      images: [socialImage],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [{ url: socialImage.url, alt: socialImage.alt }],
    },
  };
}
