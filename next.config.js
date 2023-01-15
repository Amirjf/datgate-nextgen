/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['www.mbusa.com', 'mbseattle.datgate.com'],
  },
};

module.exports = nextConfig;
