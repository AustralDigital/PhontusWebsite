import type { Metadata } from "next";
import { Container, Eyebrow } from "@/components/ui";
import { WorkplaceStories } from "@/components/workplace-stories";
import { createMetadata } from "@/lib/metadata";
export const metadata: Metadata = createMetadata(
  "At work in your world",
  "One interpretation system for healthcare, schools, business, field operations and hospitality.",
  "/solutions",
);
export default function SolutionsPage() {
  return (
    <>
      <section className="page-hero">
        <Container>
          <Eyebrow>Phontus in your world</Eyebrow>
          <h1>
            Different places.
            <br />A shared understanding.
          </h1>
          <p>
            At the bedside. Across the counter. In the school office. One
            system, wherever the conversation happens.
          </p>
        </Container>
      </section>
      <WorkplaceStories introduction={false} />
    </>
  );
}
