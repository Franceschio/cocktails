import "./App.scss";

import GET from "./utils/http";

import Navbar from "./components/Navbar/Navbar";
import HeroNav from "./components/HeroNav/HeroNav";
import MainList from "./components/MainList";
import Footer from "./components/Footer/Footer";
import CocktailInfo from "./cokctailsInformation/CocktailInfo";
import { useEffect, useState } from "react";

function App() {
  const [cocktailsList, setCocktailsList] = useState([]);

  const [category, setCategory] = useState("Ordinary Drink");

  const [alcoholic, setAlcoholic] = useState("Alcoholic");

  const [cocktailInfo, setCocktailInfo] = useState(null);

  const [infoVisible, setInfoVisible] = useState(false);

  useEffect(() => {
    GET(`/search.php?f=m`).then((data) => setCocktailsList(() => data.drinks));
  }, []);

  return (
    <div className="App">
      <Navbar />
      <HeroNav setCategory={setCategory} setAlcoholic={setAlcoholic} />
      <MainList
        cocktailsList={cocktailsList}
        category={category}
        alcoholic={alcoholic}
        setCocktailInfo={setCocktailInfo}
        setInfoVisible={setInfoVisible}
      />
      <Footer />
      <CocktailInfo
        cocktailData={cocktailInfo}
        infoVisible={infoVisible}
        setInfoVisible={setInfoVisible}
      />
    </div>
  );
}

export default App;
