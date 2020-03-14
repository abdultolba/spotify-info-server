// Ignore 'require is not a function' error

const webpack = require('webpack')

module.exports = {
  mode: "development",
  plugins: [
    new webpack.DefinePlugin({ "global.GENTLY": false })
  ],
}