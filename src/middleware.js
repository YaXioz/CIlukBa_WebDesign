import { NextResponse } from "next/server";
import { decrypt } from "./lib/session";
import { cookies } from "next/headers";

export async function middleware(req) {
  const sessionCookie = req.cookies.get("session");

  // Jika session tidak ada, redirect ke login
  if (!sessionCookie) {
    return NextResponse.redirect(new URL("/signin", req.url));
  }

  // Coba decrypt session untuk memeriksa validitasnya
  const payload = await decrypt(sessionCookie.value);

  // Jika session tidak valid atau sudah expired, redirect ke login
  if (!payload || new Date(payload.expiresAt) < new Date()) {
    return NextResponse.redirect(new URL("/signin", req.url));
  }

  // Jika session valid, izinkan akses
  return NextResponse.next();
}

// Routes Middleware should not run on
export const config = {
  matcher: ["/accounts/:path*"],
};
