import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.prod.website-files.com",
        pathname: "/673c77fa9e60433ef22d4a58/**",
      },
      {
        protocol: "https",
        hostname: "data.maglr.com",
        pathname: "/3591/issues/38791/710263/assets/media/**",
      },
      {
        protocol: "https",
        hostname: "www.mannheimerswartling.se",
        pathname: "/app/uploads/**",
      },
    ],
  },
};

export default nextConfig;
