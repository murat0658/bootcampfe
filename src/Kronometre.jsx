import React, { useRef, useState } from "react";
import PropTypes from "prop-types";

function Kronometre() {
  const [basZaman, setBasZaman] = useState(0);
  const [zaman, setZaman] = useState(0);

  const intervalRef = useRef();

  const start = () => {
    setBasZaman(Date.now());
    setZaman(Date.now());
    intervalRef.current = setInterval(() => setZaman(Date.now()), 50);
  };

  const stop = () => {
    clearInterval(intervalRef.current);
  };

  return (
    <div>
      <p>{zaman - basZaman}</p>
      <button onClick={start}>Start</button>
      <button onClick={stop}>Stop</button>
    </div>
  );
}

Kronometre.propTypes = {};

export default Kronometre;
