import type { Metadata } from "next";
import {
  HeartHandshake,
  MessageCircleMore,
  MoveRight,
  PanelsTopLeft,
} from "lucide-react";
import { FinalCTA } from "@/components/final-cta";
import {
  ButtonLink,
  Container,
  PageHero,
  SectionHeading,
} from "@/components/ui";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata(
  "About",
  "Phontus is building approachable Spanish–English interpretation through purpose-built kits, open-ear headsets, and the Phontus Phone Line.",
  "/about",
);

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Phontus"
        title="Technology should help people meet each other in the conversation."
        copy="Phontus is building an approachable interpretation service for real-world frontline interactions, delivered through purpose-built kits and the Phontus Phone Line, informed by our early work in healthcare."
      >
        <div className="hero__actions">
          <ButtonLink href="/contact">Talk With Our Team</ButtonLink>
        </div>
      </PageHero>

      <section className="section">
        <Container>
          <div className="split-section">
            <div className="split-section__copy">
              <p className="eyebrow">Our point of view</p>
              <h2>Good technology protects the human moment.</h2>
            </div>
            <div className="split-section__copy">
              <p>
                Language differences can add friction to interactions that are
                already time-sensitive, personal, or unfamiliar. We believe
                interpretation tools should be easier to reach, simpler to use,
                and more thoughtfully integrated into the environment.
              </p>
              <p>
                That means designing the software, kit experience, open-ear
                headset workflow, the Phontus Phone Line, staff guidance, and
                deployment plan as one connected service.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="section section--solutions">
        <Container>
          <SectionHeading
            eyebrow="What guides us"
            title="Calm, credible, and grounded in how people work"
          />
          <div className="feature-grid feature-grid--four">
            {[
              {
                icon: HeartHandshake,
                title: "Human connection",
                copy: "The product should support eye contact, attention, and dignity.",
              },
              {
                icon: PanelsTopLeft,
                title: "Purpose-built access points",
                copy: "The kit or phone line has to fit the room, team, and moment of need.",
              },
              {
                icon: MessageCircleMore,
                title: "Conversation clarity",
                copy: "Each screen should make the current speaker and next action understandable.",
              },
              {
                icon: MoveRight,
                title: "Operational momentum",
                copy: "A useful workflow reduces friction while respecting responsible-use boundaries.",
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
          <div className="content-band">
            <p className="eyebrow">Where we are starting</p>
            <h2>Learn in real environments. Build for more of them.</h2>
            <p>
              Our earliest testing has taken place with clinical teams,
              including dental and women’s health settings. We use those
              lessons to refine the product experience while learning how the
              same clear workflow—and a more compact kit—can support frontline
              teams in other sectors.
            </p>
            <ButtonLink href="/product" variant="secondary">
              Explore the Product
            </ButtonLink>
          </div>
        </Container>
      </section>

      <FinalCTA />
    </>
  );
}
