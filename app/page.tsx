import { photography } from "@/lib/photography";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { Container, Eyebrow, PhotoFrame, ButtonLink } from "@/components/ui";
import { HardwareShowcase } from "@/components/hardware-showcase";
import {
  SystemOverview,
  HumanSection,
  PlatformSection,
  EnterpriseSection,
} from "@/components/system-sections";
import { WorkplaceStories } from "@/components/workplace-stories";
import { ProductFamily } from "@/components/product-family";
import { OperationalProof } from "@/components/operational-proof";
import { DifferentiationSection, PhoneSection, RolloutSection } from "@/components/access-sections";
import { ConversationDemo } from "@/components/conversation-demo";
import { PilotStories } from "@/components/pilot-stories";
import { FAQ } from "@/components/faq";
import { homeFaqs } from "@/lib/redesign-content";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata(
  "Phontus | Language-access infrastructure for the physical world",
  "Dedicated interpreting hardware, real-time AI, human interpreters and phone interpretation. One platform for language access across your organization.",
);

export default function HomePage() {
  return (
    <>
      <section className="system-hero">
        <Container className="system-hero__grid">
          <div className="system-hero__copy">
            <Eyebrow>Language access for the physical world</Eyebrow>
            <h1>
              Interpretation,
              <span>
                built into the places people talk.
              </span>
            </h1>
            <p>
              Purpose-built interpreting hardware with real-time AI and human
              interpreters on demand — for clinics, schools, service desks,
              hospitality teams and operations.
            </p>
            <div className="hero-actions">
              <ButtonLink href="/contact">Request a demo</ButtonLink>
              <Link href="#conversation" className="text-link">
                See how Phontus works <ArrowDown aria-hidden="true" />
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
                href="/products/interpreting-kit"
                aria-label="Explore the Phontus Interpreting Kit"
              >
                <ArrowUpRight aria-hidden="true" />
              </Link>
            </figcaption>
          </figure>
        </Container>
        <Container>
          <div className="hero-baseline">
            <span>Say it in your own language.</span>
            <span>
              Healthcare · Education · Business · Field operations · Hospitality
            </span>
          </div>
        </Container>
      </section>
      <DifferentiationSection />
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
          <HardwareShowcase />
        </Container>
      </section>
      <ConversationDemo />
      <HumanSection />
      <SystemOverview />
      <PhoneSection />
      <WorkplaceStories />
      <ProductFamily />
      <PlatformSection />
      <EnterpriseSection />
      <PilotStories />
      <OperationalProof />
      <RolloutSection />
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
          <FAQ items={homeFaqs} />
        </Container>
      </section>
    </>
  );
}
