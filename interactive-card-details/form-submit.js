const cardForm = document.querySelector(".card-data-form");
const nameInputError = document.querySelector(".name-input-error");

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

  const formData = new FormData(e.target);

  validateCardName(formData.get("name"));
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
