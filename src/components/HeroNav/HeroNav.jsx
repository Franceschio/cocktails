import { useRef, useState } from "react";
import styles from "./index.module.scss";

const HeroNav = ({ setCategory, setAlcoholic }) => {
  const onHandleCategory = (value) => {
    setCategory(value);
    setActualCategory(value);
  };

  const onHandleAlcoholic = (value) => {
    setAlcoholic(value);
    setActualType(value);
  };

  const [actualType, setActualType] = useState("Alcoholic");

  const [actualCategory, setActualCategory] = useState("Ordinary Drink");

  const [categories, setCategories] = useState([
    "Ordinary Drink",
    "Cocktail",
    "Shot",
    "Punch / Party Drink",
    "Coffee / Tea",
    "Other / Unknown",
  ]);

  return (
    <div className={styles.HeroNav}>
      <h1>Iceberg lounge</h1>
      <ul className={styles.types}>
        <li onClick={() => onHandleAlcoholic("Alcoholic")}>
          <img
            src="https://img.icons8.com/ios-glyphs/512/cocktail.png"
            alt="type Alcoholic"
          />
          Alcoholic
        </li>
        <li onClick={() => onHandleAlcoholic("Non alcoholic")}>
          <img
            src="https://img.icons8.com/fluency/512/cocktail.png"
            alt="type Alcohol free"
          />
          Unalcoholic
        </li>
      </ul>
      <hr />
      <ul className={styles.categories}>
        {categories.map((category) => (
          <li onClick={() => onHandleCategory(category)} key={category}>
            {category}
          </li>
        ))}
      </ul>
      <div className={styles.activeFilters}>
        <h3>{actualType}:</h3>
        <p>{actualCategory}</p>
      </div>
    </div>
  );
};

//styled components

// import styled from "styled-components";

// const Hero = styled.div`
//   margin-top: 25px;
//   color: white;
//   width: 105%;
//   padding: 10px;
//   background-color: white;
//   color: rgb(20, 20, 20);
//   border-bottom: 1px solid rgb(20, 20, 20);
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
// `;

// const HeroTitle = styled.h1`
//   font-family: cursive;
//   background: rgb(161, 13, 246);
//   background: linear-gradient(
//     170deg,
//     rgba(161, 13, 246, 1) 20%,
//     rgba(2, 221, 251, 1) 80%
//   );
//   background-clip: inherit;
//   -webkit-background-clip: text;
//   -webkit-text-fill-color: transparent;
//   margin: 20px 0px 0px 0px;
//   user-select: none;
// `;

// const HeroHr = styled.hr`
//   width: 80%;
//   border: 0;
//   border-bottom: 4px dotted rgb(20, 20, 20);
// `;

// const Types = styled.ul`
//   list-style: none;
//   display: flex;
//   justify-content: space-around;
//   align-items: center;
//   width: 100%;
//   font-size: 10px;
//   padding: 10px;
//   text-align: center;
//   border-bottom: 2px solid white;
//   background-color: white;
//   height: 45%;

//   & li {
//     color: rgb(20, 20, 20);
//     height: 50px;
//     width: 50px;
//     display: flex;
//     flex-direction: column;
//     justify-content: space-around;
//     align-items: center;
//     cursor: pointer;
//     transition: 0.4s;
//     border-radius: 4px;
//     padding: 10px;

//     &:hover {
//       background-color: hsl(51, 100%, 95%);
//       text-decoration: underline;
//     }
//   }

//   img {
//     height: 100%;
//     width: 100%;
//     object-fit: contain;
//   }
// `;

// const Categories = styled.ul`
//   list-style: none;
//   display: flex;
//   justify-content: space-evenly;
//   align-items: center;
//   gap: 10px;
//   width: 100%;
//   font-size: 12px;
//   padding: 10px;
//   text-align: center;
//   border-bottom: 2px solid white;
//   background-color: white;
//   height: 45%;

//   & li {
//     color: rgb(20, 20, 20);
//     height: 40px;
//     width: 40px;
//     display: flex;
//     flex-direction: column;
//     justify-content: center;
//     align-items: center;
//     cursor: pointer;
//     transition: 0.4s;
//     border-radius: 4px;

//     &:hover {
//       text-decoration: underline;
//     }
//   }
// `;

// const ActiveFilters = styled.div`
//   border: 2px solid rgb(20, 20, 20);
//   color: hsl(0, 0%, 44%);
//   border-radius: 5px;
//   padding: 15px;
//   height: 25px;
//   display: flex;
//   justify-content: space-evenly;
//   align-items: center;
//   gap: 15px;

//   h3 {
//     color: rgb(20, 20, 20);
//   }
// `;

// const HeroNav = ({ setCategory, setAlcoholic }) => {
//   const onHandleCategory = (value) => {
//     setCategory(value);
//     setActualCategory(value);
//   };

//   const onHandleAlcoholic = (value) => {
//     setAlcoholic(value);
//     setActualType(value);
//   };

//   const [actualType, setActualType] = useState("Alcoholic");

//   const [actualCategory, setActualCategory] = useState("Ordinary Drink");

//   const [categories, setCategories] = useState([
//     "Ordinary Drink",
//     "Cocktail",
//     "Shot",
//     "Punch / Party Drink",
//     "Coffee / Tea",
//     "Other / Unknown",
//   ]);

//   return
//     (<Hero>
//       <HeroTitle>Iceberg lounge</HeroTitle>
//       <Types>
//         <li onClick={() => onHandleAlcoholic("Alcoholic")}>
//           <img
//             src="https://img.icons8.com/ios-glyphs/512/cocktail.png"
//             alt="type Alcoholic"
//           />
//           Alcoholic
//         </li>
//         <li onClick={() => onHandleAlcoholic("Non alcoholic")}>
//           <img
//             src="https://img.icons8.com/fluency/512/cocktail.png"
//             alt="type Alcohol free"
//           />
//           Unalcoholic
//         </li>
//       </Types>
//       <HeroHr />
//       <Categories>
//         {categories.map((category) => (
//           <li key={category} onClick={() => onHandleCategory(category)}>
//             {category}
//           </li>
//         ))}
//       </Categories>
//       <ActiveFilters>
//         <h3>{actualType}:</h3>
//         <p>{actualCategory}</p>
//       </ActiveFilters>
//     </Hero>)
// };

export default HeroNav;
