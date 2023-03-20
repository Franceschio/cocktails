import "./index.scss";

import CocktailCard from "../CocktailCard";

const MainList = ({ cocktailsList }) => {
  return (
    <div className="MainList">
      {cocktailsList.map((cocktail) => (
        <CocktailCard cocktailData={cocktail} key={cocktail.idDrink} />
      ))}
    </div>
  );
};

export default MainList;
