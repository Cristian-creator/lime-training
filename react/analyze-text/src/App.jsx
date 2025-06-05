import { useState } from "react";
import "./App.css";
import Textarea from "./components/Textarea";
import TextareaSettings from "./components/TextareaSettings";
import StatisticsCards from "./components/StatisticsCards";
import LetterDensity from "./components/LetterDensity";

// --- Word Count ---
// - inlocuim toate punctele, semnele de exclamatie, semnele de intrebare etc. cu un spatiu
// - apoi aplicam split pe noul string => un array care contine toate cuvintele
// - filtram array-ul si eliminam empty strings ( vezi caz cu puncte de suspensie )

const App = () => {
  let [text, setText] = useState("");
  let [excludeSpaces, setExcludeSpaces] = useState(false);
  let [hasCharacterLimit, setHasCharacterLimit] = useState(false);
  let [characterLimit, setCharacterLimit] = useState(undefined);

  return (
    <>
      <h1>Analyze your text in real-time.</h1>
      <Textarea
        text={text}
        setText={setText}
        hasCharacterLimit={hasCharacterLimit}
        characterLimit={characterLimit}
      />
      <TextareaSettings
        excludeSpaces={excludeSpaces}
        setExcludeSpaces={setExcludeSpaces}
        hasCharacterLimit={hasCharacterLimit}
        setHasCharacterLimit={setHasCharacterLimit}
        characterLimit={characterLimit}
        setCharacterLimit={setCharacterLimit}
      />
      <StatisticsCards text={text} excludeSpaces={excludeSpaces} />
      <LetterDensity text={text} />
    </>
  );
};

export default App;
