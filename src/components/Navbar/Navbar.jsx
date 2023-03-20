import "./index.scss";

const Navbar = () => {
  return (
    <div className="Navbar">
      <ul>
        <a href="#">
          <li>Home</li>
        </a>
        <a href="#">
          <li>About</li>
        </a>
        <a href="#">
          <li>Contact</li>
        </a>
      </ul>
      <div className="logo">
        <img
          src="https://img.icons8.com/external-kiranshastry-solid-kiranshastry/512/external-cocktail-new-year-kiranshastry-solid-kiranshastry.png"
          alt="logo"
        />
      </div>
    </div>
  );
};

export default Navbar;
