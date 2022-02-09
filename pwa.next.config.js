const withPWA = require("next-pwa");

module.exports = withPWA({
  reactStrictMode: true,
  siteUrl: process.env.SITE_URL || 'https://jfft.pages.dev',
  generateRobotsTxt: true,
});