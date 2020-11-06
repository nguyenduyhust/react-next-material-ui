import { createMuiTheme, Theme } from '@material-ui/core/styles';
import { BLACK_COLOR, WHITE_COLOR, TORY_BLUE_COLOR } from './colors';
import {
  XS_BREAKPOINT,
  SM_BREAKPOINT,
  MD_BREAKPOINT,
  LG_BREAKPOINT,
  XL_BREAKPOINT,
} from './breakpoints';

interface ThemeColors {
  black: React.CSSProperties['color'];
  white: React.CSSProperties['color'];
  toryBlue: React.CSSProperties['color'];
}

declare module '@material-ui/core/styles/createMuiTheme' {
  interface Theme {
    colors: ThemeColors;
  }
  interface ThemeOptions {
    colors: ThemeColors;
  }
}

const theme: Theme = createMuiTheme({
  colors: {
    black: BLACK_COLOR,
    white: WHITE_COLOR,
    toryBlue: TORY_BLUE_COLOR,
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
});

export default theme;
