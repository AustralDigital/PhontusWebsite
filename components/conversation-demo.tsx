"use client";

import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Container, Eyebrow } from "@/components/ui";

// Use approved footage and captions here when available; the layout stays the same.
export type DemoVideo = { src: string; poster: string; captions: string };

const turns = [
  { label: "Visitor speaks", language: "Spanish", lang: "es", text: "Buenos días, tengo una pregunta sobre mi cita de mañana.", description: "The visitor speaks naturally to the staff member." },
  { label: "Phontus interprets", language: "English", lang: "en", text: "Good morning, I have a question about my appointment tomorrow.", description: "Phontus speaks the interpretation and shows it on screen." },
  { label: "Staff member responds", language: "English", lang: "en", text: "Of course — let me pull it up now.", description: "The staff member responds in their own language." },
  { label: "Phontus interprets back", language: "Spanish", lang: "es", text: "Por supuesto, déjeme buscarla ahora.", description: "The visitor hears the response in Spanish. The conversation continues." },
];

export function ConversationDemo({ video }: { video?: DemoVideo }) {
  const [step, setStep] = useState(0);
  const turn = turns[step];
  return (
    <section className="editorial-section conversation-demo" id="conversation">
      <Container>
        <div className="section-intro" data-reveal>
          <Eyebrow>A conversation, in both directions</Eyebrow>
          <h2>You speak.<br />Phontus interprets.</h2>
          <p>No app. No headset. No device handoff. Speak to each other, one turn at a time.</p>
        </div>
        {video ? (
          <video className="conversation-demo__video" controls preload="metadata" poster={video.poster} aria-label="A Phontus interpretation demonstration">
            <source src={video.src} />
            <track kind="captions" src={video.captions} srcLang="en" label="English" default />
            Your browser does not support this video. <a href={video.src}>Download the demonstration</a>.
          </video>
        ) : (
          <div className="conversation-demo__body">
            <ol className="conversation-demo__steps" aria-label="Explore the conversation">
              {turns.map((item, index) => (
                <li key={item.label}>
                  <button type="button" aria-pressed={step === index} aria-controls="conversation-example" onClick={() => setStep(index)}>
                    <span className="index-number">0{index + 1}</span>
                    <span>{item.label}<small>{item.language}</small></span>
                    <ArrowRight aria-hidden="true" />
                  </button>
                </li>
              ))}
            </ol>
            <div className="conversation-demo__stage">
              <span className="overline">Illustrative exchange · Spanish ⇄ English</span>
              <div id="conversation-example" aria-live="polite" aria-atomic="true">
                <p className="conversation-demo__speaker">{turn.label} <span> / {turn.language}</span></p>
                <blockquote lang={turn.lang}>“{turn.text}”</blockquote>
                <p>{turn.description}</p>
              </div>
              <div className="conversation-demo__controls">
                <span className="index-number">0{step + 1} / 04</span>
                <button className="round-link" type="button" aria-label="Previous conversation step" disabled={step === 0} onClick={() => setStep(step - 1)}><ArrowLeft aria-hidden="true" /></button>
                <button className="round-link" type="button" aria-label={step === 3 ? "Replay conversation" : "Next conversation step"} onClick={() => setStep((step + 1) % turns.length)}><ArrowRight aria-hidden="true" /></button>
              </div>
            </div>
          </div>
        )}
        <p className="conversation-demo__footnote">Spanish and English at launch. See a real session with your team in a <a href="/contact">Phontus demo</a>.</p>
      </Container>
    </section>
  );
}
