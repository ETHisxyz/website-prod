// Query the event's form configuration to find all required field names
import { createClient, ApiKeyStrategy } from "@wix/sdk";
import { wixEventsV2 } from "@wix/events";

const API_KEY = "IST.eyJraWQiOiJQb3pIX2FDMiIsImFsZyI6IlJTMjU2In0.eyJkYXRhIjoie1wiaWRcIjpcIjc4YWExMWE4LTMyMGMtNDdhMC04ZTgxLTE5ZTdlZjU5MTNlY1wiLFwiaWRlbnRpdHlcIjp7XCJ0eXBlXCI6XCJhcHBsaWNhdGlvblwiLFwiaWRcIjpcIjI3Njk4ZWIwLTdhNjEtNDIxNC1hNWZkLWMyMmZlOTU2MDY2MVwifSxcInRlbmFudFwiOntcInR5cGVcIjpcImFjY291bnRcIixcImlkXCI6XCJhMWQ5N2JlYS0yMTE1LTQ0NGUtYTMzMi0xNWQyNmJhNDVhMTlcIn19IiwiaWF0IjoxNzczMDYwMjgxfQ.V6phkA-ALItz4kFsz3H7CPk-zsRUvaC-1lTzFluiqJoEaympY4LFItFMwWiBIkmoxA-SraUA6huefgpK-mkcJphSAL_UItbrOULlUQo2sHMO4rCQiKEuRFOfRJ_gfXrphNdFTkOvjtzJiiEWcrATnZad4RTQASnLn72ICHFyOtw_RlS1wWGApupN7zkVOp2q3R_seS7-2y7-oZoSotark0ATaNT_axzLcRhXtv69TmPgV7I4v14s2FbvRXg8Y_DYc3XwRsQZXAiuJnrzCWYB31vIzoXfLv0WFvIYvsamTuBQjxd3foh2LsQs9kqs6Mh2FIotIU2mVED0HMkmWkDdzw";
const SITE_ID = "ffc66490-9df2-4882-a610-b2f8cd5ee179";
const EVENT_ID = "84a7a2e2-b36e-450e-9c04-792f9abefffc";
const ACCOUNT_ID = "a1d97bea-2115-444e-a332-15d26ba45a19";

const client = createClient({
  modules: { wixEventsV2 },
  auth: ApiKeyStrategy({ siteId: SITE_ID, apiKey: API_KEY }),
});

async function main() {
  // Get full event details including form configuration
  console.log("\n=== Event details + form config ===");
  try {
    const event = await client.wixEventsV2.getEvent(EVENT_ID, {
      fieldset: ["DETAILS", "REGISTRATION", "FEED", "TEXTS"],
    });
    console.log("Event title:", event.title);
    console.log("Form config:", JSON.stringify(event.registration?.checkout, null, 2));
    console.log("Full registration:", JSON.stringify(event.registration, null, 2));
  } catch (e) {
    console.error("getEvent failed:", e.message);
    if (e.details) console.error(JSON.stringify(e.details, null, 2));
  }

  // Also try queryEvents for form fieldset
  console.log("\n=== Query event with FORM fieldset ===");
  try {
    const result = await client.wixEventsV2.queryEvents({
      fieldset: ["FORM"],
      query: { filter: { _id: EVENT_ID } },
    });
    const ev = result.events?.[0];
    console.log("Form:", JSON.stringify(ev?.form, null, 2));
  } catch (e) {
    console.error("queryEvents failed:", e.message);
  }

  // Try REST to get the form directly
  console.log("\n=== REST: get event form ===");
  const r = await fetch(`https://www.wixapis.com/events/v3/events/${EVENT_ID}?fieldset=FORM&fieldset=REGISTRATION`, {
    headers: {
      Authorization: API_KEY,
      "wix-account-id": ACCOUNT_ID,
      "wix-site-id": SITE_ID,
    },
  });
  const d = await r.json();
  console.log("Status:", r.status);
  console.log("form:", JSON.stringify(d.event?.form ?? d.event?.registration?.checkout, null, 2));
}

main().catch(e => console.error("Fatal:", e.message));
