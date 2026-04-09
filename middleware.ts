import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/**
 * Set MAINTENANCE_MODE=true (or 1) in Vercel → Environment Variables → Production, then redeploy.
 * Remove it or set to false and redeploy to go live again.
 */
export function middleware(_request: NextRequest) {
  const flag = process.env.MAINTENANCE_MODE?.trim().toLowerCase();
  if (flag !== "true" && flag !== "1") {
    return NextResponse.next();
  }

  const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1"/>
  <title>We'll be back soon — Watermark Wizard</title>
  <style>
    body { font-family: system-ui, -apple-system, Segoe UI, Roboto, sans-serif; margin: 0; min-height: 100vh; display: flex; flex-direction: column; background: #faf5ff; color: #1f2937; align-items: stretch; }
    .banner { width: 100%; box-sizing: border-box; padding: 1rem 1.5rem; border-bottom: 1px solid #e5e7eb; background: #fff; }
    .banner-inner { max-width: 72rem; margin: 0 auto; display: flex; flex-direction: column; align-items: center; justify-content: center; }
    .banner a { display: flex; flex-direction: column; align-items: center; gap: 0.5rem; text-decoration: none; color: inherit; }
    .banner img { width: 56px; height: 56px; object-fit: contain; }
    .banner-title { font-size: clamp(1.5rem, 4vw, 2.25rem); font-weight: 700; line-height: 1.2; color: #7c3aed; }
    main { width: 100%; box-sizing: border-box; padding: 1.25rem 1.5rem 2rem; display: flex; justify-content: center; align-items: flex-start; }
    .card { max-width: 28rem; background: #fff; border-radius: 1rem; padding: 2rem; box-shadow: 0 10px 40px rgba(124, 58, 237, 0.12); border: 1px solid #e9d5ff; text-align: center; }
    .card h1 { font-size: 1.5rem; margin: 0 0 0.75rem; color: #5b21b6; }
    .card p { margin: 0; line-height: 1.6; font-size: 1rem; color: #4b5563; }
  </style>
</head>
<body>
  <header class="banner">
    <div class="banner-inner">
      <a href="/">
        <img src="/logo.png" alt="Watermark Wizard" width="56" height="56" />
        <span class="banner-title">Watermark Wizard</span>
      </a>
    </div>
  </header>
  <main>
    <div class="card">
      <h1>We'll be back soon</h1>
      <p>Watermark Wizard is temporarily down for maintenance. Please try again later.</p>
    </div>
  </main>
</body>
</html>`;

  return new NextResponse(html, {
    status: 503,
    headers: {
      "Content-Type": "text/html; charset=utf-8",
      "Retry-After": "3600",
      "Cache-Control": "no-store, max-age=0",
    },
  });
}

export const config = {
  matcher: [
    /*
     * Skip Next.js internals and common static assets so the 503 page always returns cleanly.
     */
    "/((?!_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|txt)$).*)",
  ],
};
