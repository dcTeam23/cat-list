import React from "react";
import { MdDarkMode, MdOutlineDarkMode } from "react-icons/md";

export const DarkMode = () => {

  const [theme, setTheme] = React.useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  const element = document.documentElement; // html element

  React.useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  return (
    <div className="dark-mode-switch absolute left-1 top-3/9">
      {theme === "light" ? (
        <MdOutlineDarkMode
          onClick={() => setTheme("dark")}
          className="w-12 cursor-pointer drop-shadow[1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-200 z-10"
        />
      ) : (
        <MdDarkMode
          onClick={() => setTheme("light")}
          className="w-12 cursor-pointer drop-shadow[1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-200 z-10"
        />
      )}
    </div>
  );
};

export default DarkMode;
