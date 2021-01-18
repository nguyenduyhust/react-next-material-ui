import NextI18Next from 'next-i18next';
import path from 'path';
import moment from 'moment';
import { ns, defaultNS } from './ns';

const {
  Trans,
  Link,
  Router,
  i18n,
  initPromise,
  config,
  useTranslation,
  withTranslation,
  appWithTranslation,
} = new NextI18Next({
  ns,
  defaultNS,
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
  interpolation: {
    format: function (value, format, lng) {
      if (value instanceof Date) {
        return moment(value).format(format);
      }
      return value;
    },
  },
});

export {
  Trans,
  Link,
  Router,
  i18n,
  initPromise,
  config,
  useTranslation,
  withTranslation,
  appWithTranslation,
};
export { NamespaceEnum } from './ns';
