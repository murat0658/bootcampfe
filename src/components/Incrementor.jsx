import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { actions, selector } from "../redux/slice";

function Incrementor() {
  const { value } = useSelector(selector);
  const dispatch = useDispatch();

  return (
    <>
      <div>{value}</div>
      <button onClick={() => dispatch(actions.incrementOne)}>
        Increment One
      </button>
    </>
  );
}

Incrementor.propTypes = {};

export default Incrementor;
