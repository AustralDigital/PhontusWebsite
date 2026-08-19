"use client";

import { Minus, Plus } from "lucide-react";
import { useId, useState } from "react";

export function FAQ({
  items,
  defaultOpen = null,
}: {
  items: { question: string; answer: string }[];
  defaultOpen?: number | null;
}) {
  const [open, setOpen] = useState<number | null>(defaultOpen);
  const id = useId();

  return (
    <div className="faq-list">
      {items.map((item, index) => {
        const expanded = open === index;
        const answerId = `${id}-answer-${index}`;
        return (
          <article className="faq-item" key={item.question}>
            <h3>
              <button
                type="button"
                aria-expanded={expanded}
                aria-controls={answerId}
                onClick={() => setOpen(expanded ? null : index)}
              >
                <span>{item.question}</span>
                {expanded ? <Minus aria-hidden="true" /> : <Plus aria-hidden="true" />}
              </button>
            </h3>
            <div className="faq-item__answer" id={answerId} hidden={!expanded}>
              <p>{item.answer}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
}
