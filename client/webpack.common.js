var path      = require("path");
const fs      = require("fs");

const appRoot = fs.realpathSync(process.cwd());
const appModules = path.resolve(appRoot, "node_modules");
const components = path.resolve(path.join(process.cwd(), "components"));
const containers = path.resolve(path.join(process.cwd(), "containers"));
const RMODS = [appModules, components, containers];
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const APP_ROOT = require('../config').APP_ROOT;

module.exports = {
  entry: ["./index.js"],
  output: {
    path: path.join(process.cwd(), "../dist/js"),
    filename: "mybundle.js",
  },
  resolve: {
    modules: [appModules],
    alias: {
      components: path.resolve(path.join(process.cwd(), "components")),
      containers: path.resolve(path.join(process.cwd(), "containers")),
      actions: path.resolve(path.join(process.cwd(), "actions")),
      reducers: path.resolve(path.join(process.cwd(), "reducers")) // CONSOLE LOG THISSSSS
    }, 
    extensions: [".js"] 
  },
  module: {
    rules: [
      {
        enforce: "pre",
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "eslint-loader",
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: process.env.NODE_ENV !== 'production' ? 'style-loader' : MiniCssExtractPlugin.loader
          },
          {
            loader: "css-loader",
            options: {
              sourceMap: true
            }
          },
          "postcss-loader",
          {
            loader: "sass-loader",
            options: {
              sourceMap: true
            }
          }
        ]
      }
    ]
  },
  stats: {
    colors: true
  }
};
