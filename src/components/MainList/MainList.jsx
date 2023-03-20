import "./index.scss";

import CocktailCard from "../CocktailCard";

const MainList = ({ cocktailsList, category, alcoholic }) => {
  return (
    <div className="MainList">
      {cocktailsList
        .filter((cocktail) => cocktail.strAlcoholic === alcoholic)
        .filter((cocktail) => cocktail.strCategory === category)
        .map((cocktail) => (
          <CocktailCard cocktailData={cocktail} key={cocktail.idDrink} />
        ))}
    </div>
  );
};

export default MainList;
