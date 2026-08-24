import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    deviceSizes: [512, 640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.ekener.dev' }],
        destination: 'https://ekener.dev/:path*',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;