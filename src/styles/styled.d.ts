import "styled-components";
import { defaultTheme } from ".";

type ThemeInterface = typeof defaultTheme;

declare module "styled-components" {
  interface DefaultTheme extends ThemeInterface {}
}
