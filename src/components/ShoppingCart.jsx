import { useCartStore } from "../store/CartStore";
import "./ShoppingCart.css";

export default function ShoppingCart() {
  const cartItems = useCartStore((state) => state.cartItems);
  const removeFromCart = useCartStore((state) => state.removeFromCart);

  let total = 0;

  cartItems.forEach((item) => {
    total += item.product.price * item.quantity;
  });

  return (
    <section>
      <h2>Handlekurv</h2>
      <article>
        {cartItems.length == 0 ? (
          <p>Handlekurven din er tom</p>
        ) : (
          cartItems.map((cartItem, index) => (
            <div key={index}>
              <h3>{cartItem.product.name}</h3>
              <p>Pris: {cartItem.product.price} KR</p>
              <p>Antall: {cartItem.quantity}</p>

              <button
                className="deleteBtn"
                onClick={() => removeFromCart(cartItem.product.id)}
              >
                Fjern vare
              </button>
            </div>
          ))
        )}
        <h3>Sum: {total}</h3>
      </article>
    </section>
  );
}
