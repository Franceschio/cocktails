import "./App.scss";

import GET from "./utils/http";

import Navbar from "./components/Navbar/Navbar";
import HeroNav from "./components/HeroNav/HeroNav";
import MainList from "./components/MainList";
import { useEffect, useState } from "react";

function App() {
  const [cocktailsList, setCocktailsList] = useState([]);

  useEffect(() => {
    GET(`/search.php?f=m`).then((data) => setCocktailsList(() => data.drinks));
  }, []);

  return (
    <div className="App">
      <Navbar />
      <HeroNav />
      <MainList cocktailsList={cocktailsList} />
    </div>
  );
}

export default App;
