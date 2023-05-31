/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      'www.mbusa.com',
      'mbseattle.datgate.com',
      'www.mbseattle.com',
      's3.amazonaws.com',
      'm8g3z9g9.ssl.hwcdn.net',
      'datgate-public.s3.us-west-2.amazonaws.com',
      'vehicle-photos-published.vauto.com',
      'imageonthefly.autodatadirect.com',
      'nissan.datgate.com',
      'nissanofportland.com',
    ],
  },
};

// const withBundleAnalyzer = require('@next/bundle-analyzer')({
// enabled: process.env.ANALYZE === 'true',
// });

// module.exports = withBundleAnalyzer({});

module.exports = nextConfig;
