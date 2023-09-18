/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    emotion: true,
    presets: ['next/babel'],
  },
  reactStrictMode: true,
  images: {
    domains: ['farmer-s3.s3.ap-northeast-2.amazonaws.com'],
  },
  webpack: config => {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
  images: {
    domains: ['farmer-s3.s3.ap-northeast-2.amazonaws.com'],
  },
};

module.exports = nextConfig;
