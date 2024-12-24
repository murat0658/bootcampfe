import React, { useContext } from "react";
import PropTypes from "prop-types";
import { LevelContext } from "./LevelContext";

function Heading({ children }) {
  const level = useContext(LevelContext);

  if (level === 1) return <h1>{children}</h1>;
  if (level === 2) return <h2>{children}</h2>;
  if (level === 3) return <h3>{children}</h3>;
  if (level === 4) return <h4>{children}</h4>;
  if (level === 5) return <h5>{children}</h5>;
  if (level === 6) return <h6>{children}</h6>;
}

Heading.propTypes = {};

export default Heading;
