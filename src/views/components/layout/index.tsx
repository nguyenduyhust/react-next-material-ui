// Libs
import React, { useEffect } from 'react';
// Component
import Header from './header';
// type
import { StyledComponentProps } from '@type/material-ui';
// Hooks
import { useFirebaseAuth } from '@hooks/firebase.hook';
import { useI18nSelectLanguage } from '@hooks/i18n.hook';
// selectors
import { useSelector } from 'react-redux';
import { sUser } from '@selectors/app.selector';
// style
import { useStyles, styles } from './style';
// Misc

interface Props extends StyledComponentProps<typeof styles> {}

const Layout: React.FC<Props> = (props) => {
  const { children } = props;
  const classes = useStyles(props);
  useFirebaseAuth();
  useI18nSelectLanguage();
  const user = useSelector(sUser);

  if (!user) {
    return null;
  }

  return (
    <div className={classes.root}>
      <Header />
      <div className={classes.content}>{children}</div>
    </div>
  );
};

export default Layout;
