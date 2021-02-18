import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { link } from '@styles/common';

const styles = (theme: Theme) =>
  createStyles({
    root: {},
    paper: {
      margin: theme.spacing(8, 4),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(3),
    },
    submit: {
      margin: theme.spacing(2, 0, 0),
    },
    forgotPassword: {
      ...link,
    },
    signUp: {
      ...link,
    },
  });

const useStyles = makeStyles(styles);

export { styles, useStyles };
