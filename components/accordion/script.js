const firstAccordionTrigger = document.querySelector(
  ".accordion-item:first-of-type .accordion-trigger"
);
const firstAccordionContent = document.querySelector(
  ".accordion-item:first-of-type .accordion-content"
);
const firstAccordionIcon = document.querySelector(
  ".accordion-item:first-of-type img"
);

let firstAccordionIsOpen = false;

const handleFirstAccordion = () => {
  // verifica daca acordeonul este inchis
  if (firstAccordionIsOpen === false) {
    firstAccordionIsOpen = true;
    // open accordion
    firstAccordionContent.classList.remove("hide");

    const currentIconSource = firstAccordionIcon.getAttribute("src");
    firstAccordionIcon.setAttribute(
      "src",
      currentIconSource.replace("plus", "minus")
    );
  } else {
    firstAccordionIsOpen = false;

    // close accordion
    firstAccordionContent.classList.add("hide");

    const currentIconSource = firstAccordionIcon.getAttribute("src");
    firstAccordionIcon.setAttribute(
      "src",
      currentIconSource.replace("minus", "plus")
    );
  }
};

firstAccordionTrigger.addEventListener("click", handleFirstAccordion);
