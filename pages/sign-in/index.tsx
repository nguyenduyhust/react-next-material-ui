import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
export { default } from '~/containers/sign-in';

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    title: 'Sign in',
    namespacesRequired: 'auth-page',
    ...(await serverSideTranslations(locale || 'en', ['auth-page'])),
  },
});
