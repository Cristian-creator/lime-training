// --- Form ---
const form = document.querySelector(".calculator-container form");
const amountInputError = document.querySelector(".amount-input-error");
const numberOfPeopleInputError = document.querySelector(
  ".number-of-people-input-error"
);
const totalPerPersonElement = document.querySelector(".total-per-person");

const historyNotAvailableMessage = document.querySelector(
  ".history-not-available"
);
const historyTable = document.querySelector(".history-table");
const historyTableBody = historyTable.querySelector("tbody");

let selectedTip;
let history = [];

const handleFormSubmit = (e) => {
  e.preventDefault();
  console.log(selectedTip);

  const data = new FormData(e.target);
  let numberOfErrors = 0;

  // amount
  const amount = Number(data.get("amount"));
  if (amount <= 0) {
    amountInputError.classList.remove("hide");
    numberOfErrors++;
  } else {
    amountInputError.classList.add("hide");
  }

  // tip
  const tip = Number(data.get("custom-tip"));

  // number of people
  const numberOfPeople = Number(data.get("number-of-people"));
  if (numberOfPeople <= 0) {
    numberOfPeopleInputError.classList.remove("hide");
    numberOfErrors++;
  } else {
    numberOfPeopleInputError.classList.add("hide");
  }

  if (numberOfErrors > 0) {
    return;
  }

  const totalPerPerson =
    (amount + (selectedTip / 100) * amount) / numberOfPeople;
  totalPerPersonElement.innerText = "$" + totalPerPerson.toFixed(2);

  resetButton.removeAttribute("disabled");

  // history
  historyNotAvailableMessage.classList.add("hide");
  historyTable.classList.remove("hide");

  const currentDate = new Date();
  const formattedDate = new Intl.DateTimeFormat("en-GB", {
    day: "2-digit",
    month: "long",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  }).format(currentDate);
  const newHistoryElement = document.createElement("tr");
  newHistoryElement.innerHTML = `
    <td>${amount}</td>
    <td>${selectedTip}</td>
    <td>${numberOfPeople}</td>
    <td>${formattedDate}</td>
    <td>
      <img src="./assets/delete.svg" />
    </td>
  `;
  historyTableBody.appendChild(newHistoryElement);
};

form.addEventListener("submit", handleFormSubmit);

// --- Tip Buttons ---
const tipButtons = document.querySelectorAll(".tip-button");

const handleSelectTip = (e) => {
  tipButtons.forEach((tipButton) => {
    tipButton.classList.remove("selected-tip");
  });

  e.target.classList.add("selected-tip");
  selectedTip = Number(e.target.getAttribute("value"));
};

tipButtons.forEach((tipButton) => {
  tipButton.addEventListener("click", handleSelectTip);
});

// --- Custom Tip Input ---
const customTipInput = document.querySelector(".custom-tip-input");

const handleCustomTip = () => {
  tipButtons.forEach((tipButton) => {
    tipButton.classList.remove("selected-tip");
  });

  selectedTip = Number(customTipInput.value);
};

customTipInput.addEventListener("input", handleCustomTip);

// --- Reset Button ---
const resetButton = document.querySelector(".reset-button");
const amountInput = document.querySelector();

const handleResetForm = () => {
  amountInput.value = "";
};

resetButton.addEventListener("click", handleResetForm);
