var path      = require("path");
const fs      = require("fs");

const appRoot = fs.realpathSync(process.cwd());
const appModules = path.resolve(appRoot, "node_modules");
const components = path.join(process.cwd(), "components");
const containers = path.join(process.cwd(), "containers");
const RMODS = [appModules, components, containers];
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const SASS_TYPE = require("sass");

console.log('PATHH', path.join(process.cwd(), "../dist/css"))

module.exports = {
  entry: ["./index.js", "./sass/index.scss"],
  output: {
    path: path.join(process.cwd(), "../dist/js"),
    filename: "mybundle.js"
  },
  resolve: {
    modules: RMODS, 
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
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: path.join(process.cwd(), "../dist/css")
            }
          },
          "css-loader",
          "sass-loader",
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "../dist/css/index.css",
      chunkFilename: "[name].css"
    })
  ],
  stats: {
    colors: true
  }
};
