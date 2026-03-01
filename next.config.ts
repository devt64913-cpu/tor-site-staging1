import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // output: "export",
  reactStrictMode: true,
  images: { unoptimized: true },
  async redirects() {
    return [
      { source: "/services", destination: "/what-we-do", permanent: true },
    ];
  },
};

export default nextConfig;
