// Node 25+ removed `buffer.SlowBuffer`, but Next.js 12's bundled dependencies
// (jsonwebtoken, compression, raw-body, ...) still reference it at load time,
// which crashes `next build` with "Cannot read properties of undefined
// (reading 'prototype')". Restore a minimal equivalent.
// Safe to delete after upgrading Next.js to a version that supports Node 26.
const buffer = require("buffer");

if (typeof buffer.SlowBuffer === "undefined") {
  function SlowBuffer(size) {
    return buffer.Buffer.allocUnsafeSlow(size);
  }
  SlowBuffer.prototype = buffer.Buffer.prototype;
  buffer.SlowBuffer = SlowBuffer;
}
