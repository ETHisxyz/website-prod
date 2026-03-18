import { NextResponse } from "next/server";

function wixHeaders() {
  return {
    Authorization: process.env.WIX_API_KEY!,
    "Content-Type": "application/json",
    "wix-account-id": process.env.WIX_ACCOUNT_ID!,
    "wix-site-id": process.env.WIX_SITE_ID!,
  };
}

export async function GET() {
  try {
    const eventId = process.env.WIX_EVENT_ID!;

    const res = await fetch("https://www.wixapis.com/events/v3/ticket-definitions/query", {
      method: "POST",
      headers: wixHeaders(),
      body: JSON.stringify({ query: { filter: { eventId } } }),
    });

    const data = await res.json();

    if (!res.ok) {
      return NextResponse.json({ error: data.message ?? "Wix error" }, { status: res.status });
    }

    return NextResponse.json({ ticketDefinitions: data.ticketDefinitions ?? [] });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Unknown error";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
