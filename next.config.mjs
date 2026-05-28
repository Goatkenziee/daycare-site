
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // Remove experimental.appDir as it's no longer needed for Next.js 14+ with App Router
  // The App Router is enabled by default.
  // Ensure _document.js is not being used if it exists, as it's incompatible with App Router.
};

export default nextConfig;
