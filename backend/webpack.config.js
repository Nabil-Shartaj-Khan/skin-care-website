const path = require("path");

module.exports = {
  mode: "production",
  entry: "./src/main.js",
  output: {
    path: path.join(__dirname, "dist"),
    publicPath: "/",
    filename: "app.js",
  },
  target: "node",
  optimization: {
    minimize: false,
  },
};
