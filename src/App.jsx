import "./App.css";
import Card from "./components/Card";
import FilterButtons from "./components/FilterButtons";
import { productArray } from "./components/Data";
import { useState, useEffect } from "react";
import ShoppingCart from "./components/ShoppingCart";

function App() {
  //Filtrering
  const [selectedCategory, setSelectedCategory] = useState(null);

  const displayedProducts = selectedCategory
    ? productArray.filter((product) => product.category === selectedCategory)
    : productArray;

  //Handlekurv
  const [shoppingCart, setShoppingCart] = useState([]);

  function addToCart(newProduct) {
    setShoppingCart([...shoppingCart, newProduct]);
  }
 

  // useEffect(() => {
  //   if (!shoppingCart) {
  //     console.log("Handlekurven er tom");
  //   } else {
  //     console.log("Handlekurven består av", shoppingCart);
  //   }
  // }, [shoppingCart]);

  return (
    <main>
      <h1>Snackbar</h1>
      <FilterButtons category={setSelectedCategory} />
      <Card products={displayedProducts} addToCart={addToCart} />
      <ShoppingCart shoppingCart={shoppingCart} />
    </main>
  );
}

export default App;
