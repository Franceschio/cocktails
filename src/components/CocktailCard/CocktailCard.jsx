import "./index.scss";

const CocktailCard = ({ cocktailData }) => {
  return (
    <div className="CocktailCard">
      <img
        src={cocktailData.strDrinkThumb}
        alt="CardImage"
        className="CardImage"
      />
      <h3>{cocktailData.strDrink}</h3>
      <div className="cocktailInformations">
        <ul className="ingredients">
          <li>{cocktailData.strIngredient1}</li>
          <li>{cocktailData.strIngredient2}</li>
          <li>{cocktailData.strIngredient3}</li>
          <li>{cocktailData.strIngredient4}</li>
        </ul>
      </div>
    </div>
  );
};

export default CocktailCard;
