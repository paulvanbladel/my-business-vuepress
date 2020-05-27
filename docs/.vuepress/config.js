module.exports = {
    title: 'Example',
    description: 'Test',
    chainWebpack(config) {
        config.resolve.alias.set('@variables', require('path').resolve(__dirname, 'styles/variables.styl'))
    },
    pluginOptions: {
        quasar: {
          importStrategy: 'kebab',
          rtlSupport: true
        }
      },
      transpileDependencies: [
        'quasar'
      ]

    // themeConfig: {
    //     nav: [
    //         { text: 'Home', link: '/' },
    //         { text: 'Interviews', link: '/interviews/' }
    //     ]
    // }
}