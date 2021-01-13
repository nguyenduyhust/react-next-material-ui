import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

const styles = (theme: Theme) => createStyles({
  root: {

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
  grow: {
    flexGrow: 1,
  }
});

const useStyles = makeStyles(styles);

export { styles, useStyles };
