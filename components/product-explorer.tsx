"use client";

import { Minus, Plus } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useMemo } from "react";
import { ConsoleMock, SessionMock, PhoneLineMock } from "@/components/conversation-card";
import { Badge, ButtonLink, CheckList, Container, PhotoFrame } from "@/components/ui";
import { productPanels, type ProductTab } from "@/lib/redesign-content";

const validTabs = new Set<ProductTab>(["clinical", "frontline", "phone", "human", "console"]);

export function ProductExplorer() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();
  const selected = useMemo<ProductTab>(() => {
    const value = searchParams.get("tab") as ProductTab | null;
    return value && validTabs.has(value) ? value : "clinical";
  }, [searchParams]);

  const select = (id: ProductTab) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("tab", id);
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  };

  return (
    <>
      <div className="product-tabs" role="tablist" aria-label="Phontus product details">
        <Container>
          {productPanels.map((panel) => (
            <button
              key={panel.id}
              type="button"
              role="tab"
              aria-selected={selected === panel.id}
              aria-controls={`panel-${panel.id}`}
              onClick={() => select(panel.id)}
            >
              {panel.label}
            </button>
          ))}
        </Container>
      </div>

      <div className="product-accordion">
        {productPanels.map((panel) => {
          const open = selected === panel.id;
          return (
            <div key={panel.id}>
              <button type="button" aria-expanded={open} onClick={() => select(panel.id)}>
                <span>{panel.label}</span>
                {open ? <Minus aria-hidden="true" /> : <Plus aria-hidden="true" />}
              </button>
              {open ? <ProductPanel id={panel.id} /> : null}
            </div>
          );
        })}
      </div>

      <div className="product-panels">
        <ProductPanel id={selected} />
      </div>
    </>
  );
}

function ProductPanel({ id }: { id: ProductTab }) {
  const panel = productPanels.find((item) => item.id === id)!;
  const visual = panel.image ? (
    <PhotoFrame src={panel.image} alt={panel.imageAlt ?? ""} />
  ) : id === "phone" ? (
    <PhoneLineMock />
  ) : id === "console" ? (
    <ConsoleMock />
  ) : (
    <SessionMock
      human
      elapsed="03:41"
      lines={[
        {
          speaker: "Visitor",
          language: "Spanish (US)",
          time: "03:28",
          original: "Quiero entender bien lo que dice el formulario antes de firmar.",
          translation: "I want to understand exactly what the form says before I sign.",
        },
        {
          speaker: "Front desk",
          language: "English (US)",
          time: "03:41",
          original: "Of course. I am bringing in an interpreter to go through it with you.",
          translation: "Por supuesto. Voy a traer a un intérprete para revisarlo con usted.",
          source: "human",
        },
      ]}
    />
  );

  return (
    <section className="product-panel" id={`panel-${id}`} role="tabpanel">
      <Container className={`split-grid split-grid--center ${id === "phone" ? "product-panel--reverse" : ""}`} data-reveal>
        <div className="product-panel__visual">{visual}</div>
        <div className="product-panel__copy">
          <Badge tone={panel.badgeTone ?? "brand"}>{panel.badge}</Badge>
          <h2>{panel.title}</h2>
          <p>{panel.copy}</p>
          <CheckList items={panel.features} />
          {id === "clinical" || id === "frontline" || id === "phone" ? (
            <ButtonLink href="/contact">Request a demo</ButtonLink>
          ) : null}
        </div>
      </Container>
    </section>
  );
}
