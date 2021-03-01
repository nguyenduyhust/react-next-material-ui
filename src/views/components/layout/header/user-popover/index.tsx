// lib
import React, { useCallback, useState } from 'react';
import firebase from 'firebase';
import clsx from 'clsx';
import { useRouter } from 'next/router';
import { useSnackbar } from 'notistack';
// component
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import SettingsIcon from '@material-ui/icons/Settings';
import UserSettingDialog from '../user-setting-dialog';
// enums
import { AppRoutesEnum } from '@enums/route.enum';
// type
import { StyledComponentProps } from '@type/material-ui';
// localization
import { useTranslation, NamespaceEnum } from '@i18n';
// style
import { useStyles, styles } from './style';

interface Props extends StyledComponentProps<typeof styles> {
  user: firebase.User;
  anchorEl: HTMLElement | null;
  onClose: () => void;
}

const UserPopover: React.FC<Props> = (props) => {
  const { t } = useTranslation(NamespaceEnum.COMMON);
  const { anchorEl, onClose, user } = props;
  const classes = useStyles(props);
  const router = useRouter();
  const { enqueueSnackbar } = useSnackbar();
  const [openUserSettingDialog, setOpenUserSettingDialog] = useState(false);

  const onOpenUserSettingDialog = useCallback(() => {
    setOpenUserSettingDialog(true);
  }, []);
  const onCloseUserSettingDialog = useCallback(() => {
    setOpenUserSettingDialog(false);
  }, []);

  const onClickSettingListItem = useCallback(() => {
    onClose();
    onOpenUserSettingDialog();
  }, []);

  const onSignOut = useCallback(() => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        router.push(AppRoutesEnum.SIGN_IN);
      })
      .catch((error) => {
        enqueueSnackbar(error.message, { variant: 'error' });
      });
  }, []);

  return (
    <>
      <UserSettingDialog
        user={user}
        open={openUserSettingDialog}
        onClose={onCloseUserSettingDialog}
      />
      <Popover
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        onClose={onClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <List>
          <ListItem className={clsx(classes.listItem, classes.separateLine)}>
            <img
              className={classes.avatar}
              src={user.photoURL || '/static/icons/default_account_icon.png'}
              alt=""
            />
            <div>
              <Typography variant="body1">{user.displayName}</Typography>
              <Typography variant="caption" className={classes.email}>
                {user.email}
              </Typography>
            </div>
          </ListItem>
          <ListItem
            className={clsx(classes.listItem, classes.separateLine)}
            button
            onClick={onClickSettingListItem}
          >
            {t('setting')}
            <SettingsIcon />
          </ListItem>
          <ListItem className={classes.listItem} button onClick={onSignOut}>
            {t('header.sign_out')}
            <ExitToAppIcon />
          </ListItem>
        </List>
      </Popover>
    </>
  );
};

export default UserPopover;
