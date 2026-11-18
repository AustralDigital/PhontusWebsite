import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
import { CheckList, Container, Eyebrow } from "@/components/ui";
import { siteConfig } from "@/lib/config";
import { createMetadata } from "@/lib/metadata";
import { demoAgenda } from "@/lib/website-copy";

export const metadata: Metadata = createMetadata("Request a demo", "See a live English–Spanish session and discuss language needs and setup options for your team in a 20-minute Phontus demo.", "/contact");

export default function ContactPage() {
  return (
    <section className="contact-page">
      <Container className="split-grid split-grid--start">
        <div className="contact-page__intro" data-reveal>
          <Eyebrow>Request a demo</Eyebrow>
          <h1>See how Phontus fits your team</h1>
          <p>In a 20-minute demo, we’ll run a live interpretation session, discuss your language needs, and compare setups for your team.</p>
          <a href="#demo-request" className="text-link demo-form-jump">Go to the demo form ↓</a>
          <div className="demo-agenda">
            <h2>What we’ll cover</h2>
            <CheckList items={[...demoAgenda]} />
          </div>
          <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
        </div>
        <ContactForm />
      </Container>
    </section>
  );
}
