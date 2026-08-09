import Image from "next/image";
import { ButtonLink, Container } from "@/components/ui";

export function FinalCTA() {
  return (
    <section className="final-cta-section">
      <Container>
        <div className="final-cta">
          <Image
            className="final-cta__mark"
            src="/brand/phontus-mark.svg"
            width={700}
            height={275}
            alt=""
            aria-hidden="true"
          />
          <div>
            <p className="eyebrow eyebrow--light">A closer look at Phontus</p>
            <h2>See how Phontus fits your team.</h2>
            <p>
              Tell us where language barriers show up. We’ll tailor the demo and
              explore the right mix of Clinical Kits, Frontline Kits, and phone
              access for your setting.
            </p>
          </div>
          <div className="final-cta__actions">
            <ButtonLink href="/contact" variant="yellow">
              Request a Demo
            </ButtonLink>
            <ButtonLink href="/solutions" variant="light">
              Explore Solutions
            </ButtonLink>
          </div>
        </div>
      </Container>
    </section>
  );
}
