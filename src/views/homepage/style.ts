import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

const styles = (theme: Theme) =>
  createStyles({
    deviceLabel: {
      color: theme.colors.toryBlue,
    },
  });

const useStyles = makeStyles(styles);

export { styles, useStyles };
