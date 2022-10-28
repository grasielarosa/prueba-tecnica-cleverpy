import "styled-components";
import { defaultTheme } from "./src/styles";

type ThemeInterface = typeof defaultTheme;

declare module "styled-components" {
  interface DefaultTheme extends ThemeInterface {}
}
