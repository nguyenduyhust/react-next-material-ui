import { makeStyles, Theme, createStyles, fade } from '@material-ui/core/styles';

const SEARCH_BOX_WIDTH = 300;

const styles = (theme: Theme) =>
  createStyles({
    root: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.colors.black, 0.05),
      width: SEARCH_BOX_WIDTH,
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: theme.colors.nobel,
    },
    inputRoot: {
      width: '100%',
      color: theme.colors.charcoal,
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    },
  });

const useStyles = makeStyles(styles);

export { styles, useStyles };
