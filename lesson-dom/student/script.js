const h1 = document.querySelector("h1");
const plusBtn = document.querySelector("#plus-btn");
const minusBtn = document.querySelector("#minus-btn");
const resetBtn = document.querySelector("#reset-btn");

function plusOne() {
  let currentValue = h1.textContent;
  let output = Number(h1.textContent) + 1;

  h1.textContent = output;
}

function minusOne() {
  let currentValue = h1.textContent;
  let output = Number(h1.textContent) - 1;

  h1.textContent = output;
}

function resetCounter() {
  h1.textContent = 0;
}

plusBtn.addEventListener("click", plusOne);
minusBtn.addEventListener("click", minusOne);
resetBtn.addEventListener("click", resetCounter);
