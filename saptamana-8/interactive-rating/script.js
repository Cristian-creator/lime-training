const rateOneButton = document.querySelector(
  ".feedback-rate-button:nth-of-type(1)"
);
const rateTwoButton = document.querySelector(
  ".feedback-rate-button:nth-of-type(2)"
);
const rateThreeButton = document.querySelector(
  ".feedback-rate-button:nth-of-type(3)"
);
const rateFourButton = document.querySelector(
  ".feedback-rate-button:nth-of-type(4)"
);
const rateFiveButton = document.querySelector(
  ".feedback-rate-button:nth-of-type(5)"
);

let selectedRateNumber = 0;

// --- One ---
const selectRateOne = () => {
  selectedRateNumber = 1;

  rateOneButton.classList.add("selected-rate");
  rateTwoButton.classList.remove("selected-rate");
  rateThreeButton.classList.remove("selected-rate");
  rateFourButton.classList.remove("selected-rate");
  rateFiveButton.classList.remove("selected-rate");
};

rateOneButton.addEventListener("click", selectRateOne);

// --- Two ---
const selectRateTwo = () => {
  selectedRateNumber = 2;

  rateTwoButton.classList.add("selected-rate");
  rateOneButton.classList.remove("selected-rate");
  rateThreeButton.classList.remove("selected-rate");
  rateFourButton.classList.remove("selected-rate");
  rateFiveButton.classList.remove("selected-rate");
};

rateTwoButton.addEventListener("click", selectRateTwo);

// --- Trhee ---
const selectRateThree = () => {
  selectedRateNumber = 3;

  rateThreeButton.classList.add("selected-rate");
  rateOneButton.classList.remove("selected-rate");
  rateTwoButton.classList.remove("selected-rate");
  rateFourButton.classList.remove("selected-rate");
  rateFiveButton.classList.remove("selected-rate");
};

rateThreeButton.addEventListener("click", selectRateThree);

// --- Four ---
const selectRateFour = () => {
  selectedRateNumber = 4;

  rateFourButton.classList.add("selected-rate");
  rateOneButton.classList.remove("selected-rate");
  rateTwoButton.classList.remove("selected-rate");
  rateThreeButton.classList.remove("selected-rate");
  rateFiveButton.classList.remove("selected-rate");
};

rateFourButton.addEventListener("click", selectRateFour);

// --- Five ---
const selectRateFive = () => {
  selectedRateNumber = 5;

  rateFiveButton.classList.add("selected-rate");
  rateOneButton.classList.remove("selected-rate");
  rateTwoButton.classList.remove("selected-rate");
  rateThreeButton.classList.remove("selected-rate");
  rateFourButton.classList.remove("selected-rate");
};

rateFiveButton.addEventListener("click", selectRateFive);

// --- Submit ---
const submitButton = document.querySelector(".submit-button");
const firstStepContainer = document.querySelector(".first-step-container");
const secondStepContainer = document.querySelector(".second-step-container");

const moveToTheNextStep = () => {
  if (selectedRateNumber !== 0) {
    firstStepContainer.style.display = "none";
    secondStepContainer.style.display = "block";
  } else {
    alert("Please select a rate");
  }
};

submitButton.addEventListener("click", moveToTheNextStep);
