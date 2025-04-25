// /event/standard-bussiness-conference-101/buy-tickets
// /event/standard-bussiness-conference-101

// Solutie
// 1. Afla index-ul ultimului slash
// 2. Copiaza toate caracterele din currentUrl incepand cu indexul 0
// si opreste-te la index-ul ultimului slash

// timp 18:53
const getDetailsPageLink = (currentURL) => {
  let indexOfLastSlash;

  // i = 51
  for (let i = currentURL.length - 1; i >= 0; i--) {
    if (currentURL[i] === "/") {
      indexOfLastSlash = i; // 40
      break;
    }
  }

  let result = "";

  for (let i = 0; i < indexOfLastSlash; i++) {
    result += currentURL[i]; // "" + "/" + "e" + "v" + "e" + ... = "/eve.."
  }

  return result;
};

// varianta in care inlocuim algoritmul de copiere de caractere cu substring
const getDetailsPageLink2 = (currentURL) => {
  let indexOfLastSlash;

  for (let i = currentURL.length - 1; i >= 0; i--) {
    if (currentURL[i] === "/") {
      indexOfLastSlash = i;
      break;
    }
  }

  return currentURL.substring(0, indexOfLastSlash);
};

// varianta in care inlocuim algoritmul de cautare de ultim index cu lastIndexOf
const getDetailsPageLink3 = (currentURL) => {
  const indexOfLastSlash = currentURL.lastIndexOf("/");

  return currentURL.substring(0, indexOfLastSlash);
};

// trebuie sa returneze "/event/standard-bussiness-conference-101"
getDetailsPageLink("/event/standard-bussiness-conference-101/buy-tickets");
