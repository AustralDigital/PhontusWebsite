import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ProductExplorer, ProductNavigation } from "@/components/product-explorer";
import { HardwareViews } from "@/components/hardware-views";
import { HumanSection } from "@/components/system-sections";
import { Container } from "@/components/ui";
import { products } from "@/lib/products";
import { createMetadata } from "@/lib/metadata";

export function generateStaticParams() {
  return products.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const product = products.find((item) => item.slug === slug);
  if (!product) return {};
  return createMetadata(product.title, product.description, `/products/${product.slug}`);
}

export default async function ProductDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = products.find((item) => item.slug === slug);
  if (!product) notFound();
  return (
    <>
      <Container><nav className="breadcrumb" aria-label="Breadcrumb"><Link href="/product">Products</Link><span aria-hidden="true">/</span><span aria-current="page">{product.title}</span></nav></Container>
      <ProductExplorer selected={product.id} heading="h1" />
      <ProductNavigation selected={product.id} />
      {product.id === "clinical" ? <section className="editorial-section"><Container className="split-grid split-grid--center"><div><h2>Bring the conversation<br />to the bedside.</h2><p>The session screen, storage and wheeled base move together. Explore the Clinical Kit in a care setting and on its own.</p></div><HardwareViews /></Container></section> : null}
      <HumanSection />
      <section className="section section--compact"><Container><div className="inline-cta"><div><h2>Part of your organization.<br />Part of one system.</h2><p>Manage sites, staff, device enrollment, retention and usage across kits and the Phone Line.</p></div><Link className="text-link" href="/platform">Explore the platform →</Link></div></Container></section>
    </>
  );
}
