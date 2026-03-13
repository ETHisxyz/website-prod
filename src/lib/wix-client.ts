import { createClient, OAuthStrategy } from "@wix/sdk";
import { redirects } from "@wix/redirects";
import { ticketReservations } from "@wix/events";
import { cookies } from "next/headers";

export async function getWixClient() {
  const cookieStore = await cookies();
  const raw = cookieStore.get("wix_tokens")?.value;
  const tokens = raw ? JSON.parse(raw) : undefined;

  return createClient({
    modules: { redirects, ticketReservations },
    auth: OAuthStrategy({
      clientId: process.env.NEXT_PUBLIC_WIX_CLIENT_ID!,
      tokens,
    }),
  });
}
