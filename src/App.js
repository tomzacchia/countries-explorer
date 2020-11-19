import React from "react";
import { ThemeProvider } from "styled-components";
import Header from "./components/header/header";
import GlobalStyles from "./global.styles";
import { lightTheme, darkTheme } from "./styles/theme";
import { useDarkMode } from "./useDarkMode";

function App() {
  var [theme, toggleTheme] = useDarkMode();
  const themeMode = theme === "light" ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyles />
      <Header toggleTheme={toggleTheme} />
    </ThemeProvider>
  );
}

export default App;
