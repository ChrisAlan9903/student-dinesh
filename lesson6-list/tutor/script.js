const lifeGoalsInput = document.getElementById("life-goals-input").value;
const todoListInput = document.getElementById("todo-list-input");
const enterBtnLifeGoals = document.getElementsByClassName(
  "enter-btn-life-goals",
);
const ul = document.querySelector("ul");

const input1 = document.querySelector("#life-goals-input");

// const input1 = document.getElementById("life-goals-input");

const enterBtnLifeGoalsSingle = enterBtnLifeGoals[0];

enterBtnLifeGoalsSingle.addEventListener("click", () => {
  // get input value
  lifeGoalsInput = "testing";

  // innerHTML
  // lifeGoalsInput.lifeGoalsInput.ul.innerHTML += "<li>Money</li>";
});
