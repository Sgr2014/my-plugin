const JSZip = require('jszip')
const path = require('path')
const { RawSource } = require('webpack-sources')

class ZipPlugin {
  constructor (options) {
    this.options = options
  }
  apply (compiler) {
    // compiler.hooks.done.tap('Zip Plugin', (stats) => {
    //   console.log('Hello, Zip Plugin')
    // })
    const zip = new JSZip()
    compiler.hooks.emit.tapAsync('ZipPlugin', (compilation, callback) => {
      // 新建一个文件夹
      const folder = zip.folder(this.options.filename)
      for (let filename in compilation.assets) {
        const source = compilation.assets[filename].source()
        folder.file(filename, source)
      }
      zip.generateAsync({type: 'nodebuffer'}).then((content) => {
        const outputPath = path.join(this.options.filename + '.zip')
        compilation.assets[outputPath] = new RawSource(content)
        callback()
      })
    })
  }
}
module.exports = ZipPlugin