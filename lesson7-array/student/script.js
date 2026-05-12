const lifeGoalsInput = document.getElementById("life-goals-input");
const enterBtnLifeGoals = document.getElementsByClassName(
  "enter-btn-life-goals",
);
const ul = document.querySelector("ul");
const enterBtnLifeGoalsIsSingle = enterBtnLifeGoals[0];

let lifeGoalsData = ["Car", "Motor"];

for (const goal of lifeGoalsData) {
  ul.innerHTML += `<li>${goal}</li>`;
}

enterBtnLifeGoalsIsSingle.addEventListener("click", () => {
  lifeGoalsData.push(lifeGoalsInput.value);
  console.log("lifeGoalsData: ", lifeGoalsData);

  ul.innerHTML = "";

  for (const goal of lifeGoalsData) {
    ul.innerHTML += `<li>${goal}</li>`;
  }
});
