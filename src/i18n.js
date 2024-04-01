// i18n.js
const NextI18Next = require('next-i18next').default

module.exports = new NextI18Next({
  defaultLanguage: 'en',
  otherLanguages: ['es'],
  localeSubpaths: {
    en: 'en',
    es: 'es',
  },
})
