import { NextResponse } from "next/server";

export const runtime = "nodejs";

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const max = { name: 120, email: 160, company: 160, interest: 120, message: 4000 };

export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const s = (k: string) => (typeof body[k] === "string" ? (body[k] as string).trim() : "");
  // Honeypot: bots fill this hidden field; pretend success.
  if (s("website")) return NextResponse.json({ ok: true });

  const data = { name: s("name"), email: s("email"), company: s("company"), interest: s("interest"), message: s("message") };
  for (const [k, limit] of Object.entries(max)) {
    if ((data as Record<string, string>)[k].length > limit) return NextResponse.json({ error: `${k} is too long.` }, { status: 400 });
  }
  if (!data.name || !emailRe.test(data.email) || !data.message) {
    return NextResponse.json({ error: "Please provide your name, a valid email and a project description." }, { status: 400 });
  }

  const webhook = process.env.CONTACT_WEBHOOK_URL;
  if (!webhook) {
    return NextResponse.json(
      { error: "Our enquiry inbox is not connected yet. Please reach us via LinkedIn in the meantime." },
      { status: 503 },
    );
  }

  try {
    const res = await fetch(webhook, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...data, source: "vordane-website", receivedAt: new Date().toISOString() }),
    });
    if (!res.ok) throw new Error(String(res.status));
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "We couldn't deliver your message. Please try again shortly." }, { status: 502 });
  }
}
