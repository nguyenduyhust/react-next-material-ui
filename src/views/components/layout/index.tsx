import React from 'react';
// Component
import Header from './header';
// type
import { StyledComponentProps } from '@type/material-ui';
// style
import { useStyles, styles } from './style';

interface Props extends StyledComponentProps<typeof styles> { }

const Layout: React.FC<Props> = props => {
  const { children } = props;
  const classes = useStyles(props);

  return (
    <div>
      <Header />
      <div className={classes.content}>
        {children}
      </div>
    </div>
  );
};

export default Layout;
