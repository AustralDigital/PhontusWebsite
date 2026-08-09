import type { Metadata } from "next";
import { Building2, Mail, MessagesSquare } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { Container, PageHero } from "@/components/ui";
import { siteConfig } from "@/lib/config";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata(
  "Contact",
  "Request a personalized Phontus demo and explore Clinical Kits, Frontline Kits, and the Phontus Phone Line for your organization.",
  "/contact",
);

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact Phontus"
        title="Let’s explore the communication needs in your environment."
        copy="Tell us where your teams encounter language barriers. We’ll explore the right mix of Clinical Kits, Frontline Kits, and the Phontus Phone Line for your setting—and keep the conversation practical and specific."
      />

      <section className="section">
        <Container className="contact-layout">
          <aside className="contact-aside">
            <p className="eyebrow">Book a conversation</p>
            <h2>A product demo shaped around your workflow.</h2>
            <p>
              We’ll walk through the current product experience, discuss which
              kit or Phone Line model best fits your workflow, and answer with
              clear detail about what is available today and what is planned for
              launch.
            </p>
            <div className="contact-aside__details">
              <div>
                <Mail aria-hidden="true" />
                <p>
                  <strong>Email</strong>
                  <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
                </p>
              </div>
              <div>
                <MessagesSquare aria-hidden="true" />
                <p>
                  <strong>What to expect</strong>
                  <span>A focused, no-pressure product and rollout conversation.</span>
                </p>
              </div>
              <div>
                <Building2 aria-hidden="true" />
                <p>
                  <strong>Who it’s for</strong>
                  <span>
                    Healthcare, business and field operations, school systems,
                    hospitality, and other frontline teams.
                  </span>
                </p>
              </div>
            </div>
          </aside>
          <ContactForm />
        </Container>
      </section>
    </>
  );
}
