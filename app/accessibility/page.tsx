import type { Metadata } from "next";
import { LegalPage, ReviewNote } from "@/components/legal-page";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata("Accessibility", "Phontus exists to remove a barrier. The interface must not become one.", "/accessibility");

export default function AccessibilityPage() {
  return (
    <LegalPage
      eyebrow="Accessibility"
      title="Accessibility"
      intro="Phontus exists to remove a barrier. The interface must not become one."
      notice="This statement describes what is built today and what has not yet been independently tested. Update it as the audit progresses rather than leaving it to age."
      sections={[
        { title: "What we are aiming for", body: <p>We design to WCAG 2.2 level AA. We have not yet completed an independent audit, so this page describes what is in place rather than claiming a conformance level we cannot evidence.</p> },
        { title: "What is in place", body: <><p>Session state is written in words, never carried by color alone, so a person who cannot distinguish the status color still knows whether Phontus is listening, interpreting or speaking.</p><p>Controls on session surfaces are at least 44 pixels, sized for gloved hands, standing users and wall-mounted tablets. The primary control stays in the same place and does not scroll away.</p><p>Keyboard operation is a requirement rather than an afterthought: every control is reachable and focus is always visible.</p><p>Text scales with the reader&apos;s settings, and animation is reduced to nothing when the operating system asks for reduced motion.</p><p>Languages are spelled out in words rather than shown as flags or abbreviations.</p></> },
        { title: "Where a person needs to do nothing", body: <p>A visitor or caller is never asked to install an app, create an account, hold a device, or wear anything. Fewer things to operate means fewer things that can exclude someone.</p> },
        { title: "Known gaps", body: <p>No independent accessibility audit has been completed. Screen-reader testing across the admin console is in progress. Sign language interpreting, including ASL video relay, is not available today.</p> },
        { title: "Tell us about a barrier", body: <><p>If something in Phontus prevented you from doing what you needed, tell us what you were trying to do, what happened, and the device or assistive technology you were using: <a href="mailto:hello@phontus.live">hello@phontus.live</a>.</p><ReviewNote>To confirm: the response time for accessibility reports, and whether an accessibility conformance report is needed.</ReviewNote></> },
      ]}
    />
  );
}
