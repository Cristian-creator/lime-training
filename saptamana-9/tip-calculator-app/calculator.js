// --- Form ---
const form = document.querySelector(".calculator-container form");
const amountInputError = document.querySelector(".amount-input-error");
const numberOfPeopleInputError = document.querySelector(
  ".number-of-people-input-error"
);
const totalPerPersonElement = document.querySelector(".total-per-person");

let selectedTip;

const handleFormSubmit = (e) => {
  e.preventDefault();

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
  displayHistoryTable();
  history.push({
    id: generateHistoryId(),
    bill: amount,
    tip: selectedTip,
    numberOfPeople: numberOfPeople,
  });
  createHistoryRow();

  // statistics
  updateAverageBill();
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
// next: vezi din nou inregistrarea -> fa modificari in cod si vezi ce se intampla
// 1. se salveaza in memorie resetButton
const resetButton = document.querySelector(".reset-button");
const amountInput = document.querySelector(".amount-input");

// 2. se salveaza in memorie handleResetForm
const handleResetForm = () => {
  amountInput.value = "";

  test();
};

// 3. Se cauta in memorie resetButton si handleResetForm
resetButton.addEventListener("click", handleResetForm);

// 4. Se salveaza in memorie test
const test = () => {
  console.log("TEST..........");
};

// 5. Se da click pe resetButton

// 6. Se executa handleResetForm

// 7. Se cauta in memorie test si se executa
