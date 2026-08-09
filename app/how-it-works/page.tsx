import type { Metadata } from "next";
import {
  CheckCircle2,
  Ear,
  PanelsTopLeft,
  PhoneCall,
  Settings2,
  Users,
} from "lucide-react";
import { FAQ } from "@/components/faq";
import { FinalCTA } from "@/components/final-cta";
import { ProductMockup } from "@/components/product-mockup";
import {
  ButtonLink,
  Container,
  PageHero,
  SectionHeading,
} from "@/components/ui";
import { faqs } from "@/lib/content";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata(
  "How It Works: Kits & Phone Line",
  "See how Phontus works through Clinical and Frontline interpreting kits with open-ear bone-conduction headsets, plus the Phontus Phone Line for customers who call in directly.",
  "/how-it-works",
);

export default function HowItWorksPage() {
  return (
    <>
      <PageHero
        eyebrow="How Phontus works"
        title="A simple rhythm for a clearer conversation."
        copy="Begin from the Clinical Kit, Frontline Kit, or the Phontus Phone Line. Phontus keeps the Spanish–English exchange clear so your team can stay focused on the conversation."
      >
        <div className="hero__actions">
          <ButtonLink href="/contact">Request a Demo</ButtonLink>
        </div>
      </PageHero>

      <section className="section">
        <Container>
          <SectionHeading
            eyebrow="From connection to conversation"
            title="Three steps, wherever your team starts"
            copy="Choose the access point for the setting, get connected, and follow a consistent turn-by-turn exchange."
            align="left"
          />
          <div className="steps-list">
            <article>
              <h3>Choose the right access point</h3>
              <p>
                Begin with the mobile Clinical Kit, compact Frontline Kit, or
                the Phontus Phone Line based on where the conversation is
                happening.
              </p>
            </article>
            <article>
              <h3>Get ready to talk</h3>
              <p>
                For a kit session, each participant uses an open-ear
                bone-conduction headset. Confirm Spanish and English, then begin
                without creating a separate participant account.
              </p>
            </article>
            <article>
              <h3>Speak one turn at a time</h3>
              <p>
                Clear speaker and language cues help both people follow the
                interpreted exchange until the interaction is complete.
              </p>
            </article>
          </div>
        </Container>
      </section>

      <section className="section section--solutions">
        <Container>
          <div className="split-section">
            <div className="split-section__copy">
              <p className="eyebrow">Choose how to connect</p>
              <h2>Start from the access point that fits.</h2>
              <p>
                The Clinical Kit moves between hospital and clinic spaces. The
                Frontline Kit fits counters, offices, and worksites. The
                Phontus Phone Line lets customers reach your team by phone,
                wherever they’re calling from.
              </p>
              <ul className="check-list">
                <li><PanelsTopLeft /> Clinical and Frontline Kits</li>
                <li><Ear /> Open-ear headsets for in-person kit sessions</li>
                <li><PhoneCall /> Phontus Phone Line for inbound calls</li>
              </ul>
            </div>
            <div className="showcase-visual showcase-visual--mint">
              <ProductMockup />
            </div>
          </div>
        </Container>
      </section>

      <section className="section">
        <Container>
          <div className="split-section split-section--reverse">
            <div className="split-section__copy">
              <p className="eyebrow">Steps two and three</p>
              <h2>Keep context visible as the dialogue moves.</h2>
              <p>
                Speaker labels, language labels, and translated turns form a
                clear bilingual record of the active exchange. The transcript
                concept is designed to support orientation, not pull attention
                away from the conversation.
              </p>
            </div>
            <div className="showcase-visual showcase-visual--sun">
              <ProductMockup mode="transcript" />
            </div>
          </div>
        </Container>
      </section>

      <section className="section section--solutions">
        <Container>
          <SectionHeading
            eyebrow="Deployment"
            title="From kit placement to staff confidence"
            copy="The product workflow is only one part of responsible implementation."
          />
          <div className="feature-grid feature-grid--four">
            {[
              {
                icon: PanelsTopLeft,
                title: "Choose the access mix",
                copy: "Match Clinical Kits, Frontline Kits, and the Phontus Phone Line to each team and environment.",
              },
              {
                icon: Settings2,
                title: "Place and maintain kits",
                copy: "Plan placement, charging, headset storage and handling, cleaning, and phone availability.",
              },
              {
                icon: Users,
                title: "Orient the team",
                copy: "Set expectations for appropriate use, turn-taking, and session handling.",
              },
              {
                icon: CheckCircle2,
                title: "Keep handoffs clear",
                copy: "Maintain pathways to qualified human interpreters when a complex or high-stakes situation calls for one.",
              },
            ].map(({ icon: Icon, title, copy }) => (
              <article className="feature-card" key={title}>
                <Icon aria-hidden="true" />
                <h3>{title}</h3>
                <p>{copy}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="section">
        <Container>
          <SectionHeading
            eyebrow="Frequently asked questions"
            title="A few practical answers"
          />
          <FAQ items={faqs} />
        </Container>
      </section>

      <FinalCTA />
    </>
  );
}
