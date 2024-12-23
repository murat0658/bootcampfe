import React, { useState } from "react";
import PropTypes from "prop-types";

function AlertButton({ message, children, color }) {
  const [clicked, setClicked] = useState(false);

  const handleClick = (e) => {
    e.stopPropagation();
    if (!clicked) {
      alert(message);
      setClicked(true);
    }
  };
  return (
    <button style={{ backgroundColor: color }} onClick={(e) => handleClick(e)}>
      {children}
    </button>
  );
}

AlertButton.propTypes = {
  message: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

export default AlertButton;
