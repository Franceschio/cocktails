import { useState } from "react";
import "./index.scss";

const Navbar = () => {
  const refresh = () => {
    location.reload();
  };

  return (
    <div className={`Navbar`}>
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
      <div className="logo">
        <img
          src="https://img.icons8.com/external-vitaliy-gorbachev-blue-vitaly-gorbachev/512/external-cocktail-vacation-vitaliy-gorbachev-blue-vitaly-gorbachev.png"
          alt="logo"
          onClick={refresh}
        />
      </div>
    </div>
  );
};

export default Navbar;
