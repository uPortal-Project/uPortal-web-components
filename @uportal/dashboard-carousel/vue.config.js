module.exports = {
  transpileDependencies: ['handlebars', 'ky'],
  devServer: {
    proxy: {
      '/uPortal': {
        target: 'http://localhost:8080',
        changeOrigin: true
      }
    }
  }
};
