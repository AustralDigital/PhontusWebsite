import type { Metadata } from "next";
import { AudioLines, Radio, UserRound } from "lucide-react";
import { LanguagePair, TranscriptTurn } from "@/components/conversation-card";
import { ButtonLink, Container, PageHero, SectionHeading } from "@/components/ui";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata(
  "How it works",
  "A Phontus conversation from language selection through real-time interpreting and human escalation.",
  "/how-it-works",
);

const steps = [
  {
    title: "Confirm the two languages",
    copy: "The screen shows both languages in words. Confirm them and press start. There is no code to look up, no menu to search, and no flag to interpret.",
    mock: (
      <div className="start-session-mock">
        <LanguagePair active={false} />
        <button type="button"><Radio aria-hidden="true" /> Start session</button>
      </div>
    ),
  },
  {
    title: "Speak out loud, one turn at a time",
    copy: "Nobody wears anything. The kit's external directional microphone focuses on the two people speaking and eliminates the sound of the room around them. Say one clear thought, then let the other person answer.",
    mock: (
      <div className="speaking-mock">
        <span>Listening</span>
        <AudioLines aria-hidden="true" />
        <small>Speak one clear thought at a time.</small>
      </div>
    ),
  },
  {
    title: "Read the turn, or ask for a person",
    copy: "Every turn shows who said it and in which language, so both people can follow the exchange to the end. If the conversation needs more, request a certified human interpreter without restarting anything.",
    mock: (
      <div className="request-human-mock">
        <TranscriptTurn line={{ speaker: "Visitor", language: "Spanish (US)", time: "02:02", original: "¿Necesito traer algo mañana?", translation: "Do I need to bring anything tomorrow?" }} />
        <button type="button"><UserRound aria-hidden="true" /> Request human interpreter</button>
      </div>
    ),
  },
];

export default function HowItWorksPage() {
  return (
    <>
      <PageHero
        eyebrow="How it works"
        title="A conversation, from the moment someone walks up."
        copy="Where the conversation starts changes with the room. What the two people do never does: confirm the languages, speak out loud, take turns."
      />

      <section className="section">
        <Container className="how-steps">
          {steps.map((step, index) => (
            <article className="how-step" key={step.title} data-reveal>
              <div>
                <span className="step-number">0{index + 1}</span>
                <h2>{step.title}</h2>
                <p>{step.copy}</p>
              </div>
              {step.mock}
            </article>
          ))}
        </Container>
      </section>

      <section className="section section--white section--bordered">
        <Container>
          <SectionHeading
            eyebrow="Same flow, three ways in"
            title="Where the conversation starts changes. What it feels like does not."
          />
          <div className="hairline-grid hairline-grid--three" data-reveal>
            <div className="plain-tile"><strong>Clinical Kit</strong><span>Roll the cart in. The screen is already awake.</span></div>
            <div className="plain-tile"><strong>Frontline Kit</strong><span>It is already on the counter between you.</span></div>
            <div className="plain-tile"><strong>Phone Line</strong><span>The caller dials. Interpreting starts on the line.</span></div>
          </div>
          <div className="center-action"><ButtonLink href="/product">Explore the product</ButtonLink></div>
        </Container>
      </section>
    </>
  );
}
