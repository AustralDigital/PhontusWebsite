import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

const routes = ["/", "/product", "/platform", "/products/interpreting-kit", "/products/clinical-kit", "/products/phone-line", "/solutions", "/solutions/healthcare", "/solutions/education", "/solutions/hospitality", "/solutions/business-operations", "/how-it-works", "/about", "/contact", "/security", "/privacy", "/terms", "/accessibility"];
const widths = [375, 390, 430, 768, 1024, 1280, 1440, 1920];

for (const route of routes) {
  test(`responsive, accessible and crawlable: ${route}`, async ({ page }, testInfo) => {
    const errors: string[] = [];
    page.on("pageerror", (error) => errors.push(error.message));
    page.on("console", (message) => { if (message.type() === "error") errors.push(message.text()); });
    const response = await page.goto(route);
    expect(response?.status()).toBe(200);
    await page.evaluate(() => document.fonts.ready);
    await expect(page.locator("h1")).toHaveCount(1);
    await expect(page).toHaveTitle(/Phontus/);
    await expect(page.locator('meta[name="description"]')).toHaveAttribute("content", /.+/);
    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute("href", `https://phontus.live${route === "/" ? "" : route}`);
    await expect(page.locator('meta[property="og:url"]')).toHaveAttribute("content", `https://phontus.live${route === "/" ? "" : route}`);
    await expect(page.locator('meta[property="og:title"]')).toHaveAttribute("content", /.+/);
    await expect(page.locator('meta[property="og:image"], meta[name="twitter:image"], picture, video')).toHaveCount(0);
    expect(await page.locator("img").evaluateAll(images => images.map(image => image.getAttribute("src")).filter(src => !src?.startsWith("/brand/")))).toEqual([]);
    for (const width of widths) {
      await page.setViewportSize({ width, height: 1000 });
      await page.evaluate(() => window.scrollTo(0, 0));
      expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth), `${route} overflows at ${width}px`).toBe(true);
      // Scroll the entire page to exercise lazy image loading and lower-page content.
      await page.evaluate(async () => {
        for (let y = 0; y < document.body.scrollHeight; y += 800) { window.scrollTo(0, y); await new Promise((resolve) => setTimeout(resolve, 15)); }
      });
      await page.waitForFunction(() => Array.from(document.images).every((img) => img.complete), undefined, { timeout: 15_000 });
      expect(await page.locator('img').evaluateAll((images) => images.filter((image) => (image as HTMLImageElement).naturalWidth === 0).map((image) => (image as HTMLImageElement).src))).toEqual([]);
      expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth), `${route} lower content overflows at ${width}px`).toBe(true);
      if (width === 390 || width === 1440) {
        await page.evaluate(() => window.scrollTo(0, 0));
        await page.screenshot({ path: testInfo.outputPath(`${width}.jpg`), fullPage: true });
      }
    }
    await page.setViewportSize({ width: 1440, height: 1000 });
    await page.evaluate(() => window.scrollTo(0, 0));
    const accessibility = await new AxeBuilder({ page }).withTags(["wcag2a", "wcag2aa", "wcag21aa", "best-practice"]).analyze();
    expect(accessibility.violations.map((item) => ({ id: item.id, nodes: item.nodes.map((node) => node.target) }))).toEqual([]);
    expect(errors).toEqual([]);
  });
}

test("all internal links and fragment destinations resolve", async ({ page, request }) => {
  const destinations = new Set<string>();
  const ids = new Map<string, string[]>();
  for (const route of routes) {
    await page.goto(route);
    ids.set(route, await page.locator("[id]").evaluateAll((elements) => elements.map((el) => el.id)));
    for (const href of await page.locator('a[href]').evaluateAll((links) => links.map((link) => link.getAttribute("href")!))) {
      if (href.startsWith("/") || href.startsWith("#")) destinations.add(new URL(href, `http://127.0.0.1:3001${route}`).pathname + new URL(href, `http://127.0.0.1:3001${route}`).hash);
    }
  }
  for (const destination of destinations) {
    const url = new URL(destination, "http://127.0.0.1:3001");
    if (!ids.has(url.pathname)) expect((await request.get(destination)).status(), destination).toBeLessThan(400);
    if (url.hash) expect(ids.get(url.pathname), destination).toContain(decodeURIComponent(url.hash.slice(1)));
  }
  const sitemap = await (await request.get("/sitemap.xml")).text();
  for (const route of routes) expect(sitemap).toContain(`https://phontus.live${route === "/" ? "" : route}`);
});

