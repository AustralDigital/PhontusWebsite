"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { siteConfig } from "@/lib/config";
import { ButtonLink } from "@/components/ui";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const panelRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const previousFocus = document.activeElement as HTMLElement | null;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
      if (event.key !== "Tab" || !panelRef.current) return;

      const focusable = panelRef.current.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
      );
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last?.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first?.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKeyDown);
      previousFocus?.focus();
    };
  }, [open]);

  return (
    <header className={`site-header ${scrolled ? "site-header--scrolled" : ""}`}>
      <div className="container site-header__inner">
        <Link className="brand-link" href="/" aria-label="Phontus home">
          <Image
            src="/brand/phontus-logo.svg"
            width={177}
            height={24}
            alt="Phontus"
            priority
            fetchPriority="high"
          />
        </Link>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {siteConfig.nav.map((item) => {
            const active =
              pathname === item.href || pathname.startsWith(`${item.href}/`);
            return (
              <Link
                aria-current={active ? "page" : undefined}
                className={active ? "is-active" : ""}
                href={item.href}
                key={item.href}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
        <div className="site-header__actions">
          <ButtonLink href="/contact" className="desktop-cta">
            Request a Demo
          </ButtonLink>
          <button
            className="menu-button"
            type="button"
            aria-label="Open navigation menu"
            aria-expanded={open}
            aria-controls="mobile-navigation"
            onClick={() => setOpen(true)}
          >
            <Menu aria-hidden="true" />
          </button>
        </div>
      </div>

      <div
        className={`mobile-nav ${open ? "mobile-nav--open" : ""}`}
        aria-hidden={!open}
      >
        <button
          className="mobile-nav__scrim"
          type="button"
          aria-label="Close navigation menu"
          tabIndex={open ? 0 : -1}
          onClick={() => setOpen(false)}
        />
        <div
          className="mobile-nav__panel"
          id="mobile-navigation"
          ref={panelRef}
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
        >
          <div className="mobile-nav__top">
            <Image
              src="/brand/phontus-logo.svg"
              width={156}
              height={21}
              alt="Phontus"
            />
            <button
              ref={closeRef}
              className="menu-button"
              type="button"
              aria-label="Close navigation menu"
              onClick={() => setOpen(false)}
            >
              <X aria-hidden="true" />
            </button>
          </div>
          <nav aria-label="Mobile navigation">
            {siteConfig.nav.map((item, index) => {
              const active =
                pathname === item.href || pathname.startsWith(`${item.href}/`);
              return (
                <Link
                  aria-current={active ? "page" : undefined}
                  className={active ? "is-active" : ""}
                  href={item.href}
                  key={item.href}
                  tabIndex={open ? 0 : -1}
                  onClick={() => setOpen(false)}
                >
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  {item.label}
                </Link>
              );
            })}
          </nav>
          <ButtonLink
            href="/contact"
            className="mobile-nav__cta"
            onClick={() => setOpen(false)}
          >
            Request a Demo
          </ButtonLink>
          <p>
            Spanish ↔ English interpretation through purpose-built kits and
            the Phontus Phone Line.
          </p>
        </div>
      </div>
    </header>
  );
}
