import { useState } from "react";
import "./index.scss";

const Navbar = ({ alphabetTable, setAlphabetTable, setSelectedLetter }) => {
  const refresh = () => {
    location.reload();
  };

  const activateAlphabet = () => {
    setAlphabetTable((prev) => !prev);
  };

  const newLetter = (letter) => {
    setSelectedLetter(() => letter);
  };

  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

  return (
    <div className={`Navbar`}>
      <div className={`alphabetOrder ${alphabetTable && "activeAlphabet"}`}>
        {alphabet.map((letter) => (
          <p onClick={() => newLetter(letter)} key={letter}>
            {letter}
          </p>
        ))}
      </div>
      <div className="activateSearch">
        <img
          src="https://img.icons8.com/external-kmg-design-flat-kmg-design/512/external-search-ui-essentials-kmg-design-flat-kmg-design.png"
          alt="search"
        />
      </div>
      <ul>
        <a href="#">
          <li>Home</li>
        </a>
        <a href="#">
          <li>About</li>
        </a>
        <li onClick={activateAlphabet}>Set letter</li>
      </ul>
      <form className="searchBar">
        <input className="search" type="text" placeholder="Search..." />
        <input className="searchBtn" type="submit" value="search" />
      </form>
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
