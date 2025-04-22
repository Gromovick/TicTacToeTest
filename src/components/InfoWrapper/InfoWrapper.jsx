import React from "react";
import s from "./InfoWrapper.module.css";
const InfoWrapper = ({ children }) => {
  return <div className={s.wrapper}>{children}</div>;
};

export default InfoWrapper;
