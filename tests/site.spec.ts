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
    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute("href", `https://www.phontus.live${route === "/" ? "" : route}`);
    await expect(page.locator('meta[property="og:url"]')).toHaveAttribute("content", `https://www.phontus.live${route === "/" ? "" : route}`);
    await expect(page.locator('meta[property="og:title"]')).toHaveAttribute("content", /.+/);
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
  for (const route of routes) expect(sitemap).toContain(`https://www.phontus.live${route === "/" ? "" : route}`);
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
  await expect(page.locator("h1")).toHaveText("Phontus Phone Line");
  await page.goBack();
  await expect(page.locator("h1")).toHaveText("Phontus Clinical Kit");
  expect((await request.get("/products/unknown-kit")).status()).toBe(404);
  expect((await request.get("/solutions/unknown-industry")).status()).toBe(404);
});

test("conversation, hardware views and FAQ work with keyboard controls", async ({ page }) => {
  await page.goto("/");
  const next = page.getByRole("button", { name: "Next conversation step" });
  await next.focus();
  await page.keyboard.press("Enter");
  await expect(page.locator("#conversation-example blockquote")).toHaveAttribute("lang", "en");
  await expect(page.locator("#conversation-example")).toContainText("Good morning");
  await next.click();
  await next.click();
  await expect(page.locator("#conversation-example")).toContainText("Por supuesto");
  await page.getByRole("button", { name: "Replay conversation" }).click();
  await expect(page.locator("#conversation-example")).toContainText("Buenos días");
  await page.getByRole("button", { name: "Previous conversation step" }).isDisabled().then((value) => expect(value).toBe(true));
  const hardware = page.locator("#hardware");
  await hardware.getByRole("button", { name: "In the exam room", exact: true }).focus();
  await page.keyboard.press("Space");
  await expect(hardware.locator("img")).toHaveAttribute("alt", /in an exam room/);
  await expect(hardware.getByRole("button", { name: /Product view|Side view/ })).toHaveCount(0);
  const faq = page.getByRole("button", { name: "Does the caller need an app or account?" });
  await faq.click();
  await expect(faq).toHaveAttribute("aria-expanded", "true");
  await expect(page.locator(`[id="${await faq.getAttribute("aria-controls")}"]`)).toBeVisible();
});

test("mobile navigation traps focus, restores it and closes after navigation", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");
  const opener = page.getByRole("button", { name: "Open navigation" });
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
    await page.getByLabel("Where do language barriers show up?").fill("An illustrative request for two reception desks.");
  };
  await fill();
  await page.route("**/api/contact", async (route) => {
    expect(route.request().postDataJSON().organization).toBe("QA example organization");
    await route.fulfill({ status: 200, contentType: "application/json", body: JSON.stringify({ ok: true }) });
  });
  await form.getByRole("button", { name: "Request a demo" }).click();
  await expect(page.locator(".form-status")).toContainText("arrange your demo");
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
  await expect(staticPage.locator("h1")).toHaveText("Phontus Phone Line");
  await expect(staticPage.getByRole("navigation", { name: "Explore the Phontus system" })).toBeVisible();
  await context.close();
  await page.goto("/");
  expect(await page.locator(".reveal-pending").count()).toBe(0);
  expect(await page.locator("html").evaluate((el) => getComputedStyle(el).scrollBehavior)).toBe("auto");
});

for (const width of [375, 768, 1440]) {
  test(`hardware family changes product and use setting at ${width}px`, async ({ page }, testInfo) => {
    await page.setViewportSize({ width, height: 1000 });
    await page.goto("/#hardware");
    const hardware = page.locator("#hardware");
    const photo = hardware.locator("figure img");
    const environments = hardware.getByRole("group", { name: /environments$/ });
    const imagePosition = () => hardware.evaluate((section) => {
      const image = section.querySelector(".hardware-viewer__image")!.getBoundingClientRect();
      return { top: image.top - section.getBoundingClientRect().top, height: image.height };
    });
    const initialPosition = await imagePosition();
    const stories = [
      { name: "Clinical Kit", headline: /Bring the system/, settings: ["At the doorway", "In the exam room"], href: "/products/clinical-kit" },
      { name: "Frontline Kit", headline: /Understanding where/, settings: ["At reception", "At check-in"], href: "/contact" },
      { name: "Interpreting Kit", headline: /A place built/, settings: ["In the office", "At reception"], href: "/products/interpreting-kit" },
    ];
    for (const [index, story] of stories.entries()) {
      const select = hardware.getByRole("button", { name: `${String(index + 1).padStart(2, "0")} ${story.name}`, exact: true });
      await select.focus();
      await page.keyboard.press("Enter");
      await expect(select).toBeFocused();
      await expect(select).toHaveAttribute("aria-pressed", "true");
      await expect(hardware.locator(".hardware-showcase__index button[aria-pressed='true']")).toHaveCount(1);
      await expect(hardware.getByRole("heading", { level: 3 })).toHaveText(story.headline);
      await expect(hardware.getByRole("link")).toHaveAttribute("href", story.href);
      expect(await imagePosition()).toEqual(initialPosition);
      await expect(environments).toHaveAccessibleName(`${story.name} environments`);
      await expect(environments.getByRole("button").first()).toHaveAttribute("aria-pressed", "true");
      let previousImage = "";
      for (const setting of story.settings) {
        await environments.getByRole("button", { name: setting, exact: true }).click();
        await expect(environments.getByRole("button", { name: setting, exact: true })).toHaveAttribute("aria-pressed", "true");
        await expect(hardware.locator("figcaption")).toContainText(story.name);
        await expect(hardware.locator("figcaption")).toContainText(setting);
        await expect(hardware.getByRole("status")).toHaveText(`${story.name} — ${setting}`);
        await expect(photo).toHaveJSProperty("complete", true);
        expect(await photo.evaluate((image) => (image as HTMLImageElement).naturalWidth)).toBeGreaterThan(0);
        const src = await photo.getAttribute("src");
        expect(src).not.toBe(previousImage);
        expect(src).not.toContain("%2Fproduct%2F");
        previousImage = src!;
        expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
      }
      await hardware.screenshot({ path: testInfo.outputPath(`${story.name.toLowerCase().replaceAll(" ", "-")}-${width}.jpg`), style: ".site-header, .skip-link { visibility: hidden; }" });
    }
    await hardware.getByRole("button", { name: "01 Clinical Kit", exact: true }).click();
    await expect(environments.getByRole("button", { name: "At the doorway", exact: true })).toHaveAttribute("aria-pressed", "true");
    await expect(hardware.getByRole("button", { name: /front view|side view|product view|angle/i })).toHaveCount(0);
    const accessibility = await new AxeBuilder({ page }).include("#hardware").withTags(["wcag2a", "wcag2aa", "wcag21aa", "best-practice"]).analyze();
    expect(accessibility.violations).toEqual([]);
  });
}

test("Clinical Kit detail retains its dedicated product views", async ({ page }) => {
  await page.goto("/products/clinical-kit");
  await page.getByRole("button", { name: "Product view", exact: true }).click();
  await expect(page.locator(".hardware-viewer img")).toHaveAttribute("alt", /Isolated front view/);
  await page.getByRole("button", { name: "Side view", exact: true }).click();
  await expect(page.locator(".hardware-viewer img")).toHaveAttribute("alt", /Side view/);
});
