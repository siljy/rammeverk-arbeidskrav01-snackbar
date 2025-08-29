export default function ShoppingCart({ shoppingCart }) {
  let total = 0;

  shoppingCart.forEach((item) => {
    total += item.product.price * item.quantity;
  });

  return (
    <section>
      <h2>Handlekurv</h2>
      <article>
        {shoppingCart.length == 0 ? (
          <p>Handlekurven din er tom</p>
        ) : (
          shoppingCart.map((cartItem, index) => (
            <div key={index}>
              <h3>{cartItem.product.name}</h3>
              <p>Pris: {cartItem.product.price} KR</p>
              <p>Antall: {cartItem.quantity}</p>
            </div>
          ))
        )}
        <h3>Sum: {total}</h3>
      </article>
    </section>
  );
}
