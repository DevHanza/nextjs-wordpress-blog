import type { NextConfig } from "next";

const isDev = process.env.NODE_ENV === "development";

const nextConfig: NextConfig = {
  images: {
    unoptimized: isDev,
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "8080",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: process.env.WP_HOST ?? "",
        pathname: "**",
      },
    ],
  },
};

export default nextConfig;
