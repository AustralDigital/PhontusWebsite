import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProductNavigation } from "@/components/product-explorer";
import { ButtonLink } from "@/components/ui";
import { DetailRows, Directory, HumanHandoff, PhonePreview, PhotoSpace, WebsiteCTA, WebsiteHero, WebsiteLink } from "@/components/website-sections";
import { products } from "@/lib/products";
import { createMetadata } from "@/lib/metadata";
import { productDetails } from "@/lib/website-copy";

export function generateStaticParams() {
  return products.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const product = products.find((item) => item.slug === slug);
  if (!product) return {};
  return createMetadata(product.title, productDetails[product.slug].copy, `/products/${product.slug}`);
}

export default async function ProductDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = products.find((item) => item.slug === slug);
  if (!product) notFound();
  const detail = productDetails[product.slug];
  const phone = product.id === "phone";
  return (
    <>
      <WebsiteHero label={`${product.title} · ${detail.label}`} title={detail.title} copy={detail.copy}
        availability side={phone ? <PhonePreview /> : <PhotoSpace size={product.id === "clinical" ? "clinical" : "kit"} />}>
        <ButtonLink href="/contact">Request a demo</ButtonLink>
      </WebsiteHero>
      <ProductNavigation selected={product.id} />
      <DetailRows title={phone ? "How an interpreted call works" : "How the kit works"} label={product.title} items={detail.points} count={phone} />
      <DetailRows title={phone ? "Where the Phone Line fits" : "Where the kit fits"} items={detail.contexts}>
        <WebsiteLink href={detail.fit}>Explore related use cases</WebsiteLink>
      </DetailRows>
      <HumanHandoff />
      <Directory variant="products" exclude={`/products/${product.slug}`} />
      <WebsiteCTA title={`See the ${product.title} in action`} copy="Bring an example from your work. We’ll walk through how the setup would handle it." />
    </>
  );
}
