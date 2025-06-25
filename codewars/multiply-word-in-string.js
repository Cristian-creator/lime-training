// https://www.codewars.com/kata/5ace2d9f307eb29430000092/train/javascript

const modifyMultiply = (str, loc, num) => {
  if (num === 0) return "";
  //   pasul 1. Creeaza un array care contine toate cuvintele din string
  //   "This is a string" -> ["This", "is", "a", "string"]
  const words = str.split(" ");
  const word = words[loc]; // "string"
  //   pasul 2. Creeaza o variabila result care initial este egala cu empty string
  let result = "";
  //   pasul 3. Folosind un for, sa se introduca cuvantul de pe indexul loc de num ori in variabila result
  // num = 5
  // i = 0 1 2 3 4 5
  // result = "" + "string" + "string" + "string" + "string" + "string"
  for (let i = 0; i < num; i++) {
    if (i === 0) {
      result += word;
    } else {
      result += "-" + word;
    }
  }
  //   pasul 4. Returneaza result
  return result;
};

modifyMultiply("This is a string", 3, 5); // "string-string-string-string-string"
