// lib
import React from 'react';
import { NextPage, InitialProps } from 'next';
// Component
import Typography from '@material-ui/core/Typography';
import Layout from '@views/components/layout';

import { useTranslation, NamespaceEnum } from '@i18n';
import * as AppActions from '@redux/actions/app.action';
import { initializeStore } from '@redux/with-redux';
import { StyledComponentProps } from '@type/material-ui';
import { useStyles, styles } from './style';

interface Props extends InitialProps, StyledComponentProps<typeof styles> {}

const Homepage: NextPage<Props, InitialProps> = (props) => {
  const { namespacesRequired } = props;
  const classes = useStyles(props);
  const { t } = useTranslation(namespacesRequired);

  return (
    <Layout>
      <div className={classes.root}>
        <Typography variant="h4" component="h1" gutterBottom>
          {t('homepage')}
        </Typography>
      </div>
    </Layout>
  );
};

Homepage.getInitialProps = async ({ req }) => {
  const userAgent = req ? req.headers['user-agent'] : navigator.userAgent;
  const reduxStore = initializeStore();
  const { dispatch } = reduxStore;
  dispatch(AppActions.detectMobile(userAgent));

  return {
    title: 'Homepage',
    namespacesRequired: [NamespaceEnum.HOME_PAGE],
    initialReduxState: JSON.stringify(reduxStore.getState()),
  };
};

export default Homepage;
