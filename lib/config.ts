export const siteConfig = {
  name: "Phontus",
  description:
    "AI-assisted Spanish ⇄ English interpreting through purpose-built kits and the Phontus Phone Line, for the teams people talk to first.",
  email: "hello@phontus.live",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://phontus.live",
  nav: [
    { label: "Product", href: "/product" },
    { label: "How it works", href: "/how-it-works" },
    { label: "Solutions", href: "/solutions" },
    { label: "Security", href: "/security" },
    { label: "About", href: "/about" },
  ],
} as const;

export const productLinks = [
  {
    label: "Clinical Kit",
    href: "/product?tab=clinical",
    copy: "A mobile cart for the point of care.",
  },
  {
    label: "Frontline Kit",
    href: "/product?tab=frontline",
    copy: "A compact kit for counters and desks.",
  },
  {
    label: "Phone Line",
    href: "/product?tab=phone",
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
      { label: "Clinical Kit", href: "/product?tab=clinical" },
      { label: "Frontline Kit", href: "/product?tab=frontline" },
      { label: "Phone Line", href: "/product?tab=phone" },
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
