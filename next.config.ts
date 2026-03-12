import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
      },
      {
        protocol:'https',
        hostname: 'firebasestorage.googleapis.com'
      }
    ],
  },
} satisfies NextConfig

export default nextConfig;
