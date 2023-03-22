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
    setAlphabetTable((prev) => !prev);
  };

  const changeInputValue = (e) => {
    setInputValue(() => e.target.value);
  };

  const [inputValue, setInputValue] = useState("");

  const [isSearchActive, setSearchActive] = useState(false);

  const setSearch = () => setSearchActive((prev) => !prev);

  return (
    <div className={styles.Navbar}>
      <div
        className={`${styles.searchCont} ${
          isSearchActive && styles.searchActive
        }`}
      >
        <form className={styles.searchBar}>
          <input
            className={styles.search}
            type="text"
            placeholder="Search..."
            value={inputValue}
            onChange={changeInputValue}
            required
          />
          <input className={styles.searchBtn} type="submit" value="search" />
        </form>
      </div>

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

      <div onClick={setSearch} className={styles.activateSearch}>
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
        <input
          className={styles.search}
          type="text"
          placeholder="Search..."
          value={inputValue}
          onChange={changeInputValue}
          required
        />
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
