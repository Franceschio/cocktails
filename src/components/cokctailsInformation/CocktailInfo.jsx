import styles from "./index.module.scss";
import { createFilteredList } from "../../utils/Funcs&Variables/funcs&variables";
import { useState } from "react";

const CocktailInfo = ({
  cocktailData,
  setCocktailInfo,
  infoVisible,
  setInfoVisible,
  filteredCocktails,
  visualCocktail,
}) => {
  const closeInformations = () => {
    setInfoVisible(false);
  };

  const cocktailAfter = () => {
    if (counter === filteredCocktails.length - 1) {
      setCounter(0);
    } else {
      setCounter(counter + 1);
    }
  };

  const cocktailBefore = () => {
    if (counter <= 1) {
      setCounter(filteredCocktails.length - 1);
    } else {
      setCounter(counter - 1);
    }
  };

  const setCocktailMore = () =>
    setCocktailInfo(() =>
      counter === filteredCocktails.length - 1
        ? filteredCocktails[0]
        : filteredCocktails[counter + 1]
    );

  const setCocktailLess = () =>
    setCocktailInfo(() =>
      counter <= 1
        ? filteredCocktails[filteredCocktails.length - 1]
        : filteredCocktails[counter - 1]
    );

  const [counter, setCounter] = useState(visualCocktail + 1);

  const filteredIngredients = createFilteredList(cocktailData, "strIngredient");

  const filteredMeasures = createFilteredList(cocktailData, "strMeasure");

  return (
    <div className={`${styles.CocktailInfo} ${infoVisible && styles.active}`}>
      <div className={styles.infoImage}>
        <img src={cocktailData.strDrinkThumb} alt="Info image" />
      </div>
      <div className={styles.actualInfo}>
        <h1 className={styles.cocktailName}>{cocktailData.strDrink}</h1>
        <div className={styles.needed}>
          <div className={styles.ingredients}>
            <h3>Ingredients:</h3>
            <ul>
              {filteredIngredients.map((ingredient) => (
                <li key={ingredient[1]}>{ingredient[1]}</li>
              ))}
            </ul>
          </div>

          <div className={styles.measures}>
            <h3>Measures:</h3>
            <ul>
              {filteredMeasures.map((measure) => (
                <li key={filteredMeasures.indexOf(measure)}>{measure[1]}</li>
              ))}
            </ul>
          </div>
        </div>
        <h3>Preparation:</h3>
        <p>{cocktailData.strInstructionsIT}</p>
      </div>
      <div className={styles.changeCocktail}>
        <div
          onClick={() => {
            cocktailBefore();
            setCocktailLess();
          }}
          className={styles.leftArrow}
        >
          {"<"}
        </div>
        <div
          onClick={() => {
            cocktailAfter();
            setCocktailMore();
          }}
          className={styles.rightArrow}
        >
          {">"}
        </div>
      </div>
      <div className={styles.closeInfo} onClick={closeInformations}>
        X
      </div>
    </div>
  );
};

export default CocktailInfo;
