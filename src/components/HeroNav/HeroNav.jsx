import { useRef } from "react";
import "./index.scss";

const HeroNav = ({ setCategory, setAlcoholic }) => {
  const onHandleCategory = (value) => {
    setCategory(value);
  };

  const onHandleAlcoholic = (value) => {
    setAlcoholic(value);
  };

  return (
    <div className="HeroNav">
      <h1>Iceberg lounge</h1>
      <ul className="types">
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
      <ul className="categories">
        <li onClick={() => onHandleCategory("Ordinary Drink")}>
          Ordinary Drink
        </li>
        <li onClick={() => onHandleCategory("Cocktail")}>Cocktail</li>
        <li onClick={() => onHandleCategory("Shot")}>Shot</li>
        <li onClick={() => onHandleCategory("Punch / Party Drink")}>Punch</li>
        <li onClick={() => onHandleCategory("Coffee / Tea")}>Coffee</li>
        <li onClick={() => onHandleCategory("Other / Unknown")}>Other</li>
      </ul>
    </div>
  );
};

export default HeroNav;
