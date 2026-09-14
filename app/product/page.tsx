import type { Metadata } from "next";
import { Suspense } from "react";
import { ProductExplorer } from "@/components/product-explorer";
import { ProductFamily } from "@/components/product-family";
import { PlatformSection } from "@/components/system-sections";
import { Container, Eyebrow } from "@/components/ui";
import { createMetadata } from "@/lib/metadata";
export const metadata: Metadata = createMetadata(
  "The Phontus system",
  "Explore the Phontus Interpreting Kit and Clinical Kit, with AI interpretation, human support and one management platform.",
  "/product",
);
export default function ProductPage() {
  return (
    <>
      <section className="page-hero">
        <Container>
          <Eyebrow>Meet the system</Eyebrow>
          <h1>
            Built for the room.
            <br />
            Connected beyond it.
          </h1>
          <p>
            Purpose-built interpreting hardware, with the intelligence and
            support behind every conversation.
          </p>
        </Container>
      </section>
      <ProductFamily />
      <section className="product-details" id="details">
        <Container>
          <Eyebrow>A closer look</Eyebrow>
          <h2>Find your fit.</h2>
        </Container>
        <Suspense
          fallback={
            <div className="container product-loading">
              Loading product details…
            </div>
          }
        >
          <ProductExplorer />
        </Suspense>
      </section>
      <PlatformSection />
    </>
  );
}
