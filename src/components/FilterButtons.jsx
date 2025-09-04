

export default function FilterButtons({ category }) {
  return (
    <article className="filterButtons">
      <button onClick={() => category(null)}>Vis alt</button>
      <button onClick={() => category("burger")}>Burger</button>
      <button onClick={() => category("hotdog")}>Pølse</button>
      <button onClick={() => category("drink")}>Drikke</button>
    </article>
  );
}
