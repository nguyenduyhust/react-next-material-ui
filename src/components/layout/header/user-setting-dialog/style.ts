import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

const styles = (theme: Theme) =>
  createStyles({
    root: {},
    dialogPaper: {
      width: 600,
    },
    dialogTitle: {
      padding: theme.spacing(5, 8, 0),
    },
    dialogContent: {
      padding: theme.spacing(5, 8, 0),
      overflow: 'hidden',
    },
    dialogActions: {
      padding: theme.spacing(5, 8, 5),
    },
    avatar: {
      position: 'relative',
      margin: 'auto',
      marginBottom: theme.spacing(1),
      width: 85,
      height: 85,
      '& img': {
        borderRadius: '50%',
        width: '100%',
        height: '100%',
      },
    },
    editAvatarButton: {
      position: 'absolute',
      top: 55,
      right: -5,
      width: 22,
      height: 22,
      backgroundColor: theme.colors.navyBlue,
      '&:hover': {
        backgroundColor: theme.colors.navyBlue,
      },
      '& svg': {
        width: 12,
        height: 12,
        color: theme.colors.white,
      },
    },
    submitButton: {
      width: 100,
    },
    loadingIcon: {
      color: theme.colors.white,
      width: '25px !important',
      height: '25px !important',
    },
  });

const useStyles = makeStyles(styles);

export { styles, useStyles };
