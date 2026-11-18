import type { Metadata } from "next";
import Link from "next/link";
import { ButtonLink, Container, Eyebrow, PageHero } from "@/components/ui";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata(
  "Security",
  "Phontus security practices: encrypted transmission, site-level access, managed device enrollment and configurable transcript retention.",
  "/security",
);

// These capabilities are explicitly stated in the existing security page and product content.
const capabilities = [
  { title: "Encryption in transit", scope: "Session traffic", copy: "Session traffic is encrypted in transit between the kit, the Phone Line and the interpreting service." },
  { title: "Site-level access controls", scope: "People & permissions", copy: "Designated administrators manage staff accounts and access by site. Transcript access follows the organization’s settings." },
  { title: "Managed device enrollment", scope: "Sites & devices", copy: "Your administrators manage sites and device enrollment through the admin console, alongside staff accounts." },
  { title: "Configurable transcript retention", scope: "Session handling", copy: "Transcript retention is set per site in the admin console. Your organization decides what is kept, for how long and who can read it." },
];

export default function SecurityPage() {
  return (
    <>
      <PageHero eyebrow="Security" title="Security and data controls" copy="Manage who can access each site, which devices are enrolled, and how long transcripts are retained.">
        <ButtonLink href="/privacy" variant="secondary" arrow={false}>Read about privacy</ButtonLink>
      </PageHero>
      <section className="section section--compact">
        <Container>
          <div className="section-heading"><Eyebrow>Current capabilities</Eyebrow><h2>How sessions and access are managed</h2></div>
          <dl className="security-capabilities">
            {capabilities.map(({ title, scope, copy }) => <div key={title}><dt><span className="overline">{scope}</span><strong>{title}</strong></dt><dd>{copy}</dd></div>)}
          </dl>
          <div className="split-grid split-grid--start security-review" data-reveal>
            <div>
              <Eyebrow>Review your deployment</Eyebrow>
              <h2>Review your organization’s requirements</h2>
              <p>Request the current security summary to review data handling, retention, and access with your team.</p>
              <p>Our privacy documentation identifies open questions about audio handling, retention defaults, deletion timing and subprocessors. Review those with us for your setting.</p>
              <Link className="text-link" href="/contact">Request a security discussion →</Link>
            </div>
            <div className="review-list">
              <strong>What to review together</strong>
              {["Data flow for kit sessions and phone conversations", "Audio processing and any audio retention", "Transcript defaults and deletion requests", "Administrator roles and site access boundaries", "Device enrollment and loss handling", "Subprocessors and where data is processed"].map((item) => <span key={item}>{item}</span>)}
              <Link className="text-link" href="/privacy">Read the privacy documentation →</Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
