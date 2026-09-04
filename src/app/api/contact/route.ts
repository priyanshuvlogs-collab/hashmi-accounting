import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { NextResponse } from "next/server";
import { site } from "@/lib/site";

type Inquiry = {
  receivedAt: string;
  name: string;
  email: string;
  phone: string;
  city: string;
  audience: string;
  service: string;
  timing: string;
  message: string;
};

const SIN_PATTERN = /\b\d{3}[-\s]?\d{3}[-\s]?\d{3}\b/;
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function asString(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function validate(body: Record<string, unknown>): { error?: string; inquiry?: Inquiry } {
  if (asString(body.company_website)) {
    return { inquiry: undefined };
  }

  const name = asString(body.name);
  const email = asString(body.email);
  const phone = asString(body.phone);
  const message = asString(body.message);
  const city = asString(body.city);
  const audience = asString(body.audience);
  const service = asString(body.service);
  const timing = asString(body.timing);
  const consent = asString(body.consent);

  if (name.length < 2) return { error: "Please add your name." };
  if (!EMAIL_PATTERN.test(email)) return { error: "Please add a working email." };
  if (phone.replace(/\D/g, "").length < 10) return { error: "Please add a phone number we can return." };
  if (message.length < 10) return { error: "Tell us briefly what is due or what you need." };
  if (!audience || !service || !timing) return { error: "Please choose who you are, the service, and the timing." };
  if (consent !== "yes") return { error: "Please confirm we may contact you about this request." };
  if (SIN_PATTERN.test(message) || SIN_PATTERN.test(name)) {
    return { error: "Remove any SIN from the message. We will ask for identification only when the file requires it, through a secure channel." };
  }

  return {
    inquiry: {
      receivedAt: new Date().toISOString(),
      name,
      email,
      phone,
      city,
      audience,
      service,
      timing,
      message,
    },
  };
}

async function persist(inquiry: Inquiry) {
  const dir = path.join(process.cwd(), "data");
  const file = path.join(dir, "inquiries.json");
  await mkdir(dir, { recursive: true });
  let existing: Inquiry[] = [];
  try {
    existing = JSON.parse(await readFile(file, "utf8")) as Inquiry[];
    if (!Array.isArray(existing)) existing = [];
  } catch {
    existing = [];
  }
  existing.push(inquiry);
  await writeFile(file, JSON.stringify(existing, null, 2));
}

async function notify(inquiry: Inquiry) {
  const key = process.env.RESEND_API_KEY;
  if (!key) return;
  await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${key}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: process.env.CONTACT_FROM || "website@hashmiaccounting.com",
      to: [process.env.CONTACT_TO || site.email],
      reply_to: inquiry.email,
      subject: `Consult request: ${inquiry.service} · ${inquiry.name}`,
      text: [
        `Name: ${inquiry.name}`,
        `Email: ${inquiry.email}`,
        `Phone: ${inquiry.phone}`,
        `City: ${inquiry.city}`,
        `Audience: ${inquiry.audience}`,
        `Service: ${inquiry.service}`,
        `Timing: ${inquiry.timing}`,
        "",
        inquiry.message,
      ].join("\n"),
    }),
  });
}

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = (await request.json()) as Record<string, unknown>;
  } catch {
    return NextResponse.json({ ok: false, error: "The form could not be read." }, { status: 400 });
  }

  const result = validate(body);
  if (result.error) {
    return NextResponse.json({ ok: false, error: result.error }, { status: 400 });
  }
  if (!result.inquiry) {
    return NextResponse.json({ ok: true });
  }

  await persist(result.inquiry);
  try {
    await notify(result.inquiry);
  } catch {
    // Inquiry is already stored; do not fail the visitor if email delivery is down.
  }

  return NextResponse.json({ ok: true });
}
