
const nextConfig = {
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
} 

export default nextConfig;
