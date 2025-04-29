// https://www.codewars.com/kata/574b1916a3ebd6e4fa0012e7/train/javascript

// "ab", "AB" -> true
// "aBc" -> "AbC"

// "AB", "Ab"
// --- varianta 1 ---
const isOpposite = (s1, s2) => {
  if (s1.length === 0 && s2.length === 0) return false;

  let s1Opposite = "";

  for (let i = 0; i < s1.length; i++) {
    if (s1[i] === s1[i].toLowerCase()) {
      s1Opposite += s1[i].toUpperCase();
    } else {
      s1Opposite += s1[i].toLowerCase();
    }
  }

  // ternary operator
  return s1Opposite === s2 ? true : false;
  //   if (s1Opposite === s2) {
  //     return true;
  //   } else {
  //     return false;
  //   }
};

// --- varianta 2 ---
// "aB", "Ab"
const isOpposite2 = (s1, s2) => {
  if (s1.length === 0 && s2.length === 0) return false;

  for (let i = 0; i < s1.length; i++) {
    if (s1[i] === s1[i].toLowerCase() && s2[i] === s1[i]) {
      return false;
    }
    if (s1[i] === s1[i].toUpperCase() && s2[i] === s2[i]) {
      return false;
    }
  }

  return true;
};

console.log(isOpposite("", ""));

let user; // undefined

let numbers = [31782, 31287, 9184]; // numbers[5] - undefined

const product = {
  id: 31,
  name: "Headphones",
};

// product.price - undefined

// Summary
// Undefined intalnesti:
// 1) atunci cand declari o variabila fara sa o initializezi
// 2) atunci cand accesezi un index dintr-un array, iar index-ul nu exista
// 3) atunci cand accesezi o proprietate dintr-un obiect, iar proprietatea nu exista
// 4) by default o functie returneaza undefined
