# 🧠 Tic Tac Toe – Test Task for Sifex Technologies

A modern, flexible implementation of the classic **Tic Tac Toe** game built with **React + Vite**. This project was developed as a test task for **Sifex Technologies**, fully meeting all the outlined technical requirements.

![Game Demo](https://raw.githubusercontent.com/Gromovick/TicTacToeTest/main/public/tictactoe.gif)

---

## ✨ Features

- 🔄 **Two-player game mode**: Player 1 (X) and Player 2 (O).
- 👥 **Player stats**:
  - Shows the current player's turn.
  - Tracks number of wins per player.
  - Displays which symbol (X or O) each player uses.
- 🧮 **Game progress**:
  - Shows total games played.
  - A game is counted as "played" only if there's a win or draw.
- 🆕 **New Game button**:
  - Instantly resets the board.
  - Always starts with Player 1 (X).
  - Can be used during the game (no result recorded).
- 📏 **Grid size selection**:
  - Adjustable grid from **3x3 up to 9x9**.
  - Grid changes only apply when "New Game" is pressed.
  - Win/draw logic adapts to chosen size.
- 🏆 **Win detection**:
  - Detects win conditions in any direction.
  - Displays a **modal after 2 seconds** with:
    - Winner message: “Player 1/2 won! Congratulations!”
    - Or: “Draw! Try again :)”
- ✅ **Modal closing options**:
  - Press “Ok” button
  - Click outside the modal area
- ♻️ **Persistent board state** after game end until "New Game" is clicked

---

## 📦 Tech Stack

- ⚛️ React
- ⚡ Vite
- 🧠 Custom game logic (no game libraries)
- 🧪 Clean and testable component structure
- 💅 CSS Modules

---

## 📸 Preview

![Gameplay GIF](https://raw.githubusercontent.com/Gromovick/TicTacToeTest/main/public/tictactoe.gif)

---

## 🚀 Getting Started

Clone and run the app locally:

```bash
git clone https://github.com/Gromovick/TicTacToeTest.git
cd TicTacToeTest
npm install
npm run dev
