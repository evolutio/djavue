const { join } = require('path')
const _apimock = process.env.API_MOCK == '1' || (process.env.API_MOCK == undefined && process.env.npm_lifecycle_event == 'dev')
const _apijs = _apimock ? 'apimock.js' : 'api.js';

module.exports = {
  head: {
    title: 'frontend',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Google+Sans:400,500|Material+Icons' }
    ]
  },
  css: [
    { src: '~/assets/css/main.styl', lang: 'styl' },
  ],
  loading: { color: '#3B8070' },
  router: {
    middleware: ['fwdcookies', 'auth'],
  },
  build: {
    vendor: [
      'vuetify',
      'babel-polyfill'
    ],
    extend (config, { isDev, isClient }) {
      home = config.resolve.alias['~'];
      config.resolve.alias['~apijs'] = home + '/components/api/' + _apijs;
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  plugins: [
    '~plugins/vuetify.js',
    {src: '~plugins/vue2-filters', ssr: false},
  ]
}
