import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};
module.exports = {
  experimental: {
    serverActions: {
      bodySizeLimit: '5mb',
    },
  },
  images: {
    domains: ["teal-junior-mule-944.mypinata.cloud"]
  },
  async rewrites() {
        return [
          {
            source: '/eventos', // The URL users see
            destination: '/business', // The actual page path
          },
          {
            source: '/eventos/:slug', // Dynamic URL segment
            destination: '/business/:slug', // Corresponding internal path
          },
        ];
      },
}
export default nextConfig;
