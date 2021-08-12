// Libs
import React from 'react';
// Component
import Header from './header';
import SideBar from './side-bar';
// type
import { StyledComponentProps } from '~/types/material-ui';
// Hooks
import { useFirebaseAuth } from '~/hooks/firebase.hook';
// selectors
import { useSelector } from 'react-redux';
import { sUser } from '~/redux/selectors/app.selector';
// style
import { useStyles, styles } from './style';
// Misc

interface Props extends StyledComponentProps<typeof styles> {}

const Layout: React.FC<Props> = (props) => {
  const { children } = props;
  const classes = useStyles(props);
  useFirebaseAuth();
  const user = useSelector(sUser);

  if (!user) {
    return null;
  }

  return (
    <div className={classes.root}>
      <Header />
      <SideBar />
      <div className={classes.content}>{children}</div>
    </div>
  );
};

export default Layout;
