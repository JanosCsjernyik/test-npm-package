const path = require("path");
const nodeExternals = require("webpack-node-externals");

module.exports = {
  entry: path.resolve(__dirname, "lib/index.js"),
  output: {
    path: path.resolve(__dirname, "./build"),
    filename: "index.js",
    library: "",
    libraryTarget: "commonjs"
  },
  externals: [nodeExternals()],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-env", "@babel/react"]
        }
      },
      {
        // For pure CSS (without CSS modules)
        test: /\.css$/i,
        exclude: /\.module\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        // For CSS modules
        test: /\.module\.css$/i,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
            },
          },
        ],
      }
    ]
  }
};
