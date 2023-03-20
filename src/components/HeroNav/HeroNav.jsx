import "./index.scss";

const HeroNav = ({ setCategory }) => {
  const onHandleClick = (value) => {
    setCategory(value);
  };
  return (
    <div className="HeroNav">
      <ul className="types">
        <li>
          <img
            src="https://img.icons8.com/ios-glyphs/512/cocktail.png"
            alt="type Alcoholic"
          />
          Alcoholic
        </li>
        <li>
          <img
            src="https://img.icons8.com/fluency/512/cocktail.png"
            alt="type Alcohol free"
          />
          Alcohol free
        </li>
        <li>
          <img
            src="https://img.icons8.com/pastel-glyph/512/cocktail--v3.png"
            alt="type wines"
          />
          Wine
        </li>
        <li>
          <img
            src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/512/external-dessert-foodies-flaticons-lineal-color-flat-icons.png"
            alt="type Dessert"
          />
          Dessert
        </li>
      </ul>
      <hr />
      <ul className="categories">
        <li onClick={() => onHandleClick("Ordinary Drink")}>Ordinary Drink</li>
        <li onClick={() => onHandleClick("Cocktail")}>Cocktail</li>
        <li onClick={() => onHandleClick("Shot")}>Shot</li>
        <li onClick={() => onHandleClick("Punch / Party Drink")}>Punch</li>
        <li onClick={() => onHandleClick("Coffee / Tea")}>Coffee</li>
        <li onClick={() => onHandleClick("Other / Unknown")}>Other</li>
      </ul>
    </div>
  );
};

export default HeroNav;
