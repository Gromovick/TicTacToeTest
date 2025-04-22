import React from "react";
import s from "./MyModal.module.css";
const MyModal = ({ children, isOpen, setIsOpen }) => {
  return (
    <div
      className={`${s.modal} ${isOpen ? s.active : ""}`}
      onClick={() => setIsOpen((prev) => !prev)}
    >
      <div className={s.modal__content} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};

export default MyModal;
