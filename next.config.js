/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "media.gmodstore.com" },
      { protocol: "https", hostname: "i.imgur.com" }
    ]
  },
};

module.exports = nextConfig;
