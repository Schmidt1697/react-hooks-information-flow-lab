import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import Header from "./Header";
import itemData from "../data/items";


function App() {
  //state passed to header r/t app needs to re-render when header is changed
  const [isDarkMode, setIsDarkMode] = useState(false);

  function onDarkModeClick() {
    setIsDarkMode((isDarkMode) => !isDarkMode);
  }

  return (
    <div className={"App " + (isDarkMode ? "dark" : "light")}>
      <Header onDarkModeClick={onDarkModeClick} is isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode}/>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
