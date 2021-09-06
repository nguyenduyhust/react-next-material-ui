// lib
import React from 'react';
import { NextPage, InitialProps } from 'next';
// Component
import Typography from '@material-ui/core/Typography';
import Layout from '~/components/layout';
import * as AppActions from '~/redux/actions/app.action';
import { StyledComponentProps } from '~/types/material-ui';
import { useStyles, styles } from './style';
import { useSelector } from 'react-redux';
import { sIsMobile } from '~/redux/selectors/app.selector';
import { initializeStore } from '~/redux/with-redux';
import { useTranslation } from '~/i18n';

interface Props extends InitialProps, StyledComponentProps<typeof styles> {}

const Homepage: NextPage<Props, InitialProps> = (props) => {
  const { namespacesRequired } = props;
  const classes = useStyles(props);
  const { t, i18n } = useTranslation(namespacesRequired);
  const isMobile = useSelector(sIsMobile);

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
    title: 'Màn hình',
    namespacesRequired: ['common', 'homepage'],
    initialReduxState: JSON.stringify(reduxStore.getState()),
  };
};

export default Homepage;
