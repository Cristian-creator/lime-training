// 3.5 JS in Browser
// DOM - Document Object Model

// Regula: fiecare element selectat il bagam intr-o constanta
// !IMPORTANT! cand selectorul nu este bun => constanta o sa fie egala cu null
const sectionContainer = document.querySelector(".color-switcher-container");
const previousColorButton = document.querySelector(".previous-button");
const nextColorButton = document.querySelector(".next-button");
const resetButton = document.querySelector(".reset-button");

const displayedColorSpan = document.querySelector(".displayed-color");
const numberOfClicksSpan = document.querySelector(".number-of-clicks");

// 1) #AD636C
// 2) #009B72
// 3) #6761AB
// 4) #347E8D
// 5) #798186

const colors = ["#AD636C", "#009B72", "#6761AB", "#347E8D", "#798186"];
//                  0          1           2         3          4
let index = 0;
let numberOfClicks = 0;

const updateUserInterface = () => {
  sectionContainer.style.backgroundColor = colors[index];
  displayedColorSpan.innerText = colors[index];
  displayedColorSpan.style.color = colors[index];
};

// --- Previous ---
const displayPreviousColor = () => {
  index--;

  if (index === -1) {
    index = colors.length - 1;
  }

  updateUserInterface();
};

previousColorButton.addEventListener("click", displayPreviousColor);

// --- Next ---
const displayNextColor = () => {
  index++;

  if (index === colors.length) {
    index = 0;
  }

  updateUserInterface();

  numberOfClicks++;
  numberOfClicksSpan.innerText = numberOfClicks;
};

nextColorButton.addEventListener("click", displayNextColor);

const resetColor = () => {
  index = 1;

  sectionContainer.style.backgroundColor = colors[0];
  displayedColorSpan.innerText = colors[0];
  displayedColorSpan.style.color = colors[0];
};

resetButton.addEventListener("click", resetColor);

// --- Varianta initiala ---
// let counter = 0;

// const switchColor = () => {
//   counter++; // 1 2 3

//   if (counter === 1) {
//     // prima apasare
//     sectionContainer.style.backgroundColor = "#009B72";
//   } else if (counter === 2) {
//     sectionContainer.style.backgroundColor = "#6761AB";
//   } else if (counter === 3) {
//     sectionContainer.style.backgroundColor = "#347E8D";
//   } else if (counter === 4) {
//     sectionContainer.style.backgroundColor = "#798186";
//   } else {
//     counter = 0;
//     sectionContainer.style.backgroundColor = "#AD636C";
//   }
// };
