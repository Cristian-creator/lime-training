// --- Name Input ---
const nameInput = document.querySelector("#name");
const cardName = document.querySelector(".card-name");

// Erori:
// - "This field is required" daca nu s a completat nimic la submit
// - "Must contain only letters" daca include cifre sau alte caractere
// - "Maximum number of characters is 256" daca include peste 256 caractere

const handleNameInputChange = () => {
  cardName.innerText = nameInput.value;
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
