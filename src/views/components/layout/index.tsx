// Libs
import React, { useEffect } from 'react';
import firebase from 'firebase/app';
import { useRouter } from 'next/router';
// Component
import Header from './header';
// type
import { StyledComponentProps } from '@type/material-ui';
// style
import { useStyles, styles } from './style';
// Misc
import { AppRoutesEnum } from '@enums/route.enum';

interface Props extends StyledComponentProps<typeof styles> {}

const Layout: React.FC<Props> = (props) => {
  const { children } = props;
  const classes = useStyles(props);
  const router = useRouter();

  const user = firebase.auth().currentUser;
  useEffect(() => {
    if (!user) {
      router.push(AppRoutesEnum.SIGN_IN);
    }
  }, [user]);

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
