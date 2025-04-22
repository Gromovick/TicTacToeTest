import React from "react";
import s from "./Message.module.css";
import InfoWrapper from "../InfoWrapper/InfoWrapper";
const Message = ({ draw = false, mark, children }) => {
  return (
    <div className={s.wrapper}>
      <InfoWrapper>
        <div className={s.message}>
          {!draw ? (
            <h1 className={s.title}>Player {mark < 0 ? "1" : "2"} WIN!</h1>
          ) : (
            <h1 className={s.title}>Draw! Try Again :{")"}</h1>
          )}
          {children}
        </div>
      </InfoWrapper>
    </div>
  );
};

export default Message;
