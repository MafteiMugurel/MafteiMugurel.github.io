import { useContext } from "react";
import { ThemeContext, themes } from "../../../context/ThemeContext";
import Icon from "../../icons/Icon";
import "./Toggle.scss";

const Toggle = () => {
  const { theme, changeTheme } = useContext(ThemeContext);
  const isDark = theme === themes.dark;

  return (
    <button
      className="toggle"
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      title={isDark ? "Light theme" : "Dark theme"}
      onClick={() => changeTheme(isDark ? themes.light : themes.dark)}
    >
      <Icon name={isDark ? "sun" : "moon"} size={18} />
    </button>
  );
};

export default Toggle;
