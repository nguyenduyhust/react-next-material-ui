// lib
import React from 'react';
import { NextPage } from 'next';
import { useSelector } from 'react-redux';
import { Store } from '../../redux/stores/configure-store';
// Component

import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

interface Props { }

const Homepage: NextPage<Props> = () => {
  const isMobile = useSelector((store: Store) => store.appState.isMobile);

  return <Container maxWidth="sm">
    <Box my={4}>
      <Typography variant="h4" component="h1" gutterBottom>
        HOME PAGE
      </Typography>
      <div>{isMobile ? "Mobile" : "Desktop"}</div>
    </Box>
  </Container>
};

export default Homepage;
