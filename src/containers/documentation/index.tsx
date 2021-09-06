// lib
import React from 'react';
import { NextPage, InitialProps } from 'next';
import * as AppActions from '~/redux/actions/app.action';
// Component
import Typography from '@material-ui/core/Typography';
import Layout from '~/components/layout';
// localizations
import { useTranslation } from '~/i18n';
// types
import { StyledComponentProps } from '~/types/material-ui';
// styles
import { useStyles, styles } from './style';
import { initializeStore } from '~/redux/with-redux';

interface Props extends InitialProps, StyledComponentProps<typeof styles> {}

const Documentation: NextPage<Props, InitialProps> = (props) => {
  const { namespacesRequired } = props;
  const classes = useStyles(props);
  const { t } = useTranslation(namespacesRequired);

  return (
    <Layout>
      <div className={classes.root}>
        <Typography variant="h4" component="h1" gutterBottom>
          {t('documentation')}
        </Typography>
      </div>
    </Layout>
  );
};

Documentation.getInitialProps = async ({ req }) => {
  const userAgent = req ? req.headers['user-agent'] : navigator.userAgent;
  const reduxStore = initializeStore();
  const { dispatch } = reduxStore;
  dispatch(AppActions.detectMobile(userAgent));

  return {
    title: 'Documentation',
    namespacesRequired: ['common', 'homepage'],
    initialReduxState: JSON.stringify(reduxStore.getState()),
  };
};

export default Documentation;
