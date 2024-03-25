// i18n.js
const NextI18Next = require('next-i18next').default;

module.exports = new NextI18Next({
  defaultLanguage: 'en',
  otherLanguages: ['es'], // Añade los códigos de idioma de las traducciones que desees soportar
  localeSubpaths: {
    en: 'en',
    es: 'es',
  },
});
