import { DefaultTheme } from "styled-components/dist/types";
import "@fontsource/lato/100.css";
import "@fontsource/lato/300.css";
import "@fontsource/lato/400.css";
import "@fontsource/lato/700.css";
import "@fontsource/lato/900.css";
import "@fontsource/roboto/100.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "@fontsource/roboto/900.css";

const mainTheme: DefaultTheme = {
  typography: {
    main: "'Lato', sans-serif",
    secondary: "'Roboto', sans-serif",
  },
  colors: {
    light: "#fff",
  },
};

export default mainTheme;
