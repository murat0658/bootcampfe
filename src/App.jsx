import "./App.css";

import { Meyveler, Frame } from "./components/Meyveler";
import { useState } from "react";

const meyveler = [
  {
    id: 1,
    name: "elma",
    src: "./src/assets/elma.png",
    width: 32,
    height: 32,
    hidden: false,
    ticked: false,
  },
  {
    id: 2,
    name: "armut",
    src: "./src/assets/armut.png",
    width: 32,
    height: 32,
    hidden: false,
    ticked: false,
  },
  {
    id: 3,
    name: "muz",
    src: "./src/assets/muz.png",
    width: 32,
    height: 32,
    hidden: true,
    ticked: false,
  },
  {
    id: 3,
    name: "domates",
    src: "./src/assets/tomato.png",
    width: 48,
    height: 32,
    hidden: false,
    ticked: false,
  },
];

function Counter({ person }) {
  const [count, setCount] = useState(0);
  return (
    <>
      <div>{person}</div>
      <div>{count}</div>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </>
  );
}

function App() {
  const [toggle, setToggle] = useState(false);

  return (
    <div>
      {toggle ? (
        <Counter key="ali" person="Ali" />
      ) : (
        <Counter key="ayşe" person="Ayşe" />
      )}
      <button onClick={() => setToggle((prev) => !prev)} />
      <Frame>
        <h3>Meyveler</h3>
        <ul className="liste">
          <Meyveler meyveler={meyveler} />
        </ul>
      </Frame>
    </div>
  );
}

export default App;
