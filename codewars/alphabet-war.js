// https://www.codewars.com/kata/59377c53e66267c8f6000027/train/javascript

// "zdqmwpbsa"
// left side power: 0 + 4 + 3 + 2 + 1
// right side power: 0 + 1 + 2 + 3 + 4

const alphabetWar = (fight) => {
  // 1. Creeaza 2 variabile pentru cele 2 sume de puteri.
  let leftSidePower = 0;
  let rightSidePower = 0;
  // 2. Parcurge string-ul fight, ia fiecare litera pe rand si, daca face parte dintr-un grup,
  // creste suma acelui grup in functie de puterea literei
  for (let i = 0; i < fight.length; i++) {
    if (fight[i] === "w") {
      leftSidePower += 4;
    } else if (fight[i] === "p") {
      leftSidePower += 3;
    } else if (fight[i] === "b") {
      leftSidePower += 2;
    } else if (fight[i] === "s") {
      leftSidePower += 1;
    } else if (fight[i] === "m") {
      rightSidePower += 4;
    } else if (fight[i] === "q") {
      rightSidePower += 3;
    } else if (fight[i] === "d") {
      rightSidePower += 2;
    } else if (fight[i] === "z") {
      rightSidePower += 1;
    }
  }
  // 3. Pe baza celor 2 sume returneaza un string reprezentand finalul razboiului
  if (leftSidePower > rightSidePower) return "Left side wins!";
  if (rightSidePower > leftSidePower) return "Right side wins!";
  return "Let's fight again!";

  //   if (leftSidePower > rightSidePower) {
  //     return "Left side wins!";
  //   } else if (rightSidePower > leftSidePower) {
  //     return "Right side wins!";
  //   } else {
  //     return "Let's fight again!";
  //   }
};

const alphabetWar2 = (fight) => {
  // 1. Creeaza 2 variabile pentru cele 2 sume de puteri.
  let leftSidePower = 0;
  let rightSidePower = 0;
  // 2. Parcurge string-ul fight, ia fiecare litera pe rand si, daca face parte dintr-un grup,
  // creste suma acelui grup in functie de puterea literei
  for (let i = 0; i < fight.length; i++) {
    // fight = "zdqmwpbsa"
    switch (fight[i]) {
      case "w":
        leftSidePower += 4;
        break;
      case "p":
        leftSidePower += 3;
        break;
      case "z":
        rightSidePower += 1;
        break;
    }
  }
  // 3. Pe baza celor 2 sume returneaza un string reprezentand finalul razboiului
  if (leftSidePower > rightSidePower) return "Left side wins!";
  if (rightSidePower > leftSidePower) return "Right side wins!";
  return "Let's fight again!";
};

const alphabetWar3 = (fight) => {
  let leftPower = 0;
  let rightPower = 0;

  const left = {
    w: 10,
    p: 8,
    b: 5,
    s: 1,
  };
  const right = {
    m: 4,
    q: 3,
    d: 2,
    z: 1,
  };

  // const left = ["s", "b", "p", "w"];
  //            0.    1.   2.   3

  for (let i = 0; i < fight.length; i++) {
    let letter = fight[i];

    if (left[letter]) {
      leftPower += left[letter];
    } else if (right[letter]) {
      rightPower += right[letter];
    }
  }

  if (leftPower > rightPower) return "left side win!";

  if (rightPower > leftPower) return "right side win";

  return "let's fight again";
};

// Creeaza o functie care primeste un parametru reprezentand numele zilei curente ("luni", "marti", "miercuri"... "duminik")
// Functia sa returneze numarul zilei (1, 2, 3 ... 7)

const weekdays = {
  luni: 1,
  marti: 2,
  miercuri: 3,
  joi: 4,
  vineri: 5,
  sambata: 6,
  duminica: 7,
};

weekdays.miercuri;
weekdays["miercuri"];

// currentWeekDay = "sambata"
const getWeekDayNumber = (currentWeekDay) => {
  return weekdays[currentWeekDay];
};
