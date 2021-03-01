import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

const styles = (theme: Theme) =>
  createStyles({
    root: {},
    listItem: {
      width: 200,
      justifyContent: 'space-between',
    },
    separateLine: {
      borderBottom: `1px solid ${theme.colors.pattensBlue}`,
    },
    avatar: {
      width: 40,
      borderRadius: '50%',
      marginRight: theme.spacing(1),
    },
    email: {
      color: theme.colors.navyBlue,
    },
  });

const useStyles = makeStyles(styles);

export { styles, useStyles };
