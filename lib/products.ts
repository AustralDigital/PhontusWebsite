import type { ProductTab } from "@/lib/redesign-content";

export const products = [
  { id: "frontline", slug: "interpreting-kit", title: "Interpreting Kit", description: "Dedicated tabletop interpretation for counters, desks and shared spaces. Directional audio, readable transcripts, AI and human support in one managed kit." },
  { id: "clinical", slug: "clinical-kit", title: "Clinical Kit", description: "A mobile interpreting cart for clinics, exam rooms and bedside conversations. Purpose-built hardware with AI interpretation and human support on request." },
  { id: "phone", slug: "phone-line", title: "Phone Line", description: "Spanish–English phone interpretation on your business number. No app or account for callers, with human support and shared session administration." },
] as const;

export const productDestinations: Record<ProductTab, string> = {
  frontline: "/products/interpreting-kit",
  clinical: "/products/clinical-kit",
  phone: "/products/phone-line",
  human: "/how-it-works#interpretation",
  console: "/platform",
};
