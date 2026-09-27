import Image from "next/image";
import Link from "next/link";
import { ButtonLink, CheckList, Container, Eyebrow, PhotoFrame } from "@/components/ui";
import { productPanels, type ProductTab } from "@/lib/redesign-content";
import { productDestinations } from "@/lib/products";
import { PhoneCall, Users, MapPin, History, Settings2 } from "lucide-react";

const orderedPanels = ["frontline", "clinical", "phone", "human", "console"] as const;

export function ProductNavigation({ selected }: { selected?: ProductTab }) {
  return (
    <Container>
      <nav className="product-tabs" aria-label="Explore the Phontus system">
        {orderedPanels.map((id) => <Link key={id} href={productDestinations[id]} aria-current={selected === id ? "page" : undefined}>{productPanels.find((panel) => panel.id === id)!.label}</Link>)}
      </nav>
    </Container>
  );
}

export function ProductExplorer({ selected, heading = "h2" }: { selected: ProductTab; heading?: "h1" | "h2" }) {
  const panel = productPanels.find((item) => item.id === selected)!;
  const Heading = heading;
  return (
    <section className="product-panel" id="product-detail-panel">
      <Container className="product-panel__grid">
          <div className="product-panel__copy product-panel__intro">
            <Eyebrow>{panel.badge}</Eyebrow>
            <Heading>{panel.title}</Heading>
            <p>{panel.copy}</p>
          </div>
          <div
            className={`product-panel__visual product-panel__visual--${selected}`}
          >
            {selected === "clinical" || selected === "frontline" ? (
              <PhotoFrame src={panel.image!} mobileSrc={panel.imageMobile} alt={panel.imageAlt!} priority />
            ) : selected === "human" ? (
              <Image
                src="/images/product/session-screen.webp"
                width={1130}
                height={848}
                alt="Phontus session interface with a call interpreter control."
                sizes="(max-width: 960px) 100vw, 45vw"
              />
            ) : selected === "phone" ? (
              <div className="phone-explainer">
                <PhoneCall aria-hidden="true" />
                <span className="overline">Phontus Phone Line</span>
                <p className="phone-explainer__statement">
                  Your caller.
                  <br />
                  Your team.
                  <br />A shared understanding.
                </p>
                <p>Spanish ⇄ English interpretation on the line.</p>
              </div>
            ) : (
              <div className="console-capabilities">
                <Eyebrow>One operational view</Eyebrow>
                {[
                  [MapPin, "Sites & devices"],
                  [Users, "Staff & access"],
                  [History, "Session history"],
                  [Settings2, "Retention settings"],
                ].map(([Icon, label]) => {
                  const I = Icon as typeof MapPin;
                  return (
                    <div key={label as string}>
                      <I aria-hidden="true" />
                      <span>{label as string}</span>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
          <div className="product-panel__copy product-panel__features">
            <CheckList items={panel.features} />
          </div>
          <div className="product-panel__copy product-panel__action">
            <p className="product-availability">Spanish ⇄ English at launch</p>
            <ButtonLink href="/contact">Request a demo</ButtonLink>
          </div>
      </Container>
    </section>
  );
}
