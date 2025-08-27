import "./App.css";
import Card from "./components/Card";
import FilterButtons from "./components/FilterButtons";
import { productArray } from "./components/Data";
import { useState } from "react";

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const displayedProducts = selectedCategory
    ? productArray.filter((product) => product.category === selectedCategory)
    : productArray;
    
  return (
    <main>
      <FilterButtons category={setSelectedCategory} />
      <Card products={displayedProducts} />
    </main>
  );
}

export default App;
