import React, { useState, useEffect } from "react";
import { ThemeContext, themes } from "./ThemeContext";

const ThemeContextWrapper = (props) => {
  const [theme, setTheme] = useState(themes.dark);

  function changeTheme(theme) {
    setTheme(theme);
  }

  useEffect(() => {
    switch (theme) {
      case themes.light:
        document
          .querySelector(":root")
          .style.setProperty("--primary", "#ffb633");
        document
          .querySelector(":root")
          .style.setProperty("--secondary", "#0094c2");
        document.querySelector(":root").style.setProperty("--white", "#313131");
        document.querySelector(":root").style.setProperty("--black", "#ffffff");
        document.querySelector(":root").style.setProperty("--grey", "#FFFBF1");
        document
          .querySelector(":root")
          .style.setProperty("--burgundy", "#e10032");
        document.querySelector(":root").style.setProperty("--cream", "#2c2c2c");
        document.querySelector(":root").style.setProperty("--peach", "#ff9900");
        break;
      case themes.dark:
      default:
        document.querySelector(":root").removeAttribute("style");

        break;
    }
  }, [theme]);

  return (
    <>
      <ThemeContext.Provider value={{ theme: theme, changeTheme: changeTheme }}>
        {props.children}
      </ThemeContext.Provider>
    </>
  );
};

export default ThemeContextWrapper;
