import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container, Eyebrow } from "@/components/ui";

export type PilotStory = {
  id: string;
  organizationName?: string;
  anonymousLabel: string;
  logo?: { src: string; alt: string };
  region?: string;
  industry: string;
  deploymentType: string;
  quote: string;
  attribution: string;
  pilotStatus: string;
  metric?: { value: string; label: string };
  source: string;
  approvedForPublication: boolean;
};

// No approved testimonials or metrics are present in the current source material.
export const pilotStories: PilotStory[] = [];

export function PilotStories({ stories = pilotStories }: { stories?: PilotStory[] }) {
  const approved = stories.filter((story) => story.approvedForPublication && story.source && story.quote);
  return (
    <section className="editorial-section pilot-stories">
      <Container>
        <div className="section-intro" data-reveal>
          <Eyebrow>Informed by the work</Eyebrow>
          <h2>Built with<br />real-world teams.</h2>
          <p>Our early work with clinical teams, including dental and women’s health settings, helped shape Phontus around the places people already talk.</p>
        </div>
        {approved.length > 0 ? <div className="pilot-stories__grid">
          {approved.map((story) => <article key={story.id}>
            {story.logo ? <Image src={story.logo.src} alt={story.logo.alt} width={160} height={64} /> : null}
            <span className="overline">{story.industry}{story.region ? ` · ${story.region}` : ""}</span>
            <h3>{story.organizationName ?? story.anonymousLabel}</h3>
            <blockquote>“{story.quote}”</blockquote>
            <p>{story.attribution}</p>
            <dl><div><dt>Deployment</dt><dd>{story.deploymentType}</dd></div><div><dt>Status</dt><dd>{story.pilotStatus}</dd></div></dl>
            {story.metric ? <p><strong>{story.metric.value}</strong> {story.metric.label}</p> : null}
          </article>)}
        </div> : null}
        <Link href="/about" className="text-link">Why we’re building Phontus <ArrowUpRight aria-hidden="true" /></Link>
      </Container>
    </section>
  );
}
