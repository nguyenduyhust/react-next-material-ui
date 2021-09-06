import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
// components
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import DashboardOutlinedIcon from '@material-ui/icons/DashboardOutlined';
import LibraryBooksOutlinedIcon from '@material-ui/icons/LibraryBooksOutlined';
import CreditCardOutlinedIcon from '@material-ui/icons/CreditCardOutlined';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
// enums
import { AppRoutesEnum } from '~/enums/route.enum';
// localization
import { useTranslation } from '~/i18n';
// types
import { StyledComponentProps } from '~/types/material-ui';

import { useStyles, styles } from './style';

interface Props extends StyledComponentProps<typeof styles> {}

const Layout: React.FC<Props> = (props) => {
  const classes = useStyles(props);
  const router = useRouter();
  const { t } = useTranslation('common');

  return (
    <Drawer variant="permanent" classes={{ root: classes.drawer, paper: classes.drawerPaper }}>
      <ListItem className={classes.title}>
        <img className={classes.reactIcon} src="/static/icons/react_icon.svg" alt="" />
        <Typography variant="h6">{t('header.title')}</Typography>
      </ListItem>
      <List className={classes.list}>
        <Link href={AppRoutesEnum.HOME} passHref>
          <ListItem
            className={classes.listItem}
            button
            selected={router.pathname === AppRoutesEnum.HOME}
          >
            <ListItemIcon>
              <DashboardOutlinedIcon className={classes.listItemIcon} />
            </ListItemIcon>
            <ListItemText>
              <Typography variant="subtitle2">{t('homepage')}</Typography>
            </ListItemText>
          </ListItem>
        </Link>
        <Link href={AppRoutesEnum.ORDERS} passHref>
          <ListItem
            className={classes.listItem}
            button
            selected={router.pathname === AppRoutesEnum.ORDERS}
          >
            <ListItemIcon>
              <ShoppingCartOutlinedIcon className={classes.listItemIcon} />
            </ListItemIcon>
            <ListItemText>
              <Typography variant="subtitle2">{t('orders')}</Typography>
            </ListItemText>
          </ListItem>
        </Link>
        <Link href={AppRoutesEnum.INVOICES} passHref>
          <ListItem
            className={classes.listItem}
            button
            selected={router.pathname === AppRoutesEnum.INVOICES}
          >
            <ListItemIcon>
              <CreditCardOutlinedIcon className={classes.listItemIcon} />
            </ListItemIcon>
            <ListItemText>
              <Typography variant="subtitle2">{t('invoices')}</Typography>
            </ListItemText>
          </ListItem>
        </Link>
        <Link href={AppRoutesEnum.DOCUMENTATION} passHref>
          <ListItem
            className={classes.listItem}
            button
            selected={router.pathname === AppRoutesEnum.DOCUMENTATION}
          >
            <ListItemIcon>
              <LibraryBooksOutlinedIcon className={classes.listItemIcon} />
            </ListItemIcon>
            <ListItemText>
              <Typography variant="subtitle2">{t('documentation')}</Typography>
            </ListItemText>
          </ListItem>
        </Link>
      </List>
    </Drawer>
  );
};

export default Layout;
