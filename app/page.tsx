import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  AudioLines,
  BadgeCheck,
  Building2,
  Check,
  Ear,
  Gauge,
  Languages,
  LockKeyhole,
  PanelsTopLeft,
  PhoneCall,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";
import { AccessMethods } from "@/components/access-methods";
import { ConversationCard } from "@/components/conversation-card";
import { FinalCTA } from "@/components/final-cta";
import { ProductMockup } from "@/components/product-mockup";
import {
  ButtonLink,
  Container,
  SectionHeading,
} from "@/components/ui";
import { solutions } from "@/lib/content";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata(
  "Spanish–English Interpretation Kits & Phone Line | Phontus",
  "Phontus pairs AI-assisted Spanish–English interpretation with purpose-built Clinical and Frontline Kits, plus the Phontus Phone Line for customers who call your business number directly.",
);

const benefits = [
  {
    icon: PanelsTopLeft,
    title: "Purpose-built for the setting",
    copy: "Choose a mobile clinical cart or a compact counter-ready kit.",
  },
  {
    icon: Ear,
    title: "A headset for each participant",
    copy: "Open-ear bone-conduction headsets support a face-to-face exchange.",
  },
  {
    icon: PhoneCall,
    title: "Interpretation on your phone line",
    copy: "The Phontus Phone Line lets customers reach your team by phone, even when a shared kit is not nearby.",
  },
  {
    icon: Building2,
    title: "Built for frontline teams",
    copy: "Designed for healthcare, business operations, schools, and hospitality.",
  },
];

