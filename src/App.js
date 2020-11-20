import React from "react";
import { ThemeProvider } from "styled-components";
import { Router } from "@reach/router";
import Header from "./components/header/header";
import GlobalStyles from "./global.styles";
import { lightTheme, darkTheme } from "./styles/theme";
import { useDarkMode } from "./useDarkMode";
import HomePage from "./pages/home-page/home-page";
import Details from "./pages/home-page/details/details";

function App() {
  var [theme, toggleTheme] = useDarkMode();
  const themeMode = theme === "light" ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyles />

      <Header toggleTheme={toggleTheme} theme={theme} />

      <Router>
        <HomePage path="/" default />
        <Details path="/details/:id" />
      </Router>
    </ThemeProvider>
  );
}

export default App;
