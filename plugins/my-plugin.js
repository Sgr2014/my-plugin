class MyPlugin {
  apply (compiler) {
    compiler.hooks.done.tap('My Plugin', (stats) => {
      console.log('Hello, My Plugin')
    })
  }
}
module.exports = MyPlugin