import path from 'node:path'
import createNextIntlPlugin from 'next-intl/plugin'

const withNextIntl = createNextIntlPlugin()

// Set STATIC_EXPORT=1 to produce a fully static site in `out/` (used by
// `npm run build:static` and the cPanel deploy pipeline). Without it,
// `next build` / `next start` keep working as a regular server build.
const isStaticExport = process.env.STATIC_EXPORT === '1'

/** @type {import('next').NextConfig} */
const nextConfig = {
  ...(isStaticExport && {
    output: 'export',
    // Emit `/en/index.html` instead of `/en.html` so Apache serves
    // directory URLs without extra rewrite rules.
    trailingSlash: true,
  }),
  images: {
    // The static host cannot run the Next.js image optimization server.
    ...(isStaticExport && { unoptimized: true }),
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.ibb.co',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'ibb.co',
        port: '',
        pathname: '/**',
      },
    ],
  },
  experimental: {
    optimizeCss: true,
  },
  webpack: (config) => {
    config.resolve.alias['@react-stately/flags'] = path.resolve(
      process.cwd(),
      'src/polyfills/react-stately-flags.ts',
    )

    return config
  },
}

export default withNextIntl(nextConfig)
