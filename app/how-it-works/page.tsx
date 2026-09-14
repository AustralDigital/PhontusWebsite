import { photography } from "@/lib/photography";
import type { Metadata } from "next";
import { Container, Eyebrow, PhotoFrame } from "@/components/ui";
import {
  HumanSection,
  SystemOverview,
  TerminologySection,
} from "@/components/system-sections";
import { createMetadata } from "@/lib/metadata";
export const metadata: Metadata = createMetadata(
  "How the conversation works",
  "Confirm the languages, speak naturally and request a human interpreter when needed. Explore the Phontus interpretation system.",
  "/how-it-works",
);
export default function HowItWorksPage() {
  return (
    <>
      <section className="page-hero">
        <Container>
          <Eyebrow>The technology, made approachable</Eyebrow>
          <h1>Start with a conversation.</h1>
          <p>
            Phontus brings the hardware, interpretation and support together.
            Your team stays focused on the person in front of them.
          </p>
        </Container>
      </section>
      <Container>
        <PhotoFrame
          className="technology-photo"
          {...photography.reception}
          priority
          sizes="90vw"
        />
      </Container>
      <section className="editorial-section">
        <Container>
          <div className="section-intro">
            <Eyebrow>A familiar rhythm</Eyebrow>
            <h2>
              Speak. Listen.
              <br />
              Keep the connection.
            </h2>
          </div>
          <div className="how-steps">
            {[
              [
                "Confirm the languages",
                "Choose the languages for the conversation and start a session. Spanish and English are supported at launch.",
              ],
              [
                "Speak naturally, one turn at a time",
                "Speak to each other. Phontus interprets out loud and shows the exchange on screen, so both people can follow along.",
              ],
              [
                "Bring in a person when needed",
                "Request a human interpreter from the session when the conversation needs additional support.",
              ],
            ].map(([title, copy], index) => (
              <article className="how-step" key={title} data-reveal>
                <span className="index-number">0{index + 1}</span>
                <h3>{title}</h3>
                <p>{copy}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>
      <HumanSection />
      <SystemOverview />
      <TerminologySection />
    </>
  );
}
