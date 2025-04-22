import React from "react";
import s from "./Leaderboard.module.css";
import FloatInfo from "../FloatInfo/FloatInfo";
import InfoWrapper from "../InfoWrapper/InfoWrapper";
const Leaderboard = ({ playedGames, wins }) => {
  return (
    <FloatInfo float={"right"}>
      <InfoWrapper>
        <div className={s.leaderboard}>
          <h2 className={s.title}>Leaderboard: </h2>
          <ul className={s.leaders}>
            <li className={s.leaderboard__item}>
              <h3 className={s.leader}>- Total Games: {playedGames}</h3>
            </li>
            <li className={s.leaderboard__item}>
              <h3 className={s.leader}>- Player 1: {wins["1"]}</h3>
            </li>
            <li className={s.leaderboard__item}>
              <h3 className={s.leader}>- Player 2: {wins["-1"]}</h3>
            </li>
          </ul>
        </div>
      </InfoWrapper>
    </FloatInfo>
  );
};

export default Leaderboard;
