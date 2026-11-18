import { ButtonLink, Container } from "@/components/ui";
import { ConversationDemo } from "@/components/conversation-demo";
import { FAQ } from "@/components/faq";
import {
  Directory, IndustryShortcuts, PlatformSummary, WebsiteCTA, WebsiteHero, WebsiteIntro, WebsiteLink, WebsitePhotoBand,
} from "@/components/website-sections";
import { createMetadata } from "@/lib/metadata";
import { homeFaqs } from "@/lib/redesign-content";

export const metadata = createMetadata(
  "Phontus | Live interpretation for frontline teams",
  "Phontus uses AI to interpret conversations in real time at the front desk, in the room, and over the phone. Request a human interpreter when needed.",
);

export default function HomePage() {
  return (
    <>
      <WebsiteHero label="AI-assisted language access" title="Live interpretation for frontline teams"
        copy="Phontus uses AI to interpret conversations in real time at the front desk, in the room, and over the phone. Request a human interpreter when needed." availability home>
        <ButtonLink href="/contact">Request a demo</ButtonLink>
        <ButtonLink href="/how-it-works" variant="secondary">How it works</ButtonLink>
      </WebsiteHero>
      <WebsitePhotoBand size="home" />
      <IndustryShortcuts />
      <Directory variant="products" intro />
      <ConversationDemo />
      <PlatformSummary />
      <Directory variant="industries" intro />
      <section className="website-section website-section--canvas website-faq">
        <Container className="website-split website-split--rows">
          <WebsiteIntro title="Questions about Phontus"><WebsiteLink href="/contact">Talk to Phontus</WebsiteLink></WebsiteIntro>
          <FAQ items={homeFaqs} defaultOpen={0} />
        </Container>
      </section>
      <WebsiteCTA />
    </>
  );
}
