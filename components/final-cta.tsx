import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container, Eyebrow } from "@/components/ui";

export function FinalCTA() {
  return (
    <section className="final-cta">
      <Container>
        <Eyebrow>Let’s start a conversation</Eyebrow>
        <div className="final-cta__inner">
          <h2>
            Put Phontus where
            <br />
            conversations happen.
          </h2>
          <Link className="final-cta__link" href="/contact">
            <ArrowUpRight aria-hidden="true" />
            <span>Request a demo</span>
          </Link>
        </div>
      </Container>
    </section>
  );
}
