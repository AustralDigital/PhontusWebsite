import type { Metadata } from "next";
import Link from "next/link";
import { ShieldCheck, Timer, Users, Wifi } from "lucide-react";
import { Container, PageHero } from "@/components/ui";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata(
  "Security",
  "How Phontus approaches controlled access, encrypted transmission, and configurable session handling.",
  "/security",
);

const practices = [
  { icon: ShieldCheck, title: "Controlled access", copy: "Sites, staff accounts and device enrollment are managed by the administrators you designate. Access is granted per site, not per organization." },
  { icon: Wifi, title: "Secure transmission", copy: "Session traffic is encrypted in transit between the kit, the phone line and the interpreting service." },
  { icon: Timer, title: "Session handling you set", copy: "Transcript retention is configured per site in the admin console. What is kept, for how long, and who can read it is your decision." },
  { icon: Users, title: "Nothing for a visitor to install", copy: "A visitor never creates an account, installs anything, or hands over a device. The fewer things a person has to touch, the less there is to protect." },
];

export default function SecurityPage() {
  return (
    <>
      <PageHero
        eyebrow="Security"
        title="Security is a practice, not a claim."
        copy="Phontus is built around controlled access, encrypted transmission and session handling you configure. This page describes where things stand today, and it changes as the work does."
      />
      <section className="section">
        <Container>
          <div className="hairline-grid hairline-grid--two" data-reveal>
            {practices.map(({ icon: Icon, title, copy }) => (
              <article className="change-card" key={title}>
                <span className="icon-tile"><Icon aria-hidden="true" /></span>
                <h3>{title}</h3><p>{copy}</p>
              </article>
            ))}
          </div>
          <div className="split-grid split-grid--start security-review" data-reveal>
            <div>
              <h2>Where we are today</h2>
              <p>Phontus is built for organizations that have to answer security questions before they can say yes. Rather than list certifications, this page sets out what is in place, what is in progress, and what a review with your team would cover. Ask us and we will tell you exactly where we stand.</p>
              <Link className="text-link" href="/contact">Request our current security summary →</Link>
            </div>
            <div className="review-list">
              <strong>What a review covers</strong>
              {["Data flow for a kit session and a phone session", "Retention configuration and deletion behavior", "Administrator roles and access boundaries", "Device enrollment and loss handling", "Subprocessors, and where each one sits in the flow"].map((item) => <span key={item}>{item}</span>)}
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
