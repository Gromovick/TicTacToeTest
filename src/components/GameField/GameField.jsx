import React from "react";
import s from "./GameField.module.css";
import Ceil from "../Ceil/Ceil";
const GameField = ({ ceils = 9, mark, winners, field, ceilClick }) => {
  return (
    <div className={s.filed} style={{ "--ceils": ceils }}>
      <div className={s.gameGrid}>
        {[...Array(ceils ** 2)].map((ceil, index) => {
          return (
            <Ceil
              style={{ background: winners.includes(index) ? "green" : "" }}
              activeCeil={ceilClick}
              key={index}
              index={index}
              mark={mark}
              status={field[index]}
              isActive={field[index] !== null}
            />
          );
        })}

        <div className={s.borders}>
          <div className={s.vertical}>
            {[...Array(ceils - 1)].map((line, index) => {
              return (
                <div key={`vertical-line-${index}`} className={s.line}></div>
              );
            })}
          </div>
          <div className={s.horizontal}>
            {[...Array(ceils - 1)].map((line, index) => {
              return (
                <div key={`horizontal-line-${index}`} className={s.line}></div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameField;
