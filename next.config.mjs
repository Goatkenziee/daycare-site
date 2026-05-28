/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    dirs: ['app', 'components', 'src'],
  },
  compiler: {
    // Remove console logs in production builds
    removeConsole: process.env.NODE_ENV === 'production',
  },
  // Add experimental flag for app dir if needed, though usually not required for Next 14+ with App Router
  // experimental: {
  //   appDir: true,
  // },
};

export default nextConfig;
