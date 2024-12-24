import "../App.css";

import React, { useContext } from "react";
import PropTypes from "prop-types";
import { LevelContext } from "./LevelContext";

function Section({ children }) {
  const level = useContext(LevelContext);
  return (
    <LevelContext.Provider value={level + 1}>
      <section className="section">{children}</section>
    </LevelContext.Provider>
  );
}

Section.propTypes = {};

export default Section;
