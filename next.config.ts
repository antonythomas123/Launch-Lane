import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*",
      },
    ],
    // domains: ["github.com", "avatars.githubusercontent.com", "placehold.co"],
    // formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
