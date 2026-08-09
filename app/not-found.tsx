import { ButtonLink, Container } from "@/components/ui";

export default function NotFound() {
  return (
    <section className="page-hero">
      <Container>
        <div className="page-hero__content">
          <p className="eyebrow">404</p>
          <h1>This page moved out of view.</h1>
          <p className="page-hero__copy">
            The page you requested could not be found. Return to the Phontus
            homepage or get in touch with our team.
          </p>
          <div className="hero__actions">
            <ButtonLink href="/">Back to Home</ButtonLink>
            <ButtonLink href="/contact" variant="secondary">
              Contact Us
            </ButtonLink>
          </div>
        </div>
      </Container>
    </section>
  );
}
