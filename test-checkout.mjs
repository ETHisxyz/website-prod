// Full checkout pipeline test — runs outside Next.js to isolate API issues
import { createClient, ApiKeyStrategy } from "@wix/sdk";
import { ticketReservations, orders } from "@wix/events";
import { redirects } from "@wix/redirects";

const API_KEY =
  "IST.eyJraWQiOiJQb3pIX2FDMiIsImFsZyI6IlJTMjU2In0.eyJkYXRhIjoie1wiaWRcIjpcIjc4YWExMWE4LTMyMGMtNDdhMC04ZTgxLTE5ZTdlZjU5MTNlY1wiLFwiaWRlbnRpdHlcIjp7XCJ0eXBlXCI6XCJhcHBsaWNhdGlvblwiLFwiaWRcIjpcIjI3Njk4ZWIwLTdhNjEtNDIxNC1hNWZkLWMyMmZlOTU2MDY2MVwifSxcInRlbmFudFwiOntcInR5cGVcIjpcImFjY291bnRcIixcImlkXCI6XCJhMWQ5N2JlYS0yMTE1LTQ0NGUtYTMzMi0xNWQyNmJhNDVhMTlcIn19IiwiaWF0IjoxNzczMDYwMjgxfQ.V6phkA-ALItz4kFsz3H7CPk-zsRUvaC-1lTzFluiqJoEaympY4LFItFMwWiBIkmoxA-SraUA6huefgpK-mkcJphSAL_UItbrOULlUQo2sHMO4rCQiKEuRFOfRJ_gfXrphNdFTkOvjtzJiiEWcrATnZad4RTQASnLn72ICHFyOtw_RlS1wWGApupN7zkVOp2q3R_seS7-2y7-oZoSotark0ATaNT_axzLcRhXtv69TmPgV7I4v14s2FbvRXg8Y_DYc3XwRsQZXAiuJnrzCWYB31vIzoXfLv0WFvIYvsamTuBQjxd3foh2LsQs9kqs6Mh2FIotIU2mVED0HMkmWkDdzw";
const SITE_ID = "ffc66490-9df2-4882-a610-b2f8cd5ee179";
const EVENT_ID = "84a7a2e2-b36e-450e-9c04-792f9abefffc";
const BASE_URL = "http://localhost:3000";

const client = createClient({
  modules: { ticketReservations, orders, redirects },
  auth: ApiKeyStrategy({ siteId: SITE_ID, apiKey: API_KEY }),
});

async function run() {
  // Step 0: List ticket definitions to find a paid one
  console.log("\n=== STEP 0: List ticket definitions ===");
  const ticketList = await client.orders.listAvailableTickets({ eventId: EVENT_ID });
  const defs = ticketList.definitions ?? [];
  console.log("Definitions:", defs.map(d => `${d._id} | ${d.name} | free=${d.free} | price=${JSON.stringify(d.price)}`));

  const paidTicket = defs.find(d => !d.free);
  if (!paidTicket?._id) {
    console.error("No paid ticket definition found");
    process.exit(1);
  }
  console.log("\nUsing paid ticket:", paidTicket._id, paidTicket.name);

  // Step 1: Create reservation
  console.log("\n=== STEP 1: Create reservation ===");
  const reservation = await client.ticketReservations.createTicketReservation({
    tickets: [{ ticketDefinitionId: paidTicket._id, quantity: 1 }],
  });
  console.log("Reservation ID:", reservation._id);
  console.log("Full reservation:", JSON.stringify(reservation, null, 2));

  // Step 2: Checkout
  console.log("\n=== STEP 2: orders.checkout() ===");
  const guestEntry = {
    form: {
      inputValues: [
        { inputName: "firstName", value: "Test" },
        { inputName: "lastName", value: "User" },
        { inputName: "email", value: "test@example.com" },
      ],
    },
  };
  const checkoutResp = await client.orders.checkout(EVENT_ID, {
    reservationId: reservation._id,
    buyer: { firstName: "Test", lastName: "User", email: "test@example.com" },
    guests: [guestEntry],
  });

  // Log the FULL raw response object to catch all fields including _id
  const rawOrder = checkoutResp.order;
  const orderId = rawOrder?._id;
  console.log("orderPageUrl:", checkoutResp.orderPageUrl);
  console.log("Full checkout response:", JSON.stringify(checkoutResp, null, 2));
  console.log("order._id (runtime):", orderId);

  if (!orderId) {
    console.error("\n❌ No order._id — ecomCheckout path will fail");
    return;
  }

  // Step 3: createRedirectSession with ecomCheckout
  console.log("\n=== STEP 3: createRedirectSession (ecomCheckout) ===");
  try {
    const { redirectSession } = await client.redirects.createRedirectSession({
      ecomCheckout: { checkoutId: orderId },
      callbacks: {
        thankYouPageUrl: `${BASE_URL}/tickets/success`,
        postFlowUrl: `${BASE_URL}/tickets`,
      },
    });
    console.log("fullUrl:", redirectSession?.fullUrl);
    console.log("Full redirect session:", JSON.stringify(redirectSession, null, 2));
  } catch (e) {
    console.error("❌ createRedirectSession (ecomCheckout) failed:", e.message ?? e);
    if (e.details) console.error("Details:", JSON.stringify(e.details, null, 2));
  }

  // Step 3b: Fallback — createRedirectSession with eventsCheckout using snapshotId
  const snapshotId = rawOrder?.snapshotId;
  console.log("\n=== STEP 3b: snapshotId ===", snapshotId);
}

run().catch(e => {
  console.error("Fatal:", e.message ?? e);
  if (e.response) e.response.json().then(j => console.error("Response body:", JSON.stringify(j, null, 2)));
});
