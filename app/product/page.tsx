import type { Metadata } from "next";
import { Suspense } from "react";
import { ProductExplorer } from "@/components/product-explorer";
import { PageHero } from "@/components/ui";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata(
  "Product",
  "One interpreting service, three ways in, with human interpreter escalation and one admin console.",
  "/product",
);

export default function ProductPage() {
  return (
    <>
      <PageHero
        eyebrow="Product"
        title="One interpreting service. Three ways in, and the parts that hold it together."
        copy="The Clinical Kit, the Frontline Kit and the Phone Line are the three ways a conversation starts. Human interpreter escalation and the admin console come with all of them."
      />
      <Suspense fallback={<div className="product-loading">Loading product details…</div>}>
        <ProductExplorer />
      </Suspense>
    </>
  );
}
