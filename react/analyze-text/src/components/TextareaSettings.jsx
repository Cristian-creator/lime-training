const TextareaSettings = ({
  excludeSpaces,
  setExcludeSpaces,
  hasCharacterLimit,
  setHasCharacterLimit,
  characterLimit,
  setCharacterLimit,
}) => {
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

  return (
    <>
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
    </>
  );
};

export default TextareaSettings;
