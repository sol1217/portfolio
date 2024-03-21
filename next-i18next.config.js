// next-i18next.config.js
const path = require('path')
const { i18n } = require('next-i18next')

module.exports = {
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es'],
  },
  localePath: path.resolve('./public/locales'),
}
