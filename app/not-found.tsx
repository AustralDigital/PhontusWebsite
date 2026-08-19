import { ButtonLink, PageHero } from "@/components/ui";

export default function NotFound() {
  return (
    <PageHero
      eyebrow="404"
      title="This page moved out of view."
      copy="The page you requested could not be found. Return to the Phontus homepage or get in touch with our team."
    >
      <div className="button-row">
        <ButtonLink href="/">Back to home</ButtonLink>
        <ButtonLink href="/contact" variant="secondary">Contact us</ButtonLink>
      </div>
    </PageHero>
  );
}
