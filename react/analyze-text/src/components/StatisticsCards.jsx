const StatisticsCards = ({ text, excludeSpaces }) => {
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
  );
};

export default StatisticsCards;
