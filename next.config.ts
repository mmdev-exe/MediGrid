import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true, // Still ignores ESLint errors during builds
  },
    // Remove output: 'export' to enable dynamic rendering and server features
};

export default nextConfig;
