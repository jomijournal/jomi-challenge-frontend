/** @type {import('next').NextConfig} */
<<<<<<< HEAD
const webpack = require("webpack");
=======
>>>>>>> origin/main
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
<<<<<<< HEAD
  webpack(config, { buildId, dev, isServer, defaultLoaders, webpack }) {
=======
  webpack(config) {
>>>>>>> origin/main
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });
<<<<<<< HEAD
    config.plugins.push(
      new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
        "window.jQuery": "jquery",
      })
    );
=======
>>>>>>> origin/main

    return config;
  },
};

module.exports = nextConfig;
