import { productDetails } from "@/lib/website-copy";

const siteOrigin = new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://phontus.live");
if (siteOrigin.hostname === "www.phontus.live") siteOrigin.hostname = "phontus.live";

export const siteConfig = {
  name: "Phontus",
  description: "Live interpretation for organizations.",
  email: "hello@phontus.live",
  url: siteOrigin.origin,
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
    copy: productDetails["clinical-kit"].short,
  },
  {
    label: "Interpreting Kit",
    href: "/products/interpreting-kit",
    copy: productDetails["interpreting-kit"].short,
  },
  {
    label: "Phone Line",
    href: "/products/phone-line",
    copy: productDetails["phone-line"].short,
  },
] as const;

export const solutionLinks = [
  {
    label: "Healthcare",
    href: "/solutions/healthcare",
    copy: "Patient check-in, care coordination, scheduling and follow-up.",
  },
  {
    label: "Schools & districts",
    href: "/solutions/education",
    copy: "Enrollment, attendance and everyday conversations with families.",
  },
  {
    label: "Business & field operations",
    href: "/solutions/business-operations",
    copy: "Customer service, deliveries, shift handoffs and field coordination.",
  },
  {
    label: "Hotels & hospitality",
    href: "/solutions/hospitality",
    copy: "Check-in, guest requests and calls before and after a stay.",
  },
] as const;

export const footerColumns = [
  {
    title: "Products",
    links: [
      { label: "Product overview", href: "/product" },
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
      { label: "Request a demo", href: "/contact" },
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
