import "./index.scss";

import CocktailCard from "../CocktailCard";

const MainList = ({
  cocktailsList,
  category,
  alcoholic,
  setCocktailInfo,
  setInfoVisible,
}) => {
  return (
    <div className="MainList">
      {cocktailsList
        .filter((cocktail) => cocktail.strAlcoholic === alcoholic)
        .filter((cocktail) => cocktail.strCategory === category)
        .map((cocktail) => (
          <CocktailCard
            cocktailData={cocktail}
            setCocktailInfo={setCocktailInfo}
            setInfoVisible={setInfoVisible}
            key={cocktail.idDrink}
          />
        ))}
    </div>
  );
};

export default MainList;
