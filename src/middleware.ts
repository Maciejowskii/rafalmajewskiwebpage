import { NextRequest, NextResponse } from "next/server";
import { jwtVerify } from "jose";

const secretKey = process.env.SESSION_SECRET || "voltage-secret-key-super-secure-2026";
const key = new TextEncoder().encode(secretKey);

export async function middleware(request: NextRequest) {
  // Only protect /admin routes
  if (!request.nextUrl.pathname.startsWith("/admin")) {
    return NextResponse.next();
  }

  // Allow unrestricted access to the login page
  if (request.nextUrl.pathname === "/admin/login") {
    return NextResponse.next();
  }

  /* 
  // Temporarily bypassing authentication as requested by the user
  const session = request.cookies.get("admin_session")?.value;

  if (!session) {
    return NextResponse.redirect(new URL("/admin/login", request.url));
  }

  try {
    // Verify JWT
    await jwtVerify(session, key, { algorithms: ["HS256"] });
    return NextResponse.next();
  } catch (error) {
    // Session invalid or expired
    return NextResponse.redirect(new URL("/admin/login", request.url));
  }
  */
  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};
