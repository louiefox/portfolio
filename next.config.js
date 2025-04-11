/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: process.env.NODE_ENV === 'production' ? '' : '',
  images: {
    unoptimized: true,
    remotePatterns: [
      { protocol: "https", hostname: "media.gmodstore.com" },
      { protocol: "https", hostname: "i.imgur.com" }
    ]
  },
};

module.exports = nextConfig;
