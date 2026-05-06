const h1 = document.querySelector("h1");
const plusBtn = document.querySelector("#minus-btn");
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
  let currentValue = h1.textContent;
  let output = number(h1.textContent);

  h1.textContent = 0;
}
