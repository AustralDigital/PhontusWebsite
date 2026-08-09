import type { Metadata } from "next";
import {
  Captions,
  CircleStop,
  Ear,
  Languages,
  Mic,
  PhoneCall,
  SlidersHorizontal,
} from "lucide-react";
import { AccessMethods } from "@/components/access-methods";
import { FinalCTA } from "@/components/final-cta";
import { ProductMockup } from "@/components/product-mockup";
import {
  ButtonLink,
  Container,
  PageHero,
  SectionHeading,
} from "@/components/ui";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata(
  "Clinical & Frontline Interpretation Kits",
  "Explore Phontus Clinical and Frontline Kits, open-ear bone-conduction headsets, AI-assisted Spanish–English workflow, and the Phontus Phone Line.",
  "/product",
);

const productFeatures = [
  {
    icon: Mic,
    title: "Clear speaker cues",
    description:
      "Visible listening states help both people know when it is their turn to speak.",
  },
  {
    icon: Languages,
    title: "Two-way language flow",
    description:
      "Spanish and English remain clearly identified throughout the exchange.",
  },
  {
    icon: Captions,
    title: "Bilingual transcript concept",
    description:
      "Speaker labels and translated turns preserve context throughout the session.",
  },
  {
    icon: Ear,
    title: "Open-ear headset workflow",
    description:
      "Each kit gives both participants an open-ear bone-conduction headset for the interpreted exchange.",
  },
  {
    icon: PhoneCall,
    title: "Kit and Phone Line",
    description:
      "Use a purpose-built kit at a shared station, or let customers reach your team through the Phontus Phone Line.",
  },
  {
    icon: CircleStop,
    title: "Simple session controls",
    description:
      "Repeat, volume, and end-session controls stay available without cluttering the conversation.",
  },
];

export default function ProductPage() {
  return (
    <>
      <PageHero
        eyebrow="The Phontus product"
        title="The right access point for every frontline setting."
        copy="Phontus combines AI-assisted Spanish–English interpretation with two purpose-built kits and the Phontus Phone Line, giving organizations a consistent way to support routine conversations across rooms, counters, campuses, and worksites."
      >
        <div className="hero__actions">
          <ButtonLink href="/contact">Request a Demo</ButtonLink>
          <ButtonLink href="/how-it-works" variant="secondary">
            See the Workflow
          </ButtonLink>
        </div>
      </PageHero>

      <section className="section access-section access-section--product">
        <Container>
          <SectionHeading
            eyebrow="Choose your access point"
            title="Purpose-built around where the conversation happens"
            copy="Plan the right mix of mobile Clinical Kits, compact Frontline Kits, and the Phontus Phone Line for each location and team."
          />
          <AccessMethods variant="detailed" />
        </Container>
      </section>

      <section className="section">
        <Container>
          <div className="split-section">
            <div className="split-section__copy">
              <p className="eyebrow">The experience inside every kit</p>
              <h2>One clear starting point.</h2>
              <p>
                Put on the two open-ear headsets, confirm the language pair, and
                begin. The kit interface makes the listening state and active
                speaker easy to understand without asking the other participant
                to create an account.
              </p>
              <ul className="check-list">
                <li>Spanish ↔ English launch experience</li>
                <li>Visible session state</li>
                <li>Two open-ear bone-conduction headsets</li>
              </ul>
            </div>
            <div className="showcase-visual showcase-visual--mint">
              <ProductMockup />
            </div>
          </div>
        </Container>
      </section>

      <section className="section section--solutions">
        <Container>
          <SectionHeading
            eyebrow="Product capabilities"
            title="Purpose-built for real-world service interactions"
            copy="Hardware, access, and software work together to make the conversation easier to begin and follow."
          />
          <div className="feature-grid">
            {productFeatures.map(({ icon: Icon, title, description }) => (
              <article className="feature-card" key={title}>
                <Icon aria-hidden="true" />
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="section">
        <Container>
          <div className="split-section split-section--reverse">
            <div className="split-section__copy">
              <p className="eyebrow">Conversation context</p>
              <h2>A transcript that shows who said what.</h2>
              <p>
                The bilingual transcript concept separates each speaker’s turn
                from its interpretation, so teams can follow the direction of
                the exchange while keeping their attention on the person in
                front of them.
              </p>
              <p>
                Human-interpreter escalation is planned. It is not represented
                as a currently launched feature.
              </p>
            </div>
            <div className="showcase-visual showcase-visual--sun">
              <ProductMockup mode="transcript" />
            </div>
          </div>
        </Container>
      </section>

      <section className="section">
        <Container>
          <div className="content-band">
            <SlidersHorizontal aria-hidden="true" />
            <h2>A practical path to deployment.</h2>
            <p>
              Plan the right mix of Clinical Kits, Frontline Kits, and the
              Phontus Phone Line for each location. A responsible rollout also
              defines kit placement, headset handling, cleaning, charging,
              staff access, and when to move a conversation to a qualified
              human interpreter.
            </p>
            <ButtonLink href="/contact">Discuss Deployment</ButtonLink>
          </div>
        </Container>
      </section>

      <FinalCTA />
    </>
  );
}
