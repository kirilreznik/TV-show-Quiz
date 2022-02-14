import { createTheme } from "@mui/material";
import globalStyles from "./globalStyles";
const theme = createTheme({
  typography: {
    h1: {
      fontFamily: ["Monofett", "cursive"].join(","),
    },
  },
  palette: {
    primary: {
      main: "#fff",
    },
    secondary: {
      main: "#000000",
    },
    error: {
      main: "#E50914",
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: globalStyles,
    },
    MuiButton: {
      defaultProps: {
        color: "error",
        variant: "contained",
        size: "large",
      },
    },
  },
});
export default theme;
