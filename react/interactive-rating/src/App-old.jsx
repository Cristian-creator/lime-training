import { useState } from "react";
import "./App.css";

const App = () => {
  let [selectedRate, setSelectedRate] = useState(0);

  const handleClickOne = () => {
    setSelectedRate(1);
  };

  const handleClickTwo = () => {
    setSelectedRate(2);
  };

  const handleClickThree = () => {
    setSelectedRate(3);
  };

  const handleClickFour = () => {
    setSelectedRate(4);
  };

  const handleClickFive = () => {
    setSelectedRate(5);
  };

  return (
    <>
      <h3>How did we do?</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique,
        placeat at. Non sint maxime quaerat reprehenderit magnam nam tenetur
        quam!
      </p>
      <button
        onClick={handleClickOne}
        // conditional rendering
        className={selectedRate === 1 ? "selected-rate" : ""}>
        1
      </button>
      <button
        onClick={handleClickTwo}
        className={selectedRate === 2 ? "selected-rate" : ""}>
        2
      </button>
      <button
        onClick={handleClickThree}
        className={selectedRate === 3 ? "selected-rate" : ""}>
        3
      </button>
      <button
        onClick={handleClickFour}
        className={selectedRate === 4 ? "selected-rate" : ""}>
        4
      </button>
      <button
        onClick={handleClickFive}
        className={selectedRate === 5 ? "selected-rate" : ""}>
        5
      </button>
      <button>Submit</button>
    </>
  );
};

export default App;
