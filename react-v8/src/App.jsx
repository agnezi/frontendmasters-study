import { createRoot } from "react-dom/client";
import Pet from "./Pet";
import SearchParams from "./SearchParams";

const App = () => {
  return (
    <div>
      <h1>Some App Text</h1>
      <Pet name="Bug" animal="cockatial" breed="seeds" />
      <SearchParams />
    </div>
  );
};

// const App = () => {
//   return React.createElement(
//     "div",
//     {},
//     React.createElement("h1", {}, [
//       React.createElement(Pet, {
//         name: "Pingo",
//         animal: "Dog",
//         breed: "Vira lata",
//       }),
//     ])
//   );
// };

const container = document.getElementById("root");
const root = createRoot(container);

root.render(<App />);
