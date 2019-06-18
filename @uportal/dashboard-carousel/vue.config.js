module.exports = {
  transpileDependencies: ['ky'],
  devServer: {
    proxy: {
      '/uPortal': {
        target: 'http://localhost:8080',
        changeOrigin: true,
      },
    },
  },
};
