import { photography } from "@/lib/photography";
import type { Metadata } from "next";
import { Container, Eyebrow, PhotoFrame } from "@/components/ui";
import { createMetadata } from "@/lib/metadata";
export const metadata: Metadata = createMetadata(
  "Why Phontus",
  "Bringing interpretation closer to the people and places that need it. Discover the thinking behind Phontus.",
  "/about",
);
const principles = [
  [
    "Keep the person at the center",
    "Technology should support the exchange, leaving people free to look at and speak to one another.",
  ],
  [
    "Make the next step clear",
    "The screen should say what is happening, in words both people can follow.",
  ],
  [
    "Build for the place",
    "A counter and a care setting have different needs. The hardware should fit naturally into each.",
  ],
  [
    "Connect the whole system",
    "The people running a deployment should have a shared view of its devices, sites and use.",
  ],
];
export default function AboutPage() {
  return (
    <>
      <section className="page-hero">
        <Container>
          <Eyebrow>Why we’re building Phontus</Eyebrow>
          <h1>
            Understanding belongs
            <br />
            where people meet.
          </h1>
          <p>
            A conversation at the front desk. A question in a clinic. A family
            visiting a school. Language is part of the work, every day.
          </p>
        </Container>
      </section>
      <Container>
        <PhotoFrame
          className="about-photo"
          {...photography.reception}
          priority
          sizes="90vw"
        />
      </Container>
      <section className="editorial-section">
        <Container className="about-story">
          <Eyebrow>From real settings, for real settings</Eyebrow>
          <h2>
            Bring interpretation
            <br />
            closer to the conversation.
          </h2>
          <div>
            <p>
              Our early work with clinical teams, including dental and women’s
              health settings, helped shape a simple idea: interpretation should
              be available where people already talk.
            </p>
            <p>
              Phontus brings purpose-built hardware, AI interpretation, human
              support and deployment management into one system. The environment
              can change. The experience should remain familiar.
            </p>
            <p>
              We’re starting with Spanish and English, with more languages in
              development.
            </p>
          </div>
        </Container>
      </section>
      <section className="editorial-section about-principles">
        <Container>
          <div className="section-intro">
            <Eyebrow>The principles behind the product</Eyebrow>
            <h2>
              Thoughtful technology.
              <br />
              Human priorities.
            </h2>
          </div>
          <div className="operations-list">
            {principles.map(([title, copy], index) => (
              <article key={title} data-reveal>
                <span className="index-number">0{index + 1}</span>
                <h3>{title}</h3>
                <p>{copy}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
