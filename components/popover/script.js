const popoverTrigger = document.querySelector(".popover-trigger");
const popoverContent = document.querySelector(".popover-content");
const overlay = document.querySelector(".overlay");

const handleContentDisplay = () => {
  popoverContent.classList.remove("hide");
  overlay.classList.remove("hide");
};

popoverTrigger.addEventListener("click", handleContentDisplay);

const handleContentHide = () => {
  popoverContent.classList.add("hide");
  overlay.classList.add("hide");
};

overlay.addEventListener("click", handleContentHide);
