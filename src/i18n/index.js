const NextI18Next = require('next-i18next').default;
const path = require('path');

module.exports = new NextI18Next({
  defaultLanguage: 'en',
  otherLanguages: ['ja'],
  browserLanguageDetection: true,
  serverLanguageDetection: true,
  detection: {
    order: ['querystring', 'cookie', 'header', 'navigator'],
    lookupQuerystring: 'lng',
    lookupCookie: 'lng',
    lookupHeader: 'accept-language',
    caches: ['cookie'],
  },
  localePath: path.resolve('public/static/locales'),
});
