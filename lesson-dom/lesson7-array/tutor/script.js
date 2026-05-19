// Array------------------------------------------------------------------

let box = ["towel", "clothes", "pants"];

// access element in array

let toUse = box[0]; // copy first item in array (box) to toUse variable

// Add element in array
box.push("jacket");
// console.log(box);
// -----------------------------------------------------------------------

const lifeGoalsInput = document.getElementById("life-goals-input");
const enterBtnLifeGoals = document.getElementsByClassName(
  "enter-btn-life-goals",
);
const ul = document.querySelector("ul");
const enterBtnLifeGoalsSingle = enterBtnLifeGoals[0];

// 0. lets have a default data
let lifeGoalsData = ["Car", "Motor"];

// 1. show the array data in the screen first by looping
for (const goal of lifeGoalsData) {
  ul.innerHTML += `<li>${goal}</li>`;
}

enterBtnLifeGoalsSingle.addEventListener("click", () => {
  // get input value
  //   let inputValue = lifeGoalsInput.value;
  lifeGoalsData.push(lifeGoalsInput.value);
  console.log("lifeGoalsData: ", lifeGoalsData);

  ul.innerHTML = "";

  for (const goal of lifeGoalsData) {
    ul.innerHTML += `<li>${goal}</li>`;
  }
});
