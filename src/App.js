import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./global.styles";
import { lightTheme, darkTheme } from "./styles/theme";

function App() {
  var [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <button onClick={toggleTheme}> Toggle Theme </button>
    </ThemeProvider>
  );
}

export default App;
