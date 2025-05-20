// caz 1) import de functii
import { useState } from "react";
import functieRandom, { functieRandom2, functieRandom3 } from "./abc";

// caz 2) import de iconite/imagini
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

// caz 3) import de fisier de CSS
import "./App.css";

// componenta
const App = () => {
  let [counter, setCounter] = useState(0);
  // let counter = 0;

  const handleIncrease = () => {
    // counter++;
    const newCounter = counter + 1;
    setCounter(newCounter);
  };

  const handleDecrease = () => {
    const newCounter = counter - 1;
    setCounter(newCounter);
  };

  // JSX
  return (
    <div>
      <h3>Current counter is {counter}</h3>
      <button onClick={handleIncrease}>Increase count</button>
      <button onClick={handleDecrease}>Decrease count</button>
    </div>
  );
};

export default App;
