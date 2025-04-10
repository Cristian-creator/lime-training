const averageBillElement = document.querySelector(".average-bill");

const updateAverageBill = () => {
  console.log(history);
  let sum = 0;

  for (let i = 0; i < history.length; i++) {
    sum += history[i].bill;
  }

  const average = sum / history.length;

  averageBillElement.innerText = "$" + average.toFixed(2);
};
