/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable static export for Vercel
  output: 'export',

  // Optimise images
  images: {
    unoptimized: true, // required for static export
  },

  // Trailing slash for clean URLs
  trailingSlash: true,

  // Compress responses
  compress: true,

  // Security & SEO headers
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'X-XSS-Protection', value: '1; mode=block' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
        ],
      },
    ]
  },
}

module.exports = nextConfig
