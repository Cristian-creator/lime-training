// Sa se creeze o functie care primeste ca parametru un numar de secunde.
// Functia trebuie sa returneze conversia numarului de secunde in formatul
// hh:mm:ss

// 4523 -> "01:15:23"
// 4523 / 3600 = 1,25 -> 1 hour

// 4523 - 3600 * 1 = 923 secunde
// 923 / 60 = 15,383 -> 15 minute

// 4523 - 3600 * 1 - 60 * 15 = 23

const convertSecondsInFormattedDate = (totalNumberOfSeconds) => {
  const hours = Math.floor(totalNumberOfSeconds / 3600);
  const minutes = Math.floor((totalNumberOfSeconds - hours * 3600) / 60);
  const seconds = totalNumberOfSeconds - hours * 3600 - minutes * 60;

  const formattedHours = hours < 10 ? "0" + hours : hours;
  const formattedMinutes = minutes < 10 ? "0" + minutes : minutes;
  const formattedSeconds = seconds < 10 ? "0" + seconds : seconds;

  //   let formattedHour;

  //   if (hours < 10) {
  //     formattedHour = "0" + hours;
  //   } else {
  //     formattedHour = hours;
  //   }

  return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`; // 19:03:02
};

// de vorbit candva - cum am afla partea intreaga a unui numar fara sa folosim vreo metoda din js
