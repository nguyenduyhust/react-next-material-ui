// lib
import React from 'react';
import { NextPage, InitialProps } from 'next';
// Component
import Typography from '@material-ui/core/Typography';
import Layout from '~/components/layout';

import { useTranslation } from 'next-i18next';
import { StyledComponentProps } from '~/types/material-ui';
import { useStyles, styles } from './style';
import { useSelector } from 'react-redux';
import { sIsMobile } from '~/redux/selectors/app.selector';

interface Props extends InitialProps, StyledComponentProps<typeof styles> {}

const Homepage: NextPage<Props, InitialProps> = (props) => {
  const { namespacesRequired } = props;
  const classes = useStyles(props);
  const { t } = useTranslation(namespacesRequired);
  const isMobile = useSelector(sIsMobile);
  console.log('isMobile: ', isMobile);

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

export default Homepage;
