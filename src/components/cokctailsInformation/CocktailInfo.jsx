import "./index.scss";

const CocktailInfo = ({ cocktailData, infoVisible, setInfoVisible }) => {
  const closeInformations = () => {
    setInfoVisible(false);
  };
  return (
    <div className={`CocktailInfo ${infoVisible && "active"}`}>
      <div className="infoImage">
        <img src={cocktailData.strDrinkThumb} alt="Info image" />
      </div>
      <div className="actualInfo">
        <h1 className="cocktailName">{cocktailData.strDrink}</h1>
        <h3>Ingredients:</h3>
        <ul>
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
        <h3>Preparation:</h3>
        <p>{cocktailData.strInstructionsIT}</p>
      </div>
      <div className="closeInfo" onClick={closeInformations}>
        X
      </div>
    </div>
  );
};

export default CocktailInfo;
