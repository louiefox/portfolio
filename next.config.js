/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{ protocol: "https", hostname: "media.gmodstore.com" }],
  },
};

module.exports = nextConfig;
