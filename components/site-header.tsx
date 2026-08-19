"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { ButtonLink } from "@/components/ui";
import { productLinks, siteConfig, solutionLinks } from "@/lib/config";

type MenuName = "product" | "solutions" | null;

export function SiteHeader() {
  const pathname = usePathname();
  const [menu, setMenu] = useState<MenuName>(null);
  const [navOpen, setNavOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const closeButton = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const update = () => {
      setScrolled(window.scrollY > 40);
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? Math.min(100, (window.scrollY / max) * 100) : 0);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  useEffect(() => {
    if (!navOpen) return;
    const previous = document.activeElement as HTMLElement | null;
    document.body.style.overflow = "hidden";
    closeButton.current?.focus();
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setNavOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKeyDown);
      previous?.focus();
    };
  }, [navOpen]);

  const active = (href: string) =>
    pathname === href || (href !== "/" && pathname.startsWith(`${href}/`));
  const closeAll = () => {
    setMenu(null);
    setNavOpen(false);
  };

  return (
    <>
      <header
        className={`site-header ${scrolled && !navOpen ? "site-header--compact" : ""}`}
        onMouseLeave={() => setMenu(null)}
      >
        <span className="site-header__progress" style={{ width: `${progress}%` }} />
        <div className="container site-header__inner">
          <Link className="brand-link" href="/" aria-label="Phontus home" onClick={closeAll}>
            <Image src="/brand/phontus-logo.svg" width={177} height={24} alt="Phontus" priority />
          </Link>

          <nav className="desktop-nav" aria-label="Primary navigation">
            {siteConfig.nav.map((item) => {
              const menuName: MenuName =
                item.href === "/product"
                  ? "product"
                  : item.href === "/solutions"
                    ? "solutions"
                    : null;
              return (
                <span className="desktop-nav__item" key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active(item.href) ? "page" : undefined}
                    className={active(item.href) ? "is-active" : ""}
                    onMouseEnter={() => setMenu(menuName)}
                    onFocus={() => setMenu(menuName)}
                  >
                    {item.label}
                  </Link>
                </span>
              );
            })}
          </nav>

          <div className="site-header__actions">
            <Link className="header-contact" href="/contact">Contact</Link>
            <ButtonLink className="header-cta" href="/contact">Request a demo</ButtonLink>
            <button
              className="menu-button"
              type="button"
              aria-label={navOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={navOpen}
              aria-controls="mobile-navigation"
              onClick={() => setNavOpen((value) => !value)}
            >
              {navOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
            </button>
          </div>
        </div>

        {menu ? (
          <div className="mega-menu" aria-label={`${menu} menu`}>
            <div className="container mega-menu__outer">
              <div className={`mega-menu__grid mega-menu__grid--${menu}`}>
                {(menu === "product" ? productLinks : solutionLinks).map((item) => (
                  <Link href={item.href} key={item.href} onClick={closeAll}>
                    <strong>{item.label}</strong>
                    <span>{item.copy}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        ) : null}
      </header>

      {navOpen ? (
        <div className="mobile-nav" id="mobile-navigation" role="dialog" aria-modal="true">
          <div className="mobile-nav__inner">
            <button ref={closeButton} className="sr-only" type="button" onClick={() => setNavOpen(false)}>
              Close menu
            </button>
            <nav className="mobile-nav__primary" aria-label="Mobile navigation">
              {[
                { label: "Home", href: "/" },
                { label: "How it works", href: "/how-it-works" },
                { label: "Security", href: "/security" },
                { label: "About", href: "/about" },
                { label: "Contact", href: "/contact" },
              ].map((item) => (
                <Link href={item.href} key={item.href} onClick={closeAll}>{item.label}</Link>
              ))}
            </nav>
            <div className="mobile-nav__group">
              <span>Product</span>
              {productLinks.map((item) => (
                <Link href={item.href} key={item.href} onClick={closeAll}>{item.label}</Link>
              ))}
            </div>
            <div className="mobile-nav__group">
              <span>Solutions</span>
              {solutionLinks.map((item) => (
                <Link href={item.href} key={item.href} onClick={closeAll}>{item.label}</Link>
              ))}
            </div>
            <ButtonLink href="/contact" className="mobile-nav__cta" onClick={closeAll}>
              Request a demo
            </ButtonLink>
          </div>
        </div>
      ) : null}
    </>
  );
}
