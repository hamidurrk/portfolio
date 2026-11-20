/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: false,
  images: {
    // Serve AVIF/WebP on Vercel instead of the original JPEG/PNG.
    formats: ["image/avif", "image/webp"],
    // Optimized images are immutable per URL; cache them for 30 days.
    minimumCacheTTL: 60 * 60 * 24 * 30,
  },
};
