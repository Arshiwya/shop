import { createContext, memo, useState } from "react";
// import { getFromLocal, setToLocal } from "../js/utils/browserMemo";
import { getFromLocal , setToLocal } from "../Js/BrowserMemo";

const ThemeContext = createContext(null);
const ThemeContextProvider = memo(({ children }) => {
  const initTheme = getFromLocal("theme") === "dark" ? true : false;
  // console.log("init theme", getFromLocal("theme"));

  const [isDark, setIsDark] = useState(initTheme);

  const changToDark = () => {
    setIsDark(true);
    setToLocal("theme", "dark");
  };

  const changToLight = () => {
    setIsDark(false);
    setToLocal("theme", "light");
  };

  const toggleTheme = () => {
    setToLocal("theme", isDark ? "light" : "dark");
    setIsDark(!isDark);
  };

  const ThemeContextValue = {
    isDark,
    changToDark,
    changToLight,
    toggleTheme,
  };

  return (
    <ThemeContext.Provider value={ThemeContextValue}>
      {children}
    </ThemeContext.Provider>
  );
});

export { ThemeContext, ThemeContextProvider };
