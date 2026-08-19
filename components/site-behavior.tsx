"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export function SiteBehavior() {
  const pathname = usePathname();

  useEffect(() => {
    const root = document.documentElement;
    root.dataset.revealReady = "true";
    const items = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).classList.add("is-revealed");
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -6% 0px", threshold: 0.05 },
    );
    items.forEach((item, index) => {
      item.style.setProperty("--reveal-delay", `${Math.min(index % 5, 4) * 70}ms`);
      observer.observe(item);
    });
    return () => {
      observer.disconnect();
      delete root.dataset.revealReady;
    };
  }, [pathname]);

  return null;
}
