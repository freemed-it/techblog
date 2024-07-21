const withMDX = require('@next/mdx')()
/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure `pageExtensions` to include MDX files
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  // Optionally, add any other Next.js config below
  ...(process.env.NODE_ENV === 'production' && {
    output: 'export',
  }),
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
}
module.exports = withMDX(nextConfig)
