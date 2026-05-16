const tdlInput = document.getElementById("tdl-input");
const tdlEnter = document.getElementById("tdl-enter");

const ul = document.querySelector("ul");

//Step 1 - User enter input

//Step 2 - User press enter
tdlEnter.addEventListener("click", () => {
  ul.innerHTML = "";
  ul.innerHTML = `<li>${tdlInput.value}</li>`;
});

//Step 3 - User expect output
