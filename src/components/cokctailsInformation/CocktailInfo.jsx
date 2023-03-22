import styles from "./index.module.scss";
import { createFilteredList } from "../../utils/Funcs&Variables/funcs&variables";

const CocktailInfo = ({ cocktailData, infoVisible, setInfoVisible }) => {
  const closeInformations = () => {
    setInfoVisible(false);
  };

  const filteredIngredients = createFilteredList(cocktailData, "strIngredient");

  return (
    <div className={`${styles.CocktailInfo} ${infoVisible && styles.active}`}>
      <div className={styles.infoImage}>
        <img src={cocktailData.strDrinkThumb} alt="Info image" />
      </div>
      <div className={styles.actualInfo}>
        <h1 className={styles.cocktailName}>{cocktailData.strDrink}</h1>
        <h3>Ingredients:</h3>
        <ul>
          {filteredIngredients.map((ingredient) => (
            <li key={ingredient[1]}>{ingredient[1]}</li>
          ))}
        </ul>
        <h3>Preparation:</h3>
        <p>{cocktailData.strInstructionsIT}</p>
      </div>
      <div className={styles.closeInfo} onClick={closeInformations}>
        X
      </div>
    </div>
  );
};

export default CocktailInfo;
