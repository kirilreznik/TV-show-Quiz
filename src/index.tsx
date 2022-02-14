import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ThemeProvider, CssBaseline } from "@mui/material";
import theme from "./theme/index";
import { AppProvider } from "./context/AppContext";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <AppProvider>
        <CssBaseline />
        <App />
      </AppProvider>
    </ThemeProvider>
  </React.StrictMode>,

  document.getElementById("root")
);
