const path = require("path");

// Node 26 compatibility for Next 12 (see scripts/node-compat.js).
// Load it here, and pass it to Next's worker processes via NODE_OPTIONS.
const compatShim = path.join(__dirname, "scripts", "node-compat.js");
require(compatShim);
const requireFlag = `--require ${JSON.stringify(compatShim)}`;
if (!(process.env.NODE_OPTIONS || "").includes("node-compat.js")) {
  process.env.NODE_OPTIONS = `${process.env.NODE_OPTIONS || ""} ${requireFlag}`.trim();
}

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
