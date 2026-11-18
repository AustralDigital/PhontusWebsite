import { ButtonLink } from "@/components/ui";
import { DetailRows, Directory, WebsiteCTA, WebsiteHero } from "@/components/website-sections";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata(
  "Industries",
  "Explore live interpretation for healthcare, schools, business and field operations, and hospitality.",
  "/solutions",
);

export default function SolutionsPage() {
  return (
    <>
      <WebsiteHero label="Industries" title="Interpretation for the way your team works"
        copy="Give staff a way to communicate across languages during patient check-in, school enrollment, deliveries, and guest requests.">
        <ButtonLink href="/contact">Request a demo</ButtonLink>
      </WebsiteHero>
      <Directory variant="industries" />
      <DetailRows label="Getting started" title="Choose your first use case" dark count items={[
        ["Choose the setting", "Start where language needs come up regularly, such as reception, an exam room, or your main phone line."],
        ["Plan your first site", "Talk through kit placement, the Phone Line, staff access, and human interpretation."],
        ["Review how the first site uses it", "Use your team’s experience to decide where Phontus fits next."],
      ]} />
      <WebsiteCTA title="Tell us how your team works" />
    </>
  );
}
