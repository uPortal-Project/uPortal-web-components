module.exports = {
  // options...
  runtimeCompiler: true,
  devServer: {
    proxy: {
      '/uPortal': {
        target: 'http://localhost:8080',
        changeOrigin: true
      }
    }
  },
  transpileDependencies: ['handlebars/lib/handlebars', 'ky']
};
