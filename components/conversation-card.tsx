import { AudioLines, Languages, Mic, ShieldCheck } from "lucide-react";

export function ConversationCard({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`conversation-card ${compact ? "conversation-card--compact" : ""}`}>
      <div className="conversation-card__header">
        <div>
          <span className="live-dot" />
          Live
        </div>
        <span>
          <Languages aria-hidden="true" size={14} /> <span lang="es">Español</span> ↔ English
        </span>
      </div>
      <div className="conversation-card__wave" aria-hidden="true">
        <AudioLines size={18} />
        {[18, 30, 12, 36, 24, 42, 15, 28, 19, 34, 14, 25].map(
          (height, index) => (
            <i key={index} style={{ height }} />
          ),
        )}
      </div>
      <div className="speaker-turn">
        <div className="speaker-turn__meta">
          <span className="speaker-avatar speaker-avatar--visitor">V</span>
          <div>
            <strong>Visitor</strong>
            <small>Spanish</small>
          </div>
        </div>
        <p lang="es">
          Buenos días, tengo una pregunta sobre mi cita de mañana.
        </p>
      </div>
      <div className="speaker-turn speaker-turn--translated">
        <div className="speaker-turn__meta">
          <span className="speaker-avatar speaker-avatar--phontus">
            <ImageMark />
          </span>
          <div>
            <strong>Phontus</strong>
            <small>English</small>
          </div>
        </div>
        <p>
          Good morning. I have a question about my appointment tomorrow.
        </p>
      </div>
      <div className="conversation-card__footer">
        <span>
          <Mic aria-hidden="true" size={14} /> Listening
        </span>
        <span>
          <ShieldCheck aria-hidden="true" size={14} /> Session active
        </span>
      </div>
    </div>
  );
}

function ImageMark() {
  return <span aria-hidden="true">P</span>;
}
