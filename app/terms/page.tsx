import type { Metadata } from "next";
import { Container, PageHero } from "@/components/ui";
import { siteConfig } from "@/lib/config";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata(
  "Terms of Service",
  "Terms for using the Phontus public website.",
  "/terms",
);

export default function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Terms of Service"
        copy="These terms govern use of the public Phontus marketing website."
      />
      <section className="section">
        <Container className="legal-content">
          <p><strong>Last updated:</strong> July 25, 2026</p>

          <h2>Website purpose</h2>
          <p>
            This website provides general information about Phontus and allows
            visitors to contact us. It does not provide medical, legal, safety,
            or other professional advice and is not a substitute for a qualified
            interpreter when one is required.
          </p>

          <h2>No product commitment</h2>
          <p>
            Product descriptions on this site explain current direction and
            concepts. Availability, specifications, and deployment terms may
            change. Planned features are not commitments to deliver on a
            particular date.
          </p>

          <h2>Acceptable use</h2>
          <p>
            You may not interfere with the website, attempt unauthorized
            access, submit unlawful or harmful content, misrepresent your
            identity, or use the site in a way that infringes the rights of
            others.
          </p>

          <h2>Intellectual property</h2>
          <p>
            The Phontus name, logos, site design, product concepts, and original
            content are owned by Phontus or used with permission. These terms do
            not grant a license to use our marks or copy the site.
          </p>

          <h2>Third-party services</h2>
          <p>
            The site may rely on hosting, email, or other service providers.
            Their availability and operation may be outside our control.
          </p>

          <h2>Disclaimers</h2>
          <p>
            The public website is provided on an “as is” and “as available”
            basis to the extent permitted by law. We do not guarantee that it
            will be uninterrupted or error-free.
          </p>

          <h2>Changes</h2>
          <p>
            We may update these terms as the website and business evolve. The
            updated date above indicates the current version.
          </p>

          <h2>Contact</h2>
          <p>
            Questions about these terms can be sent to{" "}
            <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>.
          </p>
        </Container>
      </section>
    </>
  );
}
