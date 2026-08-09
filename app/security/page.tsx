import type { Metadata } from "next";
import {
  DatabaseZap,
  KeyRound,
  LockKeyhole,
  MessageSquareLock,
  Network,
  ShieldCheck,
} from "lucide-react";
import { FinalCTA } from "@/components/final-cta";
import {
  ButtonLink,
  Container,
  PageHero,
  SectionHeading,
} from "@/components/ui";
import { siteConfig } from "@/lib/config";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata(
  "Security",
  "Learn about Phontus’ developing approach to access controls, data minimization, secure transmission architecture, kit handling, and responsible deployment.",
  "/security",
);

const principles = [
  {
    icon: KeyRound,
    title: "Controlled access",
    description:
      "We are building toward clear control over who can begin and manage sessions in each environment.",
  },
  {
    icon: DatabaseZap,
    title: "Data minimization",
    description:
      "Product decisions should reduce unnecessary data collection and keep each session focused on its purpose.",
  },
  {
    icon: Network,
    title: "Secure transmission architecture",
    description:
      "Our architecture direction includes encrypted transport and careful separation of product services.",
  },
  {
    icon: MessageSquareLock,
    title: "Thoughtful session handling",
    description:
      "Session state, transcript behavior, and retention choices are treated as deliberate security decisions.",
  },
  {
    icon: ShieldCheck,
    title: "Ongoing development",
    description:
      "Security practices mature alongside the product through review, testing, and implementation work.",
  },
  {
    icon: LockKeyhole,
    title: "Clear deployment boundaries",
    description:
      "Organizations need guidance about kit access, headset handling, phone use, physical placement, and appropriate use.",
  },
];

export default function SecurityPage() {
  return (
    <>
      <PageHero
        eyebrow="Security and responsible deployment"
        title="A security approach grounded in careful product decisions."
        copy="Phontus is being designed around privacy-conscious workflows, thoughtful session handling, and secure architecture goals. We’ll be clear about what’s available, what’s in progress, and what your organization should consider before deployment."
      >
        <div className="hero__actions">
          <ButtonLink href={`mailto:${siteConfig.email}`}>
            Ask a Security Question
          </ButtonLink>
        </div>
      </PageHero>

      <section className="section">
        <Container>
          <SectionHeading
            eyebrow="Our approach"
            title="Principles shaping the Phontus platform"
            copy="These are product and architecture directions—not claims of completed certification."
          />
          <div className="feature-grid">
            {principles.map(({ icon: Icon, title, description }) => (
              <article className="feature-card" key={title}>
                <Icon aria-hidden="true" />
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="section section--solutions">
        <Container>
          <div className="split-section">
            <div className="split-section__copy">
              <p className="eyebrow">Deployment considerations</p>
              <h2>Responsible use extends beyond the software.</h2>
            </div>
            <div className="split-section__copy">
              <p>
                Kit placement, headset handling, phone use, audio levels, staff
                access, physical privacy, network configuration, and escalation
                policies all shape how an interpretation service behaves in
                practice. We work with organizations to understand those
                realities without assuming every access channel has identical
                operational considerations.
              </p>
              <ButtonLink href="/contact" variant="secondary">
                Discuss Your Environment
              </ButtonLink>
            </div>
          </div>
        </Container>
      </section>

      <section className="section">
        <Container>
          <div className="content-band">
            <p className="eyebrow">Questions and review</p>
            <h2>Start a direct security conversation.</h2>
            <p>
              For security, privacy, or architecture questions, contact{" "}
              <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>.
              We’ll respond with the level of detail appropriate to the current
              product stage.
            </p>
          </div>
        </Container>
      </section>

      <FinalCTA />
    </>
  );
}
