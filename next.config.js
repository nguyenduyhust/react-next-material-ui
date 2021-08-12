const { i18n } = require('./next-i18next.config');

require('dotenv').config({
  path: `.env.${process.env.NODE_ENV || 'development'}`,
});

module.exports = {
  i18n,
  env: {
    SERVER_URL: process.env.SERVER_URL,
  },
};
