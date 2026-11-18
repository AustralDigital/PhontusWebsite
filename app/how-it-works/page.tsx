import { ButtonLink } from "@/components/ui";
import { ConversationDemo } from "@/components/conversation-demo";
import { DetailRows, HumanHandoff, WebsiteCTA, WebsiteHero } from "@/components/website-sections";
import { createMetadata } from "@/lib/metadata";
import { conversationSteps } from "@/lib/website-copy";

export const metadata = createMetadata(
  "How it works",
  "Choose a language pair, take turns speaking, and request a human interpreter when needed.",
  "/how-it-works",
);

export default function HowItWorksPage() {
  return (
    <>
      <WebsiteHero label="Technology" title="How Phontus interprets a conversation"
        copy="Choose a language pair on a Phontus kit and start speaking. Phontus interprets aloud in both directions and displays the exchange on screen." availability>
        <ButtonLink href="#conversation">See an example</ButtonLink>
        <ButtonLink href="/contact" variant="secondary">Request a demo</ButtonLink>
      </WebsiteHero>
      <DetailRows label="The session" title="From setup to conversation" items={conversationSteps} count />
      <ConversationDemo technology />
      <HumanHandoff />
      <DetailRows label="Channels" title="In person or on the phone" items={[
        ["On a Phontus kit", "A shared screen and directional microphone help both people follow the conversation."],
        ["On the Phone Line", "Callers use your business number. Your team can request a human interpreter during the call."],
      ]} />
      <WebsiteCTA title="See how a session works in your setting" />
    </>
  );
}
