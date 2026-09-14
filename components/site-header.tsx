"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { siteConfig } from "@/lib/config";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const dialog = useRef<HTMLDivElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  const close = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    if (!open) return;
    const opener = trigger.current;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const background = Array.from(
      document.querySelectorAll<HTMLElement>(
        "main, body > footer, body > .final-cta",
      ),
    );
    background.forEach((el) => {
      el.inert = true;
    });
    close.current?.focus();
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        return;
      }
      if (event.key !== "Tab") return;
      const focusable = dialog.current?.querySelectorAll<HTMLElement>(
        "a[href],button:not([disabled])",
      );
      if (!focusable?.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };
    const desktop = window.matchMedia("(min-width: 1101px)");
    const onResize = () => {
      if (desktop.matches) setOpen(false);
    };
    desktop.addEventListener("change", onResize);
    document.addEventListener("keydown", handleKey);
    return () => {
      document.body.style.overflow = originalOverflow;
      background.forEach((el) => {
        el.inert = false;
      });
      document.removeEventListener("keydown", handleKey);
      desktop.removeEventListener("change", onResize);
      opener?.focus();
    };
  }, [open]);
  return (
    <>
      <header className="site-header">
        <div className="container site-header__inner">
          <Link href="/" className="brand-link" aria-label="Phontus home">
            <Image
              src="/brand/phontus-logo.svg"
              width={177}
              height={24}
              alt="Phontus"
              priority
            />
          </Link>
          <nav className="desktop-nav" aria-label="Primary navigation">
            {siteConfig.nav.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                aria-current={pathname === item.href ? "page" : undefined}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <Link href="/contact" className="button button--primary header-cta">
            Request a demo <ArrowUpRight aria-hidden="true" size={17} />
          </Link>
          <button
            ref={trigger}
            type="button"
            className="menu-button"
            aria-expanded={open}
            aria-controls="mobile-navigation"
            aria-label="Open navigation"
            onClick={() => setOpen(true)}
          >
            <Menu aria-hidden="true" />
          </button>
        </div>
      </header>
      {open && (
        <div
          ref={dialog}
          className="mobile-nav"
          id="mobile-navigation"
          role="dialog"
          aria-modal="true"
          aria-label="Navigation"
        >
          <div className="mobile-nav__head">
            <Image
              src="/brand/phontus-logo.svg"
              width={177}
              height={24}
              alt="Phontus"
            />
            <button
              ref={close}
              type="button"
              className="menu-button"
              aria-label="Close navigation"
              onClick={() => setOpen(false)}
            >
              <X aria-hidden="true" />
            </button>
          </div>
          <nav aria-label="Mobile navigation">
            {siteConfig.nav.map((item, index) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
              >
                <span className="index-number">0{index + 1}</span>
                {item.label}
                <ArrowUpRight aria-hidden="true" />
              </Link>
            ))}
          </nav>
          <Link
            className="button button--primary"
            href="/contact"
            onClick={() => setOpen(false)}
          >
            Request a demo <ArrowUpRight aria-hidden="true" />
          </Link>
          <p>Interpretation for the physical world.</p>
        </div>
      )}
    </>
  );
}
