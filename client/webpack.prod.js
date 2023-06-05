const merge = require("webpack-merge");
const common = require("./webpack.common.js");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = merge(common, {
	optimization: {
		minimizer: [new OptimizeCSSAssetsPlugin()]
	},
  plugins: [
    new MiniCssExtractPlugin({
      filename: "../css/index.css",
      chunkFilename: "[name].css"
    })
  ],
  mode: "production",
  devtool: "source-map"
});
