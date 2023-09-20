const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "production",
  entry: {
    filename: path.resolve(__dirname, "src/index.js"),
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name][contenthash].js",
    assetModuleFilename: "[name][ext]",
    clean: true,
  },
  performance: {
    hints: false,
    maxAssetSize: 512000,
    maxEntrypointSize: 512000,
  },
  devServer: {
    port: 9000,
    compress: true,
    hot: true,
    static: {
      directory: path.join(__dirname, "dist"),
    },
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.svg$/,
        use: "svg-loader",
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
      {
        test: /\.pug$/,
        use: "pug-loader",
      },
    ],
  },
  plugins: [
    new htmlWebpackPlugin({
      title: "My Web Page",
      filename: "index.html",
      template: "src/index1.pug",
    }),
    new htmlWebpackPlugin({
      title: "site1",
      filename: "site1.html",
      template: "src/site1.pug",
    }),
    new htmlWebpackPlugin({
      title: "site2",
      filename: "site2.html",
      template: "src/site2.pug",
    }),
    new htmlWebpackPlugin({
      title: "site3",
      filename: "site3.html",
      template: "src/site3.pug",
    }),
    new htmlWebpackPlugin({
      title: "site4",
      filename: "site4.html",
      template: "src/site4.pug",
    }),
  ],
};