test("legacy product links redirect and product navigation supports browser history", async ({ page, request }) => {
  for (const [tab, target] of Object.entries({ frontline: "/products/interpreting-kit", clinical: "/products/clinical-kit", phone: "/products/phone-line", human: "/how-it-works#interpretation", console: "/platform" })) {
    const response = await request.get(`/product?tab=${tab}`, { maxRedirects: 0 });
    expect(response.status()).toBe(308);
    expect(response.headers().location).toBe(target);
  }
  await page.goto("/product?tab=clinical#details");
  await expect(page).toHaveURL(/\/products\/clinical-kit/);
  await page.getByRole("navigation", { name: "Explore the Phontus system" }).getByRole("link", { name: "Phone Line", exact: true }).click();
  await expect(page).toHaveURL(/\/products\/phone-line/);
  await expect(page.locator("h1")).toHaveText("Live interpretation on your business number");
  await page.goBack();
  await expect(page.locator("h1")).toHaveText("Live interpretation at the bedside");
  expect((await request.get("/products/unknown-kit")).status()).toBe(404);
  expect((await request.get("/solutions/unknown-industry")).status()).toBe(404);
});

test("conversation and FAQ work with keyboard controls", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("button", { name: "Play example" }).click();
  const active = page.locator('#conversation-example [aria-hidden="false"]');
  const next = page.getByRole("button", { name: "Next turn" });
  await next.focus();
  await page.keyboard.press("Enter");
  await expect(active.locator("blockquote")).toHaveAttribute("lang", "en");
  await expect(active).toContainText("Good morning");
  await next.click();
  await next.click();
  await expect(active).toContainText("Por supuesto");
  await page.getByRole("button", { name: "Replay example" }).click();
  await expect(active).toContainText("Buenos días");
  await expect(page.getByRole("button", { name: "Previous turn" })).toBeDisabled();
  await expect(page.getByText(/English and Spanish are available by default/)).toBeVisible();
  await expect(page.getByText(/Modern Standard Arabic.*Korean/)).toBeVisible();
  const faq = page.getByRole("button", { name: "Does the caller need an app or account?" });
  await faq.click();
  await expect(faq).toHaveAttribute("aria-expanded", "true");
  await expect(page.locator(`[id="${await faq.getAttribute("aria-controls")}"]`)).toBeVisible();
});

test("mobile navigation traps focus, restores it and closes after navigation", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");
  const opener = page.getByRole("button", { name: "Open navigation" });
  await expect(page.locator(".site-header").getByRole("link", { name: "Request a demo" })).toHaveCount(0);
  await opener.click();
  const dialog = page.getByRole("dialog", { name: "Navigation" });
  await expect(page.getByRole("button", { name: "Close navigation" })).toBeFocused();
  await page.keyboard.press("Shift+Tab");
  await expect(dialog.getByRole("link", { name: "Request a demo" })).toBeFocused();
  await page.keyboard.press("Tab");
  await expect(page.getByRole("button", { name: "Close navigation" })).toBeFocused();
  await page.keyboard.press("Escape");
  await expect(dialog).toHaveCount(0);
  await expect(opener).toBeFocused();
  await opener.click();
  await dialog.getByRole("link", { name: /Platform/ }).click();
  await expect(page).toHaveURL(/\/platform/);
  await expect(dialog).toHaveCount(0);
  expect(await page.locator("main").evaluate((el) => (el as HTMLElement).inert)).toBe(false);
});

test("demo form validates, submits, confirms and preserves input after failure", async ({ page, request }) => {
  const invalid = await request.post("/api/contact", { data: {} });
  expect(invalid.status()).toBe(400);
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/contact");
  await page.getByRole("link", { name: "Go to the demo form" }).click();
  await expect(page.locator("#demo-form-heading")).toBeInViewport();
  const form = page.locator("form");
  await form.getByRole("button", { name: "Request a demo" }).click();
  await expect(page.getByLabel("First name", { exact: true })).toBeFocused();
  await expect(page.getByLabel("First name", { exact: true })).toHaveAttribute("aria-invalid", "true");
  const fill = async () => {
    await page.getByLabel("First name", { exact: true }).fill("Ana");
    await page.getByLabel("Last name", { exact: true }).fill("Example");
    await page.getByLabel("Work email").fill("qa@example.org");
    await page.getByLabel("Organization", { exact: true }).fill("QA example organization");
    await page.getByLabel("Setting", { exact: true }).selectOption("Healthcare");
    await page.getByLabel("Where would your team use interpretation?").fill("An illustrative request for two reception desks.");
  };
  await fill();
  await page.route("**/api/contact", async (route) => {
    expect(route.request().postDataJSON().organization).toBe("QA example organization");
    await route.fulfill({ status: 200, contentType: "application/json", body: JSON.stringify({ ok: true }) });
  });
  await form.getByRole("button", { name: "Request a demo" }).click();
  await expect(page.locator(".form-status")).toContainText("schedule your demo");
  await expect(page.getByLabel("Work email")).toHaveValue("");
  await fill();
  await page.route("**/api/contact", (route) => route.fulfill({ status: 503, contentType: "application/json", body: JSON.stringify({ ok: false, message: "We couldn’t deliver your request just now." }) }));
  await form.getByRole("button", { name: "Request a demo" }).click();
  await expect(page.locator(".form-status")).toContainText("Please email us directly");
  await expect(page.getByLabel("Work email")).toHaveValue("qa@example.org");
  await page.route("**/api/contact", (route) => route.abort());
  await form.getByRole("button", { name: "Request a demo" }).click();
  await expect(page.locator(".form-status")).toContainText("Please email us directly");
});

