"use client";

import { useState } from "react";
import { ArrowLeft, ArrowRight, Captions, Headphones, Play } from "lucide-react";
import { Container, Eyebrow } from "@/components/ui";
import Link from "next/link";

const turns = [
  { speaker: "Visitor", language: "Spanish", lang: "es", text: "Buenos días, tengo una pregunta sobre mi cita de mañana." },
  { speaker: "Phontus interpretation", language: "English", lang: "en", text: "Good morning. I have a question about my appointment tomorrow." },
  { speaker: "Staff member", language: "English", lang: "en", text: "Of course. What time is your appointment?" },
  { speaker: "Phontus interpretation", language: "Spanish", lang: "es", text: "Por supuesto. ¿A qué hora es su cita?" },
];

export function ConversationDemo({ technology = false }: { technology?: boolean }) {
  const [step, setStep] = useState<number | null>(null);
  const turn = turns[step ?? 0];
  const last = step === turns.length - 1;
  return (
    <section className={`website-section ${technology ? "website-section--tint" : "website-section--dark"} website-conversation`} id="conversation">
      <Container className="website-split website-split--center">
        <div className="website-intro">
          <Eyebrow>{technology ? "The conversation" : "How it works"}</Eyebrow>
          <h2>{technology ? "An English–Spanish conversation" : "You speak. Phontus interprets."}</h2>
          <p>{technology ? "See how a question in Spanish and an answer in English are interpreted in both directions." : "Take turns speaking. Phontus plays the interpretation aloud and shows both sides of the conversation on screen. Request a human interpreter directly from the session."}</p>
          {!technology ? <Link href="/how-it-works" className="text-link website-link">See the conversation flow <ArrowRight aria-hidden="true" size={17} /></Link> : null}
        </div>
        <div className="website-session">
          <div className="website-session__header"><strong><Captions aria-hidden="true" size={20} /> Phontus session</strong><small>Illustrative example</small></div>
          <p className="website-session__languages">Spanish and English</p>
          <div id="conversation-example" aria-live="polite" aria-atomic="true">
            <div className="website-session__turn" key={step ?? "intro"}>
              <small>{turn.speaker} · {turn.language}</small>
              <blockquote lang={turn.lang}>{turn.text}</blockquote>
            </div>
          </div>
          <small className="website-session__human"><Headphones size={17} aria-hidden="true" /> Human interpreter available on request</small>
          <div className="website-session__controls">
            <button className="button button--secondary" type="button" onClick={() => setStep(step === null || last ? 0 : step + 1)} aria-controls="conversation-example">
              {step === null ? "Play example" : last ? "Replay example" : "Next turn"}
              {step === null ? <Play size={16} aria-hidden="true" /> : <ArrowRight size={16} aria-hidden="true" />}
            </button>
            {step !== null ? <>
              <button className="round-link" type="button" aria-label="Previous turn" disabled={step === 0} onClick={() => setStep(step - 1)}>
                <ArrowLeft size={17} aria-hidden="true" />
              </button>
              <small>{step + 1} of {turns.length}</small>
            </> : null}
          </div>
        </div>
      </Container>
    </section>
  );
}
