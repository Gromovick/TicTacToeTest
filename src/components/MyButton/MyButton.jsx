import React from "react";
import s from "./MyButton.module.css";
const MyButton = ({ children, ...props }) => {
  return (
    <button {...props} className={s.btn}>
      {children}
    </button>
  );
};

export default MyButton;
