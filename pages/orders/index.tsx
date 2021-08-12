import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
export { default } from '~/containers/orders';

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    title: 'Order',
    namespacesRequired: 'common',
    ...(await serverSideTranslations(locale || 'en', ['common'])),
  },
});
