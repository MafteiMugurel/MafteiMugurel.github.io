import { ThemeContext, themes } from "../../../context/ThemeContext";
import { useState } from "react";
import "./Toggle.scss";

const Toggle = () => {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <ThemeContext.Consumer>
      {({ changeTheme }) => (
        <div className="toggle">
          <input
            type="checkbox"
            id="switch"
            onClick={() => {
              setDarkMode(!darkMode);
              changeTheme(darkMode ? themes.light : themes.dark);
            }}
          />
          <label htmlFor="switch"></label>
        </div>
      )}
    </ThemeContext.Consumer>
  );
};

export default Toggle;
