import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { SiteBehavior } from "@/components/site-behavior";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { siteConfig } from "@/lib/config";
import "./globals.css";
import "./website.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: { default: "Phontus | Live interpretation for frontline teams", template: "%s | Phontus" },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  icons: { icon: "/brand/phontus-mark.svg", apple: "/brand/phontus-mark.svg" },
  openGraph: {
    type: "website",
    siteName: siteConfig.name,
    title: "Phontus | Live interpretation for frontline teams",
    description: siteConfig.description,
    url: siteConfig.url,
  },
  twitter: {
    card: "summary",
    title: "Phontus | Live interpretation for frontline teams",
    description: siteConfig.description,
  },
};

export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#1E4038" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "Organization", name: siteConfig.name, url: siteConfig.url, email: siteConfig.email },
      { "@type": "WebSite", name: siteConfig.name, url: siteConfig.url, inLanguage: "en-US" },
      {
        "@type": "Service",
        name: "Phontus Spanish–English Interpreting",
        serviceType: "AI-assisted Spanish–English interpreting",
        availableLanguage: ["English", "Spanish"],
      },
    ],
  };

  return (
    <html lang="en" className={inter.variable}>
      <body>
        <a className="skip-link" href="#main-content">Skip to content</a>
        <SiteHeader />
        <main id="main-content">{children}</main>
        <SiteFooter />
        <SiteBehavior />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      </body>
    </html>
  );
}
