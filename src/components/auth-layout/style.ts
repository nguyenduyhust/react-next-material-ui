import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

const styles = (theme: Theme) =>
  createStyles({
    root: {
      height: '100vh',
    },
    bgImage: {
      backgroundImage: 'url(https://source.unsplash.com/random)',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    },
    paper: {
      margin: theme.spacing(8, 'auto'),
      maxWidth: 450,
      width: '90%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
  });

const useStyles = makeStyles(styles);

export { styles, useStyles };
