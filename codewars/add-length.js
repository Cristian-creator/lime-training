// https://www.codewars.com/kata/559d2284b5bb6799e9000047/train/javascript

// "apple ban" -> ["apple 5", "ban 3"]
const addLength = (str) => {
  const result = [];
  const words = str.split(" "); // ["apple", "ban"]

  for (let i = 0; i < words.length; i++) {
    result.push(words[i] + " " + words[i].length);
  }

  return result;
};

// method chaining
const addLength2 = (str) =>
  str.split(" ").map((word) => word + " " + word.length);

const addLength3 = (str) => {
  const words = str.split(" ");
  const result = words.map((word) => word + " " + word.length);

  return result;
};

console.log(addLength("apple ban"));
