import { makeStyles, Theme, createStyles, fade } from '@material-ui/core/styles';

const styles = (theme: Theme) =>
  createStyles({
    root: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.colors.white, 0.15),
      '&:hover': {
        backgroundColor: fade(theme.colors.white, 0.25),
      },
      marginRight: theme.spacing(2),
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputRoot: {
      color: 'inherit',
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    },
  });

const useStyles = makeStyles(styles);

export { styles, useStyles };
