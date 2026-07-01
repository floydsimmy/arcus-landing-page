import path from 'node:path'
import createNextIntlPlugin from 'next-intl/plugin'

const withNextIntl = createNextIntlPlugin()

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    // Static export can't run the Image Optimization API at runtime.
    unoptimized: true,
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
