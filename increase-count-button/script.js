const button = document.querySelector(".increase-count-button");
const h3 = document.querySelector(".current-count");
let counter = 0;

const handleIncrease = () => {
  counter++;
  h3.innerText = counter;
};

button.addEventListener("click", handleIncrease);
