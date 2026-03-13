import { NextRequest, NextResponse } from "next/server";
import { createClient, ApiKeyStrategy, OAuthStrategy } from "@wix/sdk";
import { ticketReservations } from "@wix/events";
import { redirects } from "@wix/redirects";

const EVENT_SLUG = "ethis-2026";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const {
      ticketDefinitionId,
      quantity = 1,
    } = body as {
      ticketDefinitionId?: string;
      quantity?: number;
    };

    if (!ticketDefinitionId) {
      return NextResponse.json({ error: "Missing ticketDefinitionId" }, { status: 400 });
    }

    const clientId = process.env.NEXT_PUBLIC_WIX_CLIENT_ID!;
    const siteId   = process.env.WIX_SITE_ID!;

    // Step 1: create reservation via admin client
    const adminClient = createClient({
      modules: { ticketReservations },
      auth: ApiKeyStrategy({ apiKey: process.env.WIX_API_KEY!, siteId }),
    });
    const reservation = await adminClient.ticketReservations.createTicketReservation({
      tickets: [{ ticketDefinitionId, quantity }],
    });
    const reservationId = reservation._id;
    if (!reservationId) {
      return NextResponse.json({ error: "No reservation ID returned" }, { status: 500 });
    }
    console.log("[wix-checkout] reservation:", reservationId);

    // Step 2: generate visitor session for the redirect
    const visitorClient = createClient({
      modules: { redirects },
      auth: OAuthStrategy({ clientId }),
    });
    await visitorClient.auth.generateVisitorTokens();

    // Step 3: eventsCheckout → 1e9 ticket form (user fills details + pays there)
    const { redirectSession } = await visitorClient.redirects.createRedirectSession({
      eventsCheckout: { eventSlug: EVENT_SLUG, reservationId },
      callbacks: {
        thankYouPageUrl: "https://www.ethis.xyz/tickets/success",
        postFlowUrl:     "https://www.ethis.xyz/",
      },
    });
    const url = redirectSession?.fullUrl;
    if (!url) {
      return NextResponse.json({ error: "Could not generate checkout URL" }, { status: 500 });
    }
    console.log("[wix-checkout] eventsCheckout URL:", url);
    return NextResponse.json({ checkoutUrl: url });

  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : String(err);
    console.error("[wix-checkout] error:", message);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
