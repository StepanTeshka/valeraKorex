import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["yourgreenhouse.ru"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.korrex.ru",
      },
    ],
  },
};

export default nextConfig;
