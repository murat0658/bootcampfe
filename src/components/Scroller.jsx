import React, { useEffect } from "react";
import PropTypes from "prop-types";

function Scroller() {
  useEffect(() => {
    const handleScroll = () => {
      console.log(window.scrollX, window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      //https://jsonplaceholder.typicode.com/posts
    };
  }, []);
  return (
    <div>
      {Array.from({ length: 1000 }, (_, i) => (
        <div key={i}>
          <div>{i + 1} SomeString</div>
          <br />
        </div>
      ))}
    </div>
  );
}

Scroller.propTypes = {};

export default Scroller;
