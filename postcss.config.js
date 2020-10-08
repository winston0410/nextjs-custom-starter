module.exports = {
  plugins: {
    tailwindcss: {},
    'postcss-flexbugs-fixes': {},
    'postcss-preset-env': {
      stage: 3
    },
    // 'postcss-momentum-scrolling': {},
    // 'postcss-sparrow': {
    //   transformations: [
    //     {
    //       selectors: ['*'],
    //       inclusion: true,
    //       callbacks: [
    //         require('postcss-sparrow-auto-text-indent')
    //       ]
    //     }
    //   ]
    // },
    // autoprefixer: {},
    cssnano: {
      preset: ['advanced', {
        discardComments: {
          removeAll: true
        },
        zindex: false,
        discardUnused: false
      }]
    }
  }
}
