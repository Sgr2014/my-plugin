const path = require('path')
const MyPlugin = require('./plugins/my-plugin.js')

module.exports = {
  entry: {
    lib: path.join(__dirname, 'main.js')
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js'
  },
  plugins: [new MyPlugin()]
}