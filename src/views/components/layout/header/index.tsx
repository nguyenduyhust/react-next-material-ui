// lib
import React, { useCallback } from 'react';
// component
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import SearchBox from './search-box';
import UserPopover from './user-popover';
// hooks
import { useFirebaseAuth } from '@hooks/firebase.hook';
// selectors
import { useSelector } from 'react-redux';
import { sUser } from '@redux/selectors/app.selector';
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
  const [userPopoverAnchorEl, setUserPopoverAnchorEl] = React.useState<HTMLButtonElement | null>(
    null,
  );
  const onAvatarClick = useCallback((event: React.MouseEvent<HTMLButtonElement>) => {
    setUserPopoverAnchorEl(event.currentTarget);
  }, []);
  const onUserPopoverClose = useCallback(() => {
    setUserPopoverAnchorEl(null);
  }, []);

  useFirebaseAuth();

  const user = useSelector(sUser);
  if (!user) {
    return null;
  }

  return (
    <AppBar position="fixed" elevation={0} className={classes.appBar}>
      <Toolbar className={classes.toolbar}>
        <SearchBox />
        <div className={classes.grow} />
        <div className={classes.accountInfo}>
          <IconButton onClick={onAvatarClick}>
            <img
              className={classes.avatar}
              src={user.photoURL || '/static/icons/default_account_icon.png'}
              alt=""
            />
          </IconButton>
        </div>
      </Toolbar>
      <UserPopover user={user} anchorEl={userPopoverAnchorEl} onClose={onUserPopoverClose} />
    </AppBar>
  );
};

export default Layout;
