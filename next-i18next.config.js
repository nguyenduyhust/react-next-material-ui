const path = require('path');

module.exports = {
  i18n: {
    localeDetection: true,
    defaultLocale: 'en',
    locales: ['en', 'ja'],
    localePath: path.resolve('./public/static/locales'),
    keySeparator: '.',
  },
};
