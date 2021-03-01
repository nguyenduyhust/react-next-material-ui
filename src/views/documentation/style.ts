import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

const styles = (theme: Theme) =>
  createStyles({
    root: {
      padding: theme.spacing(5),
    },
  });

const useStyles = makeStyles(styles);

export { styles, useStyles };
