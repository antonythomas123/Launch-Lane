import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: { domains: ["github.com", "avatars.githubusercontent.com"], formats: ["image/avif", "image/webp"] },
};

export default nextConfig;
