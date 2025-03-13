// https://www.codewars.com/kata/57f222ce69e09c3630000212/train/javascript

// ['good', 'bad', 'bad', 'bad', 'bad', 'good']
const well = (x) => {
  let counter = 0;

  for (let i = 0; i < x.length; i++) {
    if (x[i] === "good") {
      counter++;
    }
  }

  //   x = 1, 2, 3 - infinit
  if (counter === 1 || counter === 2) {
    return "Publish!";
  }

  if (counter > 2) {
    return "I smell a series!";
  }

  return "Fail!";
};

const well2 = (x) => {
  // filter-ul pastreaza in array toate elementele care indeplinesc conditia
  const filteredArray = x.filter((word) => word === "good"); // ['good', 'good']
  const counter = filteredArray.length;

  if (counter === 1 || counter === 2) {
    return "Publish!";
  }

  if (counter > 2) {
    return "I smell a series!";
  }

  return "Fail!";
};

// console.log(well2(["good", "bad", "bad", "bad", "bad"]));

// Sa se creeze o functie care primeste ca parametru un string.
// String-ul reprezinta numele unei persoane (ex: "Cristian Predusca" )
// Functia sa returneze un string care contine initialele numelui (ex: "CP" )

const getNameInitials = (fullName) => {
  for (let i = 1; i < fullName.length; i++) {
    if (fullName[i] === " ") {
      return fullName[0] + fullName[i + 1];
    }
  }
};

const getNameInitials2 = (fullName) => {
  const splittedName = fullName.split(" "); // ["Cristian", "Predusca"]

  return splittedName[0][0] + splittedName[1][0]; // "C" + "P" = "CP"
};

// "Cristian Predusca"
const getNameInitials3 = (fullName) => {
  let result = "";

  for (let i = 0; i < fullName.length; i++) {
    // "C" === "C"
    // "r" === "R"
    if (fullName[i] !== " " && fullName[i] === fullName[i].toUpperCase()) {
      result += fullName[i]; // "" + "C" = "C" // "C" + "P" = "ACP"
    }
  }

  return result;
};

console.log(getNameInitials3("Cristian Predusca"));
