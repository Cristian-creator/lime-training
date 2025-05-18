// https://www.codewars.com/kata/57a0885cbb9944e24c00008e/train/javascript

const removeExclamationMarks = (s) => {
  let result = "";

  for (let i = 0; i < s.length; i++) {
    if (s[i] !== "!") {
      result += s[i];
    }
  }

  return result;
};

// "hello world!" -> "hello world"
const removeExclamationMarks2 = (s) => {
  const arr = s.split(""); // ["h", "e", "l", ...]
  let arr2 = "";

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== "!") {
      arr2 += arr[i];
    }
  }

  return arr2;
};

const removeExclamationMarks3 = (s) => s.replaceAll("!", "");
