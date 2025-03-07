/** @type {import('next').NextConfig} */
const nextConfig = {
  
  // This ensures links work correctly in static exports
  trailingSlash: true,
  // If you're using images, you might need this
  images: {
    unoptimized: true,
  },
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true, // Still ignores ESLint errors during builds
  },
  // Remove output: 'export' to enable dynamic rendering and server features
};

module.exports = nextConfig;