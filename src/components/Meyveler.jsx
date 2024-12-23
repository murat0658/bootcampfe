import React, { useState } from "react";
import PropTypes from "prop-types";
import AlertButton from "./AlertButton";

export const Frame = ({ children }) => {
  return (
    <div className="card" style={{ border: "solid 4px black" }}>
      {children}
    </div>
  );
};

function Meyve(props) {
  const { name, ...rest } = props;
  return props.ticked ? (
    <del>
      <li>
        {name}
        <img {...rest} />
      </li>
    </del>
  ) : (
    <li>
      {name}
      <img {...rest} />
    </li>
  );
}

Meyve.propTypes = {
  src: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  ticked: PropTypes.bool.isRequired,
  hidden: PropTypes.bool.isRequired,
};

export function Meyveler({ meyveler }) {
  const [stateMeyveler, setStateMeyveler] = useState(meyveler);
  const [yeniMeyve, setYeniMeyve] = useState("");

  const filteredMeyveler = stateMeyveler.filter((meyve) => !meyve.hidden);

  const handleEkle = (e) => {
    e.stopPropagation();
    e.preventDefault();

    let id = Math.max(...stateMeyveler.map((meyve) => meyve.id)) + 1;
    console.log(id);
    setStateMeyveler([
      ...stateMeyveler,
      {
        id,
        name: yeniMeyve,
        src: "./src/assets/elma.png",
        width: 32,
        height: 32,
        hidden: false,
        ticked: true,
      },
    ]);
    setYeniMeyve("");
  };

  return (
    <>
      {filteredMeyveler.map((meyve) => (
        <Meyve
          key={meyve.id}
          src={meyve.src}
          width={meyve.width}
          height={meyve.height}
          name={meyve.name}
          ticked={true}
          hidden={false}
        />
      ))}
      <form>
        <input
          label="Eklenecek"
          value={yeniMeyve}
          onChange={(e) => setYeniMeyve(e.target.value)}
        />
        <button type="submit" onClick={(e) => handleEkle(e)}>
          Ekle
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
