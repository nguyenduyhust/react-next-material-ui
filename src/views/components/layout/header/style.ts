import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

const styles = (theme: Theme) =>
  createStyles({
    root: {},
    menuButton: {
      marginRight: theme.spacing(2),
    },
    menuIcon: {
      color: theme.colors.white,
    },
    title: {
      marginRight: theme.spacing(2),
    },
    accountInfo: {
      display: 'flex',
      alignItems: 'center',
      cursor: 'pointer',
      userSelect: 'none',
    },
    accountIcon: {
      marginRight: theme.spacing(1),
    },
    grow: {
      flexGrow: 1,
    },
    avatar: {
      width: 30,
      borderRadius: '50%',
    },
  });

const useStyles = makeStyles(styles);

export { styles, useStyles };
