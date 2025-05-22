import { useState } from "react";
import "./App.css";
import axios from "axios";

const App = () => {
  const [currentAdvice, setCurrentAdvice] = useState({
    id: 117,
    content:
      "It is easy to sit up and take notice, what's difficult is getting up and taking action.",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleGenerateAdvice = async () => {
    setIsLoading(true);

    try {
      const response = await axios.get("https://api.adviceslip.com/advice");

      setCurrentAdvice({
        id: response.data.slip.id,
        content: response.data.slip.advice,
      });
    } catch (error) {
      alert("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <p>Advice #{currentAdvice.id}</p>
      <p>"{currentAdvice.content}"</p>
      <button
        onClick={handleGenerateAdvice}
        disabled={isLoading === true ? true : false}>
        {isLoading === true ? <div className="spinner"></div> : null}
        Generate
      </button>
    </>
  );
};

export default App;
