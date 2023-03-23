import styles from "./index.module.scss";

import CocktailCard from "../CocktailCard";
import { useState } from "react";

const MainList = ({
  cocktailsList,
  category,
  alcoholic,
  setCocktailInfo,
  setInfoVisible,
  searched,
}) => {
  const filteredCocktails = !searched
    ? cocktailsList
        .filter((cocktail) => cocktail.strAlcoholic === alcoholic)
        .filter((cocktail) => cocktail.strCategory === category)
    : cocktailsList
        .filter((cocktail) => cocktail.strAlcoholic === alcoholic)
        .filter((cocktail) => cocktail.strCategory === category)
        .filter((cocktail) =>
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
