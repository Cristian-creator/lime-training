import paper from "../assets/paper.svg";
import rock from "../assets/rock.svg";
import scissors from "../assets/scissors.svg";

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

const FirstStep = ({ setCurrentGame, setGamesWon }) => {
  const handlePlayerSelect = (newSelectedOption) => {
    const newHouseChoice = getRandomOption();
    setCurrentGame({
      step: 2,
      selectedOption: newSelectedOption,
      houseChoice: newHouseChoice,
      finalMessage: rps(newSelectedOption, newHouseChoice),
    });
  };

  const rps = (p1, p2) => {
    console.log("p1: ", p1);
    console.log("p2: ", p2);

    if (p1 === p2) return "Draw";

    if (p1 === "rock") {
      if (p2 === "paper") return "Player 2 won!";
      if (p2 === "scissors") {
        setGamesWon((prev) => prev + 1);
        // localStorage.setItem("score", gamesWon + 1);
        return "Player 1 won!";
      }
    }

    if (p1 === "paper") {
      if (p2 === "rock") {
        setGamesWon((prev) => prev + 1);
        // localStorage.setItem("score", gamesWon + 1);
        return "Player 1 won!";
      }
      if (p2 === "scissors") return "Player 2 won!";
    }

    if (p1 === "scissors") {
      if (p2 === "rock") return "Player 2 won!";
      if (p2 === "paper") {
        setGamesWon((prev) => prev + 1);
        // localStorage.setItem("score", gamesWon + 1);
        return "Player 1 won!";
      }
    }
  };

  return (
    <div>
      <button onClick={() => handlePlayerSelect("paper")}>
        <img src={paper} />
      </button>
      <button onClick={() => handlePlayerSelect("rock")}>
        <img src={rock} />
      </button>
      <button onClick={() => handlePlayerSelect("scissors")}>
        <img src={scissors} />
      </button>
    </div>
  );
};

export default FirstStep;
