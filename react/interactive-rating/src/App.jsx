import { useState } from "react";
import "./App.css";

const App = () => {
  let [selectedRate, setSelectedRate] = useState(0);
  let [hasCompletedStepOne, setHasCompletedStepOne] = useState(false);
  const numbers = [1, 2, 3, 4, 5];

  const handleClick = (e) => {
    const newSelectedRate = Number(e.target.innerText);
    setSelectedRate(newSelectedRate);
  };

  const handleSubmit = () => {
    if (selectedRate !== 0) {
      setHasCompletedStepOne(true);
    } else {
      alert("Please select a rate");
    }
  };

  return (
    <>
      {hasCompletedStepOne === false ? (
        <div>
          <h3>How did we do?</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique,
            placeat at. Non sint maxime quaerat reprehenderit magnam nam tenetur
            quam!
          </p>
          {/* randare dinamica */}
          {numbers.map((number) => (
            <button
              key={number}
              onClick={handleClick}
              className={selectedRate === number ? "selected-rate" : ""}>
              {number}
            </button>
          ))}
          <button onClick={handleSubmit}>Submit</button>
        </div>
      ) : (
        <div>
          <p>You selected {selectedRate} out of 5</p>
          <h3>Thank you</h3>
        </div>
      )}
    </>
  );
};

export default App;
