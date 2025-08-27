export default function FilterButtons({ category }) {
  return (
    <section>
      <button onClick={() => category(null)}>Vis alt</button>
      <button onClick={() => category("burger")}>Burger</button>
      <button onClick={() => category("hotdog")}>Pølse</button>
      <button onClick={() => category("drink")}>Drikke</button>
    </section>
  );
}
