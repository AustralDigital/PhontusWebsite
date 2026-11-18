import { DetailRows, WebsiteCTA, WebsiteHero } from "@/components/website-sections";
import { createMetadata } from "@/lib/metadata";

const intro = "We’re building Phontus to make it easier for organizations to offer live interpretation where people already talk, from a clinic reception desk to a school office.";

export const metadata = createMetadata("About Phontus", intro, "/about");

export default function AboutPage() {
  return (
    <>
      <WebsiteHero label="About Phontus" title="Why we built Phontus" copy={intro} />
      <DetailRows label="Why Phontus exists" title="Designed around real conversations"
        copy="Early work with dental and women’s health teams helped shape how Phontus fits into the routines of frontline staff." items={[
          ["Help people speak directly", "A shared screen helps two people speak directly to each other and follow the conversation."],
          ["Offer a setup for each setting", "A mobile cart serves exam rooms and bedsides. A compact tabletop kit serves desks and counters."],
          ["Manage each location in one place", "Give teams one place to manage kits, phone interpretation, and the people who use them."],
        ]} />
      <WebsiteCTA title="Talk with the people building Phontus" copy="Tell us what your team encounters at the desk, in the room, or over the phone." />
    </>
  );
}
