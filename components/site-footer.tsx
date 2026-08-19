import Image from "next/image";
import Link from "next/link";
import { footerColumns, siteConfig } from "@/lib/config";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container site-footer__grid">
        <div className="site-footer__brand">
          <Image src="/brand/phontus-logo.svg" width={162} height={22} alt="Phontus" />
          <p>{siteConfig.description}</p>
          <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
        </div>
        {footerColumns.map((column) => (
          <nav key={column.title} aria-label={`${column.title} links`}>
            <strong>{column.title}</strong>
            {column.links.map((link) => (
              <Link href={link.href} key={link.href}>{link.label}</Link>
            ))}
          </nav>
        ))}
      </div>
      <div className="site-footer__bottom">
        <div className="container">
          <span>© 2026 Phontus, Inc.</span>
          <span>Spanish ⇄ English at launch</span>
        </div>
      </div>
    </footer>
  );
}
