/**
 * test-state-jump.mjs
 *
 * Tests whether pre-populating buyerInfo on the server causes the Wix Events
 * ticket-form SPA to auto-advance past the data-entry steps (Scenarios A/B/C).
 * Also probes the wixEventsV2 REST API for a signed payment link (Hybrid Bypass).
 *
 * Run: node test-state-jump.mjs
 */
import { createClient, ApiKeyStrategy, OAuthStrategy } from "@wix/sdk";
import { ticketReservations, orders, wixEventsV2 } from "@wix/events";
import { redirects } from "@wix/redirects";

const API_KEY  = process.env.WIX_API_KEY  || "IST.eyJraWQiOiJQb3pIX2FDMiIsImFsZyI6IlJTMjU2In0.eyJkYXRhIjoie1wiaWRcIjpcIjc4YWExMWE4LTMyMGMtNDdhMC04ZTgxLTE5ZTdlZjU5MTNlY1wiLFwiaWRlbnRpdHlcIjp7XCJ0eXBlXCI6XCJhcHBsaWNhdGlvblwiLFwiaWRcIjpcIjI3Njk4ZWIwLTdhNjEtNDIxNC1hNWZkLWMyMmZlOTU2MDY2MVwifSxcInRlbmFudFwiOntcInR5cGVcIjpcImFjY291bnRcIixcImlkXCI6XCJhMWQ5N2JlYS0yMTE1LTQ0NGUtYTMzMi0xNWQyNmJhNDVhMTlcIn19IiwiaWF0IjoxNzczMDYwMjgxfQ.V6phkA-ALItz4kFsz3H7CPk-zsRUvaC-1lTzFluiqJoEaympY4LFItFMwWiBIkmoxA-SraUA6huefgpK-mkcJphSAL_UItbrOULlUQo2sHMO4rCQiKEuRFOfRJ_gfXrphNdFTkOvjtzJiiEWcrATnZad4RTQASnLn72ICHFyOtw_RlS1wWGApupN7zkVOp2q3R_seS7-2y7-oZoSotark0ATaNT_axzLcRhXtv69TmPgV7I4v14s2FbvRXg8Y_DYc3XwRsQZXAiuJnrzCWYB31vIzoXfLv0WFvIYvsamTuBQjxd3foh2LsQs9kqs6Mh2FIotIU2mVED0HMkmWkDdzw";
const SITE_ID  = process.env.WIX_SITE_ID  || "ffc66490-9df2-4882-a610-b2f8cd5ee179";
const EVENT_ID = process.env.WIX_EVENT_ID || "84a7a2e2-b36e-450e-9c04-792f9abefffc";
const CLIENT_ID = process.env.NEXT_PUBLIC_WIX_CLIENT_ID || "0586207b-ce7a-4848-92bd-81b9739c524b";
const EVENT_SLUG = "ethis-2026";
const ACCOUNT_ID = process.env.WIX_ACCOUNT_ID || "a1d97bea-2115-444e-a332-15d26ba45a19";

const BUYER = { firstName: "Test", lastName: "Bypass", email: "test-bypass@example.com" };

// ── Clients ──────────────────────────────────────────────────────────────────
const adminClient = createClient({
  modules: { ticketReservations, orders, wixEventsV2 },
  auth: ApiKeyStrategy({ apiKey: API_KEY, siteId: SITE_ID }),
});

// ── Helpers ──────────────────────────────────────────────────────────────────
function adminHeaders() {
  return {
    Authorization: API_KEY,
    "Content-Type": "application/json",
    "wix-account-id": ACCOUNT_ID,
    "wix-site-id": SITE_ID,
  };
}

