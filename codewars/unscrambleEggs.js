// https://www.codewars.com/kata/55ea5650fe9247a2ea0000a7/train/javascript
const unscrambleEggs = (word) => {
  let result = "";

  for (let i = 0; i < word.length; i++) {
    if (word[i] === "e" && word[i + 1] === "g" && word[i + 2] === "g") {
      i += 2;
    } else {
      result += word[i]; // "" + "B" + "e" => "Be"
    }
  }

  return result;
};

unscrambleEggs("Beggegeggineggneggeregg"); // "Beginner"

const unscrambleEggs2 = (word) => {
  return word.replaceAll("egg", "");
};

console.log(unscrambleEggs2("Beggegeggineggneggeregg"));

// --- Replace Method ---

const paragraph = "I think Ruth's dog is cuter than your dog!";

paragraph.replaceAll("dog", "cat");

console.log(paragraph); // "I think Ruth's cat is cuter than your cat!"

// ----

let history = [
  {
    id: 1,
    bill: 100,
    tip: 10,
    numberOfPeople: 2,
  },
  {
    id: 2,
    bill: 150,
    tip: 10,
    numberOfPeople: 3,
  },
  {
    id: 3,
    bill: 300,
    tip: 10,
    numberOfPeople: 3,
  },
];

history = history.filter((element) => element.id !== 1);

console.log(history);
