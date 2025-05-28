// https://www.codewars.com/kata/57ab3c09bb994429df000a4a/train/javascript

// [4, 10, 10, 9]  =>  [10, 9]

// [1, 1, 1]
const twoHighest = (arr) => {
  if (arr.length === 0) return [];

  // 1. Gaseste maximul din arr
  let max1 = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max1) {
      max1 = arr[i];
    }
  }

  // 2. Elimina maximul din arr
  const arrWithoutMax = arr.filter((element) => element !== max1);

  if (arrWithoutMax.length === 0) return [max1];

  // 3. Gaseste noul maxim din arr
  let max2 = arrWithoutMax[0]; // undefined

  for (let i = 1; i < arrWithoutMax.length; i++) {
    if (arrWithoutMax[i] > max2) {
      max2 = arrWithoutMax[i];
    }
  }

  // 4. Returneaza un array cu primul max si cu al doilea max
  return [max1, max2];
};

console.log(twoHighest([]));

// [4, 10, 10, 9]  =>  [10, 9]
// [4, 9, 10, 10]
const twoHighest2 = (arr) => {};
