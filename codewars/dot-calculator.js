// https://www.codewars.com/kata/6071ef9cbe6ec400228d9531/train/javascript

// "..... - ..." ------> ".."
const dotCalculator = (equation) => {
  const elements = equation.split(" "); // ["..", "-", ".."]
  const firstNumber = elements[0].length; // 2
  const operator = elements[1];
  const secondNumber = elements[2].length; // 2

  let result;

  if (operator === "+") {
    result = firstNumber + secondNumber;
  } else if (operator === "-") {
    result = firstNumber - secondNumber;
  } else if (operator === "*") {
    result = firstNumber * secondNumber;
  } else {
    result = Math.floor(firstNumber / secondNumber);
  }

  let equationResult = "";

  // i = 0
  // i = 1
  for (let i = 0; i < result; i++) {
    equationResult += "."; // "" + "." + "." = ".."
  }

  return equationResult;
};

const dotCalculator2 = (equation) => {
  const elements = equation.split(" "); // ["..", "-", ".."]
  const firstNumber = elements[0].length; // 2
  const operator = elements[1];
  const secondNumber = elements[2].length; // 2

  let result;

  switch (operator) {
    case "+":
      result = firstNumber + secondNumber;
      break;
    case "-":
      result = firstNumber - secondNumber;
      break;
    case "*":
      result = firstNumber * secondNumber;
      break;
    case "//":
      result = Math.floor(firstNumber / secondNumber);
      break;
  }

  let equationResult = "";

  // i = 0
  // i = 1
  for (let i = 0; i < result; i++) {
    equationResult += "."; // "" + "." + "." = ".."
  }

  return equationResult;
};
