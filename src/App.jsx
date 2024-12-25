import "./App.css";
import Main from "./context/Main";

import { Meyveler, Frame } from "./components/Meyveler";
import { useReducer, useRef, useState } from "react";
import { MeyvelerContext } from "./components/MeyvelerContext";
import { MeyvelerDispatchContext } from "./components/MeyvelerDispatchContext";
import Kronometre from "./Kronometre";
import Scroller from "./components/Scroller";
import Posts from "./components/Posts";
import Incrementor from "./components/Incrementor";

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

const meyvelerReducer = (meyveler, { type, payload }) => {
  switch (type) {
    case "add": {
      let id = Math.max(...meyveler.map((meyve) => meyve.id)) + 1;
      return [...meyveler, { ...payload, id: id }];
    }
    case "delete": {
      console.log(JSON.stringify(payload));
      return meyveler.filter((meyve) => meyve.id !== payload?.id);
    }
    case "edit": {
      return meyveler.map((meyve) => {
        if (meyve.id === payload?.id) {
          return { ...meyve, name: payload.yeniMeyve };
        }
        return meyve;
      });
    }
    case "change": {
      return meyveler.map((meyve) => {
        return { ...meyve, ticked: meyve.id === payload?.id && !meyve.ticked };
      });
    }
  }
};

function App() {
  const [toggle, setToggle] = useState(false);

  const [meyveler, dispatch] = useReducer(meyvelerReducer, [
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
  ]);

  const inputRef = useRef();
  console.log(inputRef.current);

  return (
    <div>
      <Incrementor />
      {/* <Posts /> */}
      {/* <Scroller /> */}
      {/* <label>Değer</label>
      <br />
      <input type="text" placeholder="Değer giriniz..." ref={inputRef} />
      <button onClick={() => inputRef.current.focus()}>Focus</button> */}
      {/* <Main />
      {toggle ? (
        <Counter key="ali" person="Ali" />
      ) : (
        <Counter key="ayşe" person="Ayşe" />
      )}
      <button onClick={() => setToggle((prev) => !prev)} /> */}
      {/* <Frame>
        <h3>Meyveler</h3>
        <MeyvelerContext.Provider value={meyveler}>
          <MeyvelerDispatchContext.Provider value={dispatch}>
            <ul className="liste">
              <Meyveler />
            </ul>
          </MeyvelerDispatchContext.Provider>
        </MeyvelerContext.Provider>
      </Frame> */}
    </div>
  );
}

export default App;
