module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/production-sub-path/'
    : '',
  devServer: {
    proxy: "http://0.0.0.0:8000",
  }
}