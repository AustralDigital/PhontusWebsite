import { siteConfig } from "@/lib/config";
import type { ContactInquiry } from "@/lib/contact-schema";

export type DeliveryResult =
  | { ok: true }
  | { ok: false; reason: "unconfigured" | "delivery-failed" };

export async function deliverContactInquiry(
  inquiry: ContactInquiry,
): Promise<DeliveryResult> {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from =
    process.env.CONTACT_FROM_EMAIL ?? "Phontus Website <website@phontus.live>";

  if (!apiKey || !to) {
    return { ok: false, reason: "unconfigured" };
  }

  const text = [
    "New Phontus website inquiry",
    "",
    `Name: ${inquiry.firstName} ${inquiry.lastName}`,
    `Email: ${inquiry.workEmail}`,
    `Phone: ${inquiry.phone || "Not provided"}`,
    `Organization: ${inquiry.organization}`,
    `Role: ${inquiry.role}`,
    `Organization type: ${inquiry.organizationType}`,
    `Locations: ${inquiry.locations || "Not provided"}`,
    `Expected use case: ${inquiry.useCase}`,
    `Preferred access: ${inquiry.accessMethod}`,
    "",
    "Message:",
    inquiry.message,
  ].join("\n");

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: inquiry.workEmail,
        subject: `Demo request — ${inquiry.organization}`,
        text,
      }),
      cache: "no-store",
    });

    return response.ok
      ? { ok: true }
      : { ok: false, reason: "delivery-failed" };
  } catch {
    return { ok: false, reason: "delivery-failed" };
  }
}

export const contactFallback = {
  email: siteConfig.email,
  href: `mailto:${siteConfig.email}`,
};
