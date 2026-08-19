import Image from "next/image";
import { ButtonLink, Container } from "@/components/ui";

export function FinalCTA() {
  return (
    <section className="final-cta">
      <Container className="final-cta__inner">
        <Image
          src="/brand/phontus-mark.svg"
          width={56}
          height={22}
          alt=""
          aria-hidden="true"
        />
        <h2>See a session in your own environment.</h2>
        <p>
          Tell us where language comes up. We will bring the right kit, in your
          languages, on a call that takes twenty minutes.
        </p>
        <div className="button-row">
          <ButtonLink href="/contact" variant="accent">Request a demo</ButtonLink>
          <ButtonLink href="/solutions" variant="inverse" arrow={false}>
            Explore solutions
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
