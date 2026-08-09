import {
  CircleStop,
  Languages,
  Mic,
  MoreHorizontal,
  RotateCcw,
  Volume2,
} from "lucide-react";
import { ConversationCard } from "@/components/conversation-card";

export function ProductMockup({ mode = "session" }: { mode?: "session" | "transcript" }) {
  if (mode === "transcript") {
    return (
      <div className="product-device product-device--transcript" aria-hidden="true">
        <div className="product-device__bar">
          <span className="product-wordmark">
            <i /> Phontus
          </span>
          <span>Session 02:18</span>
        </div>
        <ConversationCard compact />
      </div>
    );
  }

  return (
    <div className="product-device" aria-hidden="true">
      <div className="product-device__bar">
        <span className="product-wordmark">
          <i /> Phontus
        </span>
        <span className="mock-control">
          <MoreHorizontal />
        </span>
      </div>
      <div className="product-device__screen">
        <div className="language-route">
          <span>ES</span>
          <div>
            <Languages aria-hidden="true" size={17} />
            <i />
          </div>
          <span>EN</span>
        </div>
        <p className="product-device__label">Visitor is speaking Spanish</p>
        <div className="mic-orbit">
          <div>
            <Mic aria-hidden="true" />
          </div>
        </div>
        <strong>Listening…</strong>
        <p>Speak one clear thought at a time.</p>
        <div className="session-controls">
          <span className="mock-control">
            <RotateCcw aria-hidden="true" /> Repeat
          </span>
          <span className="mock-control">
            <Volume2 aria-hidden="true" /> Volume
          </span>
          <span className="mock-control end-session">
            <CircleStop aria-hidden="true" /> End
          </span>
        </div>
      </div>
    </div>
  );
}
