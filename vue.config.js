module.exports = {
  devServer: {
    proxy: {
      '/api/': {
        target: 'http://192.168.110.253:5000',
        changeOrigin: true
      }
    }
  }
}
