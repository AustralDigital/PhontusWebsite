"use client";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

export function SiteBehavior() {
  const pathname = usePathname();
  const previousPath = useRef(pathname);
  useEffect(() => {
    const pressDuration = 90;
    let press: { button: HTMLElement; pointer: number; start: number } | null = null;
    let releaseTimer: number | undefined;

    const reset = () => {
      window.clearTimeout(releaseTimer);
      press?.button.removeAttribute("data-button-pressed");
      press = null;
    };
    const startPress = (event: PointerEvent) => {
      if (event.pointerType === "mouse" || !event.isPrimary || !(event.target instanceof Element)) return;
      const button = event.target.closest<HTMLElement>(".button:not(:disabled)");
      if (!button?.querySelector(".rolling-label")) return;
      reset();
      button.setAttribute("data-button-pressed", "");
      press = { button, pointer: event.pointerId, start: performance.now() };
    };
    const endPress = (event: PointerEvent) => {
      if (press?.pointer !== event.pointerId) return;
      if (event.type === "pointercancel") {
        reset();
        return;
      }
      releaseTimer = window.setTimeout(reset, Math.max(0, pressDuration - (performance.now() - press.start)));
    };

    window.addEventListener("pointerdown", startPress, true);
    window.addEventListener("pointerup", endPress, true);
    window.addEventListener("pointercancel", endPress, true);
    window.addEventListener("blur", reset);
    return () => {
      reset();
      window.removeEventListener("pointerdown", startPress, true);
      window.removeEventListener("pointerup", endPress, true);
      window.removeEventListener("pointercancel", endPress, true);
      window.removeEventListener("blur", reset);
    };
  }, []);

  useEffect(() => {
    const navigated = previousPath.current !== pathname;
    previousPath.current = pathname;
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!navigated || pathname === "/" || media.matches) return;
    const animation = document.getElementById("main-content")?.animate?.(
      [{ opacity: 0.65 }, { opacity: 1 }],
      { duration: 160, easing: "ease-out" },
    );
    if (!animation) return;
    const settle = () => { if (media.matches) animation.cancel(); };
    media.addEventListener("change", settle);
    return () => {
      media.removeEventListener("change", settle);
      animation.cancel();
    };
  }, [pathname]);

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
