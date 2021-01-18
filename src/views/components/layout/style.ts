import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

const styles = (theme: Theme) =>
  createStyles({
    root: {},
    content: {
      paddingTop: theme.spacing(8),
    },
  });

const useStyles = makeStyles(styles);

export { styles, useStyles };
