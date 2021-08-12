import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
export { default } from '~/containers/sign-up';

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    title: 'Sign up',
    namespacesRequired: 'auth-page',
    ...(await serverSideTranslations(locale || 'en', ['auth-page'])),
  },
});
