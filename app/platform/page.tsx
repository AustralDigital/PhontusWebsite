import type { Metadata } from "next";
import { PlatformSection, SystemMap, EnterpriseSection } from "@/components/system-sections";
import { RolloutSection } from "@/components/access-sections";
import { ButtonLink, Container, Eyebrow } from "@/components/ui";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata("The Phontus platform", "Manage sites, people, interpreting devices, sessions, usage and transcript retention. One operational view for kits and phone interpretation.", "/platform");

export default function PlatformPage() {
  return (
    <>
      <section className="page-hero platform-hero"><Container className="split-grid split-grid--center"><div><Eyebrow>The Phontus platform</Eyebrow><h1>Language access.<br />An everyday operation.</h1><p>Give administrators a shared view of the system your teams use. Sites, people, devices and phone sessions stay connected as you grow.</p><div className="button-row"><ButtonLink href="/contact">See the platform in a demo</ButtonLink></div></div><SystemMap /></Container></section>
      <PlatformSection />
      <EnterpriseSection />
      <RolloutSection />
    </>
  );
}