test("core product content renders without JavaScript and reduced motion stays still", async ({ browser, page }) => {
  const context = await browser.newContext({ javaScriptEnabled: false, baseURL: "http://127.0.0.1:3001" });
  const staticPage = await context.newPage();
  await staticPage.goto("/products/phone-line");
  await expect(staticPage.locator("h1")).toHaveText("Live interpretation on your business number");
  await expect(staticPage.getByRole("navigation", { name: "Explore the Phontus system" })).toBeVisible();
  await context.close();
  await page.goto("/");
  expect(await page.locator(".reveal-pending").count()).toBe(0);
  expect(await page.locator("html").evaluate((el) => getComputedStyle(el).scrollBehavior)).toBe("auto");
});

test("product and industry cards are keyboard accessible and legacy photography is unavailable", async ({ page, request }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");
  const products = page.getByRole("region", { name: "Phontus products" });
  const clinical = products.getByRole("link", { name: /Clinical Kit/ });
  await clinical.focus();
  await page.keyboard.press("Enter");
  await expect(page).toHaveURL(/\/products\/clinical-kit/);
  await expect(page.getByRole("heading", { name: "Live interpretation at the bedside" })).toBeVisible();
  await page.goto("/solutions");
  await page.getByRole("region", { name: "Industries" }).getByRole("link", { name: /Schools/ }).click();
  await expect(page).toHaveURL(/\/solutions\/education/);
  expect((await request.get("/images/phontus-kits-og-v2.webp")).status()).toBe(404);
  expect((await request.get("/reference/reference_image.png")).status()).toBe(404);
});

test("empty photo spaces follow the desktop and mobile page layouts", async ({ page }) => {
  const slots = [
    { path: "/", desktop: ["home", ...Array(6).fill("card")], mobile: ["home", "card", "card"] },
    { path: "/about", desktop: ["about"], mobile: ["about"] },
    { path: "/product", desktop: ["card", "card"], mobile: ["card", "card"] },
    { path: "/products/clinical-kit", desktop: ["clinical"], mobile: ["clinical"] },
    { path: "/products/interpreting-kit", desktop: ["kit"], mobile: ["kit"] },
    { path: "/products/phone-line", desktop: [], mobile: [] },
    { path: "/solutions", desktop: Array(4).fill("card"), mobile: Array(4).fill("card") },
    ...["healthcare", "education", "business-operations", "hospitality"].map(slug => ({
      path: `/solutions/${slug}`, desktop: ["industry"], mobile: ["industry"],
    })),
  ];

  for (const { path, desktop, mobile } of slots) {
    await page.goto(path);
    for (const [width, expected] of [[1440, desktop], [390, mobile]] as const) {
      await page.setViewportSize({ width, height: 900 });
      const visible = page.locator("[data-photo-slot]:visible");
      const found = await visible.evaluateAll(nodes => nodes.map(node => ({
        slot: node.getAttribute("data-photo-slot"),
        hidden: node.getAttribute("aria-hidden"),
        empty: !node.hasChildNodes(),
        height: node.getBoundingClientRect().height,
      })));
      expect(found.map(node => node.slot), `${path} at ${width}px`).toEqual(expected);
      expect(found.every(node => node.hidden === "true" && node.empty && node.height >= 163)).toBe(true);
    }
  }
});

