// 1. target element that need to add class
// 2. Write logic to add class

const toggleClassBtn = document.querySelector(".download-btn");
const icons = document.querySelectorAll(".fa-brands");
const name = document.querySelector("h3");
const paragraph = document.querySelector("p");

// creating the logic inside a function

toggleClassBtn.addEventListener("click", () => {
  icons.forEach((i) => {
    i.classList.toggle("state-colour");
  });

  name.classList.toggle("colour");
  paragraph.classList.toggle("shake");
});
