// Creeaza o functie care primeste ca parametru un string.
// Functia sa returneze un array de forma celui de mai jos
// ex: "Lorem ipsum dolor"
// [
//     {
//         letter: "O",
//         numberOfOccurences: 3,
//         percentage: 16
//     }
// ]

const getLettersReport = (text) => {
  // "Lorem ipsum dolor" -> "loremipsumdolor"
  const formattedText = text.toLowerCase().replaceAll(" ", "");
  // 1. creeaza un array in care pune toate literele din text. fiecare litera trebuie sa apara o singura data
  // ["o", "l", "i", "p", "s", "u", "m", "d", "r", "e"]
  const uniqueLetters = [];

  for (let i = 0; i < formattedText.length; i++) {
    if (uniqueLetters.includes(formattedText[i]) === false) {
      uniqueLetters.push(formattedText[i]);
    }
  }

  // 2. creeaza o constanta care contine un empty array
  const result = [];

  // 3. pentru fiecare litera din primul array insereaza un obiect in al doilea array
  for (let i = 0; i < uniqueLetters.length; i++) {
    // cautam de cate ori apare uniqueLetters[i] in formattedText
    let counter = 0;

    for (let j = 0; j < formattedText.length; j++) {
      if (formattedText[j] === uniqueLetters[i]) {
        counter++;
      }
    }

    const percentage = (counter * 100) / formattedText.length;
    const roundedPercentage = percentage.toFixed(2);

    result.push({
      letter: uniqueLetters[i],
      numberOfOccurences: counter,
      percentage: roundedPercentage,
    });
  }

  // 4. returneaza al doilea array
  return result;
};

const LetterDensity = ({ text }) => {
  return (
    <div>
      <h2>Letter Density</h2>
      {text.length === 0 ? (
        <p>No characters found. Start typing to see letter density.</p>
      ) : (
        getLettersReport(text).map((letterData) => (
          <div>
            <p>{letterData.letter}</p>
            <progress value={letterData.percentage} max="100" />
            <p>
              {letterData.numberOfOccurences} ({letterData.percentage}%)
            </p>
          </div>
        ))
      )}
    </div>
  );
};

export default LetterDensity;
