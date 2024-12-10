"use client";
import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
  typography: {
    fontFamily: "Poppins",
  },
  palette: {
    primary: {
      main: "#800080",
    },
    secondary: {
      main: "#fff",
    },
  },
});
