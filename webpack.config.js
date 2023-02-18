const pathModule = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = {
  entry: "./scripts/home_script.js",
  output: {
    filename: "bundle.js",
    path: pathModule.join(__dirname, "dist"),
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({ template: "./pages/home.html" }),
    new MiniCssExtractPlugin({ filename: "style.min.css" }),
  ],
  optimization: {
    minimizer: [new CssMinimizerPlugin()],
  },
};
