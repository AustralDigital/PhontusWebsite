export const siteConfig = {
  name: "Phontus",
  description:
    "AI-assisted Spanish–English interpretation through Phontus Clinical and Frontline Kits, plus the Phontus Phone Line for customers who call your business number directly.",
  email: "hello@phontus.live",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://phontus.live",
  nav: [
    { label: "Product", href: "/product" },
    { label: "Solutions", href: "/solutions" },
    { label: "How It Works", href: "/how-it-works" },
    { label: "Security", href: "/security" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
} as const;

export const footerColumns = [
  {
    title: "Product",
    links: [
      { label: "Overview", href: "/product" },
      { label: "How It Works", href: "/how-it-works" },
      { label: "Security", href: "/security" },
    ],
  },
  {
    title: "Solutions",
    links: [
      { label: "Healthcare", href: "/solutions/healthcare" },
      {
        label: "Business & Field Operations",
        href: "/solutions/business-operations",
      },
      { label: "Schools & Districts", href: "/solutions/education" },
      { label: "Hotels & Hospitality", href: "/solutions/hospitality" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
      { label: "Privacy", href: "/privacy" },
      { label: "Terms", href: "/terms" },
    ],
  },
] as const;
