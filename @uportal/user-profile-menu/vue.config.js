module.exports = {
  // options...
  runtimeCompiler: true,
  devServer: {
    proxy: {
      '/proxy': {
        target: 'http://localhost:8080',
        changeOrigin: true,
        pathRewrite: {
          '^/proxy': '/'
        }
      }
    }
  }
};
