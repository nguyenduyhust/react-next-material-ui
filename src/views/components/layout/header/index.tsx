// lib
import React from 'react';
import firebase from 'firebase/app';
// component
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import InputBase from '@material-ui/core/InputBase';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import SearchBox from './search-box';
// localization
import { useTranslation, NamespaceEnum } from '@i18n';
// type
import { StyledComponentProps } from '@type/material-ui';
// style
import { useStyles, styles } from './style';

interface Props extends StyledComponentProps<typeof styles> {}

const Layout: React.FC<Props> = (props) => {
  const { t } = useTranslation(NamespaceEnum.COMMON);
  const classes = useStyles(props);
  const user = firebase.auth().currentUser;

  if (!user) {
    return null;
  }

  console.log(user.displayName);

  return (
    <AppBar>
      <Toolbar>
        <IconButton className={classes.menuButton}>
          <MenuIcon className={classes.menuIcon} />
        </IconButton>
        <Typography variant="h6" className={classes.title}>
          {t('header.title')}
        </Typography>
        <SearchBox />
        <div className={classes.grow} />
        <div className={classes.accountInfo}>
          <AccountCircleIcon className={classes.accountIcon} />
          <Typography variant="body1">{user.displayName}</Typography>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Layout;
