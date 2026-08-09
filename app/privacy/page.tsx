import type { Metadata } from "next";
import { Container, PageHero } from "@/components/ui";
import { siteConfig } from "@/lib/config";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata(
  "Privacy Policy",
  "Phontus website privacy policy.",
  "/privacy",
);

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        copy="This policy explains the limited information collected through the Phontus public website and how it is handled."
      />
      <section className="section">
        <Container className="legal-content">
          <p><strong>Last updated:</strong> July 25, 2026</p>
          <p>
            This policy applies to the public Phontus marketing website. It does
            not describe product data practices for a future contracted
            deployment, which would be governed by separate agreements and
            documentation.
          </p>

          <h2>Information you provide</h2>
          <p>
            When you submit a contact or demo request, we may receive your name,
            work contact information, organization details, expected use case,
            and the message you choose to send.
          </p>

          <h2>How information is used</h2>
          <p>
            We use this information to respond to your request, understand
            interest in Phontus, maintain business records, protect the website,
            and improve our communications.
          </p>

          <h2>Website operations</h2>
          <p>
            Hosting and infrastructure providers may process basic technical
            information needed to deliver and protect the site, such as IP
            address, browser information, request time, and diagnostic logs. We
            do not use this page to promise a particular analytics or cookie
            setup that is not currently configured.
          </p>

          <h2>Service providers</h2>
          <p>
            We may use service providers to host the website, deliver contact
            messages, and maintain business systems. They may process
            information only for the services they provide to us.
          </p>

          <h2>Retention and security</h2>
          <p>
            We retain information for as long as reasonably needed for the
            purposes above and apply safeguards appropriate to the nature of
            the information. No internet transmission or storage system can be
            guaranteed completely secure.
          </p>

          <h2>Your choices</h2>
          <p>
            You may ask us to update or delete contact information you provided,
            subject to legal or operational retention needs.
          </p>

          <h2>Contact</h2>
          <p>
            Questions about this policy can be sent to{" "}
            <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>.
          </p>
        </Container>
      </section>
    </>
  );
}
