/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    remotePatterns: [
      { protocol: "https", hostname: "media.gmodstore.com" },
      { protocol: "https", hostname: "i.imgur.com" }
    ]
  },
};

module.exports = nextConfig;
