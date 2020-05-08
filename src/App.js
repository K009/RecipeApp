import React, { useEffect, useState } from "react";
import "./App.css";

const App = () => {
  const APP_ID = "b837569a";
  const APP_KEY = "fad1f0de908f1c4ce9a7372198904f21";

  useEffect(() => {
    getRecipes();
  }, []); // to co w nawiasie to sie wtedy wlacza ,jesli puste to tylko przy odpaleniu apki

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = response.json();
    console.log(data);
  };

  return (
    <div className="App">
      <form className="search-form">
        <input className="search-bar" type="text" />
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
    </div>
  );
};
export default App;
