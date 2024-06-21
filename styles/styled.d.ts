import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    typography: {
      main: string;
    };
    colors: {
      light: string;
    };
  }
}
