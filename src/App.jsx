import "./App.scss";

import GET from "./utils/http";

import Navbar from "./components/Navbar/Navbar";
import HeroNav from "./components/HeroNav/HeroNav";
import MainList from "./components/MainList";
import { useEffect, useState } from "react";

function App() {
  const [cocktailsList, setCocktailsList] = useState([]);

  const [category, setCategory] = useState("Ordinary Drink");

  useEffect(() => {
    GET(`/search.php?f=m`).then((data) => setCocktailsList(() => data.drinks));
  }, []);

  return (
    <div className="App">
      <Navbar />
      <HeroNav setCategory={setCategory} />
      <MainList cocktailsList={cocktailsList} category={category} />
    </div>
  );
}

export default App;
