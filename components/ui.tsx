import Image, { getImageProps } from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import type { HTMLAttributes, MouseEventHandler, ReactNode } from "react";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "accent" | "inverse";
  className?: string;
  arrow?: boolean;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className = "",
  arrow = true,
  onClick,
}: ButtonLinkProps) {
  return (
    <Link
      className={`button button--${variant} ${className}`}
      href={href}
      onClick={onClick}
    >
      <span>{children}</span>
      {arrow ? (
        <ArrowRight aria-hidden="true" size={17} strokeWidth={1.75} />
      ) : null}
    </Link>
  );
}

export function Container({
  children,
  className = "",
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={`container ${className}`} {...props}>
      {children}
    </div>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <div className="eyebrow">
      <span aria-hidden="true" />
      <span>{children}</span>
    </div>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  copy,
  className = "",
}: {
  eyebrow: string;
  title: string;
  copy?: string;
  className?: string;
}) {
  return (
    <div className={`section-heading ${className}`} data-reveal>
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2>{title}</h2>
      {copy ? <p>{copy}</p> : null}
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  copy,
  children,
}: {
  eyebrow: string;
  title: string;
  copy: string;
  children?: ReactNode;
}) {
  return (
    <section className="page-hero">
      <Container className="page-hero__inner" data-reveal>
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1>{title}</h1>
        <p>{copy}</p>
        {children}
      </Container>
    </section>
  );
}

export function Tag({
  children,
  icon,
}: {
  children: ReactNode;
  icon?: ReactNode;
}) {
  return (
    <span className="tag">
      {icon}
      {children}
    </span>
  );
}

export function Badge({
  children,
  tone = "brand",
}: {
  children: ReactNode;
  tone?: "brand" | "neutral" | "live" | "human";
}) {
  return <span className={`badge badge--${tone}`}>{children}</span>;
}

export function CheckList({ items }: { items: string[] }) {
  return (
    <ul className="check-list">
      {items.map((item) => (
        <li key={item}>
          <Check aria-hidden="true" size={18} strokeWidth={1.75} />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function PhotoFrame({
  src,
  alt,
  className = "",
  priority = false,
  sizes = "(max-width: 960px) 100vw, 50vw",
  position,
  mobileSrc,
}: {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  sizes?: string;
  position?: string;
  mobileSrc?: string;
}) {
  if (mobileSrc) {
    const common = { alt, fill: true, sizes, style: { objectPosition: position }, loading: priority ? "eager" as const : "lazy" as const, fetchPriority: priority ? "high" as const : "auto" as const };
    const { props: desktop } = getImageProps({ ...common, src });
    const { props: mobile } = getImageProps({ ...common, src: mobileSrc, sizes: "(max-width: 760px) 100vw, 50vw" });
    return (
      <div className={`photo-frame photo-frame--responsive ${className}`}>
        <picture>
          <source media="(max-width: 760px)" srcSet={mobile.srcSet} sizes={mobile.sizes} />
          {/* getImageProps supplies Next-optimized sources for both compositions. */}
          <img {...desktop} alt={alt} />
        </picture>
      </div>
    );
  }
  return (
    <div className={`photo-frame ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes}
        style={{ objectPosition: position }}
      />
    </div>
  );
}
