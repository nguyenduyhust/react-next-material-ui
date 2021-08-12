import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
export { default } from '~/containers/documentation';

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    title: 'Documentation',
    namespacesRequired: 'common',
    ...(await serverSideTranslations(locale || 'en', ['common'])),
  },
});
