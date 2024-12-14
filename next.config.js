/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'apod.nasa.gov',
      },
      {
        protocol: 'https',
        hostname: 'epic.gsfc.nasa.gov',
      },
      {
        protocol: 'https',
        hostname: '**.nasa.gov',
      }
    ],
  },
};

module.exports = nextConfig;