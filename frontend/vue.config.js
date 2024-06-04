const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})
module.exports = {
  outputDir: '../frontend/dist',
  assetsDir: 'static',
  publicPath: '/',  // 确保publicPath正确
}
