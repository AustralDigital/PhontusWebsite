export const siteConfig = {
  name: "Phontus",
  description:
    "Language-access infrastructure for the physical world. Dedicated hardware, AI and human interpretation, phone conversations and one management platform.",
  email: "hello@phontus.live",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.phontus.live",
  nav: [
    { label: "Products", href: "/product" },
    { label: "Platform", href: "/platform" },
    { label: "Industries", href: "/solutions" },
    { label: "Technology", href: "/how-it-works" },
    { label: "Company", href: "/about" },
  ],
} as const;

export const productLinks = [
  {
    label: "Clinical Kit",
    href: "/products/clinical-kit",
    copy: "A mobile cart for the point of care.",
  },
  {
    label: "Interpreting Kit",
    href: "/products/interpreting-kit",
    copy: "A compact kit for counters and desks.",
  },
  {
    label: "Phone Line",
    href: "/products/phone-line",
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
    title: "Products",
    links: [
      { label: "Overview", href: "/product" },
      { label: "Clinical Kit", href: "/products/clinical-kit" },
      { label: "Interpreting Kit", href: "/products/interpreting-kit" },
      { label: "Phone Line", href: "/products/phone-line" },
      { label: "Platform", href: "/platform" },
      { label: "How it works", href: "/how-it-works" },
    ],
  },
  {
    title: "Industries",
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
