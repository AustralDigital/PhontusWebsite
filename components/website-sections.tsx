import Link from "next/link";
import type { ReactNode } from "react";
import {
  ArrowRight, ArrowUpRight, Building2, Globe2, GraduationCap, Headphones, HeartPulse,
  History, LockKeyhole, Monitor, Phone, Users, Warehouse,
} from "lucide-react";
import { ButtonLink, Container, Eyebrow } from "@/components/ui";
import { productLinks, solutionLinks } from "@/lib/config";
import { handoffSteps, platformPoints, productDetails } from "@/lib/website-copy";

export const languageAvailability = "English and Spanish available";

const productIcons = [HeartPulse, Monitor, Phone];
const industryIcons = [HeartPulse, GraduationCap, Warehouse, Building2];
const adminIcons = [Monitor, Users, History, LockKeyhole];

export function WebsiteHero({ label, title, copy, children, side, availability = false, home = false }: {
  label: string;
  title: string;
  copy: string;
  children?: ReactNode;
  side?: ReactNode;
  availability?: boolean;
  home?: boolean;
}) {
  return (
    <section className={`website-hero${home ? " website-hero--home" : ""}`}>
      <Container className={side ? "website-split website-split--center" : ""}>
        <div className="website-hero__copy">
          <Eyebrow>{label}</Eyebrow>
          <h1>{title}</h1>
          <p>{copy}</p>
          {children ? <div className="website-actions">{children}</div> : null}
          {availability ? <small className="website-availability"><Globe2 size={15} aria-hidden="true" />{languageAvailability}</small> : null}
        </div>
        {side}
      </Container>
    </section>
  );
}

export function WebsiteIntro({ label, title, copy, children }: {
  label?: string;
  title: string;
  copy?: string;
  children?: ReactNode;
}) {
  return (
    <div className="website-intro">
      {label ? <Eyebrow>{label}</Eyebrow> : null}
      <h2>{title}</h2>
      {copy ? <p>{copy}</p> : null}
      {children}
    </div>
  );
}

export function WebsiteLink({ href, children }: { href: string; children: ReactNode }) {
  return <Link className="text-link website-link" href={href}><span>{children}</span><ArrowRight size={17} aria-hidden="true" /></Link>;
}

export function PhotoSpace({ size, desktopOnly = false }: {
  size: "home" | "about" | "clinical" | "kit" | "industry" | "card";
  desktopOnly?: boolean;
}) {
  return <div className={desktopOnly ? "website-photo-space website-photo-space--desktop" : "website-photo-space"} data-photo-slot={size} aria-hidden="true" />;
}

export function WebsitePhotoBand({ size }: { size: "home" | "about" }) {
  return (
    <div className="website-section website-photo-band">
      <Container>
        <PhotoSpace size={size} />
        {size === "home" ? <WebsiteLink href="/products/interpreting-kit">Explore the kit</WebsiteLink> : null}
      </Container>
    </div>
  );
}

export function IndustryShortcuts() {
  return (
    <div className="website-section website-industry-shortcuts">
      <Container>
        <nav aria-label="Explore by industry">
          <span>Explore by industry</span>
          {solutionLinks.map(({ href, label }, index) => {
            const Icon = industryIcons[index];
            return <Link href={href} key={href}><Icon aria-hidden="true" size={18} />{label}</Link>;
          })}
        </nav>
      </Container>
    </div>
  );
}

