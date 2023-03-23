import { useRef, useState } from "react";
import styles from "./index.module.scss";

const HeroNav = ({ setCategory, setAlcoholic }) => {
  const onHandleCategory = (value) => {
    setCategory(value);
    setActualCategory(value);
  };

  const onHandleAlcoholic = (value) => {
    setAlcoholic(value);
    setActualType(value);
  };

  const [actualType, setActualType] = useState("Alcoholic");

  const [actualCategory, setActualCategory] = useState("Ordinary Drink");

  const [categories, setCategories] = useState([
    "Ordinary Drink",
    "Cocktail",
    "Shot",
    "Punch / Party Drink",
    "Coffee / Tea",
    "Other / Unknown",
  ]);

  return (
    <div className={styles.HeroNav}>
      <h1>Iceberg lounge</h1>
      <ul className={styles.types}>
        <li onClick={() => onHandleAlcoholic("Alcoholic")}>
          <img
            src="https://img.icons8.com/ios-glyphs/512/cocktail.png"
            alt="type Alcoholic"
          />
          Alcoholic
        </li>
        <li onClick={() => onHandleAlcoholic("Non alcoholic")}>
          <img
            src="https://img.icons8.com/fluency/512/cocktail.png"
            alt="type Alcohol free"
          />
          Unalcoholic
        </li>
      </ul>
      <hr />
      <ul className={styles.categories}>
        {categories.map((category) => (
          <li onClick={() => onHandleCategory(category)}>{category}</li>
        ))}
      </ul>
      <div className={styles.activeFilters}>
        <h3>{actualType}:</h3>
        <p>{actualCategory}</p>
      </div>
    </div>
  );
};

export default HeroNav;
