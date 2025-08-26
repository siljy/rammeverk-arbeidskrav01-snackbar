export default function Filters() {
  return (
    <section>
      <button onClick={() => console.log("Alt")}>Vis alle produkter</button>
      <button onClick={() => console.log("Burger")}>Burger</button>
      <button>Pølse</button>
      <button>Drikke</button>
    </section>
  );
}
