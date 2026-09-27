"use client";

import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { PhotoFrame } from "@/components/ui";
import { photography } from "@/lib/photography";

type Environment = {
  name: string;
  src: string;
  alt: string;
  position?: string;
};

type HardwareStory = {
  id: string;
  name: string;
  eyebrow: string;
  headline: string;
  copy: string;
  cta: { label: string; href: string };
  environments: Environment[];
};

// Frontline scenes are documented in references/image-generation-prompts.md.
// Interpreting Kit scenes use the supplied photography mapped in lib/photography.ts.
// Only documented use settings and existing product capabilities belong here.
const hardwareStories: HardwareStory[] = [
  {
    id: "clinical",
    name: "Clinical Kit",
    eyebrow: "At the point of care",
    headline: "Bring the system\nto the person.",
    copy: "The Clinical Kit brings the session screen and organized storage together on a mobile cart.",
    cta: { label: "Explore the Clinical Kit", href: "/products/clinical-kit" },
    environments: [
      { name: "At the doorway", ...photography.clinicalCorridor },
      { name: "In the exam room", ...photography.clinicalExamRoom },
    ],
  },
  {
    id: "frontline",
    name: "Frontline Kit",
    eyebrow: "At the frontline",
    headline: "Understanding where\nservice happens.",
    copy: "A compact tabletop kit for service counters, school offices and hotel desks. Staff and visitors share an interpretation point where everyday conversations keep coming.",
    cta: { label: "Discuss the Frontline Kit", href: "/contact" },
    environments: [
      {
        name: "At reception",
        src: "/images/phontus-frontline-kit-hero-v2.webp",
        alt: "A staff member and visitor speaking across a reception counter with a Phontus Frontline Kit between them.",
      },
      {
        name: "At check-in",
        src: "/images/phontus-frontline-kit-hospitality-v2.webp",
        alt: "A hotel receptionist and guest using a Phontus Frontline Kit at the check-in counter.",
        position: "center top",
      },
    ],
  },
  {
    id: "interpreting",
    name: "Interpreting Kit",
    eyebrow: "A dedicated interpreting point",
    headline: "A place built\nfor understanding.",
    copy: "A dedicated setup that stays ready at the desk. A directional microphone and readable transcript give people a shared point for interpreted conversations.",
    cta: { label: "Explore the Interpreting Kit", href: "/products/interpreting-kit" },
    environments: [
      { name: "In the office", ...photography.officeKit },
      { name: "At reception", ...photography.reception },
    ],
  },
];

export function HardwareShowcase() {
  const [selected, setSelected] = useState(0);
  const [environmentIndex, setEnvironmentIndex] = useState(0);
  const story = hardwareStories[selected];
  const environment = story.environments[environmentIndex];

  function selectProduct(index: number) {
    if (index === selected) return;
    setSelected(index);
    setEnvironmentIndex(0);
  }

  return (
    <div className="hardware-section__grid hardware-showcase">
      <div className="hardware-showcase__stories">
        <ol className="hardware-showcase__index" aria-label="Choose a hardware product">
          {hardwareStories.map((product, index) => (
            <li key={product.id}>
              <button
                type="button"
                aria-pressed={selected === index}
                aria-controls="hardware-story hardware-context"
                onClick={() => selectProduct(index)}
              >
                <span className="index-number">0{index + 1}</span>
                <span>{product.name}</span>
                <ArrowRight aria-hidden="true" />
              </button>
            </li>
          ))}
        </ol>
        <div className="hardware-showcase__story-stack">
          {hardwareStories.map((product, index) => (
            <div
              className="hardware-detail hardware-showcase__story"
              id={selected === index ? "hardware-story" : undefined}
              key={product.id}
              aria-hidden={selected !== index}
              inert={selected !== index}
            >
              <span className="overline">{product.eyebrow}</span>
              <h3>{product.headline.split("\n").map((line, lineIndex) => <span key={line}>{lineIndex > 0 && <br />}{line}</span>)}</h3>
              <p>{product.copy}</p>
              <Link className="text-link" href={product.cta.href}>
                {product.cta.label} <ArrowUpRight aria-hidden="true" />
              </Link>
            </div>
          ))}
        </div>
      </div>
      <figure className="hardware-viewer hardware-showcase__visual" id="hardware-context" aria-label={`${story.name} in use`}>
        <div className="hardware-viewer__image">
          <PhotoFrame
            key={environment.src}
            src={environment.src}
            alt={environment.alt}
            position={environment.position}
            sizes="(max-width: 760px) 100vw, 55vw"
          />
        </div>
        {story.environments.length > 1 && (
          <div className="hardware-showcase__environments" role="group" aria-label={`${story.name} environments`}>
            {story.environments.map((setting, index) => (
              <button
                key={`${story.id}-${setting.name}`}
                type="button"
                aria-pressed={environmentIndex === index}
                aria-controls="hardware-context"
                onClick={() => setEnvironmentIndex(index)}
              >
                {setting.name}
              </button>
            ))}
          </div>
        )}
        <figcaption className="hardware-viewer__caption">
          <span>Phontus {story.name}</span>
          <span>{environment.name}</span>
        </figcaption>
      </figure>
      <p className="sr-only" role="status" aria-atomic="true">{story.name} — {environment.name}</p>
    </div>
  );
}
