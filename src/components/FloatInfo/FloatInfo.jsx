import React from "react";
import s from "./FloatInfo.module.css";
const FloatInfo = ({ children, float }) => {
  return (
    <div style={{ [float]: 0 }} className={s.float}>
      {children}
    </div>
  );
};

export default FloatInfo;
