import Image from "next/image";
import Link from "next/link";
import { ArrowRight, AudioLines, PhoneCall } from "lucide-react";
import { deliveryMethods } from "@/lib/content";

export function AccessMethods({
  variant = "compact",
}: {
  variant?: "compact" | "detailed";
}) {
  const detailed = variant === "detailed";

  return (
    <div className={`access-grid access-grid--${variant}`}>
      {deliveryMethods.map((method) => (
        <article
          className={`access-card access-card--${method.slug}`}
          id={detailed ? method.slug : undefined}
          key={method.slug}
        >
          {method.image ? (
            <div className="access-card__media">
              <Image
                src={method.image}
                alt={method.imageAlt ?? ""}
                fill
                loading={
                  detailed && method.slug === "clinical-kit"
                    ? "eager"
                    : undefined
                }
                sizes="(max-width: 700px) 100vw, (max-width: 1040px) 50vw, 33vw"
              />
            </div>
          ) : (
            <PhoneLineVisual />
          )}
          <div className="access-card__body">
            <p className="access-card__label">{method.label}</p>
            <h3>{method.name}</h3>
            {method.headline ? (
              <p className="access-card__headline">{method.headline}</p>
            ) : null}
            <p className="access-card__audience">{method.audience}</p>
            <p>{method.description}</p>
            {detailed ? (
              <ul className="access-card__list">
                {method.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
            ) : (
              <Link className="access-card__link" href={`/product#${method.slug}`}>
                Explore this option <ArrowRight aria-hidden="true" />
              </Link>
            )}
          </div>
        </article>
      ))}
    </div>
  );
}

function PhoneLineVisual() {
  return (
    <div className="access-card__media access-card__media--phone" aria-hidden="true">
      <div className="phone-line-visual">
        <div className="phone-line-visual__node">
          <span className="phone-line-visual__icon">
            <PhoneCall />
          </span>
          <span>Caller</span>
        </div>
        <div className="phone-line-visual__node">
          <span className="phone-line-visual__icon">
            <PhoneCall />
          </span>
          <span>Your team</span>
        </div>
        <span className="phone-line-visual__badge">
          <AudioLines />
        </span>
        <span className="phone-line-visual__caption">
          <strong>Phontus interprets</strong>
          <small>Spanish ↔ English</small>
        </span>
      </div>
    </div>
  );
}
