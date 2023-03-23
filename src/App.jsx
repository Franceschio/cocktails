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

  const [infoVisible, setInfoVisible] = useState(false);

  const [alphabetTable, setAlphabetTable] = useState(false);

  const [selectedLetter, setSelectedLetter] = useState("a");

  const [searched, setSearched] = useState(null);

  const [presevation, setPreservation] = useState(false);

  const [popUp, setPopUp] = useState(false);

  const [msg, setMsg] = useState("");

  const [allPreservations, setAllPreservations] = useState([]);

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
