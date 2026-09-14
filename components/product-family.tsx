import { photography } from "@/lib/photography";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container, Eyebrow, PhotoFrame } from "@/components/ui";

export function ProductFamily() {
  return (
    <section className="editorial-section product-family" id="kits">
      <Container>
        <div className="section-intro" data-reveal>
          <Eyebrow>The hardware family</Eyebrow>
          <h2>
            A place on the counter.
            <br />A presence in the room.
          </h2>
          <p>Two formats. The same Phontus system.</p>
        </div>
        <div className="product-family__grid">
          <article data-reveal>
            <Link
              className="product-family__image"
              href="/product?tab=frontline#details"
              aria-label="Explore the Phontus Interpreting Kit"
            >
              <PhotoFrame {...photography.receptionKit}
                sizes="(max-width: 960px) 100vw, 45vw"
              />
            </Link>
            <div className="product-family__label">
              <div>
                <span className="overline">
                  For counters, desks & shared spaces
                </span>
                <h3>Interpreting Kit</h3>
              </div>
              <Link
                className="round-link"
                href="/product?tab=frontline#details"
                aria-label="Explore the Interpreting Kit"
              >
                <ArrowUpRight aria-hidden="true" />
              </Link>
            </div>
            <p>A compact, dedicated place for face-to-face interpretation.</p>
          </article>
          <article data-reveal>
            <Link
              className="product-family__image product-family__image--clinical"
              href="/product?tab=clinical#details"
              aria-label="Explore the Phontus Clinical Kit"
            >
              <PhotoFrame {...photography.clinicalExamRoom}
                sizes="(max-width: 960px) 100vw, 45vw"
              />
            </Link>
            <div className="product-family__label">
              <div>
                <span className="overline">For the point of care</span>
                <h3>Clinical Kit</h3>
              </div>
              <Link
                className="round-link"
                href="/product?tab=clinical#details"
                aria-label="Explore the Clinical Kit"
              >
                <ArrowUpRight aria-hidden="true" />
              </Link>
            </div>
            <p>A mobile interpretation system that goes where care happens.</p>
          </article>
        </div>
      </Container>
    </section>
  );
}
