const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "development",
  target: "node",

  resolve: {
    extensions: [".js", ".jsx", ".json"], // Add '.jsx' if you're using React
  },
  entry: "./server/src",
  output: {
    filename: "server.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  plugins: [new MiniCssExtractPlugin()],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.js$|.jsx$/,
        exclude: /node-modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [["@babel/preset-react", { runtime: "automatic" }]],
          },
        },
      },
    ],
  },
};
