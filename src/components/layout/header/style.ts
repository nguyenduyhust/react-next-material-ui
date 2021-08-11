import { SIDE_BAR_WIDTH } from '../side-bar/style';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

const TOOLBAR_MIN_HEIGHT = 60;

const styles = (theme: Theme) =>
  createStyles({
    appBar: {
      width: `calc(100% - ${SIDE_BAR_WIDTH}px)`,
      backgroundColor: theme.colors.white,
    },
    toolbar: {
      minHeight: TOOLBAR_MIN_HEIGHT,
    },
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

export { styles, useStyles, TOOLBAR_MIN_HEIGHT };
