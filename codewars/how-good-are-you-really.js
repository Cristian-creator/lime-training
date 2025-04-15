// https://www.codewars.com/kata/5601409514fc93442500010b/train/javascript

// [41, 75, 72, 56, 80, 82, 81, 33]
// 50
// --- varianta 1 ---
// const betterThanAverage = (classPoints, yourPoints) => {
//   // function scoped variabile
//   let sum = 0;

//   for (let i = 0; i < classPoints.length; i++) {
//     sum += classPoints[i];
//   }

//   const average = sum / classPoints.length;

//   if (yourPoints > average) {
//     return true;
//   } else {
//     return false;
//   }
// };

// --- varianta 2 ---
// const betterThanAverage = (classPoints, yourPoints) => {
//   // function scoped variabile
//   let sum = 0;

//   for (let i = 0; i < classPoints.length; i++) {
//     sum += classPoints[i];
//   }

//   const average = sum / classPoints.length;

//   if (yourPoints > average) {
//     return true;
//   }

//   return false;
// };

// --- varianta 3 ---
const betterThanAverage = (classPoints, yourPoints) => {
  let sum = 0;

  for (let i = 0; i < classPoints.length; i++) {
    sum += classPoints[i];
  }

  const average = sum / classPoints.length;

  return yourPoints > average;
};

betterThanAverage([41, 75, 72, 56, 80, 82, 81, 33], 50);
