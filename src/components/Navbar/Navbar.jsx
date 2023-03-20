import { useState } from "react";
import "./index.scss";

const Navbar = ({ darkMode, setDarkMode }) => {
  const refresh = () => {
    location.reload();
  };

  const switchMode = () => {
    setDarkMode((prev) => !prev);
  };
  return (
    <div className={`Navbar ${darkMode && "darkMode"}`}>
      <ul>
        <a href="#">
          <li>Home</li>
        </a>
        <a href="#">
          <li>About</li>
        </a>
        <a href="#">
          <li>Contact</li>
        </a>
      </ul>
      <div
        className={`darkModeSwitch ${darkMode && "on"}`}
        onClick={switchMode}
      >
        {darkMode ? "on" : "off"}
      </div>
      <div className="logo">
        {darkMode ? (
          <img
            src="https://img.icons8.com/external-vitaliy-gorbachev-blue-vitaly-gorbachev/512/external-cocktail-vacation-vitaliy-gorbachev-blue-vitaly-gorbachev.png"
            alt="logo"
            onClick={refresh}
          />
        ) : (
          <img
            src="https://img.icons8.com/external-kiranshastry-solid-kiranshastry/512/external-cocktail-new-year-kiranshastry-solid-kiranshastry.png"
            alt="logo"
            onClick={refresh}
          />
        )}
      </div>
    </div>
  );
};

export default Navbar;
