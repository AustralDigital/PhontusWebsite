import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowLeftRight,
  GraduationCap,
  HeartPulse,
  Languages,
  LayoutDashboard,
  Mic,
  PhoneCall,
  ShieldCheck,
  TabletSmartphone,
  Truck,
  UserRound,
  ConciergeBell,
} from "lucide-react";
import { FAQ } from "@/components/faq";
import { SessionMock } from "@/components/conversation-card";
import {
  Badge,
  ButtonLink,
  CheckList,
  Container,
  Eyebrow,
  PhotoFrame,
  SectionHeading,
  Tag,
} from "@/components/ui";
import { homeFaqs, solutions } from "@/lib/redesign-content";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata(
  "Real-time Spanish–English interpreting",
  "Start a session, speak naturally, communicate. Phontus interprets Spanish and English out loud, in real time.",
);

const accessMethods = [
  {
    number: "01",
    title: "Clinical Kit",
    copy: "A mobile interpreting cart that keeps the session screen, the directional microphone, organized storage and space for cleaning supplies together at the point of care.",
    href: "/product?tab=clinical",
    image: "/images/phontus-clinical-kit-v2.webp",
    alt: "The mobile Phontus Clinical Kit in a patient room.",
  },
  {
    number: "02",
    title: "Frontline Kit",
    copy: "A compact tabletop kit for service counters, school offices, hotel desks and worksites. It sits between the two people talking and needs no setup between conversations.",
    href: "/product?tab=frontline",
    image: "/images/phontus-frontline-kit-v2.webp",
    alt: "The compact Phontus Frontline Kit on a counter.",
  },
];

const steps = [
  {
    icon: Languages,
    title: "Confirm the two languages",
    copy: "Languages are named in words on the screen. One tap starts the session — no menus, no codes, nothing to look up.",
  },
  {
    icon: Mic,
    title: "Speak out loud, one turn at a time",
    copy: "The kit's external directional microphone isolates the two people talking and rejects the noise around them. Nobody puts anything on.",
  },
  {
    icon: UserRound,
    title: "Bring in a person if you need one",
    copy: "Request a certified human interpreter from the session screen. AI interpreting continues until they connect, and the transcript carries on unbroken.",
  },
];

const solutionIcons = [HeartPulse, Truck, GraduationCap, ConciergeBell];

function PhoneLinePreview() {
  return (
    <div className="phone-line-preview" aria-label="A phone call interpreted by Phontus">
      <div className="phone-line-preview__route">
        <span>Caller</span>
        <ArrowLeftRight aria-hidden="true" />
        <span>Your team</span>
      </div>
      <div className="phone-line-preview__status">
        <span className="phone-line-preview__pill">
          <PhoneCall aria-hidden="true" />
          Phontus interprets
        </span>
        <span>Spanish ⇄ English</span>
      </div>
    </div>
  );
}

