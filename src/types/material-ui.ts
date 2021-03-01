import { ColorProperty } from 'csstype';
import {
  ClassKeyOfStyles,
  StyledComponentProps as MUIStyledComponentProps,
} from '@material-ui/styles/withStyles';

interface ThemeColors {
  black: ColorProperty;
  white: ColorProperty;
  toryBlue: ColorProperty;
  navyBlue: ColorProperty;
  pattensBlue: ColorProperty;
}

declare module '@material-ui/core/styles/createMuiTheme' {
  interface Theme {
    colors: ThemeColors;
  }
  interface ThemeOptions {
    colors: ThemeColors;
  }
}

export type StyledComponentProps<StylesOrClassKey> = MUIStyledComponentProps<
  ClassKeyOfStyles<StylesOrClassKey>
>;
