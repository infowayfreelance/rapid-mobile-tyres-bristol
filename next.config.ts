import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Needed so src/proxy.ts can return a direct 410 Gone for
  // /mobile-tyre-fitting-bristol/ instead of Next.js auto-redirecting the
  // trailing-slash variant before the response can be produced. Proxy
  // re-implements the framework's default trailing-slash-removal redirect
  // for every other path, so existing URL behaviour is unchanged.
  skipTrailingSlashRedirect: true,
  async redirects() {
    // Legacy WordPress-era URLs that previously 404'd. Both the bare and
    // trailing-slash forms are listed explicitly so each resolves in a
    // single 301 hop (redirects() runs before src/proxy.ts's generic
    // trailing-slash-stripping, so without the explicit "/" entry the
    // trailing-slash request would 308 to the bare path first, then 301 —
    // a redirect chain).
    return [
      {
        source: "/locations",
        destination: "/areas-we-cover",
        permanent: true,
      },
      {
        source: "/locations/",
        destination: "/areas-we-cover",
        permanent: true,
      },
      {
        source: "/areas-we-serve",
        destination: "/areas-we-cover",
        permanent: true,
      },
      {
        source: "/areas-we-serve/",
        destination: "/areas-we-cover",
        permanent: true,
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "rapid-tyres.com",
        pathname: "/wp-content/uploads/**",
      },
    ],
  },
};

export default nextConfig;
