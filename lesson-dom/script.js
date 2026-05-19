const toggleEnter = document.querySelector(".enter-btn");
const num = document.querySelector("h1");
const input = document.querySelector("input");

let inputValueHolder = 0;

toggleEnter.addEventListener("click", () => {
  // 1. grab to value from input, and set it into inputValueHolder
  //   inputValueHolder = input.value;

  // validate input
  if (input.value == null || input.value == "") {
    alert("please enter some input first");
  }

  // 2. replace the num with the data inside inputValueHolder
  //   num.textContent = inputValueHolder;

  num.textContent = input.value;
});
