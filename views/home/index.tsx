// lib
import React from 'react';
import { NextPage } from 'next';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { useSelector } from 'react-redux';
// Component

import { Store } from '../../redux/stores/configure-store';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

interface Props { }

const Homepage: NextPage<Props> = () => {
  const isMobile = useSelector((store: Store) => store.appState.isMobile);
  const classes = useStyles();

  return <Container maxWidth="sm">
    <Box my={4}>
      <Typography variant="h4" component="h1" gutterBottom>
        HOME PAGE
      </Typography>
      <div className={classes.deviceLabel}>{isMobile ? "Mobile" : "Desktop"}</div>
    </Box>
  </Container>
};

const useStyles = makeStyles((theme: Theme) => createStyles({
  deviceLabel: {
    color: 'red'
  },
}));

export default Homepage;
