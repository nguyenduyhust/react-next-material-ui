import React from 'react';
import { WithStyles } from '@material-ui/core/styles';

import { useStyles, styles } from './style';

interface Props extends WithStyles<typeof styles> {

}

const Layout: React.FC<Props> = props => {
  const classes = useStyles(props);

  return <div></div>;
};

export default Layout;