import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Container-optimized build output (for the Nix Docker image)
  output: "standalone",

  // Enforce React strict mode — surfaces latent bugs in development
  reactStrictMode: true,

  // Allow the dev server's HMR/chunk requests from these origins.
  // Next 16 blocks cross-origin dev resource requests by default.
  // We develop on n3m-srv-02 but view from wks-01 over Tailscale + LAN.
  allowedDevOrigins: [
    "n3m-srv-02",
    "n3m-srv-02.local",
    "100.64.56.59",
    "192.168.140.149",
    "192.168.140.7",
  ],

  // Image optimization: allowlist for external image sources we'll use
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
      },
      {
        protocol: "https",
        hostname: "raw.githubusercontent.com",
      },
      {
        protocol: "https",
        hostname: "user-images.githubusercontent.com",
      },
    ],
  },

  // Security headers applied at the Next.js layer.
  // Cloudflare will also enforce these at the edge — defense in depth.
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
