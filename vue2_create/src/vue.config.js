module.exports = {
  devServer: {
    // 配置反向代理
    proxy: {
      // 只要往这个接口发起请求，就会代理到http://m.maoyan.com，只要修改了这个文件都需重启服务
      '/ajax': {
        target: 'http://m.maoyan.com',
        // ws: true,
        changeOrigin: true
      },
      // '/foo': {
      //   target: '<other_url>'
      // }
    }
  }
}