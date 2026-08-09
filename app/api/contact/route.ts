import { NextResponse } from "next/server";
import { deliverContactInquiry } from "@/lib/contact-adapter";
import { contactSchema } from "@/lib/contact-schema";

export async function POST(request: Request) {
  const body: unknown = await request.json().catch(() => null);
  const parsed = contactSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      {
        ok: false,
        message: "Please review the highlighted fields.",
        errors: parsed.error.flatten().fieldErrors,
      },
      { status: 400 },
    );
  }

  const delivery = await deliverContactInquiry(parsed.data);

  if (!delivery.ok) {
    const unconfigured = delivery.reason === "unconfigured";
    return NextResponse.json(
      {
        ok: false,
        code: unconfigured ? "EMAIL_NOT_CONFIGURED" : "DELIVERY_FAILED",
        message: unconfigured
          ? "Online delivery is not connected yet."
          : "We couldn’t deliver your request just now.",
      },
      { status: 503 },
    );
  }

  return NextResponse.json({ ok: true });
}
