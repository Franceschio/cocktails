import "./index.scss";

import CocktailCard from "../CocktailCard";
import { useState } from "react";

const MainList = ({
  cocktailsList,
  category,
  alcoholic,
  setCocktailInfo,
  setInfoVisible,
}) => {
  const filteredCocktails = cocktailsList
    .filter((cocktail) => cocktail.strAlcoholic === alcoholic)
    .filter((cocktail) => cocktail.strCategory === category);

  return (
    <div className="MainList">
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
        <h3 className="notFoundMsg">
          sembrerebbe che non siano presenti prodotti di questa categoria in
          questo momento.
        </h3>
      )}
    </div>
  );
};

export default MainList;
