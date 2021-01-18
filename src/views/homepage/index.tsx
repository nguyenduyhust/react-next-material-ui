// lib
import React from 'react';
import { NextPage, InitialProps } from 'next';
import { useSelector } from 'react-redux';
// Component
import { sIsMobile } from '@selectors/app.selector';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Layout from '@views/components/layout';

import { useTranslation, NamespaceEnum } from '@i18n';
import * as AppActions from '@actions/app.action';
import { initializeStore } from '@redux/with-redux';
import { StyledComponentProps } from '@type/material-ui';
import { useStyles, styles } from './style';

interface Props extends InitialProps, StyledComponentProps<typeof styles> {}

const Homepage: NextPage<Props, InitialProps> = (props) => {
  const { namespacesRequired } = props;
  const isMobile = useSelector(sIsMobile);
  const classes = useStyles(props);
  const { t } = useTranslation(namespacesRequired);

  return (
    <Layout>
      <Container maxWidth="sm">
        <Box my={4}>
          <Typography variant="h4" component="h1" gutterBottom>
            {t('homepage')}
          </Typography>
          <div className={classes.deviceLabel}>
            {isMobile ? t('common:mobile') : t('common:desktop')}
          </div>
        </Box>
      </Container>
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
    namespacesRequired: [NamespaceEnum.COMMON, NamespaceEnum.HOME_PAGE],
    initialReduxState: JSON.stringify(reduxStore.getState()),
  };
};

export default Homepage;
