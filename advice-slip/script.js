const generateAdviceButton = document.querySelector(".generate-advice-button");
const generateAdviceButtonIcon = document.querySelector(
  ".generate-advice-button img"
);
const adviceIdElement = document.querySelector(".advice-id");
const adviceContentElement = document.querySelector(".advice-content");
const loadingSpinner = document.querySelector(".spinner");

const handleGenerateAdvice = async () => {
  // 0. afisare loading spinner
  loadingSpinner.classList.remove("hide");
  generateAdviceButtonIcon.classList.add("hide");

  // 1. request pentru obtinerea unui nou advice
  const response = await fetch("https://api.adviceslip.com/advice");
  const data = await response.json();

  // 2. afisarea noului advice in pagina
  adviceIdElement.innerText = data.slip.id;
  adviceContentElement.innerText = `"${data.slip.advice}"`;

  // 3. ascundere loading spinner
  loadingSpinner.classList.add("hide");
  generateAdviceButtonIcon.classList.remove("hide");
};

generateAdviceButton.addEventListener("click", handleGenerateAdvice);
