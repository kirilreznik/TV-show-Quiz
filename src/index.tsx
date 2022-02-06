import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { createTheme, ThemeProvider } from "@mui/material";
import { AppProvider } from "./context/AppContext";
export const theme = createTheme({
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
});
ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <AppProvider>
        <App />
      </AppProvider>
    </ThemeProvider>
  </React.StrictMode>,

  document.getElementById("root")
);
