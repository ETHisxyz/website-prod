import { NextResponse, type NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith("/sponsorships")) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  const res = NextResponse.next();

  if (request.cookies.get("wix_tokens")) return res;

  try {
    const tokenRes = await fetch("https://www.wixapis.com/oauth2/token", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        clientId: process.env.NEXT_PUBLIC_WIX_CLIENT_ID,
        grantType: "anonymous",
      }),
    });

    if (tokenRes.ok) {
      const tokens = await tokenRes.json();
      const serialized = JSON.stringify(tokens);
      // httpOnly cookie — read by server-side API routes via req.cookies
      res.cookies.set("wix_tokens", serialized, {
        maxAge: 60 * 60 * 24 * 30,
        httpOnly: true,
        sameSite: "lax",
      });
      // Non-httpOnly companion — readable by browser JS so the checkout page
      // can forward the visitor's identity explicitly in the request body.
      res.cookies.set("wix_visitor_tokens", serialized, {
        maxAge: 60 * 60 * 24 * 30,
        httpOnly: false,
        sameSite: "lax",
      });
    }
  } catch {
    // non-fatal — route handler will generate tokens if cookie is missing
  }

  return res;
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
