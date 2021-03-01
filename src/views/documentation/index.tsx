// lib
import React from 'react';
import { NextPage, InitialProps } from 'next';
// Component
import Layout from '@views/components/layout';
import Typography from '@material-ui/core/Typography';
// localizations
import { useTranslation, NamespaceEnum } from '@i18n';
// types
import { StyledComponentProps } from '@type/material-ui';
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

Documentation.getInitialProps = async ({ req }) => {
  return {
    title: 'Documentation',
    namespacesRequired: [],
  };
};

export default Documentation;
