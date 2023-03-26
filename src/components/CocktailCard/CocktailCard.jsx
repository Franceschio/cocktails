import styles from "./index.module.scss";
import { createFilteredList } from "../../utils/Funcs&Variables/funcs&variables";

const CocktailCard = ({
  cocktailData,
  setCocktailInfo,
  setInfoVisible,
  filteredCocktails,
  setVisualCocktail,
  setCounterInfo,
}) => {
  const setInfo = () => {
    setCocktailInfo(filteredCocktails[filteredCocktails.indexOf(cocktailData)]);
    setInfoVisible(() => true);
    setCounterInfo(() => filteredCocktails.indexOf(cocktailData));
    setVisualCocktail(filteredCocktails.indexOf(cocktailData));
  };

  const filteredIngredients = createFilteredList(cocktailData, "strIngredient");

  return (
    <div className={styles.CocktailCard}>
      <img
        src={cocktailData.strDrinkThumb}
        alt="CardImage"
        className={styles.cardImage}
        onClick={setInfo}
      />
      <h3 onClick={setInfo}>{cocktailData.strDrink}</h3>
      <div className={styles.cocktailInformations}>
        <ul className={styles.ingredients}>
          {filteredIngredients.map((ingredient) => (
            <li key={ingredient[1]}>{ingredient[1]}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CocktailCard;
