// hooks
import { useEffect, useState } from "react";
import "./App.css";
import FirstStep from "./components/FirstStep";
import SecondStep from "./components/SecondStep";

export const initialGame = {
  step: 1,
  selectedOption: undefined,
  houseChoice: "",
  finalMessage: "",
};

const App = () => {
  let [currentGame, setCurrentGame] = useState(initialGame);

  // --- varianta 2 ----
  const initialGamesWon = localStorage.getItem("score") || 0;
  let [gamesWon, setGamesWon] = useState(initialGamesWon);
  // --- varianta 1 ----
  // const initialGamesWon = localStorage.getItem("score");
  // let [gamesWon, setGamesWon] = useState(
  //   initialGamesWon !== null ? Number(initialGamesWon) : 0
  // );

  useEffect(() => {
    localStorage.setItem("score", gamesWon);
  }, [gamesWon]);

  const handleReset = () => {
    setCurrentGame(initialGame);
  };

  return (
    <>
      <div>
        <img src="" />
        <div>
          <h4>Score</h4>
          <p>{gamesWon}</p>
        </div>
      </div>
      {currentGame.step === 1 ? (
        <FirstStep setCurrentGame={setCurrentGame} setGamesWon={setGamesWon} />
      ) : (
        <SecondStep currentGame={currentGame} handleReset={handleReset} />
      )}
    </>
  );
};

// Cum se executa getSelectedOptionImage(getRandomOption())
// 1. Se executa functia getRandomOption
// 2. Se executa functia getSelectedOptionImage

export default App;
