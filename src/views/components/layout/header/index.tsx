// lib
import React from 'react';
// component
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
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
  const { t } = useTranslation(NamespaceEnum.HOME_PAGE);
  const classes = useStyles(props);

  return (
    <AppBar>
      <Toolbar>
        <IconButton className={classes.menuButton}>
          <MenuIcon className={classes.menuIcon} />
        </IconButton>
        <Typography variant="h6" className={classes.title}>
          {t('page_title')}
        </Typography>
        <SearchBox />
        <div className={classes.grow} />
        <div>
          <IconButton color="inherit">
            <AccountCircleIcon />
          </IconButton>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Layout;
