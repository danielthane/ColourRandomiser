const hexArray = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
];

const simpleArray = [
  "red",
  "green",
  "yellow",
  "rgba(144, 27, 65, 0.7)",
  "#6529DD",
];

let hexState = false;

//State selection Using Nav buttons
document.querySelector(".simple").addEventListener("click", () => {
  hexState = false;
  document.querySelector(".simple").classList.add("button-selected");
  document.querySelector(".hex").classList.remove("button-selected");
});

document.querySelector(".hex").addEventListener("click", () => {
  hexState = true;
  document.querySelector(".hex").classList.add("button-selected");
  document.querySelector(".simple").classList.remove("button-selected");
});

document
  .querySelector(".randomizer-button")
  .addEventListener("click", function () {
    if (hexState) {
      hexColorGenerator();
    } else {
      simpleColorGenerator();
    }
  });

//Radom Hex generator code
function hexColorGenerator() {
  let randomColor = "";
  for (let i = 0; i < 6; i++) {
    let randomIndex = Math.floor(Math.random() * 16);
    randomColor += hexArray[randomIndex];
  }
  randomColor = "#" + randomColor;
  document.querySelector("body").style.backgroundColor = randomColor;
  document.querySelector("#selected-color").innerHTML = randomColor;
}

function simpleColorGenerator() {
  let randomColor = simpleArray[Math.floor(Math.random() * simpleArray.length)];
  document.querySelector("body").style.backgroundColor = randomColor;
  document.querySelector("#selected-color").innerHTML = randomColor;
}
