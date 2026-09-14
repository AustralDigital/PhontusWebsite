"use client";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import {
  ButtonLink,
  CheckList,
  Container,
  Eyebrow,
  PhotoFrame,
} from "@/components/ui";
import { productPanels, type ProductTab } from "@/lib/redesign-content";
import { PhoneCall, Users, MapPin, History, Settings2 } from "lucide-react";
const validTabs = new Set<ProductTab>([
  "clinical",
  "frontline",
  "phone",
  "human",
  "console",
]);
const orderedPanels = [
  "frontline",
  "clinical",
  "human",
  "console",
  "phone",
].map((id) => productPanels.find((p) => p.id === id)!);

export function ProductExplorer() {
  const params = useSearchParams();
  const value = params.get("tab") as ProductTab | null;
  const selected: ProductTab =
    value && validTabs.has(value) ? value : "frontline";
  const select = (id: ProductTab) => {
    const url = new URL(window.location.href);
    url.searchParams.set("tab", id);
    url.hash = "details";
    // Native history keeps this local view change immediate and preserves focus.
    window.history.replaceState(
      null,
      "",
      `${url.pathname}${url.search}${url.hash}`,
    );
  };
  const panel = orderedPanels.find((p) => p.id === selected)!;
  return (
    <>
      <Container>
        <div
          className="product-tabs"
          role="tablist"
          aria-label="Explore the Phontus system"
        >
          {orderedPanels.map((p, index) => (
            <button
              key={p.id}
              id={`tab-${p.id}`}
              type="button"
              role="tab"
              tabIndex={selected === p.id ? 0 : -1}
              aria-selected={selected === p.id}
              aria-controls="product-detail-panel"
              onClick={() => select(p.id)}
              onKeyDown={(event) => {
                let next = index;
                if (event.key === "ArrowRight")
                  next = (index + 1) % orderedPanels.length;
                else if (event.key === "ArrowLeft")
                  next =
                    (index + orderedPanels.length - 1) % orderedPanels.length;
                else if (event.key === "Home") next = 0;
                else if (event.key === "End") next = orderedPanels.length - 1;
                else return;
                event.preventDefault();
                select(orderedPanels[next].id);
                document
                  .getElementById(`tab-${orderedPanels[next].id}`)
                  ?.focus();
              }}
            >
              {p.label}
            </button>
          ))}
        </div>
      </Container>
      <section
        className="product-panel"
        id="product-detail-panel"
        role="tabpanel"
        aria-labelledby={`tab-${selected}`}
        tabIndex={0}
      >
        <Container className="product-panel__grid">
          <div
            className={`product-panel__visual product-panel__visual--${selected}`}
          >
            {selected === "clinical" || selected === "frontline" ? (
              <PhotoFrame src={panel.image!} mobileSrc={panel.imageMobile} alt={panel.imageAlt!} />
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
                <h3>
                  Your caller.
                  <br />
                  Your team.
                  <br />A shared understanding.
                </h3>
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
          <div className="product-panel__copy">
            <Eyebrow>{panel.badge}</Eyebrow>
            <h2>{panel.title}</h2>
            <p>{panel.copy}</p>
            <CheckList items={panel.features} />
            <ButtonLink href="/contact">See it in a demo</ButtonLink>
          </div>
        </Container>
      </section>
    </>
  );
}
