import styles from "./App.module.scss";

import GET from "./utils/http";

import Navbar from "./components/Navbar/Navbar";
import HeroNav from "./components/HeroNav/HeroNav";
import MainList from "./components/MainList";
import Footer from "./components/Footer/Footer";
import CocktailInfo from "./components/cokctailsInformation/CocktailInfo";
import PreservationModal from "./components/PreservationModal/PreservationModal";
import PopUp from "./components/PopUp/PopUp";
import { useEffect, useState } from "react";

function App() {
  const [cocktailsList, setCocktailsList] = useState([]);

  const [category, setCategory] = useState("Ordinary Drink");

  const [alcoholic, setAlcoholic] = useState("Alcoholic");

  const [cocktailInfo, setCocktailInfo] = useState({});

  const [visualCocktail, setVisualCocktail] = useState(null);

  const [infoVisible, setInfoVisible] = useState(false);

  const [alphabetTable, setAlphabetTable] = useState(false);

  const [selectedLetter, setSelectedLetter] = useState("a");

  const [searched, setSearched] = useState(null);

  const [presevation, setPreservation] = useState(false);

  const [popUp, setPopUp] = useState(false);

  const [msg, setMsg] = useState("");

  const [allPreservations, setAllPreservations] = useState([]);

  const [counterInfo, setCounterInfo] = useState(visualCocktail);

  useEffect(() => {
    GET(`/search.php?f=${selectedLetter}`).then((data) =>
      setCocktailsList(() => data.drinks)
    );
  }, [selectedLetter]);

  useEffect(() => {
    if (allPreservations.length > 0) {
      setPopUp(() => true);
      setTimeout(() => {
        setPopUp(() => false);
      }, 4000);
    }
  }, [allPreservations]);

  useEffect(() => {
    setCounterInfo(visualCocktail);
  }, [visualCocktail]);

  const filteredCocktails = cocktailsList
    .filter((cocktail) => cocktail.strAlcoholic === alcoholic)
    .filter((cocktail) => cocktail.strCategory === category);

  return (
    <div className={styles.App}>
      <Navbar
        alphabetTable={alphabetTable}
        setAlphabetTable={setAlphabetTable}
        setSelectedLetter={setSelectedLetter}
        selectedLetter={selectedLetter}
        setSearched={setSearched}
        setPreservation={setPreservation}
      />
      <HeroNav setCategory={setCategory} setAlcoholic={setAlcoholic} />
      <MainList
        filteredCocktails={filteredCocktails}
        setCocktailInfo={setCocktailInfo}
        setInfoVisible={setInfoVisible}
        searched={searched}
        setVisualCocktail={setVisualCocktail}
      />
      <Footer />
      <CocktailInfo
        cocktailData={cocktailInfo}
        setCocktailInfo={setCocktailInfo}
        infoVisible={infoVisible}
        setInfoVisible={setInfoVisible}
        filteredCocktails={filteredCocktails}
        visualCocktail={visualCocktail}
        counterInfo={counterInfo}
        setCounterInfo={setCounterInfo}
      />
      {presevation ? (
        <PreservationModal
          setPreservation={setPreservation}
          setMsg={setMsg}
          setPreservations={setAllPreservations}
          allPreservations={allPreservations}
        />
      ) : null}

      {popUp ? <PopUp>{msg}</PopUp> : null}
    </div>
  );
}

export default App;
