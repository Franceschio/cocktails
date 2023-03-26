import styles from "./index.module.scss";

import CocktailCard from "../CocktailCard";
import { useState } from "react";

const MainList = ({
  filteredCocktails,
  setCocktailInfo,
  setInfoVisible,
  searched,
  setVisualCocktail,
  setCounterInfo,
}) => {
  filteredCocktails = !searched
    ? filteredCocktails
    : filteredCocktails.filter((cocktail) =>
        cocktail.strDrink.toLowerCase().includes(searched.toLowerCase())
      );

  return (
    <div className={styles.MainList}>
      {filteredCocktails.length > 0 ? (
        filteredCocktails.map((cocktail) => (
          <CocktailCard
            cocktailData={cocktail}
            setCocktailInfo={setCocktailInfo}
            setInfoVisible={setInfoVisible}
            filteredCocktails={filteredCocktails}
            setVisualCocktail={setVisualCocktail}
            setCounterInfo={setCounterInfo}
            key={cocktail.idDrink}
          />
        ))
      ) : (
        <h3 className={styles.notFoundMsg}>
          sembrerebbe che non siano presenti prodotti di questa categoria in
          questo momento.
        </h3>
      )}
    </div>
  );
};

export default MainList;
