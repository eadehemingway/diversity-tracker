const HtmlWebpackPlugin = require("html-webpack-plugin");

const HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + "/index.html",
  filename: "index.html"
});
module.exports = {
  entry: __dirname + "/public/index.tsx",
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        loader: "awesome-typescript-loader",
        exclude: /node_modules/
      },
      {
        test: /\.(ts|tsx)$/,
        enforce: "pre",
        use: [
          {
            loader: "tslint-loader",
            options: {
              configFile: "./tslint.json"
            }
          }
        ]
      },
      {
        test: /\.(scss|css)$/,
        loader: [
          "style-loader",
          "css-loader",
          "postcss-loader?parser=postcss-scss",
          "sass-loader"
        ]
      }
    ]
  },

  mode: "development",
  output: {
    path: __dirname + "/dist/public",
    filename: "index.bundle.js"
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".css", ".scss"]
  },
  plugins: [HTMLWebpackPluginConfig]
};
