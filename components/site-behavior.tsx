"use client";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

export function SiteBehavior() {
  const pathname = usePathname();
  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (media.matches || !("IntersectionObserver" in window)) return;
    const items = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal]"),
    );
    // Only animate below-fold content. The default and no-JS states stay visible.
    items.forEach((item) => {
      if (item.getBoundingClientRect().top > window.innerHeight)
        item.classList.add("reveal-pending");
    });
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove("reveal-pending");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.03 },
    );
    items.forEach((item) => observer.observe(item));
    const revealAll = () => {
      if (media.matches)
        items.forEach((item) => item.classList.remove("reveal-pending"));
    };
    media.addEventListener("change", revealAll);
    return () => {
      observer.disconnect();
      media.removeEventListener("change", revealAll);
      items.forEach((item) => item.classList.remove("reveal-pending"));
    };
  }, [pathname]);
  return null;
}
