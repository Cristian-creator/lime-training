import paper from "../assets/paper.svg";
import rock from "../assets/rock.svg";
import scissors from "../assets/scissors.svg";

const getSelectedOptionImage = (option) => {
  if (option === "paper") return paper;
  if (option === "rock") return rock;
  if (option === "scissors") return scissors;
};

const SecondStep = ({ currentGame, handleReset }) => {
  return (
    <div>
      <div>
        <h3>You picked</h3>
        <img src={getSelectedOptionImage(currentGame.selectedOption)} />
        {/* --- varianta 2 --- */}
        {/* <img src={icons[selectedOption]} /> */}
      </div>
      <div>
        <h3>{currentGame.finalMessage}</h3>
        <button onClick={handleReset}>Play again</button>
      </div>
      <div>
        <h3>The house picked</h3>
        <img src={getSelectedOptionImage(currentGame.houseChoice)} />
      </div>
    </div>
  );
};

export default SecondStep;
