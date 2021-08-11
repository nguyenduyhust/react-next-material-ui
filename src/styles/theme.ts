import { createMuiTheme, Theme } from '@material-ui/core/styles';
import {
  BLACK_COLOR,
  WHITE_COLOR,
  TORY_BLUE_COLOR,
  NAVY_BLUE_COLOR,
  PATTENS_BLUE_COLOR,
  MID_NIGHT_COLOR,
  ALICE_BLUE_COLOR,
  NOBEL_COLOR,
  CHARCOAL_COLOR,
} from '../constants/colors';
import {
  XS_BREAKPOINT,
  SM_BREAKPOINT,
  MD_BREAKPOINT,
  LG_BREAKPOINT,
  XL_BREAKPOINT,
} from '../constants/breakpoints';

const theme: Theme = createMuiTheme({
  colors: {
    black: BLACK_COLOR,
    white: WHITE_COLOR,
    toryBlue: TORY_BLUE_COLOR,
    navyBlue: NAVY_BLUE_COLOR,
    pattensBlue: PATTENS_BLUE_COLOR,
    midnight: MID_NIGHT_COLOR,
    aliceBlue: ALICE_BLUE_COLOR,
    nobel: NOBEL_COLOR,
    charcoal: CHARCOAL_COLOR,
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
