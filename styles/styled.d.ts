import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    typography: {
      main: string;
      secondary: string;
    };
    colors: {
      light: string;
      tooltip: string;
    };
  }
}
