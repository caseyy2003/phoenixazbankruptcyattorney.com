/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  images: {
    // Cap responsive widths so the browser doesn't request huge LCP variants (e.g., 3840w).
    deviceSizes: [360, 414, 600, 640, 750, 828, 960, 1080, 1200, 1600, 1920],

    // Small fixed-size images (icons, avatars, etc.)
    imageSizes: [16, 24, 32, 48, 64, 96, 128, 256],

    // Prefer modern formats when possible
    formats: ["image/avif", "image/webp"],

    // Cache optimized images aggressively (seconds)
    minimumCacheTTL: 31536000,
  },

  async redirects() {
    return [
      {
        source: "/contact",
        destination: "/contact-us",
        permanent: true, // Vercel will serve 308 (treated like 301)
      },
      {
        source: "/bankruptcy-lawyer-mesa-az",
        destination: "/mesa-az-bankruptcy-attorney",
        permanent: true, // Vercel will serve 308 (treated like 301)
      },
    ];
  },
};

module.exports = nextConfig;
