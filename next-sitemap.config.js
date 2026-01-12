/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || "https://www.phoenixazbankruptcyattorney.com",
  generateRobotsTxt: true,
  sitemapSize: 5000,
  changefreq: "weekly",
  priority: 0.7,

  exclude: [
    "/contact",    
    "/404",
    "/500",
    "/api/*",
    "/admin/*",
    "/sitemap.xml",
    "/robots.txt",
  ],

  robotsTxtOptions: {
    policies: [{ userAgent: "*", allow: "/" }],
  },
};
