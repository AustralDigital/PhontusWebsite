import type { Metadata, Viewport } from "next";
import { Manrope, Newsreader } from "next/font/google";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { siteConfig } from "@/lib/config";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Spanish–English Interpretation Kits & Phone Line | Phontus",
    template: "%s | Phontus",
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  icons: {
    icon: "/brand/phontus-mark.svg",
    apple: "/brand/phontus-mark.svg",
  },
  openGraph: {
    type: "website",
    siteName: siteConfig.name,
    title: "Spanish–English Interpretation Kits & Phone Line | Phontus",
    description: siteConfig.description,
    url: siteConfig.url,
    images: [
      {
        url: "/images/phontus-kits-og.webp",
        width: 1200,
        height: 630,
        alt: "A frontline employee and customer use a Phontus interpretation kit while wearing open-ear bone-conduction headsets.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Spanish–English Interpretation Kits & Phone Line | Phontus",
    description: siteConfig.description,
    images: [
      {
        url: "/images/phontus-kits-og.webp",
        alt: "A frontline employee and customer use a Phontus interpretation kit while wearing open-ear bone-conduction headsets.",
      },
    ],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0d4738",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationId = `${siteConfig.url}/#organization`;
  const websiteId = `${siteConfig.url}/#website`;
  const serviceId = `${siteConfig.url}/#interpretation-service`;

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": organizationId,
        name: siteConfig.name,
        url: siteConfig.url,
        email: siteConfig.email,
        logo: `${siteConfig.url}/brand/phontus-logo.svg`,
        description: siteConfig.description,
      },
      {
        "@type": "WebSite",
        "@id": websiteId,
        name: siteConfig.name,
        url: siteConfig.url,
        inLanguage: "en-US",
        publisher: { "@id": organizationId },
      },
      {
        "@type": "Service",
        "@id": serviceId,
        name: "Phontus Spanish–English Interpretation",
        url: `${siteConfig.url}/product`,
        serviceType: "AI-assisted Spanish–English interpretation",
        description: siteConfig.description,
        provider: { "@id": organizationId },
        availableChannel: [
          {
            "@type": "ServiceChannel",
            name: "Phontus Clinical Kit",
            serviceUrl: `${siteConfig.url}/product`,
            availableLanguage: ["English", "Spanish"],
          },
          {
            "@type": "ServiceChannel",
            name: "Phontus Frontline Kit",
            serviceUrl: `${siteConfig.url}/product`,
            availableLanguage: ["English", "Spanish"],
          },
          {
            "@type": "ServiceChannel",
            name: "Phontus Phone Line",
            serviceUrl: `${siteConfig.url}/product`,
            availableLanguage: ["English", "Spanish"],
          },
        ],
      },
    ],
  };

  return (
    <html lang="en" className={`${manrope.variable} ${newsreader.variable}`}>
      <body>
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        <SiteHeader />
        <main id="main-content">{children}</main>
        <SiteFooter />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </body>
    </html>
  );
}
