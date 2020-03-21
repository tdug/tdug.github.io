import React, {createContext, useState } from "react";
import MuiThemeProvider from "@material-ui/styles/ThemeProvider";
import CssBaseline from "@material-ui/core/CssBaseline";
import { createMuiTheme } from "@material-ui/core/styles"

const ThemeContext = createContext([{}, () => {}]);

const baseTheme = createMuiTheme({});
const darkBaseTheme = createMuiTheme({palette: {type: 'dark'}});

function ThemeProvider({children}) {
  const [theme, setTheme] = useState("dark");

  const getTheme = name => {
    switch(name) {
    case "dark":
      return darkBaseTheme;
    default:
      return baseTheme;
    }
  }

  return (
    <ThemeContext.Provider value={[theme, setTheme]}>
      <MuiThemeProvider theme={getTheme(theme)}>
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    </ThemeContext.Provider>
  );
}

export {ThemeContext, ThemeProvider};
