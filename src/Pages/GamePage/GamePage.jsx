import React, { useEffect, useMemo, useState } from "react";
import GameField from "../../components/GameField/GameField";
import s from "./GamePage.module.css";
import FloatInfo from "../../components/FloatInfo/FloatInfo";
import InfoWrapper from "../../components/InfoWrapper/InfoWrapper";
import Players from "../../components/Players/Players";
import Leaderboard from "../../components/LeaderBoard/Leaderboard";
import MyButton from "../../components/MyButton/MyButton";
import MyModal from "../../components/MyModal/MyModal";
import Message from "../../components/Message/Message";
const GamePage = () => {
  const [ceils, setCeils] = useState(3);
  const [shadowCeils, setShadowCeils] = useState(ceils);
  // const gameField = useMemo(() => Array(ceils ** 2).fill(null), [ceils]);
  const [gameField, setGameField] = useState(Array(ceils ** 2).fill(null));
  const [currentMark, setCurrentMark] = useState(1);
  const [moves, setMoves] = useState(0);
  const [isGame, setIsGame] = useState(true);
  const winnings = useMemo(() => generateWinningCells_v1(ceils), [ceils]);
  const [winners, setWinners] = useState([]);
  const [playedGames, setPlayedGames] = useState(0);
  const [wins, setWins] = useState({ 1: 0, "-1": 0 });
  const [modal, setModal] = useState(false);
  const [modalOpening, setModalOpening] = useState(false);
  const [isDraw, setIsDraw] = useState(false);

  function openModal() {
    setModalOpening(true);
    setTimeout(() => {
      setModal(true);
      setModalOpening(false);
    }, 2000);
  }

  function setFieldValue(index, value) {
    setGameField((prev) => {
      const newField = [...prev];
      newField[index] = value;
      return newField;
    });
  }

  function ceilClick(index) {
    if (!isGame) {
      return;
    }
    setFieldValue(index, currentMark);
    setMoves((prev) => prev + 1);
    return currentMark;
  }

  useEffect(() => {
    checkWin();
    if (moves >= ceils ** 2 && isGame) {
      setIsGame(false);
      setPlayedGames((prev) => prev + 1);
      openModal((prev) => !prev);
      setIsDraw(true);
      return;
    }
    if (isGame && moves > 0) {
      setCurrentMark((prev) => (prev === 1 ? -1 : 1));
    }
  }, [gameField, moves]);

  function generateWinningCells_v1(cells = 3) {
    const horizontal = [];
    const vertical = [];
    for (let i = 0; i < cells ** 2; i += cells) {
      const line = [];
      for (let k = 0; k < cells; k++) {
        line.push(k + i);
      }
      horizontal.push(line);
    }
    for (let i = 0; i < cells; i++) {
      const line = [];
      for (let k = 0; k < cells ** 2; k += cells) {
        line.push(k + i);
      }
      vertical.push(line);
    }
    const cross1 = [];
    for (let i = 0; i < cells; i++) {
      cross1.push((cells + 1) * i);
    }
    const cross2 = [];
    for (let i = 1; i <= cells; i++) {
      cross2.push((cells - 1) * i);
    }
    return [...horizontal, ...vertical, [...cross1], [...cross2]];
  }

  function checkWin() {
    winnings.map((win) => {
      const mb = win.reduce((acc, curr) => acc + gameField[curr], 0);
      if (mb === ceils || mb === ceils * -1) {
        setIsGame(false);
        setWinners(win);
        setWins((prev) => {
          return { ...prev, [currentMark]: prev[currentMark] + 1 };
        });
        setPlayedGames((prev) => prev + 1);
        openModal((prev) => !prev);
      }
    });
  }

  function startNewGame() {
    if (modalOpening) {
      return;
    }
    setIsDraw(false);
    setGameField(Array(shadowCeils ** 2).fill(null));
    setCeils(shadowCeils);
    setCurrentMark(1);
    setMoves(0);
    setWinners([]);
    setIsGame(true);
  }

  useEffect(() => {}, [ceils]);

  return (
    <div className={s.page}>
      <div className={s.game_wrapper}>
        <h1 className={s.current}>{`Player ${
          currentMark > 0 ? "ONE" : "TWO"
        } turn`}</h1>
        <GameField
          winners={winners}
          mark={currentMark}
          ceils={ceils}
          field={gameField}
          ceilClick={ceilClick}
        />
        <MyButton disabled={modalOpening} onClick={startNewGame}>
          New Game
        </MyButton>
      </div>
      <Players setShadowCeils={setShadowCeils} />
      <Leaderboard playedGames={playedGames} wins={wins} />
      <MyModal isOpen={modal} setIsOpen={setModal}>
        <Message mark={currentMark} draw={isDraw}>
          <MyButton
            onClick={() => {
              setModal((prev) => !prev);
            }}
          >
            {" "}
            Ok{" "}
          </MyButton>
        </Message>
      </MyModal>
    </div>
  );
};

export default GamePage;