async function run() {
  // ── STEP 0: Find an active paid ticket definition via REST ─────────────────
  console.log("\n══════════════════════════════════════════════════════");
  console.log("  STEP 0 · List ticket definitions (REST)");
  console.log("══════════════════════════════════════════════════════");
  const defsResp = await fetch("https://www.wixapis.com/events/v3/ticket-definitions/query", {
    method: "POST",
    headers: adminHeaders(),
    body: JSON.stringify({ query: { filter: { eventId: EVENT_ID } } }),
  });
  const defsData = await defsResp.json();
  const defs = defsData.ticketDefinitions ?? [];
  console.log("Definitions:");
  defs.forEach(d => console.log(`  ${d.id} | ${d.name} | free=${d.pricingMethod?.free} | status=${d.saleStatus}`));

  const paidTicket = defs.find(d => !d.pricingMethod?.free && d.saleStatus === "SALE_STARTED");
  if (!paidTicket?.id) { console.error("No active paid ticket definition found"); process.exit(1); }
  // REST response uses 'id', not '_id'
  paidTicket._id = paidTicket.id;
  console.log(`\nUsing: ${paidTicket._id} (${paidTicket.name})`);

  // ── STEP 1: Admin reservation (no buyerInfo — reservations don't carry it) ──
  console.log("\n══════════════════════════════════════════════════════");
  console.log("  STEP 1 · adminClient.createTicketReservation");
  console.log("══════════════════════════════════════════════════════");
  const reservation = await adminClient.ticketReservations.createTicketReservation({
    tickets: [{ ticketDefinitionId: paidTicket._id, quantity: 1 }],
  });
  const reservationId = reservation._id;
  console.log("reservationId:", reservationId);
  console.log("Full reservation:", JSON.stringify(reservation, null, 2));

  // ── STEP 2: visitorClient — generate anonymous session ────────────────────
  console.log("\n══════════════════════════════════════════════════════");
  console.log("  STEP 2 · visitorClient token generation");
  console.log("══════════════════════════════════════════════════════");
  const visitorClient = createClient({
    modules: { orders, redirects },
    auth: OAuthStrategy({ clientId: CLIENT_ID }),
  });
  const visitorTokens = await visitorClient.auth.generateVisitorTokens();
  console.log("Visitor access token (first 40 chars):", visitorTokens?.accessToken?.value?.slice(0, 40));

  // ── STEP 3: orders.checkout() — inject full buyerInfo ────────────────────
  // This is the key pre-validation step: we submit firstName/lastName/email
  // via the buyer object AND the guests[].form.inputValues.
  // If the Wix backend marks the reservation as "buyer data satisfied", the
  // SPA may skip the data-entry accordion steps.
  console.log("\n══════════════════════════════════════════════════════");
  console.log("  STEP 3 · visitorClient.orders.checkout() + full buyerInfo");
  console.log("══════════════════════════════════════════════════════");
  let rawOrder = null;
  let snapshotId = null;
  let orderId = null;
  try {
    const checkoutResp = await visitorClient.orders.checkout(EVENT_ID, {
      reservationId,
      buyer: BUYER,
      guests: [{
        form: {
          inputValues: [
            { inputName: "firstName", value: BUYER.firstName },
            { inputName: "lastName",  value: BUYER.lastName  },
            { inputName: "email",     value: BUYER.email     },
          ],
        },
      }],
    });
    rawOrder   = checkoutResp.order;
    orderId    = rawOrder?._id;
    snapshotId = (rawOrder)?.[Object.keys(rawOrder ?? {}).find(k => k.toLowerCase().includes("snapshot")) ?? "snapshotId"];
    console.log("orderPageUrl:", checkoutResp.orderPageUrl);
    console.log("order._id:", orderId);
    console.log("snapshotId key scan:", JSON.stringify(rawOrder, null, 2));
  } catch (e) {
    console.error("orders.checkout() FAILED:", e.message);
    if (e.details) console.error(JSON.stringify(e.details, null, 2));
  }

  // ── STEP 4a: Scenario A/B probe — ecomCheckout (direct payment URL) ───────
  // Uses snapshotId / orderId as the checkoutId.
  // If this URL works → user lands directly on the payment/cashier step.
  console.log("\n══════════════════════════════════════════════════════");
  console.log("  STEP 4a · ecomCheckout redirect (snapshotId / orderId)");
  console.log("══════════════════════════════════════════════════════");
  for (const [label, id] of [["snapshotId", snapshotId], ["orderId", orderId]]) {
    if (!id) { console.log(`  ${label}: not available, skipping`); continue; }
    try {
      const { redirectSession } = await visitorClient.redirects.createRedirectSession({
        ecomCheckout: { checkoutId: id },
        callbacks: {
          thankYouPageUrl: "https://www.ethis.xyz/tickets/success",
          postFlowUrl:     "https://www.ethis.xyz/",
        },
      });
      console.log(`  ✅ ecomCheckout[${label}] URL:`, redirectSession?.fullUrl);
      console.log("  Full session:", JSON.stringify(redirectSession, null, 2));
    } catch (e) {
      console.error(`  ❌ ecomCheckout[${label}] failed:`, e.message);
    }
  }

  // ── STEP 4b: Scenario B/C probe — eventsCheckout (ticket-form URL) ────────
  // This is the signed redirect to the SPA ticket form.
  // Observe: does it land on Step 1 empty? Step 1 pre-filled? Or payment?
  console.log("\n══════════════════════════════════════════════════════");
  console.log("  STEP 4b · eventsCheckout redirect (reservationId)");
  console.log("══════════════════════════════════════════════════════");
  try {
    const { redirectSession } = await visitorClient.redirects.createRedirectSession({
      eventsCheckout: { eventSlug: EVENT_SLUG, reservationId },
      callbacks: {
        thankYouPageUrl: "https://www.ethis.xyz/tickets/success",
        postFlowUrl:     "https://www.ethis.xyz/",
      },
    });
    console.log("  eventsCheckout URL:", redirectSession?.fullUrl);
    console.log("  Full session:", JSON.stringify(redirectSession, null, 2));
    console.log("\n  ▸ Open this URL in a browser and report which scenario you see:");
    console.log("    Scenario A = lands directly on Payment step");
    console.log("    Scenario B = Step 1 shown but fields already filled");
    console.log("    Scenario C = Step 1 empty (reservation ownership mismatch)");
  } catch (e) {
    console.error("  ❌ eventsCheckout failed:", e.message);
  }

  // ── STEP 5: Hybrid Bypass — wixEventsV2 REST createCheckout / createLink ──
  // Checks whether the V2 Events API has a direct 'signed' endpoint that can
  // produce a payment-layer URL without going through the SPA accordion.
  console.log("\n══════════════════════════════════════════════════════");
  console.log("  STEP 5 · Hybrid Bypass: wixEventsV2 REST probe");
  console.log("══════════════════════════════════════════════════════");

  // 5a: Try SDK method if it exists on adminClient
  const v2 = adminClient.wixEventsV2;
  console.log("  Available wixEventsV2 methods:", Object.keys(v2 ?? {}).join(", "));

  if (typeof v2?.checkout?.createLink === "function") {
    console.log("  ✅ wixEventsV2.checkout.createLink() exists, calling...");
    try {
      const linkResp = await v2.checkout.createLink({
        eventId: EVENT_ID,
        reservationId,
        buyerInfo: BUYER,
      });
      console.log("  createLink response:", JSON.stringify(linkResp, null, 2));
    } catch (e) {
      console.error("  ❌ createLink failed:", e.message);
    }
  } else {
    console.log("  createLink not found on wixEventsV2 SDK object — trying REST");
  }

  // 5b: REST probe — POST /events/v2/checkout/create-link (undocumented, probe only)
  const v2RestCandidates = [
    {
      label: "POST /events/v2/checkout",
      url: "https://www.wixapis.com/events/v2/checkout",
      body: { eventId: EVENT_ID, reservationId, buyerInfo: BUYER },
    },
    {
      label: "POST /events/v2/checkout/create-link",
      url: "https://www.wixapis.com/events/v2/checkout/create-link",
      body: { eventId: EVENT_ID, reservationId, buyerInfo: BUYER },
    },
    {
      label: "POST /events/v3/checkout",
      url: "https://www.wixapis.com/events/v3/checkout",
      body: { eventId: EVENT_ID, reservationId, buyer: BUYER },
    },
  ];

  for (const { label, url, body } of v2RestCandidates) {
    try {
      const r = await fetch(url, {
        method: "POST",
        headers: adminHeaders(),
        body: JSON.stringify(body),
      });
      const text = await r.text();
      let parsed;
      try { parsed = JSON.parse(text); } catch { parsed = text; }
      console.log(`\n  ${label} → HTTP ${r.status}`);
      console.log("  Response:", JSON.stringify(parsed, null, 2).slice(0, 400));
    } catch (e) {
      console.error(`  ${label} → fetch error:`, e.message);
    }
  }

  // 5c: Check if the eventsCheckout URL itself carries a step parameter we can modify
  console.log("\n══════════════════════════════════════════════════════");
  console.log("  SUMMARY");
  console.log("══════════════════════════════════════════════════════");
  console.log("  reservationId:", reservationId);
  console.log("  orderId:", orderId);
  console.log("  snapshotId:", snapshotId);
  console.log("\n  Next steps:");
  console.log("  1. Open the eventsCheckout URL from Step 4b in a browser");
  console.log("  2. Note which scenario (A/B/C) you land on");
  console.log("  3. If ecomCheckout URL from Step 4a is valid → it bypasses the form entirely");
}

run().catch(e => {
  console.error("\nFatal:", e.message ?? e);
  if (e.response) e.response.json?.().then(j => console.error("Response body:", JSON.stringify(j, null, 2)));
  process.exit(1);
});
