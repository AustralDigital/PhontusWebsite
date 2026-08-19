"use client";

import { AudioLines, Languages, PhoneIncoming, UserRound } from "lucide-react";
import { useEffect, useState } from "react";
import { Badge } from "@/components/ui";

const phases = ["Listening", "Interpreting", "Speaking"] as const;

export type TranscriptLine = {
  speaker: string;
  language: string;
  time: string;
  original: string;
  translation: string;
  source?: "ai" | "human";
};

export function LanguagePair({ active = true }: { active?: boolean }) {
  return (
    <div className="language-pair">
      <span><Languages aria-hidden="true" /> Spanish (US)</span>
      <span aria-hidden="true">⇄</span>
      <span>English (US)</span>
      {active ? <small>Active</small> : null}
    </div>
  );
}

export function TranscriptTurn({ line }: { line: TranscriptLine }) {
  return (
    <article className="transcript-turn">
      <div>
        <strong>{line.speaker}</strong>
        <span>{line.language} · {line.time}</span>
        {line.source === "human" ? <Badge tone="human">Human</Badge> : null}
      </div>
      <p>{line.original}</p>
      <p>{line.translation}</p>
    </article>
  );
}

const defaultLines: TranscriptLine[] = [
  {
    speaker: "Visitor",
    language: "Spanish (US)",
    time: "02:02",
    original: "Buenos días, tengo una pregunta sobre mi cita de mañana.",
    translation: "Good morning, I have a question about my appointment tomorrow.",
  },
  {
    speaker: "Front desk",
    language: "English (US)",
    time: "02:18",
    original: "Of course — let me pull it up now.",
    translation: "Por supuesto, déjeme buscarla ahora.",
  },
];

export function SessionMock({
  lines = defaultLines,
  elapsed = "02:18",
  human = false,
  compact = false,
}: {
  lines?: TranscriptLine[];
  elapsed?: string;
  human?: boolean;
  compact?: boolean;
}) {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = window.setInterval(() => setPhase((value) => (value + 1) % phases.length), 1600);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <div className={`session-mock ${compact ? "session-mock--compact" : ""}`}>
      <div className="session-mock__bar">
        <Badge tone={human ? "human" : "live"}>{human ? "Human interpreter" : phases[phase]}</Badge>
        <span className="mono">{elapsed}</span>
        <AudioLines aria-hidden="true" className={phase === 0 ? "is-active" : ""} />
      </div>
      <div className="session-mock__body">
        {!compact ? <LanguagePair /> : null}
        {lines.map((line) => <TranscriptTurn line={line} key={`${line.speaker}-${line.time}`} />)}
      </div>
      {compact ? (
        <div className="session-mock__actions">
          <button type="button">Repeat</button>
          <button type="button"><UserRound aria-hidden="true" /> Request human</button>
          <button type="button" className="danger">End session</button>
        </div>
      ) : null}
    </div>
  );
}

export function PhoneLineMock() {
  return (
    <div className="phone-mock">
      <div><Badge tone="live"><PhoneIncoming aria-hidden="true" /> Call in progress</Badge><span className="mono">01:07</span></div>
      <dl>
        <div><dt>Caller speaks</dt><dd>Spanish (US)</dd></div>
        <div><dt>Your team hears</dt><dd>English (US)</dd></div>
        <div><dt>Line</dt><dd>Main reception</dd></div>
      </dl>
      <p>Spanish and English on one call, interpreted as it happens.</p>
    </div>
  );
}

export function ConsoleMock() {
  const rows = [
    ["Spanish ⇄ English", "Main reception", "04:12"],
    ["Spanish ⇄ English", "Clinic 2 · cart", "02:38"],
    ["Spanish ⇄ English", "Phone line", "01:07"],
    ["Spanish ⇄ English", "Front office", "00:54"],
  ];
  return (
    <div className="console-mock">
      <div className="console-mock__head"><strong>Sessions today</strong><span>All sites</span></div>
      {rows.map((row, index) => (
        <div className="console-mock__row" key={index}>
          <span>{row[0]}</span><span>{row[1]}</span><span className="mono">{row[2]}</span>
        </div>
      ))}
    </div>
  );
}
