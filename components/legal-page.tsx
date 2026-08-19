import type { ReactNode } from "react";
import { Container, Eyebrow } from "@/components/ui";

export function LegalPage({
  eyebrow,
  title,
  intro,
  notice,
  sections,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  notice: string;
  sections: { title: string; body: ReactNode }[];
}) {
  return (
    <>
      <section className="legal-hero">
        <Container>
          <Eyebrow>{eyebrow}</Eyebrow>
          <h1>{title}</h1>
          <p>{intro}</p>
          <span className="mono">Last updated August 2026</span>
          <p className="review-notice">{notice}</p>
        </Container>
      </section>
      <section className="legal-body">
        <Container data-reveal>
          {sections.map((section) => (
            <article key={section.title}>
              <h2>{section.title}</h2>
              {section.body}
            </article>
          ))}
        </Container>
      </section>
    </>
  );
}

export function ReviewNote({ children }: { children: ReactNode }) {
  return <p className="review-notice">{children}</p>;
}
