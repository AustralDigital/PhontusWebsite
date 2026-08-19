import type { Metadata } from "next";
import Link from "next/link";
import { ConciergeBell, GraduationCap, HeartPulse, Truck } from "lucide-react";
import { Badge, Container, PageHero, PhotoFrame, Tag } from "@/components/ui";
import { solutions } from "@/lib/redesign-content";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata(
  "Solutions",
  "Phontus interpreting for healthcare, business operations, schools, and hospitality.",
  "/solutions",
);

const icons = [HeartPulse, Truck, GraduationCap, ConciergeBell];

export default function SolutionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Solutions"
        title="The conversations that happen before anything else can."
        copy="Check-in, intake, enrollment, a service request, a delivery window. Routine exchanges that stall when the two people do not share a language."
      />
      <section className="section">
        <Container className="solution-list">
          {solutions.map((solution, index) => {
            const Icon = icons[index];
            return (
              <article className="solution-row" key={solution.slug} data-reveal>
                <div className="solution-row__copy">
                  <Badge><Icon aria-hidden="true" /> {solution.name}</Badge>
                  <h2>{solution.title.replace(/\.$/, "")}</h2>
                  <p>{solution.overviewCopy}</p>
                  <Link href={`/solutions/${solution.slug}`}>Read the {solution.name.toLowerCase()} page →</Link>
                  <div className="tag-row">{solution.tags.map((tag) => <Tag key={tag}>{tag}</Tag>)}</div>
                </div>
                <PhotoFrame src={solution.image} alt={solution.imageAlt} />
              </article>
            );
          })}
        </Container>
      </section>
    </>
  );
}
