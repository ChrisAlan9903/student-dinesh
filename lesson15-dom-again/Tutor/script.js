const btn = document.getElementById("colorSwitcherBtn");
const box = document.querySelector(".box-color-switcher");

btn.addEventListener("click", () => {
  box.style.backgroundColor = generateHex();
});

function generateHex() {
  let hexValue = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

  let finalHex = "#";

  for (let i = 0; i <= 5; i++) {
    let choosenIndex = Math.floor(Math.random() * (15 - 0 + 1)) + 0;

    finalHex += hexValue[choosenIndex];
  }

  return finalHex;
}
