// https://www.codewars.com/kata/57cebe1dc6fdc20c57000ac9/train/javascript

// "bitcoin take over the world maybe who knows perhaps" -> 3
const findShort = (s) => {
  // pasul 1. Extrage intr-un array toate cuvintele din string
  const words = s.split(" "); // ['bitcoin', 'take', 'over'...]
  // pasul 2. Parcurge string-ul de cuvinte si aplica algoritmul de aflare de minim
  let min = words[0].length; // 7

  for (let i = 1; i < words.length; i++) {
    if (words[i].length < min) {
      min = words[i].length;
    }
  }
  // pasul 3. Returneaza minim
  return min;
};

const findShort2 = (s) => {
  const lengths = s.split(" ").map((word) => word.length); // ['bitcoin', 'take', 'over'...] -> [7, 4, 4 ...]

  // varianta 1 - aplicare algoritm gasire minim
  // varianta 2 - Math.min()
  // varianta 3 - sorteaza array-ul in ordine crescatoare si returneaza primul element din array-ul sortat
  // [7, 4, 4 ...] -> [4, 4, 7...]

  return min;
};
