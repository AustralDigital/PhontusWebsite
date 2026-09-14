import type { Metadata } from "next";
import { LegalPage, ReviewNote } from "@/components/legal-page";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata("Terms of service", "What Phontus provides, what it does not, and what each party agrees to.", "/terms");

export default function TermsPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Terms of service"
      intro="What Phontus provides, what it does not, and what we each agree to."
      notice="Draft for legal review. Written to be readable and to state the product honestly; the commercial and liability sections are placeholders and must be drafted by counsel before publication."
      sections={[
        { title: "Who this is between", body: <><p>These terms are between Phontus and the organization that agrees to them. Individual members of staff use Phontus under their organization&apos;s account, and visitors or callers who are interpreted are not asked to agree to anything.</p><ReviewNote>To confirm: legal entity, contracting model, and whether an order form or MSA sits above these terms.</ReviewNote></> },
        { title: "What Phontus provides", body: <p>AI-assisted interpreting between Spanish and English, started on a Clinical Kit, a Interpreting Kit, or the Phontus Phone Line; escalation to a human interpreter on request; and an admin console for sites, staff accounts, retention rules and session history.</p> },
        { title: "What AI interpreting is, and is not", body: <><p>AI interpreting is an aid to a conversation between two people. It is fast and it is useful for the everyday exchanges this product is built for: checking in, giving directions, confirming an appointment, taking a service request.</p><p>It is not a substitute for a human interpreter where one is required by law, by policy, or by the seriousness of the conversation — consent, diagnosis, legal instruction, anything a person will act on in a way that is hard to undo. In those situations, escalate to a human interpreter.</p></> },
        { title: "Not for emergencies", body: <p>Phontus is not an emergency service and must not be relied on to summon help. In an emergency, use your local emergency number and your organization&apos;s emergency procedures.</p> },
        { title: "Your responsibilities", body: <p>Keeping site and staff account details accurate, using Phontus lawfully and for the conversations it is intended for, telling participants that a conversation is being interpreted where your policies or local law require it, and looking after the equipment while it is with you.</p> },
        { title: "Equipment", body: <><p>Kits are configured for the sites they are sent to and remain subject to the terms under which they were supplied.</p><ReviewNote>To confirm: whether kits are sold, leased or loaned, who insures them, and what happens on damage, loss or termination.</ReviewNote></> },
        { title: "Fees and term", body: <><p>Fees, billing period, and the length of the agreement are set out in your order.</p><ReviewNote>To confirm: pricing model, payment terms, renewal and notice periods.</ReviewNote></> },
        { title: "Availability", body: <><p>We aim to keep Phontus available and to be straight with you when it is not.</p><ReviewNote>To confirm: whether you are committing to an uptime figure or support response times.</ReviewNote></> },
        { title: "Ending the agreement", body: <p>Either side may end the agreement in line with the notice in your order. On termination, we help you export or delete session history and arrange the return of equipment.</p> },
        { title: "Liability and governing law", body: <><p>These sections must be drafted by counsel.</p><ReviewNote>To confirm: limitation of liability, indemnities, warranty disclaimers, governing law and venue. Do not publish this page without them.</ReviewNote></> },
      ]}
    />
  );
}
