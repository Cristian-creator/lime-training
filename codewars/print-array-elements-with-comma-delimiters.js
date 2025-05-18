// https://www.codewars.com/kata/56e2f59fb2ed128081001328/train/javascript

// ["h","o","l","a"] (4) -> "h,o,l,a"
//  0    1   2   3

//  --- varianta cu slice ---
const printArray = (array) => {
  // pasul 1) creeaza o variabila care initial este egala cu un empty string
  let result = "";
  // pasul 2) parcurge array-ul de string-uri si insereaza fiecare string in variabila creata anterior + o virgula la final
  for (let i = 0; i < array.length; i++) {
    result += array[i] + ","; // "" + "h" + "," + "o" + "," + "l" + "," + "a" + "," = "h,o,l,a"
  }
  // pasul 3) returneaza variabila
  return result.slice(0, result.length - 1);
};

//  --- varianta fara slice ---
const printArray2 = (array) => {
  // pasul 1) creeaza o variabila care initial este egala cu un empty string
  let result = "";
  // pasul 2) parcurge array-ul de string-uri si insereaza fiecare string in variabila creata anterior + o virgula la final
  for (let i = 0; i < array.length; i++) {
    result += array[i]; // "" + "h" + "," + "o" + "," + "l" + "," + "a" + "," = "h,o,l,a"
    if (i < array.length - 1) {
      result += ",";
    }
  }
  // pasul 3) returneaza variabila
  return result;
};

// ["h","o","l","a"] (4) -> "h,o,l,a"

const printArray3 = (array) => {
  // pasul 1) creeaza o variabila care initial este egala cu un empty string
  let result = array[0];
  // pasul 2) parcurge array-ul de string-uri si insereaza fiecare string in variabila creata anterior + o virgula la final
  for (let i = 1; i < array.length; i++) {
    result += "," + array[i]; // "h" + "," + "o" + "," + "l" + "," + "a"
  }
  // pasul 3) returneaza variabila
  return result;
};

// -----
const printArray4 = (array) => {
  const rez = array.join(",");
  return rez;
};
