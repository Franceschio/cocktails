import styles from "./App.module.scss";

import GET from "./utils/http";

import Navbar from "./components/Navbar/Navbar";
import HeroNav from "./components/HeroNav/HeroNav";
import MainList from "./components/MainList";
import Footer from "./components/Footer/Footer";
import CocktailInfo from "./components/cokctailsInformation/CocktailInfo";
import { useEffect, useState } from "react";

function App() {
  const [cocktailsList, setCocktailsList] = useState([]);

  const [category, setCategory] = useState("Ordinary Drink");

  const [alcoholic, setAlcoholic] = useState("Alcoholic");

  const [cocktailInfo, setCocktailInfo] = useState({});

  const [infoVisible, setInfoVisible] = useState(false);

  const [alphabetTable, setAlphabetTable] = useState(false);

  const [selectedLetter, setSelectedLetter] = useState("a");

  const [searched, setSearched] = useState(null);

  useEffect(() => {
    GET(`/search.php?f=${selectedLetter}`).then((data) =>
      setCocktailsList(() => data.drinks)
    );
  }, [selectedLetter]);

  return (
    <div className={styles.App}>
      <Navbar
        alphabetTable={alphabetTable}
        setAlphabetTable={setAlphabetTable}
        setSelectedLetter={setSelectedLetter}
        selectedLetter={selectedLetter}
        setSearched={setSearched}
      />
      <HeroNav setCategory={setCategory} setAlcoholic={setAlcoholic} />
      <MainList
        cocktailsList={cocktailsList}
        category={category}
        alcoholic={alcoholic}
        setCocktailInfo={setCocktailInfo}
        setInfoVisible={setInfoVisible}
        searched={searched}
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
