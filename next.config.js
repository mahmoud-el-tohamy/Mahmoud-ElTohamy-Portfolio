/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ['en', 'ar'],
    defaultLocale: 'en',
  },
  trailingSlash: false,
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.mahmoud-el-tohamy-portfolio.vercel.app' }],
        destination: 'https://mahmoud-el-tohamy-portfolio.vercel.app/:path*',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
