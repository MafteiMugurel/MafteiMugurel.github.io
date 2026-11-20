import React, { useState, useEffect } from "react";
import { ThemeContext, themes } from "./ThemeContext";

const STORAGE_KEY = "theme";

const getInitialTheme = () => {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === themes.light || saved === themes.dark) return saved;
  } catch (e) {
    // storage unavailable (private mode etc.) – fall through
  }
  return window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: light)").matches
    ? themes.light
    : themes.dark;
};

const ThemeContextWrapper = (props) => {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    try {
      localStorage.setItem(STORAGE_KEY, theme);
    } catch (e) {
      // ignore
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, changeTheme: setTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextWrapper;
