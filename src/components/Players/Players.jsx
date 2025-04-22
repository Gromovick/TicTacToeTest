import React, { useState } from "react";
import s from "./Players.module.css";
import FloatInfo from "../FloatInfo/FloatInfo";
import InfoWrapper from "../InfoWrapper/InfoWrapper";
const Players = ({ setShadowCeils }) => {
  const [selectedSize, setSelectedSize] = useState(3);
  const handleChange = (e) => {
    const newSize = Number(e.target.value);
    setSelectedSize(newSize);
    setShadowCeils(newSize);
  };
  return (
    <FloatInfo float={"left"}>
      <InfoWrapper>
        <div className={s.players}>
          <h2 className={s.title}>Players:</h2>
          <ul className={s.players__list}>
            <li className={s.players__item}>
              <h3 className={s.player}>
                - Player 1: <span>X</span>
              </h3>
            </li>
            <li className={s.players__item}>
              <h3 className={s.player}>
                - Player 2: <span>O</span>
              </h3>
            </li>
          </ul>
        </div>
        <label className={s.choose}>
          <h3 className={s.select__title}>Choose size of field: </h3>
          <select
            className={s.select}
            name="select"
            value={selectedSize}
            onChange={handleChange}
          >
            {[...Array(10)].slice(3, 10).map((_, index) => {
              const size = index + 3;
              return (
                <option key={size} value={size}>
                  {`${size}x${size}`}
                </option>
              );
            })}
          </select>
        </label>
      </InfoWrapper>
    </FloatInfo>
  );
};

export default Players;
