import "./App.css";
import Card from "./Card";
import Filters from "./Filters";
import { productArray } from "./Data";
import { useState } from "react";

function App() {
  const [productItems, setProductItems] = useState(productArray);

  return (
    <>
      <Filters productItems={productItems} />
      <Card productItems={productItems} />
    </>
  );
}

export default App;
