"use client";

import { useState } from "react";
import { PhotoFrame } from "@/components/ui";
import { photography } from "@/lib/photography";

const views = [
  { name: "At the doorway", ...photography.clinicalCorridor },
  { name: "In the exam room", ...photography.clinicalExamRoom },
];

export function HardwareViews() {
  const [selected, setSelected] = useState(0);
  return (
    <div className="hardware-viewer">
      <div className="hardware-viewer__image">
        <PhotoFrame key={views[selected].src} {...views[selected]} sizes="(max-width: 960px) 100vw, 55vw" />
      </div>
      <div className="view-selector" role="group" aria-label="Clinical Kit setting">
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
