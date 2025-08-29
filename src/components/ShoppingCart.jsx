export default function ShoppingCart({ shoppingCart }) {
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
        <h3>Sum: {}</h3>
      </article>

      {/* Kun vise handlekurven med denne komponenten? Kanskje den må regne ut sum også */}
      {/* Må ta imot info om varen og antall klikk */}
      {/* Navn på produkt, antall, sum */}
      {/* Finne ut hvordan legge antall sammen, ikke lage duplikater */}
    </section>
  );
}
