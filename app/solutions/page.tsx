import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock3, Layers3, PanelsTopLeft, Workflow } from "lucide-react";
import { FinalCTA } from "@/components/final-cta";
import {
  ButtonLink,
  Container,
  PageHero,
  SectionHeading,
} from "@/components/ui";
import { solutions } from "@/lib/content";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata(
  "Interpretation Solutions for Frontline Teams",
  "Explore Phontus Clinical and Frontline Kits and the Phontus Phone Line for healthcare, business operations, schools, and hospitality.",
  "/solutions",
);

export default function SolutionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Solutions for frontline organizations"
        title="Language access where your teams already work."
        copy="Bring AI-assisted Spanish–English interpretation to care rooms, counters, campuses, and worksites with the kit or phone line that fits."
      >
        <div className="hero__actions">
          <ButtonLink href="/contact">Discuss Your Workflow</ButtonLink>
        </div>
      </PageHero>

      <section className="section">
        <Container>
          <SectionHeading
            eyebrow="Where Phontus fits"
            title="One service, three ways to reach it"
            copy="The Clinical Kit, Frontline Kit, and the Phontus Phone Line bring a consistent experience to distinct operational settings."
          />
          <div className="solution-grid">
            {solutions.map(({ slug, shortTitle, description, image, icon: Icon }) => (
              <Link className="solution-card" href={`/solutions/${slug}`} key={slug}>
                <div className="solution-card__image">
                  <Image
                    src={image}
                    alt=""
                    fill
                    sizes="(max-width: 700px) 100vw, (max-width: 1120px) 50vw, 25vw"
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

      <section className="section section--solutions">
        <Container>
          <SectionHeading
            eyebrow="The operational challenge"
            title="Communication needs rarely arrive on a perfect schedule"
            copy="Teams need an option that is reachable, understandable, and appropriate for the conversation at hand."
          />
          <div className="feature-grid feature-grid--four">
            {[
              {
                icon: Clock3,
                title: "Needs emerge quickly",
                copy: "Routine questions can surface at any point in a service or workplace interaction.",
              },
              {
                icon: Layers3,
                title: "Workflows are already full",
                copy: "Language access should add clarity without adding avoidable navigation.",
              },
              {
                icon: PanelsTopLeft,
                title: "The access point must fit",
                copy: "Clinical Kits, Frontline Kits, and the Phontus Phone Line place interpretation closer to routine conversations.",
              },
              {
                icon: Workflow,
                title: "Handoffs matter",
                copy: "Teams need clear paths for situations that call for a professional human interpreter.",
              },
            ].map(({ icon: Icon, title, copy }) => (
              <article className="feature-card" key={title}>
                <Icon aria-hidden="true" />
                <h3>{title}</h3>
                <p>{copy}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="section">
        <Container>
          <div className="content-band">
            <p className="eyebrow">Product fit</p>
            <h2>A consistent experience across rooms, counters, campuses, and worksites.</h2>
            <p>
              Phontus gives organizations one interaction model across its
              Clinical Kit, Frontline Kit, and Phontus Phone Line, while
              allowing placement, headset handling, and staff guidance to
              reflect each environment.
            </p>
            <ButtonLink href="/how-it-works" variant="secondary">
              See How It Works
            </ButtonLink>
          </div>
        </Container>
      </section>

      <FinalCTA />
    </>
  );
}