test("the prototype interactions animate with motion enabled and settle with reduced motion", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "no-preference" });
  await page.setViewportSize({ width: 1440, height: 960 });
  await page.goto("/");
  await expect(page.locator(".website-hero__copy")).toHaveCSS("animation-name", "website-home-enter");
  await expect(page.locator('[data-photo-slot="home"]')).toHaveCSS("animation-delay", "0.09s");

  const card = page.getByRole("region", { name: "Phontus products" }).getByRole("link", { name: /Clinical Kit/ });
  await card.hover();
  await expect(card).toHaveCSS("transform", "matrix(1, 0, 0, 1, 0, -4)");
  await expect(card.locator(".website-directory__arrow svg")).toHaveCSS("transform", "matrix(1, 0, 0, 1, 2, -2)");

  const kitLink = page.getByRole("link", { name: "Explore the kit", exact: true });
  await kitLink.hover();
  await expect(kitLink.locator("svg")).toHaveCSS("transform", "matrix(1, 0, 0, 1, 4, 0)");

  const play = page.getByRole("button", { name: "Play example" });
  await play.hover();
  const roll = play.locator(".rolling-label > span").first();
  await expect.poll(() => roll.evaluate(node => new DOMMatrix(getComputedStyle(node).transform).m42)).toBeLessThan(-1);
  await play.click();
  await page.getByRole("button", { name: "Next turn" }).click();
  const track = page.locator(".website-session__track");
  await expect(track).toHaveCSS("transition-duration", "0.26s");
  await expect.poll(() => track.evaluate(node =>
    Math.abs(new DOMMatrix(getComputedStyle(node).transform).m41 + node.getBoundingClientRect().width),
  )).toBeLessThan(1);

  await page.emulateMedia({ reducedMotion: "reduce" });
  await expect(track).toHaveCSS("transition-duration", "0s");
  await expect(page.locator(".website-hero__copy")).toHaveCSS("animation-name", "none");
  await card.hover();
  await expect(card).toHaveCSS("transform", "none");

  await page.emulateMedia({ reducedMotion: "no-preference" });
  await page.setViewportSize({ width: 390, height: 860 });
  await page.getByRole("button", { name: "Open navigation" }).click();
  const panel = page.locator(".mobile-nav__panel");
  await expect(panel).toHaveCSS("animation-name", "website-menu-open");
  const header = await page.locator(".mobile-nav__head").boundingBox();
  const menu = await panel.boundingBox();
  expect(header).not.toBeNull();
  expect(menu?.y).toBe((header?.y ?? 0) + (header?.height ?? 0));
  await page.keyboard.press("Escape");
  await expect(page.getByRole("button", { name: "Open navigation" })).toBeFocused();
});

test("primary and secondary calls to action roll their labels and show a distinct pressed state", async ({ page, browser, baseURL }) => {
  await page.emulateMedia({ reducedMotion: "no-preference" });
  await page.goto("/");
  const header = page.locator(".site-header").getByRole("link", { name: "Request a demo", exact: true });
  const hero = page.locator(".website-hero");
  const primary = hero.getByRole("link", { name: "Request a demo", exact: true });
  const secondary = hero.getByRole("link", { name: "How it works", exact: true });

  for (const action of [header, primary, secondary]) {
    const incoming = action.locator('.rolling-label > [aria-hidden="true"]');
    await expect(incoming).toHaveCSS("opacity", "0");
    await action.hover();
    await expect(incoming).toHaveCSS("opacity", "1");
    await expect(action.locator("svg")).toHaveCSS("transform", "matrix(1, 0, 0, 1, 3, 0)");
    await page.mouse.down();
    await expect(action.locator("svg")).toHaveCSS("transform", "matrix(1, 0, 0, 1, 1, 0)");
    await page.mouse.move(1, 1);
    await page.mouse.up();
    await expect(incoming).toHaveCSS("opacity", "0");
  }

  await primary.click();
  await expect(page).toHaveURL(/\/contact$/);
  const submit = page.locator("form").getByRole("button", { name: "Request a demo", exact: true });
  await submit.hover();
  await expect(submit.locator('.rolling-label > [aria-hidden="true"]')).toHaveCSS("opacity", "1");
  await page.emulateMedia({ reducedMotion: "reduce" });
  await expect(submit.locator(".rolling-label > :first-child")).toHaveCSS("opacity", "1");
  await expect(submit.locator("svg")).toHaveCSS("transform", "none");

  const touch = await browser.newContext({
    baseURL, viewport: { width: 390, height: 844 }, isMobile: true,
    hasTouch: true, reducedMotion: "no-preference",
  });
  try {
    const phone = await touch.newPage();
    await phone.goto("/");
    await phone.getByRole("button", { name: "Open navigation" }).tap();
    await phone.locator(".mobile-nav__panel").evaluate(node => Promise.all(node.getAnimations().map(animation => animation.finished)));
    const mobileDemo = phone.getByRole("dialog").getByRole("link", { name: "Request a demo", exact: true });
    const bounds = await mobileDemo.boundingBox();
    if (!bounds) throw new Error("The mobile menu’s demo button is missing.");
    const input = await touch.newCDPSession(phone);
    await input.send("Input.dispatchTouchEvent", {
      type: "touchStart", touchPoints: [{ x: bounds.x + bounds.width / 2, y: bounds.y + bounds.height / 2 }],
    });
    await expect(mobileDemo.locator('.rolling-label > [aria-hidden="true"]')).toHaveCSS("opacity", "1");
    await expect(mobileDemo.locator("svg")).toHaveCSS("transform", "matrix(1, 0, 0, 1, 1, 0)");
    await input.send("Input.dispatchTouchEvent", { type: "touchEnd", touchPoints: [] });
    await expect(phone).toHaveURL(/\/contact$/);
  } finally {
    await touch.close();
  }
});
