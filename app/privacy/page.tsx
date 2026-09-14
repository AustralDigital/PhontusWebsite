import type { Metadata } from "next";
import { LegalPage, ReviewNote } from "@/components/legal-page";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata("Privacy", "How Phontus handles information from interpreted sessions.", "/privacy");

export default function PrivacyPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Privacy"
      intro="How Phontus handles what is said in an interpreted session, and who decides what happens to it."
      notice="Draft for legal review. This page states how the product is designed to work; it has not been reviewed by counsel and the flagged items below need confirming before publication."
      sections={[
        { title: "What this covers", body: <><p>This policy covers Phontus interpreting sessions started on a Clinical Kit or Interpreting Kit, calls interpreted on the Phontus Phone Line, and use of the Phontus admin console.</p><p>It does not cover the separate systems your organization already uses — your phone provider, your records system, or anything a member of staff types somewhere else after a conversation.</p></> },
        { title: "Who decides what happens to a session", body: <><p>The organization operating Phontus decides which sites are enabled, who may read a transcript, and how long transcripts are kept. Phontus processes session information on that organization&apos;s behalf and according to those settings.</p><p>If you spoke with someone using Phontus and want to know what was kept, the organization you were speaking to holds that answer. We will help them find it.</p></> },
        { title: "What a session produces", body: <><p>Speech is interpreted between Spanish and English as the conversation happens. A transcript of the exchange may be created so both people can follow it during the session and so the organization can review it afterwards, subject to its own retention settings.</p><p>A visitor or caller is never asked to create an account, install anything, or identify themselves to Phontus in order to be understood.</p><ReviewNote>To confirm: how session audio is handled — whether it is processed only in transit or retained at any point, and for how long.</ReviewNote></> },
        { title: "What we do not do with session content", body: <p>Phontus does not sell session content, does not use it for advertising, and does not share it with anyone outside the processing needed to interpret the conversation and provide the service to the operating organization.</p> },
        { title: "Retention and deletion", body: <><p>Transcript retention is configured per site in the admin console. Administrators designated by the operating organization can change those rules and request deletion.</p><ReviewNote>To confirm: default retention period for a new site, and how quickly a deletion request takes effect.</ReviewNote></> },
        { title: "Who else is involved", body: <><p>Delivering interpreting involves a small number of service providers — for speech processing, telephony, and hosting. A current list is available on request.</p><ReviewNote>To confirm: the subprocessor list, each one&apos;s role, and where it processes data.</ReviewNote></> },
        { title: "Certified human interpreters", body: <p>When a session is escalated, a human interpreter joins the conversation and hears it in order to interpret it. Interpreters work under confidentiality obligations.</p> },
        { title: "Changes to this policy", body: <p>When this policy changes materially we will say what changed and when, rather than only moving the date at the top.</p> },
        { title: "Contact", body: <><p>Questions about this policy, or a request about information from a session: <a href="mailto:hello@phontus.live">hello@phontus.live</a>.</p><ReviewNote>To confirm: legal entity name, registered address, and the jurisdictions this policy needs to address.</ReviewNote></> },
      ]}
    />
  );
}
