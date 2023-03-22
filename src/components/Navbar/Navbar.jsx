import { useState } from "react";
import styles from "./index.module.scss";
import { alphabet } from "../../utils/Funcs&Variables/funcs&variables";

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

  return (
    <div className={styles.Navbar}>
      <div
        className={`${styles.alphabetOrder} ${
          alphabetTable && styles.activeAlphabet
        }`}
      >
        {alphabet.map((letter) => (
          <p
            className={styles.singleLetter}
            onClick={() => newLetter(letter)}
            key={letter}
          >
            {letter}
          </p>
        ))}
      </div>
      <div className={styles.activateSearch}>
        <img
          src="https://img.icons8.com/external-kmg-design-flat-kmg-design/512/external-search-ui-essentials-kmg-design-flat-kmg-design.png"
          alt="search"
          className={styles.searchActivator}
        />
      </div>
      <ul>
        <a href="#">
          <li>Home</li>
        </a>
        <a href="#">
          <li>About</li>
        </a>
        <li onClick={activateAlphabet}>
          set
          <img
            src="https://img.icons8.com/nolan/512/abc.png"
            alt="imgAlphabet"
          />
        </li>
      </ul>
      <form className={styles.searchBar}>
        <input className={styles.search} type="text" placeholder="Search..." />
        <input className={styles.searchBtn} type="submit" value="search" />
      </form>
      <div className={styles.logo}>
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
