// This URL has been permanently removed (not redirected — see AGENTS.md /
// Phase 1 SEO task). It must keep returning HTTP 410 Gone so search engines
// de-index it, rather than a 301/302 that would consolidate ranking signals
// onto another page.
function gone() {
  return new Response(null, { status: 410 });
}

export async function GET() {
  return gone();
}

export async function HEAD() {
  return gone();
}
