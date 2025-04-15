// --- Name Input ---
const nameInput = document.querySelector("#name");
const cardName = document.querySelector(".card-name");

const handleNameInputChange = () => {
  cardName.innerText = nameInput.value;
  if (formIsSubmitted === true) {
    validateCardName(nameInput.value);
  }
};

nameInput.addEventListener("input", handleNameInputChange);

// --- Number Input ---
const numberInput = document.querySelector("#card-number");

const handleNumberInputChange = () => {
  // 1. luam valoarea inputului
  // 2. adaugam spatii in valoarea inputului
  // 3. inseram in input noua valoare
  // exemplu: "123456789" -> "1234 5678 9"
  // 4, 8, 12
  const currentNumber = numberInput.value.replaceAll(" ", "");

  if (numberInput.value.length > 16) {
    // nu putem bloca adaugarea de numere/caractere intr-un input
    // dar la fiecare adaugare de caracter putem sa il stergem
    numberInput.value = numberInput.value.slice(0, 19);
    return;
  }

  let formattedNumber = "";

  for (let i = 0; i < currentNumber.length; i++) {
    if (i > 0 && i % 4 === 0) {
      formattedNumber += " ";
    }
    formattedNumber += currentNumber[i];
  }

  numberInput.value = formattedNumber;
};

numberInput.addEventListener("input", handleNumberInputChange);

// --- Expiration Date ---
const expirationMonthInput = document.querySelector(
  '[name="card-expiration-month"]'
);
const expirationYearInput = document.querySelector(
  '[name="card-expiration-year"]'
);

const handleExpirationMonthInputChange = () => {
  if (expirationMonthInput.value.length === 2) {
    expirationYearInput.focus();
  }
};

expirationMonthInput.addEventListener(
  "input",
  handleExpirationMonthInputChange
);
