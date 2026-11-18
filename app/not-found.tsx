import { ButtonLink, PageHero } from "@/components/ui";

export default function NotFound() {
  return (
    <PageHero
      eyebrow="404"
      title="Page not found"
      copy="Go back to the Phontus homepage or contact our team for help."
    >
      <div className="button-row">
        <ButtonLink href="/">Back to home</ButtonLink>
        <ButtonLink href="/contact" variant="secondary">Contact us</ButtonLink>
      </div>
    </PageHero>
  );
}
