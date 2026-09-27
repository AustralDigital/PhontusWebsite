import Link from "next/link";
import { ArrowUpRight, PhoneCall } from "lucide-react";
import { ButtonLink, Container, Eyebrow } from "@/components/ui";

export function DifferentiationSection() {
  const pillars = [
    { title: "A device with a job.", copy: "Phontus stays where language barriers happen. Staff can start a conversation without finding an app, unlocking a personal phone or handing it to a visitor.", detail: "Ready at the point of conversation", href: "/products/interpreting-kit" },
    { title: "Built for shared environments.", copy: "Dedicated microphones, readable transcripts and managed hardware give teams a consistent setup. Administrators manage sites, people and devices together.", detail: "A system your organization can run", href: "/platform" },
    { title: "AI when it works. A person when it matters.", copy: "Use AI for immediate everyday conversations. Request a human interpreter from the session when the situation calls for additional support.", detail: "Different levels of support, connected", href: "/how-it-works#interpretation" },
  ];
  return (
    <section className="editorial-section differentiation">
      <Container>
        <div className="section-intro" data-reveal>
          <Eyebrow>Dedicated to the work</Eyebrow>
          <h2>Not another<br />translation app.</h2>
          <p>Language access belongs in your operations. Phontus gives it a place, a process and a person to call.</p>
        </div>
        <div className="differentiation__pillars">
          {pillars.map((pillar, index) => (
            <article key={pillar.title} data-reveal>
              <span className="index-number">0{index + 1}</span>
              <h3>{pillar.title}</h3>
              <p>{pillar.copy}</p>
              <Link href={pillar.href} className="text-link">{pillar.detail}<ArrowUpRight aria-hidden="true" /></Link>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function PhoneSection() {
  return (
    <section className="editorial-section phone-section" id="phone-line">
      <Container className="phone-section__grid">
        <div data-reveal>
          <Eyebrow>Phontus Phone Line</Eyebrow>
          <h2>Language access.<br />On the line, too.</h2>
          <p>Appointments, family calls, guest requests and dispatch. Phontus interprets the phone conversations that happen before someone arrives and after they leave.</p>
          <Link className="text-link" href="/products/phone-line">Explore the Phone Line <ArrowUpRight aria-hidden="true" /></Link>
        </div>
        <div className="phone-section__flow" data-reveal>
          <PhoneCall aria-hidden="true" />
          <ol>
            <li><span className="index-number">01</span><div><h3>The caller uses your number.</h3><p>Your existing business number or a dedicated one.</p></div></li>
            <li><span className="index-number">02</span><div><h3>Your team answers.</h3><p>Phontus interprets Spanish ⇄ English in both directions.</p></div></li>
            <li><span className="index-number">03</span><div><h3>The conversation stays connected.</h3><p>Request a human interpreter when needed. Review calls alongside kit sessions in the platform.</p></div></li>
          </ol>
          <p className="phone-section__note">No app or account for the caller. No Phontus kit required.</p>
        </div>
      </Container>
    </section>
  );
}

export function RolloutSection() {
  return (
    <section className="editorial-section rollout-section">
      <Container>
        <div className="section-intro" data-reveal>
          <Eyebrow>A practical starting point</Eyebrow>
          <h2>Start with one site.<br />Expand when it earns its place.</h2>
          <p>Start where language barriers come up most often. Choose the setup around the work your team actually does.</p>
        </div>
        <ol className="rollout-steps">
          {[
            ["Choose the setting", "A busy counter, a clinical team or the calls into your office."],
            ["Plan the deployment", "Discuss hardware, phone interpretation, human support and administration for that site."],
            ["Learn before expanding", "Use your team’s experience and site usage to decide where Phontus belongs next."],
          ].map(([title, copy], index) => <li key={title}><span className="index-number">0{index + 1}</span><h3>{title}</h3><p>{copy}</p></li>)}
        </ol>
        <ButtonLink href="/contact">Discuss your first site</ButtonLink>
      </Container>
    </section>
  );
}
