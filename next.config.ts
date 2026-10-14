import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Needed so src/proxy.ts can return a direct 410 Gone for
  // /mobile-tyre-fitting-bristol/ instead of Next.js auto-redirecting the
  // trailing-slash variant before the response can be produced. Proxy
  // re-implements the framework's default trailing-slash-removal redirect
  // for every other path, so existing URL behaviour is unchanged.
  skipTrailingSlashRedirect: true,
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
