import type { Metadata } from "next";
import { Container, Eyebrow, PageHero, SectionHeading } from "@/components/ui";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata(
  "About",
  "Phontus brings interpreting closer to the room, counter, campus, and worksite.",
  "/about",
);

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="Language barriers should not slow service down."
        copy="Routine needs move faster than a complicated workflow can respond. Phontus brings interpreting closer to the room, the counter, the campus and the worksite, so the conversation can start when the person does."
      />
      <section className="section">
        <Container className="split-grid split-grid--center" data-reveal>
          <div>
            <Eyebrow>Where we started</Eyebrow>
            <h2>Shaped in demanding real-world settings</h2>
            <p>Our earliest testing took place with clinical teams, including dental and women&apos;s health settings. Those rooms taught us what to remove: headsets to hand out, devices to clean, decisions to make before a session can begin.</p>
            <p>What is left is a kit that is already on, a microphone pointed at the two people talking, and a screen that says what is happening in words.</p>
          </div>
          <div className="hairline-grid hairline-grid--two facts-grid">
            <div className="plain-tile"><strong>Early field testing</strong><span>Learning inside real workflows</span></div>
            <div className="plain-tile"><strong>Spanish ⇄ English</strong><span>A focused launch, more languages coming</span></div>
            <div className="plain-tile"><strong>Two kit formats</strong><span>Clinical and frontline delivery</span></div>
            <div className="plain-tile"><strong>Phone Line</strong><span>Interpreting on your business number</span></div>
          </div>
        </Container>
      </section>
      <section className="section section--white section--bordered">
        <Container>
          <SectionHeading eyebrow="What we hold to" title="What we will not compromise on." />
          <div className="hairline-grid hairline-grid--four" data-reveal>
            {[
              ["The person stays at the center", "Technology supports the dialogue instead of becoming it."],
              ["Languages are words", "Spelled out on screen, so nobody has to decode an abbreviation."],
              ["The screen says what is happening", "In words, not just a color, so it reads from across a room."],
              ["Fewer things to touch", "Nothing to hand over, install, or clean between visits."],
            ].map(([title, copy], index) => (
              <div className="principle-tile" key={title}><span className="mono">0{index + 1}</span><strong>{title}</strong><p>{copy}</p></div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
