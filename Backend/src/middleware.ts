import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { decodeJWT } from "./helper/jwt_helper";

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  let cookie = request.cookies.get("token");
  let path = request.nextUrl.pathname;
  let payload;
  if (cookie) {
    payload = await decodeJWT(cookie.value);
    if (!payload) {
      request.cookies.delete("token");
      return NextResponse.redirect(new URL("/auth", request.url));
    }
    if (path === "/" || path === "/auth") {
      return NextResponse.redirect(new URL("/main", request.url));
    }
  } else {
    if (path !== "/auth") {
      return NextResponse.redirect(new URL("/auth", request.url));
    }
  }

  return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/main/:path*", "/", "/auth"],
};
