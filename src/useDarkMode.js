// import { useState } from "react";
import useLocalStorage from "./useLocalStorage";

export const useDarkMode = () => {
  const [theme, setTheme] = useLocalStorage("theme", "light");

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return [theme, toggleTheme];
};
