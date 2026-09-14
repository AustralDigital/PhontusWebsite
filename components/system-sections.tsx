import { photography } from "@/lib/photography";
import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowRight, ArrowUpRight } from "lucide-react";
import { Container, Eyebrow, PhotoFrame } from "@/components/ui";

export const systemLayers = [
  [
    "01",
    "Purpose-built hardware",
    "A place for the conversation.",
    "A dedicated interpreting kit, ready at the counter or brought to the point of care.",
  ],
  [
    "02",
    "AI interpretation",
    "Speak naturally. Take turns.",
    "Spoken interpretation and an on-screen transcript help both people follow the exchange.",
  ],
  [
    "03",
    "Human support",
    "A person when you need one.",
    "Request a human interpreter from the session when the conversation calls for additional support.",
  ],
  [
    "04",
    "One platform",
    "A shared view of every site.",
    "Manage devices, staff, session history and usage across your Phontus deployment.",
  ],
];

export function SystemOverview() {
  return (
    <section className="editorial-section system-overview" id="system">
      <Container>
        <div className="section-intro" data-reveal>
          <Eyebrow>The Phontus system</Eyebrow>
          <h2>
            One system behind
            <br />
            every conversation.
          </h2>
          <p>
            The kit is where it begins.
            <br />
            Everything behind it works together.
          </p>
        </div>
        <div className="system-overview__body">
          <div className="system-overview__image" data-reveal>
            <PhotoFrame
              {...photography.reception}
              src={photography.reception.mobileSrc}
              sizes="(max-width: 960px) 100vw, 33vw"
            />
            <span>
              Designed for the room.
              <br />
              Connected across the organization.
            </span>
          </div>
          <div className="system-rows">
            {systemLayers.map(([number, label, title, copy]) => (
              <article key={number} data-reveal>
                <span className="index-number">{number}</span>
                <div>
                  <span className="overline">{label}</span>
                  <h3>{title}</h3>
                </div>
                <p>{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

export function HumanSection() {
  return (
    <section className="editorial-section human-section" id="interpretation">
      <Container className="human-section__grid">
        <div className="human-section__copy" data-reveal>
          <Eyebrow>Intelligence, with a human connection</Eyebrow>
          <h2>
            AI for the everyday.
            <br />
            <span>
              People when
              <br />
              they’re needed.
            </span>
          </h2>
          <p>
            Keep the conversation moving with AI interpretation. When more
            support is needed, request a human interpreter from the same
            session.
          </p>
          <Link className="text-link" href="/how-it-works">
            See how a conversation works <ArrowUpRight aria-hidden="true" />
          </Link>
        </div>
        <div className="human-section__visual" data-reveal>
          <figure className="session-reference">
            <Image
              src="/images/product/session-screen.webp"
              width={1130}
              height={848}
              alt="Phontus session interface showing language selection, an interpreted exchange and a call interpreter control."
              sizes="(max-width: 960px) 90vw, 42vw"
            />
            <figcaption>A look at the Phontus session experience.</figcaption>
          </figure>
          <ol
            className="conversation-flow"
            aria-label="How interpretation and human support connect"
          >
            <li>
              <span>Speak</span>
              <ArrowRight aria-hidden="true" />
            </li>
            <li>
              <span>AI interprets</span>
              <ArrowRight aria-hidden="true" />
            </li>
            <li>
              <span>Understand</span>
            </li>
          </ol>
          <div className="human-path">
            <ArrowDown aria-hidden="true" />
            <span>Request a human interpreter when needed</span>
          </div>
        </div>
      </Container>
    </section>
  );
}

const operations = [
  [
    "01",
    "Sites & devices",
    "Bring your locations and interpreting kits into one view.",
  ],
  [
    "02",
    "People & access",
    "Manage staff accounts and access for the sites they work in.",
  ],
  [
    "03",
    "Sessions & usage",
    "Follow session history and understand how each site uses Phontus.",
  ],
  [
    "04",
    "Session handling",
    "Set transcript retention to fit your organization’s requirements.",
  ],
];

export function PlatformSection() {
  return (
    <section className="editorial-section platform-section" id="platform">
      <Container>
        <div className="section-intro" data-reveal>
          <Eyebrow>The management platform</Eyebrow>
          <h2>
            Every location.
            <br />
            One place to manage it.
          </h2>
          <p>
            From the first kit to the next site, keep the people, devices and
            conversations connected.
          </p>
        </div>
        <div className="operations-list">
          {operations.map(([number, title, copy]) => (
            <article key={number} data-reveal>
              <span className="index-number">{number}</span>
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>
        <div className="platform-section__foot">
          <span>One platform for the system your teams use every day.</span>
          <Link className="text-link" href="/contact">
            See the platform in a demo <ArrowUpRight aria-hidden="true" />
          </Link>
        </div>
      </Container>
    </section>
  );
}

export function TerminologySection() {
  return (
    <section className="editorial-section terminology-section">
      <Container className="terminology-section__grid">
        <div data-reveal>
          <Eyebrow>In development · Organization terminology</Eyebrow>
          <h2>
            Your work has
            <br />
            its own language.
          </h2>
          <p>
            Medical terms. School vocabulary. Product names. We’re developing
            terminology support to help Phontus reflect the words your
            organization uses.
          </p>
        </div>
        <div className="terminology-index" data-reveal>
          <span className="overline">The vocabulary of your world</span>
          {[
            ["Healthcare", "Care instructions"],
            ["Education", "Individualized education plan"],
            ["Operations", "Work order"],
            ["Your organization", "Product names & abbreviations"],
          ].map(([label, term]) => (
            <div key={label}>
              <span>{label}</span>
              <strong>{term}</strong>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function EnterpriseSection() {
  return (
    <section className="editorial-section enterprise-section">
      <Container className="enterprise-section__grid">
        <div data-reveal>
          <Eyebrow>Built around your operations</Eyebrow>
          <h2>
            Ready for the
            <br />
            real-world questions.
          </h2>
          <p>
            Who has access? How are sessions handled? Where does a kit belong? A
            deployment starts with your organization’s requirements.
          </p>
          <Link className="text-link" href="/security">
            Explore our security approach <ArrowUpRight aria-hidden="true" />
          </Link>
        </div>
        <div className="enterprise-principles" data-reveal>
          {[
            [
              "Access with intention",
              "Sites, staff and device enrollment managed by the administrators you designate.",
            ],
            [
              "Session handling",
              "Retention settings and access boundaries that belong in your deployment conversation.",
            ],
            [
              "A considered rollout",
              "Start with the setting where interpretation matters. Plan the next site around what your team needs.",
            ],
          ].map(([title, copy], i) => (
            <article key={title}>
              <span className="index-number">0{i + 1}</span>
              <div>
                <h3>{title}</h3>
                <p>{copy}</p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
