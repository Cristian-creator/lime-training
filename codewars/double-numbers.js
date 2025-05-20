const myArr = (numere) => {
  const newArr = [];

  for (let i = 0; i < numere.length; i++) {
    newArr.push(numere[i] * 2);
  }

  return newArr;
};

const returnDouble = (arr) => {
  const arr1 = arr.map((e) => e * 2);

  return arr1;
};

const returnDouble2 = (arr) => arr.map((e) => e * 2);
