require('dotenv').config({
  path: `.env.${process.env.NODE_ENV || 'development'}`,
});

module.exports = {
  env: {
    SERVER_URL: process.env.SERVER_URL,
  },
};
