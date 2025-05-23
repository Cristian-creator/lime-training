// https://www.codewars.com/kata/5769b3802ae6f8e4890009d2/train/javascript

// ["Keep", "Remove", "Keep", "Remove", "Keep"] -> ["Keep", "Keep", "Keep"]
//    0         1       2        3        4

const removeEveryOther = (arr) => {
  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (i % 2 === 0) {
      newArr.push(arr[i]);
    }
  }

  return result;
};

const removeEveryOther2 = (arr) => {
  let arrNou = [];

  // i = 0 -> 2 -> 4 -> ...
  for (let i = 0; i < arr.length; i += 2) {
    arrNou.push(arr[i]);
  }

  return arrNou;
};

const removeEveryOther3 = (arr) => {
  const rez = [];
  //your code here
  for (let i = 0; i < arr.length; i += 2) {
    rez.push(arr[i]);
  }
  return rez;
};

removeEveryOther3(["keep", "right", "keep", "right", "keep", "right"]);
