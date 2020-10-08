const TerserPlugin = require('terser-webpack-plugin')
const withPWA = require('next-pwa')

module.exports = withPWA({
  async headers () {
    return [

    ]
  },
  webpack: (config, {
    buildId,
    dev,
    isServer,
    defaultLoaders,
    webpack
  }) => {
    // config.optimization.minimizer.push(new TerserPlugin())
    config.optimization.minimize = true
    // console.log(webpack)
    // console.log(config.module.rules)
    return config
  },
  compress: true,
  devIndicators: {
    autoPrerender: true
  },
  poweredByHeader: true,
  generateEtags: true,
  // distDir: 'dist',
  trailingSlash: false,
  reactStrictMode: true,
  pwa: {
    dest: 'public',
    disable: process.env.NODE_ENV === 'development',
    register: true,
    scope: '/app',
    sw: 'service-worker.js'
  }
})
