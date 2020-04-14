module.exports = {
    devServer: {
        proxy: {
          '/api': {
            target: 'http://api.douban.com',
            ws: true,
            changeOrigin: true,
            pathRewrite: {
                '^/api': '/' //!!!
            }
          },
        }
      }
}