import React from "react";
import MoonIcon from "../assets/icon-moon.svg";
import { useContext } from "react";
import { ThemeContext } from "../App";
import SunIcon  from "../assets/icon-sun.svg";

export const Top = () => {
  const { theme, setTheme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className="top">
      <h1>devfinder</h1>
      <div onClick={() => toggleTheme()} className="theme-toggler">
        {theme === "light" ? (
          <div className="toggletheme">
            <p>DARK</p>
            <img src={MoonIcon}></img>
          </div>
        ) : (
          <div className="toggletheme">
            <p>LIGHT</p>
            <img src={SunIcon}></img>
          </div>
        )}
      </div>
    </div>
  );
};
