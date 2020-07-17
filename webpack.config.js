const path = require('path');

const config = {
  entry: {
    sample: './src/js/sample.ts'
  },
  output: {
    path: path.resolve(__dirname, 'dest/js/'),
    filename: '[name].bundle.js'
  },
  module: {
    rules: [
      { test: /\.ts$/, loader: "awesome-typescript-loader" },
      { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
    ]
  }
};

module.exports = config;
