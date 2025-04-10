// https://www.codewars.com/kata/582cb0224e56e068d800003c/train/javascript

// time = 3 ----> litres = 1

// time = 6.7---> litres = 3

// time = 11.8--> litres = 5

const litres = (time) => {
  // Math.floor ne da partea intreaga dintr-un numar. ex: 1.75 -> 1
  //   numberOfLitres - este o variabila function scoped
  const numberOfLitres = Math.floor(time / 2);

  return numberOfLitres;
};

const litres2 = (time) => {
  // Math.floor ne da partea intreaga dintr-un numar. ex: 1.75 -> 1
  //   numberOfLitres - este o variabila function scoped
  return Math.floor(time / 2);
};

const litres3 = (time) => Math.floor(time / 2);

litres(3);
