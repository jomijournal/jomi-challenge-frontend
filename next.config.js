/** @type {import('next').NextConfig} */
const webpack = require("webpack");
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    API_URL: process.env.API_URL,
    STRAPI_CMS_URL: process.env.STRAPI_CMS_URL,
  },
  images: {
    domains: ["localhost", process.env.STRAPI_CMS_URL],
  },

  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    config.plugins.push(
      new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
        "window.jQuery": "jquery",
      }))

    return config;
  },
};

module.exports = nextConfig;
