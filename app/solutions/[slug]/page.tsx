import type { Metadata } from "next";
import Link from "next/link";
import { PhoneIncoming, Monitor } from "lucide-react";
import { notFound } from "next/navigation";
import { SessionMock } from "@/components/conversation-card";
import { FAQ } from "@/components/faq";
import { ButtonLink, CheckList, Container } from "@/components/ui";
import { PhotoSpace, WebsiteCTA, WebsiteHero, WebsiteIntro, WebsiteLink } from "@/components/website-sections";
import { solutions } from "@/lib/redesign-content";
import { productLinks } from "@/lib/config";
import { siteConfig } from "@/lib/config";
import { createMetadata } from "@/lib/metadata";
import { industryDetails } from "@/lib/website-copy";

function industryCopy(slug: string) {
  return Object.hasOwn(industryDetails, slug)
    ? industryDetails[slug as keyof typeof industryDetails]
    : null;
}

export function generateStaticParams() {
  return solutions.map((solution) => ({ slug: solution.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const solution = solutions.find((item) => item.slug === slug);
  const copy = industryCopy(slug);
  if (!solution || !copy) return {};
  return createMetadata(solution.name, copy.lead, `/solutions/${solution.slug}`);
}

export default async function SolutionPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const solution = solutions.find((item) => item.slug === slug);
  const copy = industryCopy(slug);
  if (!solution || !copy) notFound();

  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Industries", item: `${siteConfig.url}/solutions` },
      { "@type": "ListItem", position: 2, name: solution.name, item: `${siteConfig.url}/solutions/${solution.slug}` },
    ],
  };

  return (
    <>
      <WebsiteHero label={solution.eyebrow} title={copy.title} copy={copy.lead} side={<PhotoSpace size="industry" />}>
        <ButtonLink href="/contact">Request a demo</ButtonLink>
        <WebsiteLink href="/solutions">All industries</WebsiteLink>
      </WebsiteHero>

      <section className="website-section website-section--canvas" id={slug === "business-operations" ? "field-operations" : undefined}>
        <Container className="website-split website-split--rows">
          <WebsiteIntro label="Where Phontus fits" title="Conversations Phontus can support" copy={copy.summary} />
          <div className="website-checklist"><CheckList items={solution.coverage} /></div>
        </Container>
      </section>

      <section className="website-section">
        <Container>
          <WebsiteIntro label="Recommended setup" title={solution.recommendationTitle} />
          <div className="website-directory">
            {solution.recommendations.map((item) => (
              <Link className="website-directory__card" key={item.product} href={productLinks.find((product) => product.label === item.product)!.href}>
                <span className="website-directory__icon">{item.product === "Phone Line" ? <PhoneIncoming aria-hidden="true" /> : <Monitor aria-hidden="true" />}</span>
                <h3>{item.product}</h3>
                <p>{item.copy}</p>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <section className="website-section website-section--dark">
        <Container className="website-split website-split--center">
          <WebsiteIntro label="Example conversation" title={solution.exchangeTitle} copy={solution.exchangeCopy} />
          <SessionMock lines={solution.transcript} illustrative />
        </Container>
      </section>

      <section className="website-section website-section--canvas website-faq">
        <Container className="website-split website-split--rows">
          <WebsiteIntro title="Frequently asked questions"><WebsiteLink href="/contact">Talk to Phontus</WebsiteLink></WebsiteIntro>
          <FAQ items={solution.faqs} />
        </Container>
      </section>

      <WebsiteCTA title="Plan your first Phontus setup" />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }} />
    </>
  );
}
