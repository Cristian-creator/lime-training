import { useState } from "react";
import "./App.css";

const App = () => {
  let [selectedRate, setSelectedRate] = useState(0);

  const handleClickOne = () => {
    setSelectedRate(1);
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
        className={selectedRate === 1 ? "selected-rate" : ""}>
        1
      </button>
      <button>2</button>
      <button>3</button>
      <button>4</button>
      <button>5</button>
      <button>Submit</button>
    </>
  );
};

export default App;
