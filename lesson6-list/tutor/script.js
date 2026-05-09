const todoListInput = document.getElementById("todo-list-input");
const enterBtnLifeGoals = document.getElementsByClassName(
  "enter-btn-life-goals",
);
const ul = document.querySelector("ul");

// const lifeGoalsInput = document.querySelector("#life-goals-input").value;

// const input1 = document.getElementById("life-goals-input");

const enterBtnLifeGoalsSingle = enterBtnLifeGoals[0];

enterBtnLifeGoalsSingle.addEventListener("click", () => {
  // get input value
  const lifeGoalsInput = document.getElementById("life-goals-input");
  let inputValue = lifeGoalsInput.value;

  // innerHTML
  ul.innerHTML += `<li>${inputValue}</li>`;
});
