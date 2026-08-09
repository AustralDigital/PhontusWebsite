import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { FinalCTA } from "@/components/final-cta";
import {
  ButtonLink,
  Container,
  SectionHeading,
} from "@/components/ui";
import { deliveryMethods, solutions } from "@/lib/content";
import { siteConfig } from "@/lib/config";
import { createMetadata } from "@/lib/metadata";

export function generateStaticParams() {
  return solutions.map((solution) => ({ slug: solution.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const solution = solutions.find((item) => item.slug === slug);
  if (!solution) return {};

  return createMetadata(
    solution.metadataTitle,
    solution.metadataDescription,
    `/solutions/${solution.slug}`,
  );
}

export default async function SolutionDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const solution = solutions.find((item) => item.slug === slug);
  if (!solution) notFound();
  const SolutionIcon = solution.icon;
  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Solutions",
        item: `${siteConfig.url}/solutions`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: solution.shortTitle,
        item: `${siteConfig.url}/solutions/${solution.slug}`,
      },
    ],
  };

  return (
    <>
      <section className="solution-hero">
        <Container className="solution-hero__grid">
          <div className="solution-hero__copy reveal">
            <p className="eyebrow">{solution.eyebrow}</p>
            <h1>{solution.title}</h1>
            <p>{solution.hero}</p>
            <div className="solution-hero__access" aria-label="Recommended Phontus access">
              <strong>Recommended access</strong>
              {solution.accessMethods.map((slug) => {
                const method = deliveryMethods.find((item) => item.slug === slug);
                return method ? <span key={slug}>{method.label}</span> : null;
              })}
            </div>
            <div className="hero__actions">
              <ButtonLink href="/contact">Request a Demo</ButtonLink>
              <ButtonLink href="/how-it-works" variant="secondary">
                See the Workflow
              </ButtonLink>
            </div>
          </div>
          <div className="solution-hero__image reveal reveal--delay">
            <Image
              src={solution.image}
              alt={solution.imageAlt}
              fill
              priority
              sizes="(max-width: 1100px) 100vw, 58vw"
            />
          </div>
        </Container>
      </section>

      <section className="section section--solutions">
        <Container>
          <div className="split-section">
            <div className="split-section__copy">
              <p className="eyebrow">The environment</p>
              <h2>Communication has to fit the way the team works.</h2>
            </div>
            <div className="split-section__copy">
              <p>{solution.challenge}</p>
            </div>
          </div>
          <div className="use-case-grid" style={{ marginTop: 64 }}>
            {solution.useCases.map((useCase, index) => (
              <div key={useCase}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{useCase}</strong>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="section">
        <Container>
          <SectionHeading
            eyebrow="Product benefits"
            title={`What Phontus brings to ${solution.shortTitle.toLowerCase()}`}
          />
          <div className="feature-grid">
            {solution.benefits.map((benefit, index) => (
              <article className="feature-card" key={benefit.title}>
                <span className="icon-disc">
                  <SolutionIcon aria-hidden="true" />
                </span>
                <h3 style={{ marginTop: 28 }}>{benefit.title}</h3>
                <p>{benefit.description}</p>
                <span className="eyebrow" style={{ marginTop: 24, marginBottom: 0 }}>
                  {String(index + 1).padStart(2, "0")}
                </span>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="section section--solutions">
        <Container>
          <SectionHeading
            eyebrow="Deployment considerations"
            title="Plan the workflow around the access point"
            copy="A strong rollout pairs a simple product experience with clear staff expectations."
          />
          <ul className="consideration-list">
            {solution.considerations.map((consideration) => (
              <li key={consideration}>{consideration}</li>
            ))}
          </ul>
        </Container>
      </section>

      <FinalCTA />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }}
      />
    </>
  );
}
