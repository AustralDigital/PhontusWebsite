import { photography } from "@/lib/photography";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container, Eyebrow, PhotoFrame } from "@/components/ui";

export function SystemMap() {
  return (
    <div className="system-map" aria-label="The Phontus system: three ways to connect, shared interpretation and administration">
      <div className="system-map__root"><strong>Phontus</strong><span>Language-access infrastructure</span></div>
      <ul className="system-map__products">
        {[
          ["Interpreting Kit", "At a counter or desk", "/products/interpreting-kit"],
          ["Clinical Kit", "At the bedside", "/products/clinical-kit"],
          ["Phone Line", "On the phone", "/products/phone-line"],
        ].map(([name, place, href]) => <li key={name}><Link href={href}><strong>{name}</strong><span>{place}</span><ArrowUpRight aria-hidden="true" /></Link></li>)}
      </ul>
      <div className="system-map__support"><span>Real-time AI interpretation</span><span>Human interpreters on request</span></div>
      <div className="system-map__platform">
        <Link href="/platform"><strong className="system-map__title">One management platform</strong><ArrowUpRight aria-hidden="true" /></Link>
        <ul>{["Sites", "People & access", "Devices", "Sessions & usage", "Retention controls", "Administration"].map((item) => <li key={item}>{item}</li>)}</ul>
      </div>
    </div>
  );
}

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
            In person or on the phone. Dedicated hardware, AI and human
            interpretation, with one platform behind them.
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
          <SystemMap />
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
          <Eyebrow>Human interpreters, part of the system</Eyebrow>
          <h2>
            AI for the everyday.
            <br />
            <span>
              A person when<br />it matters.
            </span>
          </h2>
          <p>
            Different conversations need different levels of support. Start
            everyday exchanges with AI. For additional complexity or your
            organization’s requirements, staff can request a human interpreter
            from the same session — on a kit or the Phone Line.
          </p>
          <ol className="escalation-flow" aria-label="From AI interpretation to human support">
            {[
              ["AI interpretation", "Begin the everyday conversation."],
              ["Additional support is needed", "Your team decides when to bring in a person."],
              ["Call a human interpreter", "Request support from the session."],
              ["The interpreter joins", "AI interpretation continues while they join."],
              ["The conversation continues", "Human interpretation stays part of the session."],
            ].map(([title, copy], index) => <li key={title}><span className="index-number">0{index + 1}</span><div><h3>{title}</h3><p>{copy}</p></div></li>)}
          </ol>
          <Link className="text-link" href="/contact">
            Discuss human support for your team <ArrowUpRight aria-hidden="true" />
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
          <p className="human-section__caption">The transcript marks the turns handled by a human interpreter.<br />Support arrangements are discussed for your setting.</p>
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
    "Retention controls",
    "Set transcript retention per site to fit your organization’s requirements.",
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
