/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://mahmoud-el-tohamy-portfolio.vercel.app/',
  generateRobotsTxt: true, // Generate robots.txt
  sitemapSize: 7000,
}
