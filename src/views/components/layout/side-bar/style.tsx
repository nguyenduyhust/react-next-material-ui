import { TOOLBAR_MIN_HEIGHT } from '../header/style';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

const SIDE_BAR_WIDTH = 250;

const styles = (theme: Theme) =>
  createStyles({
    drawer: {
      width: SIDE_BAR_WIDTH,
    },
    drawerPaper: {
      width: SIDE_BAR_WIDTH,
      backgroundColor: theme.colors.midnight,
    },
    reactIcon: {
      width: 32,
      height: 32,
      marginRight: 10,
    },
    title: {
      height: TOOLBAR_MIN_HEIGHT,
      color: theme.colors.white,
      justifyContent: 'center',
    },
    list: {
      marginTop: theme.spacing(2),
    },
    listItem: {
      color: theme.colors.white,
    },
    listItemIcon: {
      color: theme.colors.white,
    },
  });

const useStyles = makeStyles(styles);

export { styles, useStyles, SIDE_BAR_WIDTH };
