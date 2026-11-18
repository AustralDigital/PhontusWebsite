import { ButtonLink } from "@/components/ui";
import { AdminPreview, DetailRows, WebsiteCTA, WebsiteHero, WebsiteLink } from "@/components/website-sections";
import { createMetadata } from "@/lib/metadata";
import { platformPoints } from "@/lib/website-copy";

export const metadata = createMetadata(
  "The Phontus platform",
  "Manage sites, staff, devices, session history, and transcript retention from the Phontus admin console.",
  "/platform",
);

export default function PlatformPage() {
  return (
    <>
      <WebsiteHero label="Platform" title="Manage Phontus across every site"
        copy="Manage devices and staff access, review kit sessions and calls, and set transcript retention by site in the Phontus admin console." side={<AdminPreview />}>
        <ButtonLink href="/contact">Request a demo</ButtonLink>
      </WebsiteHero>
      <DetailRows label="Administration" title="What administrators can manage" items={platformPoints} />
      <DetailRows label="Rollout" title="Start with one site" copy="Choose one location where your team regularly needs interpretation." items={[
        ["Set up your first location", "Choose the counter, room, or phone line where your team regularly needs interpretation."],
        ["Give staff the right access", "Set up devices and staff accounts, and configure transcript retention for that site."],
        ["Decide where to expand", "Use feedback and site usage to decide where to add another kit or line."],
      ]} />
      <DetailRows label="Security and retention" title="Control access and retention" dark items={[
        ["Manage access by site", "Designated administrators decide which staff can access which sites."],
        ["Set transcript retention", "Configure retention per site and review data handling for your deployment."],
      ]}>
        <WebsiteLink href="/security">Explore security</WebsiteLink>
      </DetailRows>
      <WebsiteCTA title="See the platform with your team" />
    </>
  );
}
