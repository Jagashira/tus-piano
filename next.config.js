/** @type {import('next').NextConfig} */
const withPlugins = require("next-compose-plugins");

const nextConfig = {
  reactStrictMode: true,
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: "@svgr/webpack",
        },
      ],
    });
    return config;
  },
  images: {
    disableStaticImages: true, // importした画像の型定義設定を無効にする
    domains: ["images.microcms-assets.io"],
  },
};

module.exports = nextConfig;

// const withBundleAnalyzer = require("@next/bundle-analyzer")({
//   enabled: process.env.ANALYZE === "true",
// });

// // module.exports = withPlugins([withBundleAnalyzer({}), nextConfig]);

// module.exports = withBundleAnalyzer({});
