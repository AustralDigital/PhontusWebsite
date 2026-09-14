import { photography } from "@/lib/photography";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { Container, Eyebrow, PhotoFrame, ButtonLink } from "@/components/ui";
import { HardwareViews } from "@/components/hardware-views";
import {
  SystemOverview,
  HumanSection,
  PlatformSection,
  TerminologySection,
  EnterpriseSection,
} from "@/components/system-sections";
import { WorkplaceStories } from "@/components/workplace-stories";
import { ProductFamily } from "@/components/product-family";
import { OperationalProof } from "@/components/operational-proof";
import { FAQ } from "@/components/faq";
import { homeFaqs } from "@/lib/redesign-content";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata(
  "Phontus | Interpretation for the physical world",
  "Purpose-built interpreting hardware, AI interpretation, human support and one management platform. Meet the Phontus system.",
);

export default function HomePage() {
  return (
    <>
      <section className="system-hero">
        <Container className="system-hero__grid">
          <div className="system-hero__copy">
            <Eyebrow>Interpretation for the physical world</Eyebrow>
            <h1>
              Understand <br />
              anyone.
              <span>
                Wherever <br />
                work happens.
              </span>
            </h1>
            <p>
              Purpose-built hardware. AI interpretation. Human support. One
              system for the conversations that happen face to face.
            </p>
            <div className="hero-actions">
              <ButtonLink href="/contact">See Phontus in action</ButtonLink>
              <Link href="#system" className="text-link">
                Explore the system <ArrowDown aria-hidden="true" />
              </Link>
            </div>
            <small>Spanish ⇄ English at launch</small>
          </div>
          <figure className="system-hero__visual">
            <PhotoFrame
              {...photography.receptionKit}
              src={photography.receptionKit.mobileSrc}
              priority
              sizes="(max-width: 760px) 100vw, 55vw"
            />
            <figcaption>
              <span>Meet the Phontus Interpreting Kit</span>
              <Link
                href="/product?tab=frontline#details"
                aria-label="Explore the Phontus Interpreting Kit"
              >
                <ArrowUpRight aria-hidden="true" />
              </Link>
            </figcaption>
          </figure>
        </Container>
        <Container>
          <div className="hero-baseline">
            <span>Built for the conversation.</span>
            <span>
              Healthcare · Education · Business · Field operations · Hospitality
            </span>
          </div>
        </Container>
      </section>
      <section className="editorial-section hardware-section" id="hardware">
        <Container>
          <div className="hardware-section__heading" data-reveal>
            <Eyebrow>A physical presence</Eyebrow>
            <h2>
              Hardware built
              <br />
              for the conversation.
            </h2>
            <p>
              A dedicated screen. A shared point of understanding. Technology
              that belongs in the room, so the people can stay focused on each
              other.
            </p>
          </div>
          <div className="hardware-section__grid">
            <div className="hardware-section__details" data-reveal>
              <div className="hardware-detail">
                <span className="index-number">01 / At the point of care</span>
                <h3>
                  Bring the system
                  <br />
                  to the person.
                </h3>
                <p>
                  The Clinical Kit brings the session screen and organized
                  storage together on a mobile cart.
                </p>
                <Link
                  className="text-link"
                  href="/product?tab=clinical#details"
                >
                  Explore the Clinical Kit <ArrowUpRight aria-hidden="true" />
                </Link>
              </div>
              <div className="hardware-detail hardware-detail--small">
                <span className="index-number">02 / At the counter</span>
                <h3>
                  A dedicated place
                  <br />
                  to understand.
                </h3>
                <p>
                  The Interpreting Kit fits the desks and shared spaces where
                  conversations begin.
                </p>
              </div>
            </div>
            <HardwareViews />
          </div>
        </Container>
      </section>
      <SystemOverview />
      <HumanSection />
      <WorkplaceStories />
      <ProductFamily />
      <PlatformSection />
      <TerminologySection />
      <EnterpriseSection />
      <OperationalProof />
      <section className="editorial-section home-faq">
        <Container className="faq-section">
          <div data-reveal>
            <Eyebrow>A little more clarity</Eyebrow>
            <h2>
              Good questions.
              <br />
              Straight answers.
            </h2>
            <p>
              Tell us about your setting.
              <br />
              We’ll help you find the right starting point.
            </p>
            <Link className="text-link" href="/contact">
              Talk to Phontus <ArrowUpRight aria-hidden="true" />
            </Link>
          </div>
          <FAQ
            items={homeFaqs.filter((item) => !item.question.includes("caller"))}
          />
        </Container>
      </section>
    </>
  );
}
