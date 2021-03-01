import { useEffect } from 'react';
// localization
import { useTranslation } from '@i18n';
// selectors
import { useSelector } from 'react-redux';
import { sUserPreference } from '@selectors/app.selector';

export const useI18nSelectLanguage = () => {
  const { language } = useSelector(sUserPreference);
  const { i18n } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language]);
};
