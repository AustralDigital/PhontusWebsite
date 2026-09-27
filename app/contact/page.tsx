import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
import { CheckList, Container, Eyebrow } from "@/components/ui";
import { siteConfig } from "@/lib/config";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata("Request a demo", "See a real Spanish–English session, the Phontus hardware, human interpreter support and management platform. Discuss a first-site deployment with your team.", "/contact");

export default function ContactPage() {
  return (
    <section className="contact-page">
      <Container className="split-grid split-grid--start">
        <div className="contact-page__intro" data-reveal>
          <Eyebrow>Request a demo</Eyebrow>
          <h1>See Phontus.<br />Picture it in your setting.</h1>
          <p>Bring the conversations your team has every day. We’ll walk through a real session and the setup that fits — an Interpreting Kit, a Clinical Kit or the Phone Line.</p>
          <a href="#demo-request" className="text-link demo-form-jump">Go to the demo form ↓</a>
          <div className="demo-agenda">
            <span className="overline">Around 20 minutes · With your team</span>
            <h2>What happens in the demo</h2>
            <CheckList items={[
              "See a real Spanish ↔ English interpretation session.",
              "See the hardware and how it fits your space.",
              "Walk through requesting a human interpreter.",
              "See how sites, devices and usage are managed.",
              "Discuss a possible one-site deployment.",
            ]} />
          </div>
          <div className="demo-next"><h2>After you request a demo</h2><p>We’ll be in touch to arrange the call around your setting. If Phontus fits, we’ll discuss the setup for one site and plan from there.</p></div>
          <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
        </div>
        <ContactForm />
      </Container>
    </section>
  );
}
