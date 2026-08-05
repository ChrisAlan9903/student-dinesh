const btn = document.getElementById("colorSwitcherBtn");
const box = document.querySelector(".box-colour-switcher");

btn.addEventListener("click", () => {
  box.style.backgroundColor = "#000000";
});

function generateHex() {
  let hexValue = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

  let finalHex = "#";
  for (i = 1; i <= 6; i++) {
    const randomHex = Math.floor(Math.random() * hexValue.length);
    finalHex += hexValue[randomHex];
  }
  console.log(finalHex);
  return;
}

generateHex();
