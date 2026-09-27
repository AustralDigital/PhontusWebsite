import type { Metadata } from "next";
import { permanentRedirect } from "next/navigation";
import { ProductNavigation } from "@/components/product-explorer";
import { ProductFamily } from "@/components/product-family";
import { PlatformSection } from "@/components/system-sections";
import { PhoneSection } from "@/components/access-sections";
import { Container, Eyebrow } from "@/components/ui";
import { productDestinations } from "@/lib/products";
import type { ProductTab } from "@/lib/redesign-content";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata(
  "The Phontus system",
  "Explore the Interpreting Kit, Clinical Kit and Phone Line. Dedicated hardware, AI interpretation, human support and one management platform.",
  "/product",
);

export default async function ProductPage({ searchParams }: { searchParams: Promise<{ tab?: string | string[] }> }) {
  const { tab } = await searchParams;
  if (typeof tab === "string" && Object.hasOwn(productDestinations, tab)) {
    permanentRedirect(productDestinations[tab as ProductTab]);
  }
  return (
    <>
      <section className="page-hero">
        <Container>
          <Eyebrow>Meet the system</Eyebrow>
          <h1>Built for the room.<br />Connected beyond it.</h1>
          <p>At a counter, at the bedside or on the phone. Three ways to bring interpretation into your organization, backed by AI, human support and one platform.</p>
        </Container>
      </section>
      <div id="details"><ProductNavigation /></div>
      <ProductFamily />
      <PhoneSection />
      <PlatformSection />
    </>
  );
}
