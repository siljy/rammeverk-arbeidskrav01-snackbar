import Card from "./Card";
import FilterButtons from "./FilterButtons";
import { productArray } from "./Data";
import { useState } from "react";


export default function ProductPage() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const displayedProducts = selectedCategory
    ? productArray.filter((product) => product.category === selectedCategory)
    : productArray;

  return (
    <section>
      <FilterButtons category={setSelectedCategory} />
      <Card products={displayedProducts} />
    </section>
  );
}
