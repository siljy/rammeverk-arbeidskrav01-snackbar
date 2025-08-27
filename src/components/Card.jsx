import "./Card.css";

export default function Card({ products }) {
  return (
    <section className="productPage">
      {products.map((product) => (
        <div key={product.name} className="productCard">
          <h2>{product.name}</h2>
          <img className="productImg" src={product.img} alt={product.name} />
          <p>{product.price} KR</p>
          <button>Kjøp</button>
        </div>
      ))}
    </section>
  );
}
