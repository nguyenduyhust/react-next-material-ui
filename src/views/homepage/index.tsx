// lib
import React from 'react';
import { NextPage } from 'next';
import { useSelector } from 'react-redux';
// Component
import { Store } from '../../redux/stores/configure-store';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { GetServerSideProps } from 'next';
import * as AppActions from '../../redux/actions/app-action';

import { initializeStore } from '../../hooks/redux';
import { StyledComponentProps } from '../../types/style';
import { useStyles, styles } from './style';

interface Props extends StyledComponentProps<typeof styles> {}

const Homepage: NextPage<Props> = (props) => {
  const isMobile = useSelector((store: Store) => store.appState.isMobile);
  const classes = useStyles(props);

  const func = () => {};

  return (
    <Container maxWidth="sm">
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom onClick={func}>
          HOME PAGE
        </Typography>
        <div className={classes.deviceLabel}>{isMobile ? 'Mobile' : 'Desktop'}</div>
      </Box>
    </Container>
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
      initialReduxState: reduxStore.getState(),
    },
  };
};

export default Homepage;
