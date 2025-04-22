import React, { useEffect, useState } from "react";
import s from "./Ceil.module.css";
const Ceil = ({ index, isActive, status, activeCeil, mark, ...props }) => {
  function activateCeil() {
    if (status !== null) {
      return;
    }
    activeCeil(index);
  }

  return (
    <button {...props} onClick={activateCeil} className={s.ceil}>
      {isActive && (
        <img
          className={s.icon}
          src={`/icons/${
            status === 1 ? "cross.png" : status === -1 ? "null.png" : ""
          }`}
          alt=""
        />
      )}
    </button>
  );
};

export default Ceil;
