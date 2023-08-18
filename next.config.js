/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    minimumCacheTTL: 60 * 60 * 24 * 1, // 30 days
  },
}

module.exports = nextConfig
