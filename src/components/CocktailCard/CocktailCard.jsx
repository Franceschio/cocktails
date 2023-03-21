import "./index.scss";

const CocktailCard = ({ cocktailData, setCocktailInfo, setInfoVisible }) => {
  const setInfo = () => {
    setCocktailInfo(() => cocktailData);
    setInfoVisible(() => true);
  };

  return (
    <div className="CocktailCard">
      <img
        src={cocktailData.strDrinkThumb}
        alt="CardImage"
        className="CardImage"
      />
      <h3 onClick={setInfo}>{cocktailData.strDrink}</h3>
      <div className="cocktailInformations">
        <ul className="ingredients">
          <li>{cocktailData.strIngredient1}</li>
          <li>{cocktailData.strIngredient2}</li>
          {cocktailData.strIngredient3 ? (
            <li>{cocktailData.strIngredient3}</li>
          ) : null}
          {cocktailData.strIngredient4 ? (
            <li>{cocktailData.strIngredient4}</li>
          ) : null}
          {cocktailData.strIngredient5 ? (
            <li>{cocktailData.strIngredient5}</li>
          ) : null}
          {cocktailData.strIngredient6 ? (
            <li>{cocktailData.strIngredient6}</li>
          ) : null}
          {cocktailData.strIngredient7 ? (
            <li>{cocktailData.strIngredient7}</li>
          ) : null}
          {cocktailData.strIngredient8 ? (
            <li>{cocktailData.strIngredient8}</li>
          ) : null}
        </ul>
      </div>
    </div>
  );
};

export default CocktailCard;
