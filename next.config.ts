import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'jimmywritessometimes.vercel.app',
        port: '',
        pathname: '/img/**',
      }
    ]
  }
};

export default nextConfig;