const process = [
  {
    icon: PanelsTopLeft,
    title: "Choose the access point",
    copy: "Start from the Clinical Kit, Frontline Kit, or the Phontus Phone Line based on where the conversation is happening.",
  },
  {
    icon: Ear,
    title: "Get ready to talk",
    copy: "For an in-person kit session, each participant puts on an open-ear bone-conduction headset.",
  },
  {
    icon: Languages,
    title: "Speak one turn at a time",
    copy: "Clear speaker and language cues help both people follow the interpreted exchange through completion.",
  },
];

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <Container className="hero__grid">
          <div className="hero__content reveal">
            <p className="eyebrow">Interpreting kits and phone line</p>
            <h1>Make everyday conversations easier to understand.</h1>
            <p className="hero__copy">
              Phontus delivers AI-assisted Spanish–English interpretation
              through purpose-built kits and your business phone line. Choose a
              mobile Clinical Kit for hospitals and clinics or a compact
              Frontline Kit for routine service and workplace conversations.
            </p>
            <p className="hero__launch">Launching with Spanish and English.</p>
            <div className="hero__actions">
              <ButtonLink href="/contact">Request a Demo</ButtonLink>
              <ButtonLink href="/how-it-works" variant="secondary">
                See How It Works
              </ButtonLink>
            </div>
            <div className="hero__trust" aria-label="Product workflow highlights">
              <span>
                <PanelsTopLeft aria-hidden="true" /> Two purpose-built kit formats
              </span>
              <span>
                <Ear aria-hidden="true" /> Open-ear headsets for kit sessions
              </span>
              <span>
                <PhoneCall aria-hidden="true" /> Interpreted calls on your phone line
              </span>
            </div>
          </div>
          <div className="hero-visual reveal reveal--delay">
            <div className="hero-visual__photo">
              <Image
                src="/images/phontus-frontline-kit-hero.webp"
                alt="A frontline employee and customer use the compact Phontus Frontline Kit while wearing open-ear bone-conduction headsets."
                fill
                priority
                sizes="(max-width: 1100px) 100vw, 58vw"
              />
              <div className="hero-visual__wash" />
            </div>
            <div className="hero-conversation">
              <ConversationCard compact />
            </div>
            <div className="hero-visual__badge">
              <span>
                <AudioLines aria-hidden="true" />
              </span>
              <div>
                <small>Session status</small>
                <strong>Interpretation live</strong>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="benefits-section" aria-labelledby="benefits-title">
        <Container>
          <h2 className="sr-only" id="benefits-title">Phontus access benefits</h2>
          <div className="benefits-strip">
            {benefits.map(({ icon: Icon, title, copy }) => (
              <article className="benefit-item" key={title}>
                <span className="icon-disc">
                  <Icon aria-hidden="true" />
                </span>
                <div>
                  <h3>{title}</h3>
                  <p>{copy}</p>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="section access-section">
        <Container>
          <SectionHeading
            eyebrow="Three ways to connect"
            title="One interpretation service, built for the way your teams work."
            copy="Choose the access point that fits the setting—from a mobile clinical cart to a compact counter-ready kit, with the Phontus Phone Line for customers who call in directly."
          />
          <AccessMethods />
        </Container>
      </section>

      <section className="section section--process">
        <Container>
          <SectionHeading
            eyebrow="A simple, human rhythm"
            title="How Phontus works"
            copy="The access point changes with the setting; the conversation stays clear and consistent."
          />
          <div className="process-grid">
            {process.map(({ icon: Icon, title, copy }, index) => (
              <article className="process-step" key={title}>
                <span className="process-step__number">{index + 1}</span>
                <div className="process-step__icon">
                  <Icon aria-hidden="true" />
                </div>
                <h3>{title}</h3>
                <p>{copy}</p>
                {index < process.length - 1 ? (
                  <ArrowRight className="process-step__arrow" aria-hidden="true" />
                ) : null}
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="section section--solutions">
        <Container>
          <SectionHeading
            eyebrow="Solutions"
            title="Built for the conversations your teams handle every day"
            copy="From care and family support to guest service and field operations, Phontus brings one clear interpretation workflow to the point of need."
          />
          <div className="solution-grid">
            {solutions.map(({ slug, shortTitle, description, image, icon: Icon }) => (
              <Link className="solution-card" href={`/solutions/${slug}`} key={slug}>
                <div className="solution-card__image">
                  <Image
                    src={image}
                    alt=""
                    fill
                    sizes="(max-width: 650px) 100vw, (max-width: 1100px) 50vw, 25vw"
                  />
                </div>
                <div className="solution-card__body">
                  <span className="icon-disc">
                    <Icon aria-hidden="true" />
                  </span>
                  <div>
                    <h3>{shortTitle}</h3>
                    <p>{description}</p>
                    <span className="text-link">
                      Explore solution <ArrowRight aria-hidden="true" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <section className="section product-showcase">
        <Container>
          <div className="showcase-row">
            <div className="showcase-copy">
              <p className="eyebrow">One clear Phontus experience</p>
              <h2>Built to feel familiar at every access point.</h2>
              <p>
                The Clinical Kit, Frontline Kit, and Phontus Phone Line bring
                every conversation into the same focused Spanish–English
                interpretation flow.
              </p>
              <ul className="check-list">
                <li><Check /> Spanish ↔ English at launch</li>
                <li><Check /> Clear turn-by-turn interpretation workflow</li>
                <li><Check /> Clear speaker and language cues</li>
              </ul>
              <ButtonLink href="/product" variant="secondary">
                Explore the Product
              </ButtonLink>
            </div>
            <div className="showcase-visual showcase-visual--mint">
              <ProductMockup />
            </div>
          </div>
          <div className="showcase-row showcase-row--reverse">
            <div className="showcase-copy">
              <p className="eyebrow">Bilingual session context</p>
              <h2>Follow the conversation without losing the person in front of you.</h2>
              <p>
                The transcript concept distinguishes each speaker, labels
                language direction, and makes the active session state visible
                at a glance.
              </p>
              <ul className="check-list">
                <li><Check /> Bilingual transcript view</li>
                <li><Check /> Simple session controls</li>
                <li><Check /> Human-interpreter escalation — <strong>Planned</strong></li>
              </ul>
            </div>
            <div className="showcase-visual showcase-visual--sun">
              <ProductMockup mode="transcript" />
            </div>
          </div>
        </Container>
      </section>

      <section className="section why-section">
        <Container className="why-grid">
          <div className="why-copy">
            <p className="eyebrow">Why Phontus</p>
            <h2>Language barriers shouldn’t slow service down.</h2>
            <p>
              Routine needs often move faster than a complicated workflow can
              respond. Phontus brings interpretation closer through access
              points designed around the room, counter, campus, or worksite.
            </p>
            <ButtonLink href="/about" variant="secondary">
              Why we’re building Phontus
            </ButtonLink>
          </div>
          <div className="why-points">
            {[
              [PanelsTopLeft, "Purpose-built access", "Choose the kit or phone line that fits the environment."],
              [Sparkles, "Less operational friction", "A focused workflow with fewer decisions before a session."],
              [Users, "Human interaction first", "Technology supports the dialogue rather than becoming the center of it."],
              [Gauge, "Available for routine needs", "A practical option for everyday service interactions."],
            ].map(([Icon, title, copy]) => {
              const PointIcon = Icon as typeof PanelsTopLeft;
              return (
                <article key={title as string}>
                  <PointIcon aria-hidden="true" />
                  <h3>{title as string}</h3>
                  <p>{copy as string}</p>
                </article>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="section validation-section">
        <Container>
          <div className="validation-card">
            <div className="validation-card__intro">
              <span className="quote-mark" aria-hidden="true">“</span>
              <p className="eyebrow">Where we started</p>
              <h2>Shaped in demanding real-world settings</h2>
              <p>
                Our earliest testing has taken place with clinical teams,
                including dental and women’s health settings. Those lessons
                inform a simpler, more thoughtful experience for frontline
                conversations across sectors.
              </p>
            </div>
            <div className="validation-points">
              {[
                [BadgeCheck, "Early field testing", "Learning in real workflows"],
                [Languages, "Spanish ↔ English", "Focused launch experience"],
                [PanelsTopLeft, "Two kit formats", "Clinical and frontline delivery"],
                [PhoneCall, "Phone Line", "Planned interpretation channel"],
              ].map(([Icon, title, copy]) => {
                const PointIcon = Icon as typeof BadgeCheck;
                return (
                  <article key={title as string}>
                    <PointIcon aria-hidden="true" />
                    <strong>{title as string}</strong>
                    <span>{copy as string}</span>
                  </article>
                );
              })}
            </div>
          </div>
        </Container>
      </section>

      <section className="section security-teaser">
        <Container className="security-teaser__grid">
          <div>
            <p className="eyebrow">Responsible deployment</p>
            <h2>A thoughtful foundation for every environment.</h2>
          </div>
          <div>
            <p>
              We’re developing Phontus around controlled access, secure
              transmission architecture, thoughtful session handling, and
              minimal participant friction. Security is an ongoing product practice,
              not a one-time claim.
            </p>
            <Link className="text-link" href="/security">
              Read our security approach <ArrowRight aria-hidden="true" />
            </Link>
          </div>
          <div className="security-teaser__icon">
            <LockKeyhole aria-hidden="true" />
            <ShieldCheck aria-hidden="true" />
          </div>
        </Container>
      </section>

      <FinalCTA />
    </>
  );
}
