module.exports = {
  devServer: {
    proxy: {
      '/uPortal': {
        target: 'http://localhost:8080',
        changeOrigin: true,
      },
    },
  },
};
