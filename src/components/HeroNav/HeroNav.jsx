import "./index.scss";

const HeroNav = ({ setCategory }) => {
  const onHandleClick = () => {
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
    </div>
  );
};

export default HeroNav;
