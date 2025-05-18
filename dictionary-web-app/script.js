const searchWordForm = document.querySelector(".search-word-form");
const wordNotFoundError = document.querySelector(".word-not-found");
const resultsContainer = document.querySelector(".results-container");
const searchIcon = document.querySelector(".search-icon");
const searchWordSpinner = document.querySelector(".search-word-spinner");
const searchWordButton = document.querySelector(".search-word-button");
const searchWordInput = document.querySelector(".search-word-input");

const showLoadingStatus = () => {
  searchWordButton.setAttribute("disabled", true);
  searchWordInput.setAttribute("disabled", true);
  searchIcon.classList.add("hide");
  searchWordSpinner.classList.remove("hide");
};

const hideLoadingStatus = () => {
  searchWordInput.removeAttribute("disabled");
  searchWordButton.removeAttribute("disabled");
  searchIcon.classList.remove("hide");
  searchWordSpinner.classList.add("hide");
};

const generateDefinitions = (definitions) => {
  definitions.forEach((definition) => {
    const section = document.createElement("section");
    section.innerHTML = `
      <h2>${definition.word}</h2>
      <p>${definition.phonetic}</p>
    `;
    definition.meanings.forEach((meaning) => {
      const meaningSubsection = document.createElement("div");
      meaningSubsection.innerHTML = `
        <div class="">
          <h3>${meaning.partOfSpeech}</h3>
          <hr>
        </div>
      `;
      section.appendChild(meaningSubsection);
    });
    document.body.appendChild(section);
  });
};

const handleSearchWord = async (e) => {
  e.preventDefault();

  const formData = new FormData(e.target);
  const word = formData.get("keyword");

  //   insereaza validari ...

  showLoadingStatus();

  try {
    const response = await fetch(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
    );
    if (response.status === 404) {
      const x = 10;
      throw new Error();
    }
    const data = await response.json();

    wordNotFoundError.classList.add("hide");
    resultsContainer.classList.remove("hide");

    console.log(data);

    generateDefinitions(data);
  } catch (error) {
    wordNotFoundError.classList.remove("hide");
    resultsContainer.classList.add("hide");
  } finally {
    hideLoadingStatus();
  }
};

searchWordForm.addEventListener("submit", handleSearchWord);
