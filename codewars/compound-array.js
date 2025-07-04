// https://www.codewars.com/kata/56044de2aa75e28875000017/train/javascript

// Input - [1,2,3,4,5,6] and [9,8,7,6]
// Output - [1,9,2,8,3,7,4,6,5,6]

const compoundArray = (a, b) => {
  let result = [];
  const maximumLength = Math.max(a.length, b.length); // 6

  for (let i = 0; i < maximumLength; i++) {
    if (a[i] !== undefined) {
      result.push(a[i]);
    }
    if (b[i] !== undefined) {
      result.push(b[i]);
    }
  }

  return result;
};

console.log(compoundArray([1, 2, 3, 4, 5, 6], [9, 8, 7, 6]));
