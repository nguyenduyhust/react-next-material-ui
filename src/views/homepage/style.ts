import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

const styles = (theme: Theme) =>
  createStyles({
    deviceLabel: {
      color: 'red',
    },
  });

const useStyles = makeStyles(styles);

export { styles, useStyles };
