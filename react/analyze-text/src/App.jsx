import { useState } from "react";
import "./App.css";

// --- Word Count ---
// - inlocuim toate punctele, semnele de exclamatie, semnele de intrebare etc. cu un spatiu
// - apoi aplicam split pe noul string => un array care contine toate cuvintele
// - filtram array-ul si eliminam empty strings ( vezi caz cu puncte de suspensie )

const App = () => {
  let [text, setText] = useState("");
  let [excludeSpaces, setExcludeSpaces] = useState(false);
  let [hasCharacterLimit, setHasCharacterLimit] = useState(false);
  let [characterLimit, setCharacterLimit] = useState(undefined);

  const handleTextChange = (e) => {
    setText(e.target.value.trim());
  };

  const handleExcludeSpaces = () => {
    setExcludeSpaces(!excludeSpaces);
  };

  const handleHasCharacterLimit = () => {
    setHasCharacterLimit(!hasCharacterLimit);
  };

  const handleCharacterLimitChange = (e) => {
    const newCharacterLimit = Number(e.target.value);
    setCharacterLimit(newCharacterLimit);
  };

  const wordCount = text
    .replaceAll(".", " ")
    .replaceAll("!", " ")
    .replaceAll("?", " ")
    .split(" ")
    .filter((word) => word !== "").length;

  const sentenceCount = text
    .replaceAll("?", ".")
    .replaceAll("!", ".")
    .replaceAll("...", "")
    .split(".")
    .filter((word) => word !== "").length;

  return (
    <>
      <textarea
        rows="6"
        cols="100"
        placeholder="Start typing here ... ( or paste your text )"
        onChange={handleTextChange}></textarea>
      {hasCharacterLimit === true && text.length > characterLimit ? (
        <p>Limit reached! Your text exceeds {characterLimit} characters.</p>
      ) : null}
      {/* ----------- Exclude Spaces ----------- */}
      <input
        type="checkbox"
        id="exclude-spaces"
        onChange={handleExcludeSpaces}
        value={excludeSpaces}
      />
      <label htmlFor="exclude-spaces">Exclude Spaces</label>
      {/* ----------- Character Limit ----------- */}
      <input
        type="checkbox"
        id="character-limit"
        onChange={handleHasCharacterLimit}
        value={excludeSpaces}
      />
      <label htmlFor="character-limit">Set Character Limit</label>
      {hasCharacterLimit === true ? (
        <input
          type="number"
          onChange={handleCharacterLimitChange}
          value={characterLimit}
        />
      ) : null}
      {/* ----------- Cards ----------- */}
      <div>
        <div>
          <p>
            {excludeSpaces === true
              ? text.replaceAll(" ", "").length
              : text.length}
          </p>
          <h3>Total Characters</h3>
        </div>
        <div>
          <p>{wordCount}</p>
          <h3>Word Count</h3>
        </div>
        <div>
          <p>{sentenceCount}</p>
          <h3>Sentence Count</h3>
        </div>
      </div>
    </>
  );
};

export default App;
