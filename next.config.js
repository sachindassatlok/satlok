/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  images: {
    domains: ['localhost', 'thebrandhunk.com'],
    unoptimized: true,
  },
  swcMinify: true,
  basePath: '/satlok',
  assetPrefix: '/satlok/',
}

module.exports = nextConfig
