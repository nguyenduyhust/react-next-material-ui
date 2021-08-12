// lib
import React from 'react';
import { NextPage, InitialProps } from 'next';
// Component
import Typography from '@material-ui/core/Typography';
import Layout from '~/components/layout';
// localizations
import { useTranslation } from 'next-i18next';
// types
import { StyledComponentProps } from '~/types/material-ui';
// styles
import { useStyles, styles } from './style';

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

export default Documentation;
