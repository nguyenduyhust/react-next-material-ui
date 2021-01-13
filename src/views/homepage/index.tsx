// lib
import React from 'react';
import { NextPage, GetServerSideProps } from 'next';
import { useSelector } from 'react-redux';
// Component
import { sIsMobile } from '@selectors/app.selector';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Layout from '@views/components/layout';

import { useTranslation } from '@i18n';
import * as AppActions from '@actions/app.action';
import { initializeStore } from '@redux/with-redux';
import { StyledComponentProps } from '@type/style';
import { useStyles, styles } from './style';

interface Props extends StyledComponentProps<typeof styles> { }

const Homepage: NextPage<Props> = (props) => {
  const isMobile = useSelector(sIsMobile);
  const classes = useStyles(props);
  const { t } = useTranslation(['homepage', 'common']);

  return (
    <Layout>
      < Container maxWidth="sm" >
        <Box my={4}>
          <Typography variant="h4" component="h1" gutterBottom>
            {t('homepage')}
          </Typography>
          <div className={classes.deviceLabel}>
            {isMobile ? t('common:mobile') : t('common:desktop')}
          </div>
        </Box>
      </Container >
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const userAgent = req ? req.headers['user-agent'] : navigator.userAgent;
  const reduxStore = initializeStore();
  const { dispatch } = reduxStore;
  dispatch(AppActions.detectMobile(userAgent));

  return {
    props: {
      title: 'Homepage',
      initialReduxState: JSON.stringify(reduxStore.getState()),
    },
  };
};

export default Homepage;
