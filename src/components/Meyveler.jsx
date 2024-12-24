import React, { useState } from "react";
import PropTypes from "prop-types";
import AlertButton from "./AlertButton";
import Meyve from "./Meyve";
import { useReducer } from "react";

export const Frame = ({ children }) => {
  return (
    <div className="card" style={{ border: "solid 4px black" }}>
      {children}
    </div>
  );
};
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
export function Meyveler({ meyveler }) {
  const [yeniMeyve, setYeniMeyve] = useState("");
  const [selected, setSelected] = useState("");

  const [stateMeyveler, dispatch] = useReducer(meyvelerReducer, meyveler);

  const filteredMeyveler = stateMeyveler.filter((meyve) => !meyve.hidden);

  const handleEkle = (e) => {
    e.stopPropagation();
    e.preventDefault();
    dispatch({
      type: "add",
      payload: {
        name: yeniMeyve,
        src: "./src/assets/elma.png",
        width: 32,
        height: 32,
        hidden: false,
        ticked: true,
      },
    }),
      setYeniMeyve("");
  };

  const handleChange = (id) => {
    dispatch({ type: "change", payload: { id } });
  };

  const handleDelete = (id) => {
    dispatch({ type: "delete", payload: { id } });
  };

  const handleEdit = (e) => {
    e.preventDefault();
    dispatch({
      type: "edit",
      payload: {
        id: selected,
        yeniMeyve,
      },
    });
  };

  return (
    <>
      {filteredMeyveler.map((meyve) => (
        <li key={meyve.id}>
          <input
            type="radio"
            value={selected}
            onClick={() => setSelected(meyve.id)}
            name="abc"
          />
          <Meyve
            src={meyve.src}
            width={meyve.width}
            height={meyve.height}
            name={meyve.name}
            ticked={meyve.ticked}
            hidden={false}
            onClick={() => handleChange(meyve.id)}
          />
          <div onClick={() => handleDelete(meyve.id)}>X</div>
        </li>
      ))}
      <form>
        <input
          label="Eklenecek"
          value={yeniMeyve}
          onChange={(e) => setYeniMeyve(e.target.value)}
        />
        <button type="submit" onClick={handleEkle}>
          Ekle
        </button>
        <button type="submit" onClick={handleEdit}>
          Edit
        </button>
      </form>
      <AlertButton message="buradayım!!" color="red">
        Buradayım
      </AlertButton>
      <AlertButton message="oaradayım!!" color="blue">
        Oradayım
      </AlertButton>
    </>
  );
}

Meyveler.propTypes = {
  meyveler: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired, // src zorunlu ve string olmalı
      width: PropTypes.number, // width opsiyonel ve number olmalı
      height: PropTypes.number, // height opsiyonel ve number olmalı
      name: PropTypes.string.isRequired, // height opsiyonel ve number olmalı
    })
  ), // meyveler prop'u zorunlu
};
