import React from "react";
import { ThemeProvider } from "styled-components";
import { Router } from "@reach/router";
import Header from "./components/header/header";
import * as Styles from "./global.styles";
import { lightTheme, darkTheme } from "./styles/theme";
import { useDarkMode } from "./useDarkMode";
import HomePage from "./pages/home-page/home-page";
import Details from "./pages/details/details";

function App() {
  var [theme, toggleTheme] = useDarkMode();
  const themeMode = theme === "light" ? lightTheme : darkTheme;

  function scrollToTop() {
    window.scrollTo(0, 0);
  }

  return (
    <ThemeProvider theme={themeMode}>
      <Styles.GlobalStyles />

      <Header toggleTheme={toggleTheme} theme={theme} />

      <Router>
        <HomePage path="/" default />
        <Details path="/details/:alphaCode" />
      </Router>

      <Styles.ToTopIcon
        className="fas fa-arrow-up"
        onClick={scrollToTop}
      ></Styles.ToTopIcon>
    </ThemeProvider>
  );
}

export default App;
