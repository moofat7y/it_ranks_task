import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./styles/app.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Provider from "./store/Provider.jsx";

import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file

const theme = createTheme({
  typography: {
    allVariants: {
      fontFamily: "Inter",
      textTransform: "none",
      fontSize: 16,
    },
  },
});
ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <ThemeProvider theme={theme}>
    <Provider>
      <App />
    </Provider>
  </ThemeProvider>
  // </React.StrictMode>
);
