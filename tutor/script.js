const h1 = document.querySelector("h1");
const minusBtn = document.querySelector("#minus-btn");
const plusBtn = document.querySelector("#plus-btn");

function plusOne() {
  // h1.textContent = Number(h1.textContent) + 1

  // 1. get the current h1 value and put into a variable
  // 2. convert the value in the variable to a Number
  // 3. add 1 to the converted variable and transfer the output to h1

  let currentValue = h1.textContent;
  let output = Number(currentValue) + 1;

  h1.textContent = output;
}

function minusOne() {
  let currentValue = h1.textContent;
  let output = Number(currentValue) - 1;
  h1.textContent = output;
}
