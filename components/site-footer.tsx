import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { footerColumns, siteConfig } from "@/lib/config";
import { Container } from "@/components/ui";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <Container>
        <div className="site-footer__main">
          <div className="site-footer__brand">
            <Link href="/" aria-label="Phontus home">
              <Image
                src="/brand/phontus-logo.svg"
                width={160}
                height={22}
                alt="Phontus"
              />
            </Link>
            <p>
              AI-assisted Spanish–English interpretation through purpose-built
              kits and the Phontus Phone Line for frontline teams.
            </p>
            <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
          </div>
          <div className="site-footer__links">
            {footerColumns.map((column) => (
              <div key={column.title}>
                <h2>{column.title}</h2>
                {column.links.map((link) => (
                  <Link href={link.href} key={link.href}>
                    {link.label}
                  </Link>
                ))}
              </div>
            ))}
            <div>
              <h2>Start a conversation</h2>
              <Link className="footer-demo-link" href="/contact">
                Request a Demo <ArrowUpRight aria-hidden="true" size={16} />
              </Link>
            </div>
          </div>
        </div>
        <div className="site-footer__bottom">
          <p>© {new Date().getFullYear()} Phontus, Inc. All rights reserved.</p>
          <div>
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/terms">Terms of Service</Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
