import React, { useState } from "react";
import PropTypes from "prop-types";

export default function Meyve({ onClick, name, ticked, ...rest }) {
  return ticked ? (
    <del>
      <div onClick={onClick}>
        {name}
        <img {...rest} />
      </div>
    </del>
  ) : (
    <div onClick={onClick}>
      {name}
      <img {...rest} />
    </div>
  );
}

Meyve.propTypes = {
  src: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  ticked: PropTypes.bool.isRequired,
  hidden: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};
