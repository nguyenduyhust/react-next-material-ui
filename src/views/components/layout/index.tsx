// Libs
import React from 'react';
// Component
import Header from './header';
// type
import { StyledComponentProps } from '@type/material-ui';
// Hooks
import { useCurrentUser } from '~/hooks/firebase.hook';
// style
import { useStyles, styles } from './style';
// Misc

interface Props extends StyledComponentProps<typeof styles> {}

const Layout: React.FC<Props> = (props) => {
  const { children } = props;
  const classes = useStyles(props);
  const user = useCurrentUser();

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
