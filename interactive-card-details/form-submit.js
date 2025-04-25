const cardForm = document.querySelector(".card-data-form");
const stepTwoContainer = document.querySelector(".second-step-container");
const nameInputError = document.querySelector(".name-input-error");
const submitButton = document.querySelector(
  '.card-data-form button[type="submit"]'
);
const cardFormSpinner = document.querySelector(".card-form-spinner");

const forbiddenCharactersForName = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  ".",
  ",",
  "/",
];
let numberOfErrors = 0;
let formIsSubmitted = false;

const handleCardFormSubmit = (e) => {
  e.preventDefault();

  formIsSubmitted = true;
  numberOfErrors = 0;

  const formData = new FormData(e.target);

  validateCardName(formData.get("name"));
  // ...

  if (numberOfErrors === 0) {
    submitButton.setAttribute("disabled", "true");
    cardFormSpinner.classList.remove("hide");

    setTimeout(() => {
      // daca ai vrea sa revii la statusul anterior
      // submitButton.removeAttribute("disabled");
      // cardFormSpinner.classList.add("hide");

      // trecere pe pasul 2
      cardForm.style.opacity = "0%";

      setTimeout(() => {
        cardForm.classList.add("hide");
        stepTwoContainer.classList.remove("hide");
        // stepTwoContainer.style.opacity = "100%";
      }, 1000);
    }, 2000);
  }
};

cardForm.addEventListener("submit", handleCardFormSubmit);

const validateCardName = (cardName) => {
  if (cardName.length === 0) {
    numberOfErrors++;
    nameInput.classList.add("has-error");
    nameInputError.classList.remove("hide");
    nameInputError.innerText = "This field is required";
    return;
  }

  for (let i = 0; i < cardName.length; i++) {
    if (forbiddenCharactersForName.includes(cardName[i])) {
      numberOfErrors++;
      nameInput.classList.add("has-error");
      nameInputError.classList.remove("hide");
      nameInputError.innerText = "Must contain only letters";
      return;
    }
  }

  if (cardName.length > 256) {
    numberOfErrors++;
    nameInput.classList.add("has-error");
    nameInputError.classList.remove("hide");
    nameInputError.innerText = "Maximum number of characters is 256";
    return;
  }

  nameInput.classList.remove("has-error");
  nameInputError.classList.add("hide");
};
