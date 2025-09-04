import "./Card.css";
import { useCartStore } from "../store/CartStore";

export default function Card({ products }) {
  const addToCart = useCartStore((state) => state.addToCart);

  return (
    <section className="productPage">
      {products.map((product) => (
        <div key={product.name} className="productCard">
          <h2>{product.name}</h2>
          <img className="productImg" src={product.img} alt={product.name} />
          <p>{product.price} KR</p>
          <button onClick={() => addToCart(product)}>Kjøp</button>
        </div>
      ))}
    </section>
  );
}
