const path = require("path");
const Dotenv = require("dotenv-webpack");
const TerserPlugin = require("terser-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

module.exports = (env) => {
  const isDevelopment = !env || env.NODE_ENV !== "production";

  const styleLoaders = [
    isDevelopment ? "style-loader" : MiniCssExtractPlugin.loader,
    "css-loader",
  ];

  const moduleCssStylePattern = /\.module\.css$/;
  const moduleSassStylePattern = /\.module\.s[ac]ss$/;
  const moduleStyleLoaders = [
    isDevelopment ? "style-loader" : MiniCssExtractPlugin.loader,
    {
      loader: "css-loader",
      options: {
        importLoaders: 1,
        modules: true,
      },
    },
  ];

  const babelLoader = {
    loader: "babel-loader",
    options: {
      cacheDirectory: isDevelopment,
      presets: ["@babel/preset-env", "@babel/preset-react"],
    },
  };

  const esLintLoader = {
    loader: "eslint-loader",
    options: {
      cache: isDevelopment,
      quiet: true,
    },
  };

  const config = {
    mode: isDevelopment ? "development" : "production",
    entry: ["./src/index.ts"],
    devtool: isDevelopment && "cheap-module-source-map",
    stats: "minimal",
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: isDevelopment ? "[name].js" : "[name].[contenthash:8].js",
      chunkFilename: isDevelopment
        ? "[name].chunk.js"
        : "[name].[contenthash:8].js",
      publicPath: "/",
    },
    resolve: {
      extensions: [".js", ".jsx", ".json", ".ts", ".tsx"],
    },
    module: {
      rules: [
        {
          test: /\.(ts|tsx)$/,
          exclude: /node_modules/,
          use: [
            babelLoader,
            {
              loader: "ts-loader",
            },
            esLintLoader,
          ],
        },
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: [babelLoader, esLintLoader],
        },
        {
          test: /\.s[ac]ss$/i,
          exclude: [/node_modules/, moduleSassStylePattern],
          use: [...styleLoaders, "sass-loader"],
        },
        {
          test: /\.s[ac]ss$/i,
          exclude: /node_modules/,
          include: moduleSassStylePattern,
          use: [...moduleStyleLoaders, "sass-loader"],
        },
        {
          test: /\.css$/,
          exclude: [/node_modules/, moduleSassStylePattern],
          use: styleLoaders,
        },
        {
          test: /\.s[ac]ss$/i,
          exclude: /node_modules/,
          include: moduleCssStylePattern,
          use: [...moduleStyleLoaders, "sass-loader"],
        },
        {
          test: /\.svg$/,
          exclude: /node_modules/,
          use: ["@svgr/webpack"],
          issuer: {
            test: /\.(js|ts)x?$/,
          },
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, "src", "index.html"),
        minify: isDevelopment
          ? undefined
          : {
              removeComments: true,
              collapseWhitespace: true,
              removeRedundantAttributes: true,
              useShortDoctype: true,
              removeEmptyAttributes: true,
              removeStyleLinkTypeAttributes: true,
              keepClosingSlash: true,
              minifyJS: true,
              minifyCSS: true,
              minifyURLs: true,
            },
      }),
      new CopyWebpackPlugin({
        patterns: [{ from: "./src/public", to: "./" }],
      }),
      new Dotenv({ silent: true }),
      !isDevelopment &&
        new MiniCssExtractPlugin({
          filename: "[name].[contenthash:8].css",
          chunkFilename: "[id].[contenthash:8].css",
        }),
    ],
    devServer: {
      port: 3000,
      stats: "minimal",
      overlay: true,
      historyApiFallback: true,
    },
    optimization: {
      minimize: !isDevelopment,
      minimizer: [
        new TerserPlugin(),
        new OptimizeCSSAssetsPlugin({
          cssProcessorPluginOptions: {
            preset: ["default", { discardComments: { removeAll: true } }],
          },
        }),
      ],
    },
    performance: {
      hints: false,
    },
  };

  return {
    ...config,
    plugins: config.plugins.filter((p) => p),
  };
};
