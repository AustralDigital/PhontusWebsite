export const siteConfig = {
  name: "Phontus",
  description:
    "Purpose-built hardware, AI interpretation and human support. One system for conversations in the physical world.",
  email: "hello@phontus.live",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.phontus.live",
  nav: [
    { label: "Products", href: "/product" },
    { label: "Platform", href: "/product#platform" },
    { label: "Industries", href: "/solutions" },
    { label: "Technology", href: "/how-it-works" },
    { label: "Company", href: "/about" },
  ],
} as const;

export const productLinks = [
  {
    label: "Clinical Kit",
    href: "/product?tab=clinical#details",
    copy: "A mobile cart for the point of care.",
  },
  {
    label: "Interpreting Kit",
    href: "/product?tab=frontline#details",
    copy: "A compact kit for counters and desks.",
  },
  {
    label: "Phone Line",
    href: "/product?tab=phone#details",
    copy: "Interpreting on your business number.",
  },
] as const;

export const solutionLinks = [
  {
    label: "Healthcare",
    href: "/solutions/healthcare",
    copy: "Check-in, coordination, follow-up.",
  },
  {
    label: "Business and field operations",
    href: "/solutions/business-operations",
    copy: "Service, delivery, worksite coordination.",
  },
  {
    label: "Schools and districts",
    href: "/solutions/education",
    copy: "Enrollment, attendance, family calls.",
  },
  {
    label: "Hotels and hospitality",
    href: "/solutions/hospitality",
    copy: "Check-in, requests, team coordination.",
  },
] as const;

export const footerColumns = [
  {
    title: "Product",
    links: [
      { label: "Overview", href: "/product" },
      { label: "Clinical Kit", href: "/product?tab=clinical#details" },
      { label: "Interpreting Kit", href: "/product?tab=frontline#details" },
      { label: "Phone Line", href: "/product?tab=phone#details" },
      { label: "How it works", href: "/how-it-works" },
    ],
  },
  {
    title: "Solutions",
    links: solutionLinks.map(({ label, href }) => ({ label, href })),
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
      { label: "Security", href: "/security" },
    ],
  },
  {
    title: "Trust",
    links: [
      { label: "Privacy", href: "/privacy" },
      { label: "Terms", href: "/terms" },
      { label: "Accessibility", href: "/accessibility" },
    ],
  },
] as const;