export default function HomePage() {
  return (
    <>
      <section className="home-hero">
        <Container className="home-hero__copy">
          <Eyebrow>Say it in your own language</Eyebrow>
          <h1>Make everyday conversations easier to understand</h1>
          <p>
            Start a session, speak naturally, communicate. Phontus interprets
            Spanish and English out loud, in real time — at the front desk, in
            the exam room, on the phone.
          </p>
          <div className="button-row">
            <ButtonLink href="/contact">Request a demo</ButtonLink>
            <ButtonLink href="/how-it-works" variant="secondary">
              See how it works
            </ButtonLink>
          </div>
          <div className="tag-row">
            <Tag icon={<Languages aria-hidden="true" />}>Spanish ⇄ English at launch</Tag>
            <Tag icon={<Mic aria-hidden="true" />}>No headsets to hand out</Tag>
            <Tag icon={<UserRound aria-hidden="true" />}>Human interpreter on request</Tag>
          </div>
        </Container>
        <Container className="home-hero__visual" data-reveal>
          <PhotoFrame
            src="/images/phontus-frontline-kit-hero-v2.webp"
            alt="Two people speaking naturally with a Phontus Frontline Kit between them."
            priority
          />
          <SessionMock compact />
        </Container>
      </section>

      {/* Temporarily hidden until partner logos are ready to publish. */}
      <section className="trust-strip" aria-label="Early field testing" hidden>
        <Container>
          <p>Early field testing with clinical teams, including dental and women&apos;s health settings.</p>
          <div className="logo-marquee" aria-hidden="true">
            <div>
              {Array.from({ length: 12 }, (_, index) => <span key={index}>Pilot partner</span>)}
            </div>
          </div>
          <small>Early partners, named as our pilots go public.</small>
        </Container>
      </section>

      <section className="section section--white">
        <Container>
          <SectionHeading
            eyebrow="Three ways to connect"
            title="One interpreting service, three ways into it."
            copy="Choose the way in that fits the room. Whichever you pick, the conversation works the same."
          />
          <div className="card-grid card-grid--three">
            {accessMethods.map((method) => (
              <article className="media-card" key={method.title} data-reveal>
                <PhotoFrame src={method.image} alt={method.alt} />
                <div>
                  <span className="mono card-number">{method.number}</span>
                  <h3>{method.title}</h3>
                  <p>{method.copy}</p>
                  <Link href={method.href}>Explore the {method.title} →</Link>
                </div>
              </article>
            ))}
            <article className="media-card" data-reveal>
              <div className="media-card__mock"><PhoneLinePreview /></div>
              <div>
                <span className="mono card-number">03</span>
                <h3>Phontus Phone Line</h3>
                <p>Callers reach your team on your existing or dedicated number. Phontus interprets between them in real time. No app, no account, no special device on either end.</p>
                <Link href="/product?tab=phone">Explore the Phone Line →</Link>
              </div>
            </article>
          </div>
        </Container>
      </section>

      <section className="section section--bordered">
        <Container>
          <SectionHeading eyebrow="How it works" title="Three steps, and nothing to hand out." />
          <div className="hairline-grid hairline-grid--three" data-reveal>
            {steps.map(({ icon: Icon, title, copy }, index) => (
              <article className="step-card" key={title}>
                <div><span className="icon-tile"><Icon aria-hidden="true" /></span><span className="step-number">0{index + 1}</span></div>
                <h3>{title}</h3>
                <p>{copy}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="section section--white section--bordered">
        <Container className="split-grid split-grid--center">
          <div data-reveal>
            <Eyebrow>In the room</Eyebrow>
            <h2>Follow the conversation without losing the person in front of you.</h2>
            <p>Both people can see who said what, in which language, and what the session is doing right now. Nothing shifts around, so nobody has to learn the screen twice.</p>
            <CheckList items={[
              "Both languages on screen, in the order they were said",
              "Repeat the last turn without restarting the session",
              "Readable standing, at arm's length, in a bright room",
            ]} />
          </div>
          <SessionMock />
        </Container>
      </section>

      <section className="section">
        <Container className="split-grid split-grid--center">
          <div data-reveal>
            <Eyebrow>The platform</Eyebrow>
            <h2>One system, not a bundle of apps.</h2>
            <p>What your team uses at the counter is what your administrators see in the dashboard. Escalation, devices, retention and usage are one product, not four.</p>
            <Link className="text-link" href="/product">See the full product →</Link>
          </div>
          <div className="feature-stack" data-reveal>
            {[
              [UserRound, "Human interpreter escalation", "Request a certified interpreter mid-session. AI interpreting continues until they connect."],
              [LayoutDashboard, "Admin console", "Sites, staff accounts, enabled languages, retention rules and session history in one place."],
              [TabletSmartphone, "Devices and kits", "Kits ship pre-configured for your sites and stay managed from the console."],
              [ShieldCheck, "Controlled access", "Encrypted in transit, access granted site by site, and retention rules you control."],
            ].map(([Icon, title, copy]) => {
              const FeatureIcon = Icon as typeof UserRound;
              return (
                <article key={title as string}>
                  <span className="icon-tile"><FeatureIcon aria-hidden="true" /></span>
                  <div><h3>{title as string}</h3><p>{copy as string}</p></div>
                </article>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="section section--white section--bordered">
        <Container>
          <SectionHeading eyebrow="Where it runs" title="Built for the conversations your teams handle every day." />
          <div className="hairline-grid hairline-grid--four" data-reveal>
            {solutions.map((solution, index) => {
              const Icon = solutionIcons[index];
              return (
                <Link className="industry-tile" href={`/solutions/${solution.slug}`} key={solution.slug}>
                  <Icon aria-hidden="true" />
                  <strong>{solution.name}</strong>
                  <span>{solution.overviewCopy.split(".")[0]}.</span>
                </Link>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Temporarily hidden until testimonials are ready to publish. */}
      <section className="section section--bordered" hidden>
        <Container>
          <div className="section-heading-row">
            <SectionHeading eyebrow="What teams tell us" title="From the rooms where we tested." />
            <Badge tone="neutral">From early field testing</Badge>
          </div>
          <div className="card-grid card-grid--three">
            {[
              ["The conversation starts while the patient is still sitting down. That is the whole difference.", "Clinical lead · dental practice"],
              ["Nobody has to hand anything to a patient, and nobody has to clean it afterwards. Staff stopped avoiding it.", "Front office manager · women's health"],
              ["The kit sits on the counter and it is obvious what to do with it. There was nothing to train.", "Operations · field services"],
            ].map(([quote, role]) => (
              <figure className="quote-card" key={quote} data-reveal>
                <blockquote>“{quote}”</blockquote>
                <figcaption><span /><div><strong>Early pilot team</strong><small>{role}</small></div></figcaption>
              </figure>
            ))}
          </div>
        </Container>
      </section>

      <section className="section section--white section--bordered">
        <Container>
          <div className="section-heading-row">
            <SectionHeading eyebrow="Field notes" title="What we are learning." />
            <Badge tone="neutral">Coming soon</Badge>
          </div>
          <div className="card-grid card-grid--three">
            {[
              ["/images/hero-clinic-v2.webp", "Field notes", "What we learned running interpreted visits in a dental clinic"],
              ["/images/phontus-frontline-kit-business-v2.webp", "Product", "Why the microphone matters as much as the model"],
              ["/images/hero-organizations-v2.webp", "Product", "Interpreting on the phone line: what changes when nobody is in the room"],
            ].map(([image, label, title]) => (
              <article className="article-card" key={title} data-reveal>
                <PhotoFrame src={image} alt="" />
                <div><span>{label}</span><h3>{title}</h3><small>Coming soon</small></div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="section section--bordered">
        <Container className="split-grid split-grid--start faq-section">
          <div data-reveal>
            <Eyebrow>Questions</Eyebrow>
            <h2>The things teams ask first.</h2>
            <p>If yours is not here, ask it on the contact page and we will answer it directly.</p>
          </div>
          <FAQ items={homeFaqs} />
        </Container>
      </section>
    </>
  );
}
