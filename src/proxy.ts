import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// /mobile-tyre-fitting-bristol was permanently removed (see
// src/app/mobile-tyre-fitting-bristol/route.ts). It must return HTTP 410
// Gone for both the bare path and the trailing-slash variant, with no
// redirect involved for either.
//
// Next.js's default trailing-slash-removal redirect would otherwise fire
// for the trailing-slash variant before the route handler ever runs, which
// would mask the 410 behind a 308. `skipTrailingSlashRedirect` in
// next.config.ts disables that framework-level redirect site-wide, so this
// proxy re-implements the same default (redirect "/x/" -> "/x") for every
// other path, keeping existing URL behaviour unchanged everywhere else.
const STATIC_FILE_PATTERN = /((?!\.well-known(?:\/.*)?)(?:[^/]+\/)*[^/]+\.\w+)/;

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname === "/mobile-tyre-fitting-bristol/") {
    return new NextResponse(null, { status: 410 });
  }

  if (
    pathname !== "/" &&
    pathname.endsWith("/") &&
    !STATIC_FILE_PATTERN.test(pathname)
  ) {
    const target = new URL(
      pathname.slice(0, -1) + request.nextUrl.search,
      request.url,
    );
    return NextResponse.redirect(target, 308);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)",
  ],
};
