import { TOOLBAR_MIN_HEIGHT } from './header/style';
import { SIDE_BAR_WIDTH } from './side-bar/style';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

const styles = (theme: Theme) =>
  createStyles({
    root: {},
    content: {
      paddingTop: TOOLBAR_MIN_HEIGHT,
      paddingLeft: SIDE_BAR_WIDTH,
      backgroundColor: theme.colors.aliceBlue,
      minHeight: '100vh',
    },
  });

const useStyles = makeStyles(styles);

export { styles, useStyles };
