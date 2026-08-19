import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
import { Container, Eyebrow } from "@/components/ui";
import { siteConfig } from "@/lib/config";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata(
  "Request a demo",
  "Tell Phontus where language comes up and see a real interpreting session with your team.",
  "/contact",
);

export default function ContactPage() {
  return (
    <section className="contact-page">
      <Container className="split-grid split-grid--start">
        <div className="contact-page__intro" data-reveal>
          <Eyebrow>Request a demo</Eyebrow>
          <h1>Tell us where language comes up.</h1>
          <p>We will bring the setup that fits your setting — a Clinical Kit, a Frontline Kit, the Phone Line — and run a real session with your team on the call.</p>
          <div className="contact-steps">
            {[
              "You tell us the setting and where the conversations happen.",
              "We run a twenty-minute call and show a session end to end.",
              "If it fits, we configure a kit for one site and start there.",
            ].map((step, index) => <div key={step}><span className="mono">0{index + 1}</span><p>{step}</p></div>)}
          </div>
          <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
        </div>
        <ContactForm />
      </Container>
    </section>
  );
}
