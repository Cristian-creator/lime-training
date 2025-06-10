import { useState } from "react";
// import paperImage from "./assets/paper.svg";
import paper from "./assets/paper.svg";
import rock from "./assets/rock.svg";
import scissors from "./assets/scissors.svg";
import "./App.css";

const getSelectedOptionImage = (option) => {
  if (option === "paper") return paper;
  if (option === "rock") return rock;
  if (option === "scissors") return scissors;
};

// --- varianta 2 ---
// const icons = {
//   paper: paper,
//   rock: rock,
//   scissors: scissors,
// };

const playerOptions = ["rock", "paper", "scissors"];
//                       0        1          2

const getRandomOption = () => {
  // 1. genereaza un numar random din lista: 0, 1 sau 2
  const number = Math.floor(Math.random() * 3);
  // 2. foloseste numarul pe post de index ca sa returnezi elementul din playerOptions care sta pe acel index
  return playerOptions[number];
};

const App = () => {
  let [selectedOption, setSelectedOption] = useState(undefined);
  let [currentStep, setCurrentStep] = useState(1);
  let [gamesWon, setGamesWon] = useState(0);
  let [finalMessage, setFinalMessage] = useState("");
  let [houseChoice, setHouseChoice] = useState("");

  const handleSelectPaper = () => {
    setSelectedOption("paper");
    setCurrentStep(2);
    // --- de explicat de ce nu ---
    // rps(selectedOption, houseChoice);
    // --- asa da ---
    const newHouseChoice = getRandomOption();
    setHouseChoice(newHouseChoice);
    rps("paper", newHouseChoice);
  };

  const handleSelectRock = () => {
    setSelectedOption("rock");
    setCurrentStep(2);
    const newHouseChoice = getRandomOption();
    setHouseChoice(newHouseChoice);
    rps("rock", newHouseChoice);
  };

  const handleSelectScissors = () => {
    setSelectedOption("scissors");
    setCurrentStep(2);
    const newHouseChoice = getRandomOption();
    setHouseChoice(newHouseChoice);
    rps("scissors", newHouseChoice);
  };

  const handleReset = () => {
    setCurrentStep(1);
  };

  const rps = (p1, p2) => {
    console.log("p1: ", p1);
    console.log("p2: ", p2);

    if (p1 === p2) setFinalMessage("Draw");

    if (p1 === "rock") {
      if (p2 === "paper") setFinalMessage("Player 2 won!");
      if (p2 === "scissors") {
        setGamesWon(gamesWon + 1);
        setFinalMessage("Player 1 won!");
      }
    }

    if (p1 === "paper") {
      if (p2 === "rock") {
        setGamesWon(gamesWon + 1);
        setFinalMessage("Player 1 won!");
      }
      if (p2 === "scissors") setFinalMessage("Player 2 won!");
    }

    if (p1 === "scissors") {
      if (p2 === "rock") setFinalMessage("Player 2 won!");
      if (p2 === "paper") {
        setGamesWon(gamesWon + 1);
        setFinalMessage("Player 1 won!");
      }
    }
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
      {currentStep === 1 ? (
        <div>
          <button onClick={handleSelectPaper}>
            <img src={paper} />
          </button>
          <button onClick={handleSelectRock}>
            <img src={rock} />
          </button>
          <button onClick={handleSelectScissors}>
            <img src={scissors} />
          </button>
        </div>
      ) : (
        <div>
          <div>
            <h3>You picked</h3>
            <img src={getSelectedOptionImage(selectedOption)} />
            {/* --- varianta 2 --- */}
            {/* <img src={icons[selectedOption]} /> */}
          </div>
          <div>
            <h3>{finalMessage}</h3>
            <button onClick={handleReset}>Play again</button>
          </div>
          <div>
            <h3>The house picked</h3>
            <img src={getSelectedOptionImage(houseChoice)} />
          </div>
        </div>
      )}
    </>
  );
};

// Cum se executa getSelectedOptionImage(getRandomOption())
// 1. Se executa functia getRandomOption
// 2. Se executa functia getSelectedOptionImage

export default App;
