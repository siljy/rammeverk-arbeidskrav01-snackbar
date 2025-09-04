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
    <aside className="cart">
      <h2>Handlekurv</h2>
      <h3>Sum: {total} KR</h3>
      <article>
        {cartItems.length == 0 ? (
          <p>Handlekurven din er tom, trykk 'Kjøp' for å legge til varen</p>
        ) : (
          cartItems.map((cartItem, index) => (
            <div className="itemsInCart" key={index}>
              <h4>{cartItem.product.name}</h4>
              <p>Pris: {cartItem.product.price} KR</p>
              <p>Antall: {cartItem.quantity}</p>
              {/* <div>
                <button className="editAmountBtn">-</button>
                <button className="editAmountBtn">+</button>
              </div> */}
              <button
                className="deleteBtn"
                onClick={() => removeFromCart(cartItem.product.id)}
              >
                Fjern vare
              </button>
            </div>
          ))
        )}
      </article>
    </aside>
  );
}
