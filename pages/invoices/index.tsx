import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
export { default } from '~/containers/invoices';

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    title: 'Invoice',
    namespacesRequired: 'common',
    ...(await serverSideTranslations(locale || 'en', ['common'])),
  },
});
