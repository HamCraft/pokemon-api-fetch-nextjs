import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ['raw.githubusercontent.com'], // Add the domain here
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