export function Directory({ variant, intro = false, exclude }: {
  variant: "products" | "industries";
  intro?: boolean;
  exclude?: string;
}) {
  const products = variant === "products";
  const links = products ? productLinks : solutionLinks;
  const icons = products ? productIcons : industryIcons;
  return (
    <section className="website-section website-section--canvas" aria-label={products ? "Phontus products" : "Industries"}>
      <Container>
        {intro ? <WebsiteIntro
          label={products ? "Products" : "Industries"}
          title={products ? "At the counter, in the room, or on the phone" : "Language access by industry"}
          copy={products ? "Choose a setup for the way people already reach your team. Manage both kits and the Phone Line in one place." : "Explore how clinics, schools, businesses, and hotels can use Phontus in their day-to-day work."}
        /> : null}
        {exclude ? <WebsiteIntro title="Explore other Phontus products" /> : null}
        <div className={`website-directory${products && !exclude ? " website-directory--three" : ""}`}>
          {links.map((item, index) => {
            if (item.href === exclude) return null;
            const Icon = icons[index];
            const showPhotoSpace = !exclude && item.href !== "/products/phone-line";
            return (
              <Link href={item.href} className="website-directory__card website-directory__card--directory" key={item.href}>
                {showPhotoSpace ? <PhotoSpace size="card" desktopOnly={!products && intro} /> : null}
                {!showPhotoSpace && !exclude ? (
                  <div className="website-directory__phone">
                    <Phone size={24} aria-hidden="true" />
                    <span>Spanish and English</span>
                  </div>
                ) : null}
                <div className="website-directory__body">
                  <span className="website-directory__icon"><Icon size={22} aria-hidden="true" /></span>
                  <span className="website-directory__arrow"><ArrowUpRight size={17} aria-hidden="true" /></span>
                  {intro || exclude ? <h3>{item.label}</h3> : <h2>{item.label}</h2>}
                  <p>{item.copy}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

export function DetailRows({ title, label, copy, items, dark = false, count = false, id, children }: {
  title: string;
  label?: string;
  copy?: string;
  items: readonly (readonly [string, string])[];
  dark?: boolean;
  count?: boolean;
  id?: string;
  children?: ReactNode;
}) {
  return (
    <section className={`website-section ${dark ? "website-section--dark" : "website-section--canvas"}`} id={id}>
      <Container className="website-split website-split--rows">
        <WebsiteIntro title={title} label={label} copy={copy}>{children}</WebsiteIntro>
        <ol className="website-rows">
          {items.map(([heading, description], index) => (
            <li key={heading}>
              {count ? <span className="website-rows__number" aria-hidden="true">{index + 1}</span> : null}
              <div><h3>{heading}</h3><p>{description}</p></div>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}

export function HumanHandoff() {
  return (
    <DetailRows id="interpretation" label="Human interpretation" title="When to request a human interpreter"
      copy="Staff can request a human interpreter based on the needs of the conversation and their organization’s policies."
      items={handoffSteps} dark count>
      <WebsiteLink href="/contact">Discuss human support</WebsiteLink>
    </DetailRows>
  );
}

export function AdminPreview() {
  return (
    <aside className="website-console" aria-label="Phontus admin console preview">
      <div className="website-console__panel">
        <div className="website-console__head"><strong>Phontus admin console</strong><small>Overview</small></div>
        <ul>
          {platformPoints.map(([title], index) => {
            const Icon = adminIcons[index];
            return <li key={title}><Icon size={21} aria-hidden="true" />{title}</li>;
          })}
        </ul>
      </div>
      <p>Manage kit sessions and phone calls across your sites.</p>
    </aside>
  );
}

export function PlatformSummary() {
  return (
    <section className="website-section">
      <Container className="website-split website-split--center">
        <WebsiteIntro label="Platform" title="One console for all your locations" copy="Manage sites, staff, and devices in one console. Review kit sessions and calls in the same history and set transcript retention by site.">
          <WebsiteLink href="/platform">Explore the platform</WebsiteLink>
        </WebsiteIntro>
        <AdminPreview />
      </Container>
    </section>
  );
}

export function WebsiteCTA({ title = "See Phontus in action", copy = "Bring a conversation your team handles every day. We’ll show you how it could work with Phontus.", label = "Request a demo" }: {
  title?: string;
  copy?: string;
  label?: string;
}) {
  return (
    <section className="website-section website-section--tint website-cta">
      <Container className="website-cta__inner">
        <WebsiteIntro title={title} copy={copy} />
        <ButtonLink href="/contact">{label}</ButtonLink>
      </Container>
    </section>
  );
}

export function PhonePreview() {
  return (
    <aside className="website-console" aria-label="Illustrative Phontus Phone Line call">
      <div className="website-console__panel">
        <div className="website-console__head"><strong>Phontus Phone Line</strong><small>Example call</small></div>
        <ul>
          <li><Phone size={20} aria-hidden="true" />Caller speaks Spanish</li>
          <li><Users size={20} aria-hidden="true" />Staff hear English</li>
          <li><Headphones size={20} aria-hidden="true" />Human interpreter available on request</li>
        </ul>
      </div>
      <p>{productDetails["phone-line"].short}</p>
    </aside>
  );
}
