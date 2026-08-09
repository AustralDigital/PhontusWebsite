"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";

export function FAQ({
  items,
}: {
  items: { question: string; answer: string }[];
}) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="faq-list">
      {items.map((item, index) => {
        const expanded = open === index;
        return (
          <div className={`faq-item ${expanded ? "faq-item--open" : ""}`} key={item.question}>
            <h3>
              <button
                type="button"
                aria-expanded={expanded}
                aria-controls={`faq-answer-${index}`}
                onClick={() => setOpen(expanded ? null : index)}
              >
                {item.question}
                <ChevronDown aria-hidden="true" />
              </button>
            </h3>
            <div className="faq-item__answer" id={`faq-answer-${index}`} hidden={!expanded}>
              <p>{item.answer}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
