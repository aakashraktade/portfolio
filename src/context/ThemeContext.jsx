// src/context/ThemeContext.jsx
import React, { createContext, useMemo, useState, useEffect } from "react";
import { createTheme, ThemeProvider as MUIThemeProvider } from "@mui/material/styles";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [mode, setMode] = useState(localStorage.getItem("theme") || "dark");

  useEffect(() => {
    localStorage.setItem("theme", mode);
  }, [mode]);

  const toggleTheme = () => setMode((prev) => (prev === "light" ? "dark" : "light"));

  // Create MUI theme
  const theme = useMemo(() => 
    createTheme({
      palette: {
        mode,
        primary: {
          main: "#8245ec",
        },
        background: {
          default: mode === "light" ? "#f5f5f5" : "#121212",
          paper: mode === "light" ? "#fff" : "#1b1baa",
        },
        text: {
          primary: mode === "light" ? "#000" : "#fff",
        },
      },
      typography: {
        fontFamily: "Poppins, sans-serif",
      },
      components: {
        MuiPaper: {
          styleOverrides: {
            root: {
              transition: "all 0.3s",
            },
          },
        },
        MuiButton: {
          styleOverrides: {
            root: {
              transition: "all 0.3s",
            },
          },
        },
      },
    })
  , [mode]);

  return (
    <ThemeContext.Provider value={{ mode, toggleTheme }}>
      <MUIThemeProvider theme={theme}>{children}</MUIThemeProvider>
    </ThemeContext.Provider>
  );
};
