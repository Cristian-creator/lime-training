// https://www.codewars.com/kata/59a9919107157a45220000e1/train/javascript

// array = [6, 9, 3, 4, 3, 82, 11]
// n     = 3
// ======> [2, 4]

const findAll = (array, n) => {
  // Pasul 1. Creeaza o variabila result care initial este egala cu un empty array.
  let result = [];
  // Pasul 2. Parcurge array-ul primit prin parametru si ia fiecare numar pe rand
  // si daca dai peste unul care este egal cu n, atunci ia-i index-ul si introdu-l
  // in result.
  for (let i = 0; i < array.length; i++) {
    if (array[i] === n) {
      result.push(i);
    }
  }
  // Pasul 3. Returneaza result
  return result;
};
