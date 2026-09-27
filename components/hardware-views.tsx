"use client";

import { useState } from "react";
import Image from "next/image";
import { PhotoFrame } from "@/components/ui";
import { photography } from "@/lib/photography";

const views: { name: string; src: string; alt: string; mobileSrc?: string; isolated?: boolean }[] = [
  { name: "At the doorway", ...photography.clinicalCorridor },
  { name: "In the exam room", ...photography.clinicalExamRoom },
  { name: "Product view", src: "/images/product/clinical-front.webp", alt: "Isolated front view of the Clinical Kit showing its screen, storage and wheeled base.", isolated: true },
  { name: "Side view", src: "/images/product/clinical-side.webp", alt: "Side view of the Clinical Kit showing the screen support, storage and mobile base.", isolated: true },
];

export function HardwareViews() {
  const [selected, setSelected] = useState(0);
  return (
    <div className="hardware-viewer">
      <div className={`hardware-viewer__image ${views[selected].isolated ? "hardware-viewer__image--isolated" : ""}`}>
        {views[selected].isolated ? <Image src={views[selected].src} alt={views[selected].alt} fill sizes="(max-width: 960px) 100vw, 55vw" /> : <PhotoFrame key={views[selected].src} {...views[selected]} sizes="(max-width: 960px) 100vw, 55vw" />}
      </div>
      <div className="view-selector" role="group" aria-label="Clinical Kit views">
        {views.map((view, index) => (
          <button key={view.name} type="button" aria-pressed={selected === index} onClick={() => setSelected(index)}>
            {view.name}
          </button>
        ))}
      </div>
      <span className="hardware-viewer__caption">
        Phontus Clinical Kit <span>Built for the point of care</span>
      </span>
    </div>
  );
}
