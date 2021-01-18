import React from 'react';
import { StyledComponentProps } from '@type/material-ui';

import { useStyles, styles } from './style';

interface Props extends StyledComponentProps<typeof styles> {}

const Layout: React.FC<Props> = (props) => {
  const classes = useStyles(props);

  return <div></div>;
};

export default Layout;
