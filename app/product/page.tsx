import type { Metadata } from "next";
import { permanentRedirect } from "next/navigation";
import { ProductNavigation } from "@/components/product-explorer";
import { ButtonLink } from "@/components/ui";
import { DetailRows, Directory, WebsiteCTA, WebsiteHero, WebsiteLink } from "@/components/website-sections";
import { productDestinations } from "@/lib/products";
import type { ProductTab } from "@/lib/redesign-content";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata(
  "Products",
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
      <WebsiteHero label="Products" title="Find the right interpreting setup" copy="Choose a mobile cart for care settings, a tabletop kit for shared counters, or live interpretation on your business number." availability>
        <ButtonLink href="/contact">Request a demo</ButtonLink>
      </WebsiteHero>
      <div id="details"><ProductNavigation /></div>
      <Directory variant="products" />
      <DetailRows label="One Phontus system" title="What every Phontus setup includes" dark items={[
        ["Two-way AI interpretation", "Each person speaks in their own language and hears the other person’s words interpreted aloud."],
        ["A human interpreter when needed", "Request a human interpreter during a kit session or a call."],
        ["One management platform", "Manage sites, staff, devices, and session history in one console."],
      ]}>
        <WebsiteLink href="/how-it-works">See how Phontus works</WebsiteLink>
      </DetailRows>
      <WebsiteCTA title="Find the right setup for your first site" copy="Tell us where your team needs interpretation. We’ll help you choose a setup for that location." />
    </>
  );
}
