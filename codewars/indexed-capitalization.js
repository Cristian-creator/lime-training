// https://www.codewars.com/kata/59cfc09a86a6fdf6df0000f1/train/javascript

// "abcdef", [1,2,5]     ==> "aBCdeF"
// "abcdef", [1,2,5,100] ==> "aBCdeF" // There is no index 100.

const capitalize = (string, indices) => {
  let result = "";

  for (let i = 0; i < string.length; i++) {
    if (indices.includes(i)) {
      result += string[i].toUpperCase();
    } else {
      result += string[i];
    }
  }

  return result;
};

// "abcdef".split() -> ["a", "b", "c", "d", "e", "f"].map() -> ["a", "B", "C", "d", "e", "F"].join() -> "aBCdeF"
const capitalize2 = (string, indices) => {
  return string
    .split("")
    .map((carcater, index) =>
      indices.includes(index) ? carcater.toUpperCase() : carcater
    )
    .join("");
};

// "abcdef", [1,2,5]     ==> "aBCdeF"
// "abcdef", [1,2,5,100] ==> "aBCdeF" // There is no index 100.

const capitalize3 = (string, indices) => {
  let chars = string.split("");
  for (let i = 0; i < indices.length; i++) {
    let index = indices[i]; // 1
    if (index >= 0 && index < chars.length) {
      chars[index] = chars[index].toUpperCase();
    }
  }
  return chars.join("");
};
