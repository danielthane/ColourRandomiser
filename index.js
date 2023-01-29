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

document
  .querySelector(".randomizer-button")
  .addEventListener("click", function () {
    let randomColor = "";
    for (let i = 0; i < 6; i++) {
      let randomIndex = Math.floor(Math.random() * 16);
      randomColor += hexArray[randomIndex];
    }
    randomColor = "#" + randomColor;
    document.querySelector("body").style.backgroundColor = randomColor;
    document.querySelector("#selected-color").innerHTML = randomColor;
  });
