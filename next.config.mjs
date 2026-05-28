import type { NextConfig } from 'next'

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // The App Router is enabled by default in Next.js 13+ and does not require experimental.appDir.
  // The _document.js file is not compatible with the App Router and should not be used.
  experimental: {
    // This key is removed as it's no longer needed and causes errors.
  }
}

export default nextConfig
