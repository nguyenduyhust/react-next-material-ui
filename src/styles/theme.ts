import { createMuiTheme, Theme } from '@material-ui/core/styles';
import { BLACK_COLOR, WHITE_COLOR, TORY_BLUE_COLOR, NAVY_BLUE_COLOR } from './colors';
import {
  XS_BREAKPOINT,
  SM_BREAKPOINT,
  MD_BREAKPOINT,
  LG_BREAKPOINT,
  XL_BREAKPOINT,
} from './breakpoints';

const theme: Theme = createMuiTheme({
  colors: {
    black: BLACK_COLOR,
    white: WHITE_COLOR,
    toryBlue: TORY_BLUE_COLOR,
    navyBlue: NAVY_BLUE_COLOR,
  },
  breakpoints: {
    values: {
      xs: XS_BREAKPOINT,
      sm: SM_BREAKPOINT,
      md: MD_BREAKPOINT,
      lg: LG_BREAKPOINT,
      xl: XL_BREAKPOINT,
    },
  },
  spacing: 8,
  palette: {
    primary: {
      main: NAVY_BLUE_COLOR,
    },
  },
});

export default theme;
