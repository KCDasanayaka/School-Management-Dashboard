import type { NextConfig } from "next";
// next.config.js
module.exports = {
  async rewrites() {
    return [
      {
        source: '/:path*', // Match all routes at the root level
        destination: '/dashboard/:path*', // Redirect to /dashboard/:path
      },
    ];
  },
};


const nextConfig: NextConfig = {
  /* config options here */
};

export default nextConfig;
