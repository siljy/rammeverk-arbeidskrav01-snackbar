import "./App.css";
import Card from "./components/Card";
import FilterButtons from "./components/FilterButtons";
import { productArray } from "./components/Data";
import { useState } from "react";
import ShoppingCart from "./components/ShoppingCart";


function App() {
  //Filtrering
  const [selectedCategory, setSelectedCategory] = useState(null);

  const displayedProducts = selectedCategory
    ? productArray.filter((product) => product.category === selectedCategory)
    : productArray;


  return (
    <main>
      <h1>Snackbar</h1>
      <FilterButtons category={setSelectedCategory} />
      <Card products={displayedProducts} />
      <ShoppingCart  />
    </main>
  );
}

export default App;
