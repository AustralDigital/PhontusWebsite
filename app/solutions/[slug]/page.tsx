import type { Metadata } from "next";
import Link from "next/link";
import { PhoneIncoming, Smartphone, UserRound, Users } from "lucide-react";
import { notFound } from "next/navigation";
import { SessionMock } from "@/components/conversation-card";
import { FAQ } from "@/components/faq";
import { ButtonLink, Container, Eyebrow, PhotoFrame, SectionHeading, Tag } from "@/components/ui";
import { solutions } from "@/lib/redesign-content";
import { siteConfig } from "@/lib/config";
import { createMetadata } from "@/lib/metadata";

export function generateStaticParams() {
  return solutions.map((solution) => ({ slug: solution.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const solution = solutions.find((item) => item.slug === slug);
  if (!solution) return {};
  return createMetadata(solution.name, solution.lead, `/solutions/${solution.slug}`);
}

export default async function SolutionPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const solution = solutions.find((item) => item.slug === slug);
  if (!solution) notFound();

  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Solutions", item: `${siteConfig.url}/solutions` },
      { "@type": "ListItem", position: 2, name: solution.name, item: `${siteConfig.url}/solutions/${solution.slug}` },
    ],
  };

  return (
    <>
      <section className="solution-detail-hero">
        <Container className="split-grid split-grid--center">
          <div>
            <Eyebrow>{solution.eyebrow}</Eyebrow>
            <h1>{solution.title}</h1>
            <p>{solution.lead}</p>
            <div className="tag-row">{solution.tags.map((tag) => <Tag key={tag}>{tag}</Tag>)}</div>
            <Link className="text-link" href="/solutions">← All solutions</Link>
          </div>
          <PhotoFrame src={solution.image} alt={solution.imageAlt} priority />
        </Container>
      </section>

      <section className="section">
        <Container>
          <SectionHeading eyebrow="What it covers" title="Conversations this covers" />
          <div className="hairline-grid hairline-grid--three" data-reveal>
            {solution.coverage.map((item) => <div className="coverage-tile" key={item}>{item}</div>)}
          </div>
        </Container>
      </section>

      <section className="section section--white section--bordered">
        <Container>
          <SectionHeading eyebrow="What we recommend" title={solution.recommendationTitle} />
          <div className="card-grid card-grid--two" data-reveal>
            {solution.recommendations.map((item, index) => (
              <article className="recommendation-card" key={item.product}>
                <div><span className="icon-tile">{index === 0 ? <Smartphone aria-hidden="true" /> : <PhoneIncoming aria-hidden="true" />}</span><h3>{item.product}</h3></div>
                <span className="overline">{item.role}</span>
                <p>{item.copy}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="section">
        <Container className="split-grid split-grid--start">
          <div data-reveal>
            <Eyebrow>One exchange</Eyebrow>
            <h2>{solution.exchangeTitle}</h2>
            <p>{solution.exchangeCopy}</p>
          </div>
          <SessionMock lines={solution.transcript} elapsed={solution.elapsed} />
        </Container>
      </section>

      <section className="section section--white section--bordered">
        <Container>
          <SectionHeading eyebrow="What changes" title="What changes on both sides" />
          <div className="hairline-grid hairline-grid--two" data-reveal>
            {solution.changes.map((item, index) => (
              <article className="change-card" key={item.title}>
                <span className="icon-tile">{index === 0 ? <Users aria-hidden="true" /> : <UserRound aria-hidden="true" />}</span>
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="section section--bordered">
        <Container className="split-grid split-grid--start faq-section">
          <div data-reveal><Eyebrow>Questions</Eyebrow><h2>{solution.questionsTitle}</h2></div>
          <FAQ items={solution.faqs} />
        </Container>
      </section>

      <section className="section section--compact">
        <Container>
          <div className="inline-cta" data-reveal>
            <div><h2>{solution.ctaTitle}</h2><p>{solution.ctaCopy}</p></div>
            <ButtonLink href="/contact">Request a demo</ButtonLink>
          </div>
        </Container>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }} />
    </>
  );
}
